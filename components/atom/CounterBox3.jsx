import React from 'react'
import { useState, useEffect } from 'react';


const CounterBox3=()=> {
    const [count, setCount] = useState(0);

    useEffect(() => {
      let counter = 0;
      const interval = setInterval(() => {
        counter += 1;
        setCount(counter);
        if (counter === 56) {
          clearInterval(interval);
        }
      }, 100);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <div className='flex items-center justify-center gap-[10px]'>
        <span className='font-black text-[#171725] text-4xl'>{count}+</span>
        <h2 className='font-normal text-[#999] text-xl pt-[5px]'>Projects Expertly Handled</h2>
    </div>
  )
}

export default CounterBox3