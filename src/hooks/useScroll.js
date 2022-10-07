import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scroll, setScroll] = useState(true);

  let lastScrollTop = 0;
  const handleOnScroll = () => {
    
    let st = window.pageYOffset || document.scrollTop;
    if (st > lastScrollTop) {
      // downscroll code
      setScroll((prevScroll) => (prevScroll = false))
      console.log('down', scroll);
    } else {
      // upscroll code
      setScroll((prevScroll) => (prevScroll = true))
      console.log('up', scroll);
    }
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  };

  useEffect(() => {
    document.addEventListener('scroll', handleOnScroll, false);
    return () => document.removeEventListener('scroll', handleOnScroll, false);
  }, []);

  return { scroll };
};
