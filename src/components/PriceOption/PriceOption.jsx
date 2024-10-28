import PropTypes from "prop-types";
import Features from "../Feature/Features";

const PriceOption = ({option}) => {
    const {Name, price, features} = option;
    return (
        <div className="rounded-md bg-blue-200 p-4 text-black">
           <h2 className="text-center my-8">
            <span className="text-7xl">{price}</span>
            <span className="text-3xl">/mon</span>
           </h2>
           <h4 className="text-5xl text-center">{Name}</h4>

          <div className="pl-6 ">
          {
            features.map((feature, index) => <Features key={index} feature={feature}></Features>)
           }
          </div>
<button className="font-bold bg-green-600 w-full hover:bg-green-900 rounded-lg mt-12 py-4">Bay Now</button>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object,
}
export default PriceOption;