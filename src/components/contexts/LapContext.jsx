import { createContext, useState } from "react";

const LapContext = createContext();

export const LapProvider = ({ children }) => {
  const [focusMinutes, setFocusMinutes] = useState(5);
  const [breakMinutes, setBreakMinutes] = useState(2);
  const [largeBreakMinutes, setLargeBreakMinutes] = useState(4);

  function updateLapMinutes(
    newFocusMinutes,
    newBreakMinutes,
    newLargeBreakMinutes
  ) {
    setFocusMinutes(newFocusMinutes);
    setBreakMinutes(newBreakMinutes);
    setLargeBreakMinutes(newLargeBreakMinutes);
  }
  return (
    <LapContext.Provider
      value={{
        focusMinutes,
        breakMinutes,
        largeBreakMinutes,
        updateLapMinutes,
      }}
    >
      {children}
    </LapContext.Provider>
  );
};

export default LapContext;
