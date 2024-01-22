import React from "react";
import { useState, useEffect } from "react";

const useStorage = (key, defaultValue = " ") => {
  const [value, setValue] = useState(() => {
    const newValue = localStorage.getItem(key) || sessionStorage.getItem(key);
    return newValue ? JSON.parse(newValue) : defaultValue;
  });
  const newValue = (changeValue) => {
    setValue(changeValue);
    localStorage.setItem(key, JSON.stringify(changeValue));
    sessionStorage.setItem(key, JSON.stringify(changeValue));
  };
  useEffect(() => {
    const localValue = localStorage.getItem(key) || sessionStorage.getItem(key);
    if (localValue) {
      setValue(JSON.parse(localValue));
    }
  }, [key]);
  return [value, newValue];
};

export default useStorage;
