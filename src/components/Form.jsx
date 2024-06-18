import { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

function Form() {

    const [titles, setTitles] = useState([]);
    const [title, setTitle] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        setTitles(array => ([...array, title]));
        setTitle('');
    }

    const removeTitle = (indexToDelete) => {
        setTitles(array => array.filter((title, index) => index !== indexToDelete));
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-element">
                    Titolo del post:
                    <input
                        type="text"
                        value={title}
                        onChange={event => setTitle(event.target.value)}
                    />
                </div>
                <button>Aggiungi</button>
            </form>
            <p><strong>Post:</strong></p>
            <ul>
                {titles.map((title, index) => (
                    <li key={index}>
                        {title} <button onClick={() => removeTitle(index)}><FaTrashAlt /></button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Form