import { useRef, MouseEvent, useState, useEffect } from "react";
import NavigationMenu from "./components/NavigationMenu";
import MainContainer from "./components/MainContainer";

const App = () => {
  const cursor = useRef<HTMLDivElement>(null);
  const cursorBorder = useRef<HTMLDivElement>(null);
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(window.matchMedia('(min-width: 768px)').matches);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    const handleMediaQueryChange = (e: MediaQueryListEvent) => setIsLargeScreen(e.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => mediaQuery.removeEventListener('change', handleMediaQueryChange);
  }, []);

  const changePosition = (e: MouseEvent<HTMLDivElement>) => {
    if (cursor.current) {
      cursor.current.style.top = `${e.clientY}px`;
      cursor.current.style.left = `${e.clientX}px`;
    }
    if(cursorBorder.current){
      cursorBorder.current.style.top = `${e.clientY}px`;
      cursorBorder.current.style.left = `${e.clientX}px`;
    }
  };
  return (
    <div onMouseMove={changePosition}>
      {isLargeScreen && (
          <>
            <div className="h-4 w-4 rounded-full bg-cyan-300  transform origin-bottom-right translate-x-[-50%] translate-y-[-50%] fixed pointer-events-none z-50" ref={cursor} ></div>
            <div className="h-10 w-10 rounded-full border-4 border-white transform origin-bottom-right translate-x-[-50%] translate-y-[-50%] fixed pointer-events-none transition-all duration-200 ease-in" ref={cursorBorder} ></div>
          </>
      )}
      <div 
        style={{cursor: isLargeScreen ?  'none' : ''}}
        className="w-full h-fit flex relative z-0 transition-all duration-200"
      >
        <NavigationMenu />
        <MainContainer />
      </div>
    </div>
  );
};

export default App;
