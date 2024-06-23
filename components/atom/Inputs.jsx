import "../../app/globals.css";

const Inputs = ({type, className , placeholder}) => {
    return (
        <div className="">
        <input className={className} type={type} placeholder={placeholder} />
        
        </div>
    )
}
export default Inputs;