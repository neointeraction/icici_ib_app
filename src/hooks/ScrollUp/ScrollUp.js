import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";

export default function ScrollUp() {
  const { pathname } = useLocation();

  useEffect(() => {
    smoothscroll.polyfill();
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}
