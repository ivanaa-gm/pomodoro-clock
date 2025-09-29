import { createContext, useState } from "react";

const PomodoroContext = createContext();

export const PomodoroProvider = ({ children }) => {
  const [pomodoroName, setPomodoroName] = useState("");
  const [lapOne, setLapOne] = useState({
    lap: false,
    break: false,
    complete: false,
  });
  const [lapTwo, setLapTwo] = useState({
    lap: false,
    break: false,
    complete: false,
  });
  const [lapThree, setLapThree] = useState({
    lap: false,
    break: false,
    complete: false,
  });
  const [lapFour, setLapFour] = useState({
    lap: false,
    break: false,
    complete: false,
  });
  const [pomodoroComplete, setPomodoroComplete] = useState(false);

  const resetPomodoro = () => {
    setPomodoroName("");
    setPomodoroComplete(false);
    setLapOne({
      lap: false,
      break: false,
      complete: false,
    });
    setLapTwo({
      lap: false,
      break: false,
      complete: false,
    });
    setLapThree({
      lap: false,
      break: false,
      complete: false,
    });
    setLapFour({
      lap: false,
      break: false,
      complete: false,
    });
  };

  return (
    <PomodoroContext.Provider
      value={{
        pomodoroName,
        setPomodoroName,
        lapOne,
        setLapOne,
        lapTwo,
        setLapTwo,
        lapThree,
        setLapThree,
        lapFour,
        setLapFour,
        pomodoroComplete,
        setPomodoroComplete,
        resetPomodoro
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};

export default PomodoroContext;
