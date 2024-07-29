import PropTypes from 'prop-types';
import { GiConfirmed } from "react-icons/gi";


const Feature = ({ feature }) => {
    return (
        <div>
            <p className="flex item-center"> <GiConfirmed className='text-green-500 mr-2' />{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;