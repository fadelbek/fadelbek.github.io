document.addEventListener('DOMContentLoaded', () => {

    let soundtrackAudio = new Audio('audio/soundtrack.mp3');

    // Function to handle user interaction for autoplay
    function startSoundtrack() {
        soundtrackAudio.play().catch(error => {
            console.error('Error playing soundtrack:', error);
        });
        soundtrackAudio.loop = true;
    }

    // Event listener for user interaction to start audio
    document.body.addEventListener('click', startSoundtrack, { once: true });

    const questions = [
        {
            question: "Quel arbre produit des glands ?",
            answers: ["Pommier", "Chêne", "Bouleau", "Érable"],
            correct: 1,
            topic: "special"
        },
        {
            question: "Quel océan est le plus grand ?",
            answers: ["Pacifique", "Arctique", "Indien", "Atlantique"],
            correct: 0,
            topic: "eaux"
        },
        {
            question: "Quel type de ressources sont le charbon, le pétrole et le gaz naturel ?",
            answers: ["Solaire", "Non renouvelables", "Éolienne", "Renouvelables"],
            correct: 1,
            topic: "ecologie"
        },
        {
            question: "Quel mammifère marin est le plus grand ?",
            answers: ["Requin baleine", "Orque", "Baleine bleue", "Dauphin"],
            correct: 2,
            topic: "faune"
        },
        {
            question: "Quel terme décrit une espèce qui n'existe plus nulle part sur Terre ?",
            answers: ["Éteinte", "Vulnérable", "En danger", "Menacée"],
            correct: 0,
            topic: "ecologie"
        },
        {
            question: "Quel est le principal impact environnemental de l'utilisation de pesticides ?",
            answers: ["Amélioration de la qualité de l'air", "Réduction des insectes nuisibles", "Augmentation de la biodiversité", "Contamination des sols et de l'eau"],
            correct: 3,
            topic: "special"
        },
        {
            question: "Quelle mer est située entre l'Europe, l'Asie et l'Afrique ?",
            answers: ["Mer Noire", "Mer Rouge", "Mer Baltique", "Mer Méditerranée"],
            correct: 3,
            topic: "eaux"
        },
        {
            question: "Quel est le seul mammifère capable de voler ?",
            answers: ["Écureuil volant", "Chauve-souris", "Colibri", "Phalanger volant"],
            correct: 1,
            topic: "faune"
        },
        {
            question: "Quel est le principal gaz à effet de serre responsable du réchauffement climatique ?",
            answers: ["Oxygène", "Azote", "Dioxyde de carbone (CO2)", "Hélium"],
            correct: 2,
            topic: "ecologie"
        },
        {
            question: "Quel rôle les abeilles jouent-elles dans les écosystèmes ?",
            answers: ["Elles contrôlent les populations de rongeurs", "Elles décomposent les matières organiques", "Elles filtrent l'eau des rivières", "Elles pollinisent les plantes"],
            correct: 3,
            topic: "special"
        },
        {
            question: "Quel fleuve traverse Paris ?",
            answers: ["La Garonne", "Le Rhône", "La Loire", "La Seine"],
            correct: 3,
            topic: "eaux"
        },
        {
            question: "Quel est le plus long fleuve d'Amérique du Sud ?",
            answers: ["Paraná", "Amazone", "Orénoque", "Uruguay"],
            correct: 1,
            topic: "eaux"
        },
        {
            question: "Quel est le principal facteur de menace pour de nombreuses espèces animales en voie de disparition ?",
            answers: ["La concurrence avec d'autres espèces animales", "L'augmentation de la fertilité", "L'adaptation aux changements climatiques", "La surexploitation par la chasse"],
            correct: 3,
            topic: "special"
        },
        {
            question: "Quel arbre est le plus grand du monde ?",
            answers: ["Séquoia", "Pin", "Chêne", "Érable"],
            correct: 0,
            topic: "flore"
        },
        {
            question: "Comment la pollution atmosphérique peut-elle affecter la santé des plantes ?",
            answers: ["Elle renforce leur résistance aux maladies", "Elle réduit leur capacité de photosynthèse", "Elle favorise leur croissance", "Elle accélère leur reproduction"],
            correct: 1,
            topic: "special"
        },
        {
            question: "Quel terme désigne l'ensemble des relations entre les organismes vivants et leur environnement ?",
            answers: ["Population", "Biosphère", "Communauté", "Écosystème"],
            correct: 3,
            topic: "special"
        },
        {
            question: "Quelle est la principale source d'énergie renouvelable utilisée dans le monde ?",
            answers: ["Énergie éolienne", "Énergie hydroélectrique", "Énergie solaire", "Énergie nucléaire"],
            correct: 1,
            topic: "special"
        },
        {
            question: "Quelle est la principale cause de déforestation dans le monde ?",
            answers: ["Urbanisation", "Industrie du bois", "Agriculture", "Changement climatique"],
            correct: 2,
            topic: "flore"
        },
        {
            question: "Quel oiseau ne peut pas voler mais court très vite ?",
            answers: ["Autruche", "Poule", "Pingouin", "Aigle"],
            correct: 0,
            topic: "faune"
        },
        {
            question: "Quelle pratique agricole aide à préserver les ressources en eau ?",
            answers: ["La culture en monoculture intensive", "L'utilisation de pesticides chimiques", "L'irrigation goutte à goutte", "L'irrigation par aspersion en plein jour"],
            correct: 2,
            topic: "special"
        },
        {
            question: "Quel est l'effet principal des gaz à effet de serre ?",
            answers: ["Réchauffement de la planète", "Augmentation de la biodiversité", "Refroidissement de la planète", "Diminution de la couche d'ozone"],
            correct: 0,
            topic: "special"
        },
        {
            question: "Quel fleuve traverse Londres ?",
            answers: ["Le Rhin", "La Seine", "La Tamise", "L'Elbe"],
            correct: 2,
            topic: "eaux"
        },
        {
            question: "Quel est le plus long fleuve du monde ?",
            answers: ["Mississippi", "Nil", "Yangtsé", "Amazone"],
            correct: 1,
            topic: "eaux"
        },
        {
            question: "Quelle plante produit des graines appelées 'haricots' utilisées pour faire du chocolat ?",
            answers: ["Vanillier", "Théier", "Caféier", "Cacaoyer"],
            correct: 3,
            topic: "flore"
        },
        {
            question: "Quelle est l'une des principales sources de pollution plastique dans les océans ?",
            answers: ["Les déversements de pétrole", "Les déchets ménagers", "Les émissions de gaz à effet de serre", "Les rejets industriels"],
            correct: 1,
            topic: "special"
        },
        {
            question: "Quel terme désigne la variété des formes de vie sur Terre ?",
            answers: ["Biome", "Biodiversité", "Écologie", "Écosystème"],
            correct: 1,
            topic: "ecologie"
        },
        {
            question: "Quelle pratique industrielle contribue le plus à la pollution des océans ?",
            answers: ["Le rejet des eaux usées non traitées", "L'utilisation de matériaux biodégradables", "L'irrigation goutte à goutte", "La pêche durable"],
            correct: 0,
            topic: "special"
        },
        {
            question: "Quel animal est le symbole national de l'Australie ?",
            answers: ["Émeu", "Koala", "Dingo", "Kangourou"],
            correct: 3,
            topic: "faune"
        },
        {
            question: "Quelle partie de la plante est responsable de la photosynthèse ?",
            answers: ["Racines", "Fleurs", "Feuilles", "Tige"],
            correct: 2,
            topic: "flore"
        },
        {
            question: "Quelle est la forêt tropicale la plus vaste du monde ?",
            answers: ["Forêt amazonienne", "Forêt de Bornéo", "Forêt de Sumatra", "Forêt du Congo"],
            correct: 0,
            topic: "flore"
        },
        {
            question: "Quel type de pollution est principalement causé par les plastiques jetés dans les océans ?",
            answers: ["Pollution des sols", "Pollution sonore", "Pollution de l'eau", "Pollution de l'air"],
            correct: 2,
            topic: "ecologie"
        },
        {
            question: "Quel animal est menacé par la fonte des glaces arctiques due au réchauffement climatique ?",
            answers: ["Tigre", "Kangourou", "Éléphant", "Ours polaire"],
            correct: 3,
            topic: "special"
        },
        {
            question: "Quel est le nom du fleuve qui traverse New York ?",
            answers: ["Hudson", "Potomac", "Mississippi", "Delaware"],
            correct: 0,
            topic: "special"
        },
        {
            question: "Quel est le principal effet de la déforestation ?",
            answers: ["Réduction des émissions de CO2", "Augmentation de la biodiversité", "Amélioration de la qualité de l'air", "Perte d'habitat pour les espèces"],
            correct: 3,
            topic: "ecologie"
        },
        {
            question: "Quel est l'effet de la déforestation sur la vie animale ?",
            answers: ["Elle encourage la croissance des populations animales", "Elle diminue la biodiversité en éliminant les habitats naturels", "Elle réduit le besoin de migration des animaux", "Elle accélère la reproduction des espèces animales"],
            correct: 1,
            topic: "special"
        },
        {
            question: "Quel est le plus grand mammifère terrestre ?",
            answers: ["Girafe", "Rhinocéros", "Éléphant d'Afrique", "Ours polaire"],
            correct: 2,
            topic: "faune"
        },
        {
            question: "Quel est l'effet de la pollution des sols sur la biodiversité végétale ?",
            answers: ["Elle diminue la compétition entre les espèces végétales", "Elle favorise la croissance des plantes indigènes", "Elle entraîne la disparition de certaines espèces végétales", "Elle stimule la germination des graines"],
            correct: 2,
            topic: "special"
        },
        {
            question: "Quel animal est le plus rapide sur terre ?",
            answers: ["Lion", "Gazelle", "Autruche", "Guépard"],
            correct: 3,
            topic: "faune"
        },
        {
            question: "Quel rôle les plantes jouent-elles dans la lutte contre le changement climatique ?",
            answers: ["Elles absorbent le dioxyde de carbone de l'atmosphère", "Elles augmentent la température de surface de la Terre", "Elles accélèrent l'érosion des sols", "Elles libèrent du méthane dans l'atmosphère"],
            correct: 0,
            topic: "special"
        },
        {
            question: "Quelle plante est connue pour sa capacité à survivre dans le désert ?",
            answers: ["Érable", "Saule", "Cactus", "Chêne"],
            correct: 2,
            topic: "flore"
        }
    ];


    let teamAScore = 0;
    let teamBScore = 0;

    function handleClick(tileId) {
        const tile = document.getElementById(`tile${tileId}`);
        soundtrackAudio.pause();
        soundtrackAudio.currentTime = 0;

        if (!tile.classList.contains('clicked') && !clickedTiles[tileId - 1]) {
            tile.classList.add('clicked');
            clickedTiles[tileId - 1] = true;

            const questionContent = document.createElement('div');
            questionContent.classList.add('question-content');

            const answersContent = document.createElement('div');
            answersContent.classList.add('answers-content');

            tile.querySelector('.back').appendChild(questionContent);
            tile.querySelector('.back').appendChild(answersContent);

            const closeButton = document.createElement('button');
            closeButton.classList.add('close-btn');
            closeButton.textContent = '×';
            closeButton.addEventListener('click', (event) => {
                event.stopPropagation();
                handleClose(tileId);
            });
            tile.querySelector('.back').appendChild(closeButton);

            const chronoButton = document.createElement('button');
            chronoButton.classList.add('chrono-btn');
            chronoButton.style.backgroundImage = 'url("img/stopwatch.png")';
            chronoButton.addEventListener('click', () => {
                startCountdown(tileId);
                chronoButton.disabled = true; 
            })
            tile.querySelector('.back').appendChild(chronoButton);

            const questionData = questions[tileId - 1];
            questionContent.textContent = questionData.question;

            questionData.answers.forEach((answer, index) => {
                const answerButton = document.createElement('button');
                answerButton.classList.add('answer-btn');
                answerButton.textContent = answer;
                answerButton.addEventListener('click', () => {
                    handleAnswerClick(answerButton, index, tileId);
                });
                answersContent.appendChild(answerButton);
            });
            
            createCountdown(tileId);
        }
    }

    let correctAudio = new Audio('audio/correct.mp3');
    let wrongAudio = new Audio('audio/wrong.mp3');

    function handleAnswerClick(answerButton, index, tileId) {
        const tile = document.getElementById(`tile${tileId}`);
        const answersContent = tile.querySelector('.answers-content');
        
        const countdownContent = tile.querySelector('.countdown');
        const isFlashing = countdownContent.classList.contains('flash-text');

        const questionData = questions[tileId - 1];
        if (countdownIntervals[tileId]) {  // Check if countdown is running
            stopCountdown(tileId);
            tickingAudio.pause();
            tickingAudio.currentTime = 0;

            if (isFlashing) {
                countdownContent.classList.remove('flash-text');
                tile.querySelector('.back').classList.remove('flash-background');
            }

            if (index === questionData.correct) {
                correctAudio.play();
                countdownContent.textContent = 'CORRECTE :D';
                answerButton.classList.add('submitted');
                tile.querySelector('.back').style.backgroundColor = '#14c93c';
                
            } else {
                wrongAudio.play();
                countdownContent.textContent = 'FAUX :(';
                answerButton.classList.add('incorrect');
                const correctAnswerButton = answersContent.querySelector(`.answer-btn:nth-child(${questionData.correct + 1})`);
                correctAnswerButton.classList.add('correct');
                correctAnswerButton.style.animation = 'flash 1.2s infinite';
                tile.querySelector('.back').style.backgroundColor = '#ff5500';
            }

            // Disable all answer buttons
            const allAnswerButtons = answersContent.querySelectorAll('.answer-btn');
            allAnswerButtons.forEach(button => {
                button.disabled = true;
            });
            
        } else {
            countdownContent.textContent = 'Lancer le chrono en premier!';
            countdownContent.style.color = '#f52a48';
        }

    }

    function stopCountdown(tileId) {
        clearInterval(countdownIntervals[tileId]);
        countdownIntervals[tileId] = null;

    }

    let tickingAudio = new Audio('audio/clock-millionaire-cut.mp3');
    let tickingEnd = new Audio('audio/clock-millionaire-end.mp3');
    const countdownIntervals = {};

    function createCountdown(tileId){
        const tile = document.getElementById(`tile${tileId}`);
        const backTile = tile.querySelector('.back');
        const questionContent = tile.querySelector('.question-content');
        // Create the countdown element
        const countdownElement = document.createElement('div');
        countdownElement.classList.add('countdown');
        countdownElement.textContent = '20';

        // Check if there's a scrollbar
        if (backTile.scrollHeight > backTile.clientHeight) {
            // Move the countdown element to the top
            backTile.insertBefore(countdownElement, backTile.firstChild);
            questionContent.style.paddingTop = '10px';
        } else {
            // Append the countdown element at the end
            backTile.appendChild(countdownElement);
        }
    }

    function startCountdown(tileId) {
        const tile = document.getElementById(`tile${tileId}`);
        const backTile = tile.querySelector('.back');
        const countdownElement = backTile.querySelector('.countdown');

        countdownElement.textContent = '20';
        countdownElement.style.color = 'white';

        let countdownValue = 20;

        countdownInterval = setInterval(() => {
            countdownValue--;
            if (countdownValue >= 0) {
                countdownElement.textContent = countdownValue;
            }

            if (countdownValue <= 0) {
                clearInterval(countdownInterval);
                countdownElement.textContent = 'TEMPS ÉCOULÉ !';
                handleCountdownEnd(tileId);
            } else if (countdownValue <= 5) {
                countdownElement.classList.add('flash-text');
                backTile.classList.add('flash-background');
            }
        }, 1000);

        // Store the countdown interval ID in the object
        countdownIntervals[tileId] = countdownInterval;

        tickingAudio.play();
    }


    function handleCountdownEnd(tileId) {
        const tile = document.getElementById(`tile${tileId}`);
        tile.querySelector('.back').style.backgroundColor = '#ff5500';
        tile.querySelector('.back').classList.remove('flash-background');
        tile.querySelector('.countdown').classList.remove('flash-text');
        /* const answerButtons = tile.querySelector('.answers-content').querySelectorAll('.answer-btn');
        answerButtons.forEach(button => {
            button.disabled = true;
        }); */

    }

    function handleClose(tileId) {
        const tile = document.getElementById(`tile${tileId}`);
        tile.classList.remove('clicked');
        clickedTiles[tileId - 1] = true;
        tickingAudio.pause();
        tickingAudio.currentTime = 0;
        correctAudio.pause();
        correctAudio.currentTime = 0;
        wrongAudio.pause();
        wrongAudio.currentTime = 0;
        soundtrackAudio.play();

        // Update the appearance of the tile in the grid
        tile.style.backgroundColor = 'black';
        tile.querySelector('.front').style.backgroundColor = 'black';

        const back = tile.querySelector('.back');

        // Remove flashing effect class if it exists
        if (back.classList.contains('flash-background')) {
            back.classList.remove('flash-background');
        }

        while (back.firstChild) {
            back.removeChild(back.firstChild);
        }

        // Clear the countdown interval associated with the closed tile
        clearInterval(countdownIntervals[tileId]);

        // Reset background color and remove flashing effect
        tile.querySelector('.back').style.backgroundColor = '';
        tile.querySelector('.countdown').classList.remove('flash-text');

        
    }

    function updateScore() {
        document.getElementById('teamAScore').textContent = teamAScore;
        document.getElementById('teamBScore').textContent = teamBScore;
    }

    // Function to assign colors based on topics
    function assignTileColor(topic) {
        switch (topic) {
            case 'faune':
                return '#995f0c'; // Light brown
            case 'flore':
                return '#06d106'; // Green
            case 'eaux':
                return '#0000ff'; // Blue
            case 'ecologie':
                return '#e3dc02'; // Light yellowish
            case 'special':
                return '#9807db';
            default:
                return 'black';
        }
    }

    const board = document.getElementById('board');
    const totalTiles = questions.length;

    // Initialize an array to keep track of clicked tiles
    const clickedTiles = Array.from({ length: totalTiles }, () => false);

    // Loop through questions to create tiles
    for (let i = 0; i < questions.length; i++) {
        const tile = document.createElement('div');
        tile.classList.add('tile');

        const front = document.createElement('div');
        front.classList.add('front');
        front.textContent = i + 1;

        // Set background color of front tile based on topic
        front.style.backgroundColor = assignTileColor(questions[i].topic);

        tile.appendChild(front);

        const back = document.createElement('div');
        back.classList.add('back');
        tile.appendChild(back);

        tile.id = `tile${i + 1}`;
        tile.addEventListener('click', () => handleClick(i + 1));
        board.appendChild(tile);
    }

});