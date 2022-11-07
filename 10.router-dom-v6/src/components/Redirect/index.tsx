import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export type RedirectProps = {
  title?: string;
};

export const Redirect = ({ title }: RedirectProps) => {
  const [time, setTime] = useState(3);
  const timeout = useRef(0);
  const navigate = useNavigate();

  useEffect(() => {
    clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setTime((time) => time - 1);
    }, 1000);

    const timeEqualOrBellowZero = time <= 0;
    if (timeEqualOrBellowZero)
      navigate("/about", {
        state: `This is the state: ${Math.random()}`,
      });

    return () => {
      clearTimeout(timeout.current);
    };
  }, [time]);

  return (
    <div>
      <h1>Get out of here in: {time}</h1>
    </div>
  );
};
