import { createContext, useState } from "react";

const LapContext = createContext();

export const LapProvider = ({ children }) => {
  const [lapOngoing, setLapOngoing] = useState(false);
  const [focusMinutes, setFocusMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [largeBreakMinutes, setLargeBreakMinutes] = useState(15);

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
        lapOngoing,
        setLapOngoing,
        updateLapMinutes,
      }}
    >
      {children}
    </LapContext.Provider>
  );
};

export default LapContext;
