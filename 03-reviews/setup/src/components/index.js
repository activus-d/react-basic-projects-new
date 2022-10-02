import React, { useState } from 'react';
import Heading from './heading';
import ReviewButtons from './reviewButtons';
import ReviewImage from './reviewImage';
import ReviewBody from './reviewBody';
import people from '../data';

const Reviews = () => {
    const [person, setPerson] = useState(people[0]);
    
    const handlePrev = () => {
        const id = person.id
        if(id <= 4) {
            if(id !== 1) {
                const newPerson = people.filter(person => person.id === Number(id) - 1)
                setPerson(...newPerson)
            }else {
                setPerson(people[3])
            }
        }
    };

    const handleNext = () => {
        const id = person.id
        if(id >= 1) {
            if(id !== 4) {
                const newPerson = people.filter(person => person.id === Number(id) + 1)
                setPerson(...newPerson)
            }else {
                setPerson(people[0])
            }
        }
    };

    const handleRandom = () => {
        const id = person.id
        const randomPersonIndex = Math.round((Math.random() / 1) * 3)
        setPerson(people[randomPersonIndex])
    };

    return (
        <main>
            <Heading />
            <section className='container'>
                <section className='review'>
                    <ReviewImage 
                        image={person.image}
                    />
                    <ReviewBody 
                        name={person.name}
                        job={person.job}
                        text={person.text}
                    />
                    <ReviewButtons 
                        handlePrev={handlePrev}
                        handleNext={handleNext}
                        handleRandom={handleRandom}
                    />
                </section>
            </section>
        </main>
    )

};

export default Reviews