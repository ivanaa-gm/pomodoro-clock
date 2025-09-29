import { Play, Pause, RotateCw, Power } from "lucide-react";

const Controls = ({
  resetTimer,
  restartTimer,
  startTimer,
  stopTimer,
  isRunning,
}) => {
  return (
    <div className="flex flex-col gap-2 text-xl">
      {isRunning ? (
        <div
          className="flex flex-row border-2 rounded-2xl justify-center items-center gap-2 p-2 cursor-pointer"
          onClick={stopTimer}
        >
          <Pause />
          PAUSE
        </div>
      ) : (
        <div
          className="flex flex-row border-2 rounded-2xl justify-center items-center gap-2 p-2 cursor-pointer"
          onClick={startTimer}
        >
          <Play />
          START
        </div>
      )}

      <div className="flex flex-row gap-2">
        <div
          className="flex flex-row border-2 rounded-2xl justify-center items-center gap-2 p-2 cursor-pointer w-[50%]"
          onClick={resetTimer}
        >
          <RotateCw />
          RESET
        </div>
        <div
          className="flex flex-row border-2 rounded-2xl justify-center items-center gap-2 p-2 cursor-pointer w-[50%]"
          onClick={restartTimer}
        >
          <Power />
          RESTART
        </div>
      </div>
    </div>
  );
};

export default Controls;
