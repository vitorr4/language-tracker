import React, {useState} from 'react';
import RichTextEditor from '../components/Editor';
import EditorComponent from '../components/EditorComponent'
import style from './Journal.module.css'


function Journal() {
    const [ openEditor, setOpenEditor ] = useState(false)

    const handleClick = (e) => {
        e.preventDefault()

        setOpenEditor(true)
    }

    return (
        <div className={style.container}>
            <main className={style.main}>
                <h1 className={style.title}>Journal</h1>
                <p className={style.description}>How was your day, [user]?</p>

                <button onClick={handleClick}>Write new journal</button>
                {openEditor === true ? <EditorComponent /> : null}
                
                <div className={style.grid}>
                    <a className={style.card}>
                        <h3>Journal title</h3>
                        <p>Date of creation</p>
                        <p>Last update</p>
                    </a>
                    <a className={style.card}>
                        <h3>Journal title</h3>
                        <p>Date of creation</p>
                        <p>Last update</p>
                    </a> 
                    <a className={style.card}>
                        <h3>Journal title</h3>
                        <p>Date of creation</p>
                        <p>Last update</p>
                    </a> 
                    <a className={style.card}>
                        <h3>Journal title</h3>
                        <p>Date of creation</p>
                        <p>Last update</p>
                    </a> 
                    <a className={style.card}>
                        <h3>Journal title</h3>
                        <p>Date of creation</p>
                        <p>Last update</p>
                    </a> 
                    <a className={style.card}>
                        <h3>Journal title</h3>
                        <p>Date of creation</p>
                        <p>Last update</p>
                    </a>  
                </div>
            </main>
        </div>
    );
}

export default Journal;