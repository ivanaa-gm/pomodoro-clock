const Timer = () => {
  return (
    <div className="flex flex-row justify-center ptSans items-center my-30 md:mb-20 md:my-0">
      <div className="flex flex-row timer-text font-semibold">
        <div className="bg-blue-900 rounded-md px-6">1</div>
        <div className="bg-blue-900 rounded-md px-6">1</div>
        <div className="p-2">:</div>
        <div className="bg-blue-900 rounded-md px-6">1</div>
        <div className="bg-blue-900 rounded-md px-6">1</div>
      </div>
    </div>
  );
};

export default Timer;
