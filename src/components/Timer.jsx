const Timer = ({secondsLeft}) => {
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  const paddedMinutes = String(minutes).padStart(2, "0");
  const paddedSeconds = String(seconds).padStart(2, "0");

  return (
    <div className="flex flex-row justify-center ptSans items-center my-30 md:mb-20 md:my-0">
      <div className="flex flex-row timer-text font-semibold">
        <div className="bg-blue-900 rounded-md px-6">{paddedMinutes[0]}</div>
        <div className="bg-blue-900 rounded-md px-6">{paddedMinutes[1]}</div>
        <div className="p-2">:</div>
        <div className="bg-blue-900 rounded-md px-6">{paddedSeconds[0]}</div>
        <div className="bg-blue-900 rounded-md px-6">{paddedSeconds[1]}</div>
      </div>
    </div>
  );
};

export default Timer;
