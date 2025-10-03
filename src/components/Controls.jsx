import { Play, Pause, RotateCw, Power } from "lucide-react";
import { useState } from "react";
const Controls = ({
  resetTimer,
  restartTimer,
  startTimer,
  stopTimer,
  isRunning,
}) => {
  const [showResetInformation, setResetInformation] = useState(false);
  const [showRestartInformation, setRestartInformation] = useState(false);

  const resetInformation =
    "Reset you current lap or break. Will not reset your current pomodoro.";
  const restartInformation =
    "Restart your current pomodoro. Will not delete the past pomodoro history you have accumulated during this session.";

  return (
    <div>
      <div className="flex flex-col justify-center gap-2 text-xl">
        {isRunning ? (
          <div
            className="flex flex-row border-2 rounded-2xl justify-center items-center gap-2 p-2 cursor-pointer hover:bg-white/10 hover:border-white/50 hover:text-white/50 transition duration-500"
            onClick={stopTimer}
          >
            <Pause />
            PAUSE
          </div>
        ) : (
          <div
            className="flex flex-row border-2 rounded-2xl justify-center items-center gap-2 p-2 cursor-pointer hover:bg-white/10 hover:border-white/50 hover:text-white/50 transition duration-500"
            onClick={startTimer}
          >
            <Play />
            START
          </div>
        )}

        <div className="flex flex-row gap-2 items-center justify-center">
          <div
            className="flex flex-row border-2 rounded-2xl justify-center items-center gap-2 p-2 cursor-pointer w-[50%] hover:bg-white/10 hover:border-white/50 hover:text-white/50 transition duration-500"
            onClick={resetTimer}
            onMouseEnter={() => setResetInformation(true)}
            onMouseLeave={() => setResetInformation(false)}
          >
            <RotateCw />
            RESET
          </div>
          <div
            className="flex flex-row border-2 rounded-2xl justify-center items-center gap-2 p-2 cursor-pointer w-[50%] hover:bg-white/10 hover:border-white/50 hover:text-white/50 transition duration-500"
            onClick={restartTimer}
            onMouseEnter={() => setRestartInformation(true)}
            onMouseLeave={() => setRestartInformation(false)}
          >
            <Power />
            RESTART
          </div>
        </div>
      </div>
      <div className="hidden md:flex text-[#DF7C87] font-semibold text-center text-sm break-words w-90">
        <div
          className={`${
            showResetInformation || showRestartInformation
              ? "opacity-100 "
              : "opacity-0"
          }`}
        >
          {showResetInformation ? resetInformation : restartInformation}
        </div>
      </div>
    </div>
  );
};

export default Controls;
