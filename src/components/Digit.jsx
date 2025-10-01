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
      className={`bg-[#6E2F3F] text-[#0C0016] rounded-md px-6 transition-all duration-300 ${
        animate ? "bg-[#6e2f3ffb] brightness-125" : ""
      }`}
    >
      {value}
    </div>
  );
};

export default Digit;