import { useState } from "react";
import { useInterval } from "../../hooks/UseInterval";

interface Props {
  defaultPomodoroTime: number;
}

export const PomodoroTimer = (props: Props): JSX.Element => {
  const [mainTime, setMainTime] = useState(props.defaultPomodoroTime);

  useInterval(() => {
    setMainTime(mainTime - 1);
  }, 1000);

  return (
    <>
      <h1>PomodoroTimer</h1>
    </>
  );
};
