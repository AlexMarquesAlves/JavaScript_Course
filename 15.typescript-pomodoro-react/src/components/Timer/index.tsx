import { SecondsToTime } from "../../utils/SecondsToTime";

interface Props {
  mainTime: number;
}

export const Timer = (props: Props): JSX.Element => {
  return <div className="timer">{SecondsToTime(props.mainTime)}</div>;
};
