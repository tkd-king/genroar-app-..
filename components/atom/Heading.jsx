import React from "react";
import "../../app/globals.css";



const Heading1 = ({ type, text ,href }) => {
    let heading;
    switch (type) {
        case '1':
            heading = <h2 className="text-[12px] text-[#757b8a] font-[400]">{text}</h2>
            break;
        case '2':
            heading = <h2 className="text-[13px] text-[#434e58] py-[5px] font-[400]"> {text}</h2>

            break;
        case '3':
            heading = <h2 className="text-[14px] font-[500] text-[#14212d]"> {text}</h2>

            break;
        case '4':
            heading = <h2 className="text-[16px] text-[#999] w-[65%]">{text}</h2>

            break;
        case '5':
            heading = <h2 className="text-[17px] text-[#66707a] font-[400]">{text}</h2>

            break;
        case '6':
            heading = <h2 className="text-[18px]"> {text}</h2>

            break;
        case '7':
            heading = <h2 className="text-[19px] font-[500] py-[20px]  text-[#231834]">{text}</h2>

            break;
        case '8':
            heading = <h2 className="text-[29px] font-[400] text-[#171725]">{text}</h2>

            break;
        case '9':
            heading = <h2 className="text-[30px]">{text}</h2>

            break;
        case '10':
            heading = <h2 className="text-[34px] text-[#171725] font-[500] ">{text}</h2>

            break;
        case '11':
            heading = <h2 className="text-[36px] text-[#171725] font-[600]">{text}</h2>

            break;
        case '12':
            heading = <h2 className="text-[39px] font-[600] text-[#17725] "> {text}</h2>

            break;
        case '13':
            heading = <h2 className="text-[14px] font-[500] text-[#757b8a]"> {text}</h2>

            break;
        case '14':
            heading = <h2 className="text-[16px] font-medium text-[#14212d] w-[65%] border-b-1 border-black border-10%">{text}</h2>

            break;
        case '15':
            heading = <h2 className="text-[16px] text-[#0d141db3] w-[75%]">{text}</h2>

            break;
        case '16':
            heading = <h2 className="text-[12px] text-[#999] font-[300] ">{text}</h2>

            break;
        case '17':
            heading = <h2 className="text-[13px] text-[#101010] pt-[5px]  font-[500]"> {text}</h2>

            break;
        case '18':
            heading = <h2 className="text-[17px] text-[#fff] font-[400]">{text}</h2>

            break;
        case '19':
            heading = <h2 className="text-[29px] font-[500] text-[#fff]">{text}</h2>

            break;
        case '20':
            heading = <h2 className="text-[16px] text-[#fff] w-[65%]">{text}</h2>

            break;
        case '21':
            heading = <h2 className="text-[14px] font-[500] text-[#171725]"> {text}</h2>

            break;
        case '22':
            heading = <h2 className="text-[12px] font-[400] text-[#171725]"><a href={href}> {text}</a></h2>

            break;


        default:
            heading = <h2 className="text-black "> {text}</h2>
            break;
    }
    return heading;
};
export default Heading1;