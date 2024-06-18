import { useState } from 'react'

function Form() {

    const [titles, setTitles] = useState([]);
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        setTitles(array => ([...array, title]));
        setTitle('');
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="form-element">
                    Titolo del post:
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <button>Aggiungi</button>
            </form>
            <p><strong>Post:</strong></p>
            <ul>
                {titles.map((title, index) => (
                    <li key={index}>
                        {title}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Form