import React, { useState, useEffect, useRef } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from '../data';

export default function Slider() {
    const [review, setReview] = useState(data)
    const [reviewIndex, setReviewIndex] = useState(0)
    
    const slidersElement = useRef(null)
    //the review should automatically slide out while the next review slide in
    //when the review being shown is the last in the list then the next should be the first in the list

    useEffect(() => {
        const parentElement = slidersElement.current.children[0]
        const sliders = Array.from(parentElement.children)

        const interval = setInterval(() => {
             if(reviewIndex <= 3) {
                sliders[reviewIndex].classList.remove('activeSlide')
                sliders[reviewIndex].classList.add('lastSlide')
                sliders[reviewIndex].classList.remove('lastSlide')
                sliders[reviewIndex].style.display = 'none'
                sliders[reviewIndex].classList.add('nextSlide')
                sliders[reviewIndex + 1].style.display = 'block'
                sliders[reviewIndex + 1].classList.remove('nextSlide')
                sliders[reviewIndex + 1].classList.add('activeSlide')
                // sliders[reviewIndex].classList.add('nextSlide')
                setReviewIndex(reviewIndex + 1)
                console.log(reviewIndex + ' a')
             } 
             if(reviewIndex > 3) {
                // setReviewIndex(0)
                console.log(reviewIndex + ' b')
                sliders[3].classList.remove('activeSlide')
                sliders[3].classList.add('lastSlide')
                sliders[3].style.display = 'none'
                sliders[3].classList.remove('lastSlide')
                sliders[3].classList.add('nextSlide')
                
                sliders[0].style.display = 'block'
                sliders[0].classList.remove('nextSlide')
                sliders[0].classList.add('activeSlide')
                setReviewIndex(1)
             }
             
        }, 1000)

        return () => {
            clearInterval(interval)
        }
        
        
    })




    return (
        <div className='section'>
            <header className='title'>
                <h2><span>/</span>Reviews</h2>
            </header>
            <section className='section-center' ref={slidersElement}>
                <div>
                    <article className='active-slide'>
                        <img 
                            src={review[0].image}
                            className='person-img'
                        />
                        <h4>{review[0].name}</h4>
                        <span className='title'>{review[0].title}</span>
                        <p className='text'>{review[0].quote}</p>
                        <FaQuoteRight className='icon' />
                    </article>
                    <article className='nextSlide'>
                        <img 
                            src={review[1].image}
                            className='person-img'
                        />
                        <h4>{review[1].name}</h4>
                        <span className='title'>{review[1].title}</span>
                        <p className='text'>{review[1].quote}</p>
                        <FaQuoteRight className='icon' />
                    </article>
                    <article className='nextSlide'>
                        <img 
                            src={review[2].image}
                            className='person-img'
                        />
                        <h4>{review[2].name}</h4>
                        <span className='title'>{review[2].title}</span>
                        <p className='text'>{review[2].quote}</p>
                        <FaQuoteRight className='icon' />
                    </article>
                    <article className='nextSlide'>
                        <img 
                            src={review[3].image}
                            className='person-img'
                        />
                        <h4>{review[3].name}</h4>
                        <span className='title'>{review[3].title}</span>
                        <p className='text'>{review[3].quote}</p>
                        <FaQuoteRight className='icon' />
                    </article>
                </div>
                <FiChevronLeft 
                    className='prev' 
                    // onClick={handlePrev}
                />
                <FiChevronRight 
                    className='next' 
                    // onClick={handleNext}
                />
            </section>
        </div>
    )
}