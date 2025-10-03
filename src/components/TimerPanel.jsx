import LapContext from "./contexts/LapContext";
import PomodoroContext from "./contexts/PomodoroContext";
import Controls from "./Controls";
import Timer from "./Timer";
import { useState, useEffect, useContext } from "react";

const TimerPanel = () => {
  const {
    setPomodoroName,
    lapOne,
    setLapOne,
    lapTwo,
    setLapTwo,
    lapThree,
    setLapThree,
    lapFour,
    setLapFour,
    setPomodoroComplete,
    resetPomodoro,
  } = useContext(PomodoroContext);
  const {
    focusMinutes,
    breakMinutes,
    largeBreakMinutes,
    lapOngoing,
    setLapOngoing,
  } = useContext(LapContext);

  const steps = [
    { type: "work", duration: focusMinutes },
    { type: "break", duration: breakMinutes },
    { type: "work", duration: focusMinutes },
    { type: "break", duration: breakMinutes },
    { type: "work", duration: focusMinutes },
    { type: "break", duration: breakMinutes },
    { type: "work", duration: focusMinutes },
    { type: "longBreak", duration: largeBreakMinutes },
  ];

  const [inputValue, setInputValue] = useState("");
  const [currentPomodoroName, setCurrentPomodoroName] = useState("");
  const [nameNotSetError, setNameNotSetError] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(steps[0].duration);
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const focusJingle = new Audio("/sounds/new-notification-08-352461.mp3");
  const breakJingle = new Audio("/sounds/new-notification-024-370048.mp3");
  const clockTickingJingle = new Audio(
    "/sounds/ticking-stopwatch-dry-103837.mp3"
  );

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
  }, [focusMinutes, breakMinutes, largeBreakMinutes, currentStep]);

  function handleStepComplete(step) {
    if (steps[currentStep].type === "work") {
      breakJingle.play();
      document.body.style.backgroundColor = "#08300C";
    } else {
      focusJingle.play();
      clockTickingJingle.play();
      document.body.style.backgroundColor = "#D44D5C";
    }

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
        setSecondsLeft(focusMinutes);
        setCurrentPomodoroName("");
        setInputValue("");
        setIsRunning(false);
        setCurrentStep(0);
        setLapOngoing(false);
        return;
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
    setSecondsLeft(focusMinutes);
    setCurrentPomodoroName("");
    setInputValue("");
    setIsRunning(false);
    setCurrentStep(0);
    setLapOngoing(false);
  }

  function startTimer() {
    if (lapOngoing) {
      setIsRunning(true);
      clockTickingJingle.play();
    } else if (inputValue.trim() !== "") {
      resetPomodoro();
      setCurrentPomodoroName(inputValue);
      setPomodoroName(inputValue);
      setNameNotSetError(false);
      setLapOngoing(true);
    } else if (currentPomodoroName.trim() === "") {
      setInputValue("");
      setNameNotSetError(true);
      return;
    }
    setIsRunning(true);
  }

  function stopTimer() {
    setIsRunning(false);
  }

  return (
    <div className="flex h-full justify-center">
      <div
        className={`
    hidden md:flex flex-col items-center justify-center gap-8
    ${steps[currentStep].type === "break" ? "opacity-100" : "opacity-0"}
  `}
      >
        <img src="music-note.gif" className="h-20" />

        <div className="flex">
          <img src="music-note.gif" className="h-20" />
          <img src="tea.gif" className="h-40" />
        </div>
        <img src="sofa.gif" className="h-50" />
      </div>
      <div className="h-full flex flex-col md:justify-around items-center">
        <div>
          <img src="logo.png" className="h-36" />
        </div>
        <h2 className="text-4xl font-semibold">
          {steps[currentStep].type === "work" ? "FOCUS" : "BREAK"}
        </h2>

        <Timer secondsLeft={secondsLeft} />

        <div
          className={`
    md:hidden flex flex-row items-center justify-between
    ${steps[currentStep].type === "break" ? "opacity-100" : "opacity-0"}
  `}
        >
          <img src="music-note.gif" className="h-40" />
          <img src="tea.gif" className="h-40" />
        </div>

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
                className={`text-[#DF7C87] font-bold pb-2 ${
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
      <div className="hidden md:flex flex-col items-center justify-between gap-8 opacity-0">
        <img src="music-note.gif" className="h-20 rotate-360" />

        <div className="flex">
          <img src="music-note.gif" className="h-20" />
          <img src="tea.gif" className="h-40" />
        </div>
        <img src="sofa.gif" className="h-50" />
      </div>
    </div>
  );
};

export default TimerPanel;
