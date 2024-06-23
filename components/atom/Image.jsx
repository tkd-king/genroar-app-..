import React from 'react'

const Image=({className,path,alt,text})=> {
  return (
    <div className="out flex ">
    <img className={className} src={path} alt={alt} />
    <span className='text-xl text-black mt-[40px]  font-bold'>{text}</span>
    </div>
  );
};

export default Image;