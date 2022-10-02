import React, { useState, useEffect } from 'react'
import Job from './job'

let defaultData = []
export default function Tabs() {
    const [item, setItem] = useState({})
    const [isData, setIsData] = useState(false)

    const url = 'https://course-api.com/react-tabs-project'

    const fetchData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        defaultData = data
        setItem(data[0])
        setIsData(true)
    };

    useEffect(() => {
        fetchData()
    }, []);

    const handleFilter = (e) => {
        const company = e.currentTarget.textContent
        const newItem = defaultData.filter(item => item.company === company)
        setItem(...newItem)
    }

    if(!isData) {
        return (
            <div className='section'>
                <h1 className='title'>Loading...</h1>
            </div>
        )
    };

    if (isData) {
        console.log(defaultData.length !== 0)
        return (
            <div className='section'>
                <header className='title'>
                    <h1>EXPERIENCE</h1>
                    <hr className='underline' />
                </header>
                <main className='jobs-center'>
                    <section className='btn-container'>
                        <button 
                            className='job-btn'
                            onClick={handleFilter}    
                        >
                            TOMMY
                        </button>
                        <button 
                            className='job-btn'
                            onClick={handleFilter}
                        >
                            BIGDROP
                        </button>
                        <button 
                            className='job-btn'
                            onClick={handleFilter}
                        >
                            CUKER
                        </button>
                    </section>
                    <section>
                        <Job 
                           id={item.id}
                           title={item.title}
                           company={item.company}
                           dates={item.dates}
                           duties={item.duties} 
                        />
                    </section>
                </main>
            </div>
        )
    }

    return <></>
}