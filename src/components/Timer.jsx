import Digit from "./Digit"

const Timer = ({ secondsLeft }) => {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  return (
    <div className="flex flex-row justify-center ptSans items-center my-30 md:mb-10 md:my-0">
      <div className="flex flex-row timer-text font-semibold">
        <Digit value={paddedMinutes[0]} />
        <Digit value={paddedMinutes[1]} />
        <div className="p-2 text-[#0C0016]">:</div>
        <Digit value={paddedSeconds[0]} />
        <Digit value={paddedSeconds[1]} />
      </div>
    </div>
  );
};

export default Timer;