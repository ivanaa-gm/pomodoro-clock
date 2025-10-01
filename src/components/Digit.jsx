import { useEffect, useState } from "react";

const Digit = ({ value }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div
      className={`bg-white/2 text-[#0C0016] shadow-sm rounded-md px-6 transition-all duration-300 ${
        animate ? "bg-white/10 brightness-125" : ""
      }`}
    >
      {value}
    </div>
  );
};

export default Digit;