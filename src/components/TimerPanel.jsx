import PomodoroContext from "./contexts/PomodoroContext";
import Controls from "./Controls";
import CustomAndInfoButtons from "./CustomAndInfoButtons";
import Timer from "./Timer";
import { useState, useEffect, useContext } from "react";

const TimerPanel = () => {
  const {
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
    resetPomodoro,
  } = useContext(PomodoroContext);
  const [inputValue, setInputValue] = useState("");
  const [nameNotSetError, setNameNotSetError] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(25);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning || secondsLeft <= 0) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, secondsLeft]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const resetTimer = () => {
    setSecondsLeft(25);
    setIsRunning(false);
  };

  const restartTimer = () => {
    resetPomodoro();
    setSecondsLeft(25);
    setIsRunning(false);
  };

  const startTimer = () => {
    if (inputValue !== "") {
      setPomodoroName(inputValue);
      setNameNotSetError(false);
    } else if (pomodoroName === "") {
      setNameNotSetError(true);
      return;
    }
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  return (
    <div className="h-full flex flex-col md:justify-around gap-10 items-center">
      <div>
        <img src="logo.png" className="h-36" />
      </div>
      <Timer secondsLeft={secondsLeft} />
      {pomodoroName === "" ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setPomodoroName(inputValue);
            setNameNotSetError(false);
          }}
        >
          <input
            className={`text-3xl border-2 rounded-lg p-2 transition-colors duration-200 ${
              nameNotSetError ? "border-[#DF7C87]" : "border-gray-300"
            }`}
            placeholder="...name your pomodoro..."
            autoFocus
            autoCapitalize="true"
            value={inputValue}
            onChange={handleChange}
          />
          {nameNotSetError && (
            <p className="text-[#DF7C87] font-bold">
              every pomodoro needs a name.
            </p>
          )}
        </form>
      ) : (
        <h1 className="text-6xl">{pomodoroName}</h1>
      )}

      <Controls
        resetTimer={resetTimer}
        restartTimer={restartTimer}
        startTimer={startTimer}
        stopTimer={stopTimer}
        isRunning={isRunning}
      />
    </div>
  );
};

export default TimerPanel;
