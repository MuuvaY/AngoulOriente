import React from 'react';

// Utilisation de l'API Session Storage pour obtenir les données stockées
const getSessionData = (key) => {
    return sessionStorage.getItem(key);
};

const Recap = () => {
    const username = getSessionData('username');
    const hours = getSessionData('hours');
    const minutes = getSessionData('minutes');
    const seconds = getSessionData('seconds');
    const secretWord = "secret";

    return (
        <div id="recap">
            <h1 id="recap-title">Félicitations, {username} !</h1>
            <div id='recap-body'>
                <p>Vous avez terminé la course d'orientation.</p>
                <p>Vous avez trouvé le mot secret : <strong id="secret-word">secret</strong></p>
                <p>Temps total : <span id="time"> {hours} heures, {minutes} minutes, {seconds} secondes</span></p>
            </div>
        </div>
    );
};

export default Recap;