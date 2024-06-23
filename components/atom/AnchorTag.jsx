 const AnchorTag = ({ href, text, }) => {

  return (
    <div className="">
      <li className=' '>
        <a href={href} className="relative inline-block pt-[20px] px-[10px] font-medium group text-[#171725] text-[16px] hover:text-black ">
          <span className="absolute top-0 left-0 w-full h-[4px] bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
          <span className="relative z-[1000] ">{text}</span>
        </a>
      </li>
    </div>
  );
};

export default AnchorTag;
// impotant code for me  

