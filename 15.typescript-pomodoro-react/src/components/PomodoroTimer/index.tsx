import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/UseInterval";
import bellFinish from "../../sounds/src_sounds_bell-finish.mp3";
import bellStart from "../../sounds/src_sounds_bell-start.mp3";
import { SecondsToTime } from "../../utils/SecondsToTime";
import { Button } from "../Button";
import { Timer } from "../Timer";

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);
interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export const PomodoroTimer = (props: Props): JSX.Element => {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);
  const [timeCounting, setTimeCounting] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);
  const [cyclesQtdManager, setCyclesQtdManager] = useState(
    new Array(props.cycles).fill(true)
  );

  const [completedCycles, setCompletedCycles] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);
  const [numberOfPomodoros, setNumberOfPomodoros] = useState(0);

  useInterval(
    () => {
      setMainTime(mainTime - 1);
    },
    timeCounting ? 1000 : null
  );

  const configureWork = () => {
    setTimeCounting(true);
    setWorking(true);
    setResting(false);
    setMainTime(props.pomodoroTime);
    audioStartWorking.play();
  };

  const configureRest = (log: boolean) => {
    setTimeCounting(true);
    setWorking(false);
    setResting(true);
    setMainTime(props.pomodoroTime);

    if (log) {
      setMainTime(props.longRestTime);
    }
    setMainTime(props.shortRestTime);

    audioStopWorking.play();
  };

  useEffect(() => {
    if (working) document.body.classList.add("working");
    if (resting) document.body.classList.remove("working");

    if (mainTime > 0) return;

    if (working && cyclesQtdManager.length > 0) {
      configureRest(false);
      cyclesQtdManager.pop();
    } else if (working && cyclesQtdManager.length <= 0) {
      configureRest(true);
      setCyclesQtdManager(new Array(props.cycles - 1).fill(true));
      setCompletedCycles(completedCycles + 1);
    }

    if (working) setNumberOfPomodoros(numberOfPomodoros + 1);
    if (resting) configureRest(working);
  }, [
    working,
    resting,
    mainTime,
    completedCycles,
    cyclesQtdManager,
    numberOfPomodoros,
    props.cycles,
    configureRest,
    setCyclesQtdManager,
    configureWork,
  ]);

  return (
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="Work" onClick={() => configureWork()} />
        <Button text="Rest" onClick={() => configureRest(false)} />
        <Button
          className={!working && !resting ? "hidden" : ""}
          text={timeCounting ? "Pause" : "Play"}
          onClick={() => setTimeCounting(!timeCounting)}
        />
      </div>

      <div className="details">
        <p>Ciclos concluídos: {completedCycles} </p>
        <p>Horas trabalhadas: {SecondsToTime(fullWorkingTime)} </p>
        <p>Pomodoros concluídos: {numberOfPomodoros} </p>
      </div>
    </div>
  );
};
