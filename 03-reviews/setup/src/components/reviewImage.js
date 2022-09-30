import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';

const ReviewImage = ({image}) => {
    return (
        <div className='img-container'>
            <img 
                src={image}
                className="person-img"
            />
            <div className='quote-icon'>
                <FaQuoteRight />
            </div>
        </div>
    )
};

export default ReviewImage