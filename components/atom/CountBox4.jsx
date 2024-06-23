import React from 'react'
import { useState, useEffect } from 'react';


const CountBox4=()=> {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let counter = 0;
      const interval = setInterval(() => {
        counter += 1;
        setCount(counter);
        if (counter === 150) {
          clearInterval(interval);
        }
      }, 50);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className='flex items-center justify-center gap-[10px]'>
    <span className='font-black text-[#171725] text-4xl'>{count}+</span>
    <h2 className='font-normal text-[#999] text-xl pt-[5px]'>Team Strength</h2>
</div>
  )
}

export default CountBox4