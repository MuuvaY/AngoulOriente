import React, { useState, useEffect } from "react";
import { useStopwatchContext } from "./StopwatchContext";

const Test = () => {
  const { seconds, minutes, hours } = useStopwatchContext();
  useEffect(() => {
    sessionStorage.setItem("hours", hours);
    sessionStorage.setItem("minutes", minutes);
    sessionStorage.setItem("seconds", seconds);
  }, [hours, minutes, seconds]);

  return <h1>Test</h1>;
};

export default Test;
