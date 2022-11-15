import { useState } from "react";
import { useInterval } from "../../hooks/UseInterval";
import { SecondsToTime } from "../../utils/SecondsToTime";

interface Props {
  pomodoroTime: number;
  shortRestTime: number;
  longRestTime: number;
  cycles: number;
}

export const PomodoroTimer = (props: Props): JSX.Element => {
  const [mainTime, setMainTime] = useState(props.pomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <>
      <h1>PomodoroTimer {SecondsToTime(mainTime)}</h1>
    </>
  );
};
