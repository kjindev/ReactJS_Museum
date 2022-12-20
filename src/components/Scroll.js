import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Scroll() {
  const [yAxis, setYAxis] = useState(0);
  const [isWindow, setIsWindow] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== undefined) {
      setIsWindow(true);
    }
  }, [isWindow]);

  useEffect(() => {
    window.scrollTo(0, sessionStorage.y);
  }, [pathname]);

  const handleScroll = () => {
    setYAxis(window.pageYOffset);
    sessionStorage.setItem("y", yAxis);
  };

  if (isWindow) {
    window.addEventListener("scroll", handleScroll);
  }

  return null;
}
