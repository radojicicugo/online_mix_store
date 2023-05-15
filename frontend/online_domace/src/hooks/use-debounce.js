import {useState,useEffect} from 'react';



function useDebounce(val, delay) {

     const [debounceVal, setdebounceVal] = useState(val);

     useEffect(() => {
          const handler = setTimeout(() => {
               setdebounceVal(val);
          }, delay);

          return () => {
               clearTimeout(handler);
          };
     }, [val])

     return debounceVal;
}

export default useDebounce;