import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='container'>
            <main className='main'>
                <h1 className='title'>Language track</h1>
                <p className='description'>Start tracking your progress!</p>
                <div className='grid'>
                    <div className='card'>
                    <a href='pages/journal'>
                        <h3>Journal</h3>
                        <p>Journaling is great way to track your progress and practice your writing.</p>
                    </a>
                    </div>
                    <div className='card'>
                    <a>
                        <h3>Tasks and calendar</h3>
                        <p>A place to keep your daily goals and remember what you studied.</p>
                    </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home