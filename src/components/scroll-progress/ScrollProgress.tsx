import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollTop, setScrollTop] = useState(0);
  console.log("completion", scrollTop);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const windowScroll = document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      //   const scrolled = Number((windowScroll / scrollHeight).toFixed(2)) * 100;
      const scrolled = (windowScroll / scrollHeight) * 100;
      if (scrollHeight) {
        setScrollTop(scrolled);
      }
      window.addEventListener("scroll", updateScrollCompletion);
      return () => {
        window.removeEventListener("scroll", updateScrollCompletion);
      };
    };
  }, [scrollTop]);
  return (
    <>
      <div className=" w-full aspect-square bg-gray-900 rounded-sm fixed h-3 top-0 left-0 z-10">
        <div
          className="aspect-square bg-gray-400 rounded-sm fixed h-3"
          style={{ width: `${scrollTop}%` }}
          //   style={{ width: `${completion}%` }}
        ></div>
      </div>
    </>
  );
};

export default ScrollProgress;
