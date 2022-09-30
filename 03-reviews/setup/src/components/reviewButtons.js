import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const ReviewButtons = ({ handlePrev, handleNext, handleRandom }) => {
    return (
        <div>
            <div>
                <button
                    className='prev-btn'
                    onClick={handlePrev}
                >
                    <FaChevronLeft />
                </button>
                <button
                    className='next-btn'
                    onClick={handleNext}
                >
                    <FaChevronRight />
                </button>
            </div>
            <button 
                className='random-btn'
                onClick={handleRandom}
            >
                Surprise Me
            </button>
        </div>
    )
};

export default ReviewButtons