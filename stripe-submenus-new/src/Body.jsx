import React, {useState} from 'react'
import { mainHeading, pageText } from './data'

const Body = (props) => {
    const [heading, setHeading] = useState(mainHeading);
    const [mainText, setMaintext] = useState(pageText);

    return (
        <main className='w-full overflow-hidden'>
            <section className='overflow-hidden'>
                <h1 className='text-[40px] font-bold w-[330px] break-words text-h1 font-mainFont leading-60 text-left mb-8 md:text-[57px] md:w-[500px] md:leading-[1.08]'>{heading}</h1>
                <p className='text-pText w-[340px] mb-6 md:text-[18px] md:w-[480px]'>{mainText}</p>
                <button className='bg-black text-white w-[100px] h-[35px] rounded'>Start Now</button>
                <section className='hidden md:block md:w-[150px] h-[300px] absolute bg-phoneBg bg-no-repeat md:top-[10%] md:right-[10%] md:bg-150px lg:top-[5%] lg:right-[10%] lg:bg-200px lg:w-[250px] z-[0]'></section>
            </section>
        </main>
    )
}

export default Body
