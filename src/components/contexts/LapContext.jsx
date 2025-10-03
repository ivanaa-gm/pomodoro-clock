import { createContext, useState } from "react";

const LapContext = createContext();

export const LapProvider = ({ children }) => {
  const [lapOngoing, setLapOngoing] = useState(false);
  const [focusMinutes, setFocusMinutes] = useState(1500);
  const [breakMinutes, setBreakMinutes] = useState(300);
  const [largeBreakMinutes, setLargeBreakMinutes] = useState(900);

  function updateLapMinutes(
    newFocusMinutes,
    newBreakMinutes,
    newLargeBreakMinutes
  ) {
    setFocusMinutes(newFocusMinutes * 60);
    setBreakMinutes(newBreakMinutes * 60);
    setLargeBreakMinutes(newLargeBreakMinutes * 60);
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
