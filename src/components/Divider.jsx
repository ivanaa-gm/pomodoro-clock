const Divider = () => {
  return (
    <div className="flex flex-row justify-center md:flex-col">
      <div className="md:hidden w-full flex justify-center overflow-hidden">
        <div className="flex overflow-hidden gap-14">
          {Array.from({ length: Math.ceil(window.innerWidth / 40) }).map(
            (_, i) => (
              <img
                key={i}
                src="divider.png"
                className="w-10 rotate-90 flex-shrink-0"
                alt="divider"
              />
            )
          )}
        </div>
      </div>

      <div className="hidden md:flex flex-col overflow-hidden h-full">
        {Array.from({ length: Math.ceil(window.innerHeight / 40) }).map(
          (_, i) => (
            <img
              key={i}
              className="w-10 flex-shrink-0"
              src="divider.png"
              alt="divider"
            />
          )
        )}
      </div>
    </div>
  );
};

export default Divider;
