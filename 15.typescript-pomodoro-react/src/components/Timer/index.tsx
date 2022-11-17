import { SecondsToMinutes } from "../../utils/SecondsToMinutes";

interface Props {
  mainTime: number;
}

export const Timer = (props: Props): JSX.Element => {
  return <div className="timer">{SecondsToMinutes(props.mainTime)}</div>;
};
