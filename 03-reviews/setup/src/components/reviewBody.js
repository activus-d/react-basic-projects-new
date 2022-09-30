import React from 'react';

const ReviewBody = ({name, job, text}) => {
    return (
        <div>
            <h2 className='author'>
                {name}
            </h2>
            <h3 className='job'>
                {job}
            </h3>
            <p className='info'>
                {text}
            </p>
        </div>
    )
};

export default ReviewBody