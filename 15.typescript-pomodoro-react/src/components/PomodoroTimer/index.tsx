import { useState } from "react";
import { useInterval } from "../../hooks/UseInterval";
import { Button } from "../Button";
import { Timer } from "../Timer";

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
    <div className="pomodoro">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <div className="controls">
        <Button text="test" onClick={() => console.log(1)} />
        <Button text="test" onClick={() => console.log(1)} />
        <Button text="test" onClick={() => console.log(1)} />
      </div>

      <div className="details">
        <p>Testando: asdçoaskjdaçls çlkasj dlçkasj dlçkas </p>
        <p>Testando: asdçoaskjdaçls çlkasj dlçkasj dlçkas </p>
        <p>Testando: asdçoaskjdaçls çlkasj dlçkasj dlçkas </p>
        <p>Testando: asdçoaskjdaçls çlkasj dlçkasj dlçkas </p>
      </div>
    </div>
  );
};