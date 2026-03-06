import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { smoothScrollToTop } from "@/utils/smoothScroll";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    smoothScrollToTop({ duration: 700 });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
