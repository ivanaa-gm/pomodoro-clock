import PomodoroContext from "./contexts/PomodoroContext";
import Controls from "./Controls";
import Timer from "./Timer";
import { useState, useEffect, useContext } from "react";

const steps = [
  { type: "work", duration: 4 },
  { type: "break", duration: 2 },
  { type: "work", duration: 4 },
  { type: "break", duration: 2 },
  { type: "work", duration: 4 },
  { type: "break", duration: 2 },
  { type: "work", duration: 4 },
  { type: "longBreak", duration: 6 },
];

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
  const [currentPomodoroName, setCurrentPomodoroName] = useState("");
  const [nameNotSetError, setNameNotSetError] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(steps[0].duration);
  const [isRunning, setIsRunning] = useState(false);
  const [lapOngoing, setLapOngoing] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSecondsLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (secondsLeft === 0 && isRunning) {
      handleStepComplete(currentStep);
    }
  }, [secondsLeft, isRunning]);

  useEffect(() => {
    setSecondsLeft(steps[currentStep].duration);
  }, [currentStep]);

  function handleStepComplete(step) {
    const focusJingle = new Audio("/sounds/new-notification-08-352461.mp3");
    const breakJingle = new Audio("/sounds/new-notification-024-370048.mp3");

    steps[currentStep].type === "work"
      ? breakJingle.play()
      : focusJingle.play();

    switch (step) {
      case 0:
        setLapOne((prev) => ({ ...prev, lap: true }));
        break;
      case 1:
        setLapOne({ lap: true, break: true, complete: true });
        break;
      case 2:
        setLapTwo((prev) => ({ ...prev, lap: true }));
        break;
      case 3:
        setLapTwo({ lap: true, break: true, complete: true });
        break;
      case 4:
        setLapThree((prev) => ({ ...prev, lap: true }));
        break;
      case 5:
        setLapThree({ lap: true, break: true, complete: true });
        break;
      case 6:
        setLapFour((prev) => ({ ...prev, lap: true }));
        break;
      case 7:
        setLapFour({ lap: true, break: true, complete: true });
        setPomodoroComplete(true);
        setSecondsLeft(4);
        setCurrentPomodoroName("");
        setInputValue("");
        setIsRunning(false);
        setCurrentStep(0);
        setLapOngoing(false);
        return; // stop here
      default:
        break;
    }

    if (step < steps.length - 1) {
      setCurrentStep(step + 1);
    }
  }

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function resetTimer() {
    setSecondsLeft(steps[currentStep].duration);
    setIsRunning(false);
  }

  function restartTimer() {
    console.log(lapOne);
    console.log(lapTwo);
    console.log(lapThree);
    console.log(lapFour);
    resetPomodoro();
    setSecondsLeft(4);
    setCurrentPomodoroName("");
    setInputValue("");
    setIsRunning(false);
    setCurrentStep(0);
    setLapOngoing(false);
  }

  function startTimer() {
    if (lapOngoing) {
      setIsRunning(true);
    } else if (inputValue !== "") {
      resetPomodoro();
      setCurrentPomodoroName(inputValue);
      setPomodoroName(inputValue);
      setNameNotSetError(false);
      setLapOngoing(true);
    } else if (currentPomodoroName === "") {
      setNameNotSetError(true);
      return;
    }
    setIsRunning(true);
  }

  function stopTimer() {
    setIsRunning(false);
  }

  return (
    <div className="h-full flex flex-col md:justify-around items-center">
      <div>
        <img src="logo.png" className="h-36" />
      </div>
      <h2 className="text-4xl font-semibold">
        {steps[currentStep].type === "work" ? "FOCUS" : "BREAK"}
      </h2>

      <Timer secondsLeft={secondsLeft} />

      <div className="h-32 flex justify-center items-end">
        {currentPomodoroName === "" ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setCurrentPomodoroName(inputValue);
              setNameNotSetError(false);
            }}
          >
            <input
              className={`text-3xl border-2 rounded-lg p-2 transition-colors duration-200 ${
                nameNotSetError ? "border-[#DF7C87]" : "border-gray-300"
              }`}
              placeholder="...name your pomodoro..."
              autoFocus
              maxLength={38}
              autoCapitalize="true"
              value={inputValue}
              onChange={handleChange}
            />
            <p
              className={`text-[#DF7C87] font-bold ${
                nameNotSetError ? "" : "opacity-0"
              }`}
            >
              every pomodoro needs a name.
            </p>
          </form>
        ) : (
          <h1 className="text-6xl break-all text-center pb-2">
            {currentPomodoroName}
          </h1>
        )}
      </div>

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
