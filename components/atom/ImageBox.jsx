import Heading1 from "./Heading";
import "../../app/globals.css";


const Product = ({ src, alt, text1, text2 }) => {

    return (

        <div className="shadow flex flex-col gap-[20px] w-[100%] h-[250px] p-[20px] overflow-hidden  rounded-[10px] bg-[#ffffff] ">
            <img className="w-[10%]" src={src} alt={alt} />
            <Heading1 type="14" text={text1} />
            <Heading1  type="15" text={text2}/>


        </div>

    );

};


export default Product;