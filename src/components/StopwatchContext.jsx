import React, { createContext, useContext } from "react";
import { useStopwatch } from "react-timer-hook";

const StopwatchContext = createContext();

export const useStopwatchContext = () => {
  return useContext(StopwatchContext);
};

export const StopwatchProvider = ({ children }) => {
  const stopwatch = useStopwatch({ autoStart: false });

  return (
    <StopwatchContext.Provider value={stopwatch}>
      {children}
    </StopwatchContext.Provider>
  );
};
