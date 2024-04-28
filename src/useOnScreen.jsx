import { useEffect, useRef, useState } from 'react';

export const useOnScreen = (options) => {
 const ref = useRef(null);
 const [isIntersecting, setIntersecting] = useState(false);

 useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
      },
      options
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
 }, []); 

 return [ref, isIntersecting];
};