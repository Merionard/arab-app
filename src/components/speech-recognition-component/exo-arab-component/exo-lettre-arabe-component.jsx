
import { useState } from 'react';

const ExoLettreArabeComponent = ({ word, answer }) => {

    const [message, setMessage] = useState('');

    return (
        <div>
            <p>Où se situe la lettre ب dans le mot {word}?</p>
            <p>{message}</p>
            <button onClick={answerHandler('début', answer, setMessage)}>début</button>
            <button onClick={answerHandler('milieu', answer, setMessage)}>milieu</button>
            <button onClick={answerHandler('fin', answer, setMessage)}>fin</button>
        </div>
    )

}

function answerHandler(btnValue, answer, setMessage) {
    return () => answer === btnValue ? setMessage('BRAVO!') : setMessage('PERDU!');
}

export default ExoLettreArabeComponent;

