/* =========================================
   ELEMENTS
========================================= */

const nameInput =
    document.getElementById("nameInput");

const addButton =
    document.getElementById("addButton");

const participantsList =
    document.getElementById("participantsList");

const count =
    document.getElementById("count");

const drawButton =
    document.getElementById("drawButton");

const clearButton =
    document.getElementById("clearButton");

const result =
    document.getElementById("result");

const winnerName =
    document.getElementById("winnerName");

const newDrawButton =
    document.getElementById("newDrawButton");

const errorMessage =
    document.getElementById("errorMessage");

const languageButton =
    document.getElementById("languageButton");

const languageMenu =
    document.getElementById("languageMenu");

const languageText =
    document.getElementById("languageText");

const languageFlag =
    document.getElementById("languageFlag");

const particles =
    document.getElementById("particles");

const confetti =
    document.getElementById("confetti");


/* =========================================
   STATE
========================================= */

let participants = [];

let currentLanguage = "en";


/* =========================================
   TRANSLATIONS
========================================= */

const translations = {

    en: {

        ready:
            "Ready to draw",

        badge:
            "SIMPLE • FAIR • RANDOM",

        heroLineOne:
            "Let fate",

        heroLineTwo:
            "choose.",

        heroDescription:
            "A beautiful and simple way to pick a random winner.",

        drawTitle:
            "Create a draw",

        drawDescription:
            "Add the people participating in your draw.",

        people:
            "PEOPLE",

        inputPlaceholder:
            "Enter a participant name...",

        add:
            "Add",

        participants:
            "Participants",

        clear:
            "Clear all",

        emptyTitle:
            "No participants yet",

        emptyDescription:
            "Add some names above to get started.",

        drawWinner:
            "Draw winner",

        fairNote:
            "Every participant has an equal chance.",

        winnerLabel:
            "THE WINNER IS",

        congratulations:
            "Congratulations! 🎉",

        drawAgain:
            "Draw again",

        footerText:
            "Made for simple, fair and fun draws.",

        drawing:
            "Drawing...",

        errorEmpty:
            "Enter a participant name.",

        errorShort:
            "Enter a valid name.",

        errorExists:
            "This participant has already been added.",

        errorMinimum:
            "Add at least 2 participants to draw.",

        confirmClear:
            "Do you really want to remove all participants?",

        remove:
            "Remove"

    },


    pt: {

        ready:
            "Pronto para sortear",

        badge:
            "SIMPLES • JUSTO • ALEATÓRIO",

        heroLineOne:
            "Deixe a sorte",

        heroLineTwo:
            "decidir.",

        heroDescription:
            "Uma forma bonita e simples de escolher um vencedor.",

        drawTitle:
            "Criar sorteio",

        drawDescription:
            "Adicione as pessoas que participarão do sorteio.",

        people:
            "PESSOAS",

        inputPlaceholder:
            "Digite o nome do participante...",

        add:
            "Adicionar",

        participants:
            "Participantes",

        clear:
            "Limpar tudo",

        emptyTitle:
            "Nenhum participante ainda",

        emptyDescription:
            "Adicione alguns nomes acima para começar.",

        drawWinner:
            "Sortear vencedor",

        fairNote:
            "Todos os participantes têm a mesma chance.",

        winnerLabel:
            "O VENCEDOR É",

        congratulations:
            "Parabéns! 🎉",

        drawAgain:
            "Sortear novamente",

        footerText:
            "Feito para sorteios simples, justos e divertidos.",

        drawing:
            "Sorteando...",

        errorEmpty:
            "Digite o nome de um participante.",

        errorShort:
            "Digite um nome válido.",

        errorExists:
            "Esse participante já foi adicionado.",

        errorMinimum:
            "Adicione pelo menos 2 participantes para sortear.",

        confirmClear:
            "Deseja realmente remover todos os participantes?",

        remove:
            "Remover"

    }

};


/* =========================================
   LANGUAGE
========================================= */

function changeLanguage(language) {

    currentLanguage = language;

    const texts =
        translations[language];


    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n"
                );

            if (texts[key]) {

                element.textContent =
                    texts[key];

            }

        });


    document
        .querySelectorAll("[data-placeholder]")
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-placeholder"
                );

            if (texts[key]) {

                element.placeholder =
                    texts[key];

            }

        });


    if (language === "pt") {

        languageFlag.textContent =
            "🇧🇷";

        languageText.textContent =
            "PT-BR";

        document.documentElement.lang =
            "pt-BR";

    } else {

        languageFlag.textContent =
            "🇺🇸";

        languageText.textContent =
            "EN";

        document.documentElement.lang =
            "en";

    }


    updateList();

    languageMenu.classList.remove(
        "active"
    );

}


/* =========================================
   LANGUAGE MENU
========================================= */

languageButton.addEventListener(
    "click",
    event => {

        event.stopPropagation();

        languageMenu.classList.toggle(
            "active"
        );

    }
);


document
    .querySelectorAll("[data-language]")
    .forEach(button => {

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                const language =
                    button.getAttribute(
                        "data-language"
                    );

                changeLanguage(language);

            }
        );

    });


document.addEventListener(
    "click",
    () => {

        languageMenu.classList.remove(
            "active"
        );

    }
);


/* =========================================
   ADD PARTICIPANT
========================================= */

function addParticipant() {

    const name =
        nameInput.value.trim();

    errorMessage.textContent = "";


    if (!name) {

        showError(
            translations[currentLanguage]
                .errorEmpty
        );

        shakeInput();

        return;
    }


    if (name.length < 2) {

        showError(
            translations[currentLanguage]
                .errorShort
        );

        shakeInput();

        return;
    }


    const exists =
        participants.some(
            participant =>
                participant.toLowerCase() ===
                name.toLowerCase()
        );


    if (exists) {

        showError(
            translations[currentLanguage]
                .errorExists
        );

        shakeInput();

        return;
    }


    participants.push(name);

    nameInput.value = "";

    updateList();

    nameInput.focus();

}


/* =========================================
   REMOVE
========================================= */

function removeParticipant(index) {

    participants.splice(index, 1);

    updateList();

}


/* =========================================
   UPDATE LIST
========================================= */

function updateList() {

    count.textContent =
        participants.length;


    const texts =
        translations[currentLanguage];


    if (participants.length === 0) {

        participantsList.innerHTML = `

            <div class="empty-state">

                <div class="empty-circle">
                    <span>✦</span>
                </div>

                <h3>
                    ${texts.emptyTitle}
                </h3>

                <p>
                    ${texts.emptyDescription}
                </p>

            </div>

        `;

        return;

    }


    participantsList.innerHTML = "";


    participants.forEach(
        (name, index) => {

            const item =
                document.createElement("div");

            item.className =
                "participant";


            const avatar =
                document.createElement("div");

            avatar.className =
                "avatar";

            avatar.textContent =
                name
                    .charAt(0)
                    .toUpperCase();


            const nameElement =
                document.createElement("span");

            nameElement.textContent =
                name;


            const nameWrapper =
                document.createElement("div");

            nameWrapper.className =
                "participant-name";

            nameWrapper.appendChild(
                avatar
            );

            nameWrapper.appendChild(
                nameElement
            );


            const remove =
                document.createElement("button");

            remove.className =
                "remove-button";

            remove.textContent =
                "×";

            remove.title =
                texts.remove;


            remove.addEventListener(
                "click",
                () => {

                    removeParticipant(
                        index
                    );

                }
            );


            item.appendChild(
                nameWrapper
            );

            item.appendChild(
                remove
            );


            participantsList.appendChild(
                item
            );

        }
    );

}


/* =========================================
   DRAW
========================================= */

function drawWinner() {

    errorMessage.textContent = "";


    if (participants.length < 2) {

        showError(
            translations[currentLanguage]
                .errorMinimum
        );

        return;

    }


    drawButton.disabled = true;


    drawButton.innerHTML = `

        <span class="dice">
            ⚄
        </span>

        ${translations[currentLanguage].drawing}

    `;


    result.classList.add(
        "hidden"
    );


    let elapsed = 0;


    const animation =
        setInterval(() => {

            const random =
                participants[
                    Math.floor(
                        Math.random() *
                        participants.length
                    )
                ];


            winnerName.textContent =
                random;


            elapsed += 80;


            if (elapsed >= 1800) {

                clearInterval(animation);

                finishDraw();

            }

        }, 80);

}


/* =========================================
   FINISH DRAW
========================================= */

function finishDraw() {

    const index =
        Math.floor(
            Math.random() *
            participants.length
        );


    const winner =
        participants[index];


    winnerName.textContent =
        winner;


    result.classList.remove(
        "hidden"
    );


    drawButton.disabled = false;


    drawButton.innerHTML = `

        <span class="dice">
            ⚄
        </span>

        <span>
            ${translations[currentLanguage].drawWinner}
        </span>

        <span class="draw-arrow">
            →
        </span>

    `;


    createConfetti();


    setTimeout(() => {

        result.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

    }, 100);

}


/* =========================================
   CLEAR
========================================= */

function clearParticipants() {

    if (participants.length === 0) {

        return;

    }


    const confirmed =
        confirm(
            translations[currentLanguage]
                .confirmClear
        );


    if (!confirmed) {

        return;

    }


    participants = [];


    result.classList.add(
        "hidden"
    );


    updateList();

}


/* =========================================
   NEW DRAW
========================================= */

function newDraw() {

    result.classList.add(
        "hidden"
    );


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    setTimeout(() => {

        nameInput.focus();

    }, 400);

}


/* =========================================
   ERROR
========================================= */

function showError(message) {

    errorMessage.textContent =
        message;


    setTimeout(() => {

        errorMessage.textContent =
            "";

    }, 3000);

}


/* =========================================
   SHAKE INPUT
========================================= */

function shakeInput() {

    const input =
        document.querySelector(
            ".input-container"
        );


    input.animate(
        [
            {
                transform: "translateX(0)"
            },

            {
                transform:
                    "translateX(-6px)"
            },

            {
                transform:
                    "translateX(6px)"
            },

            {
                transform:
                    "translateX(-4px)"
            },

            {
                transform:
                    "translateX(4px)"
            },

            {
                transform: "translateX(0)"
            }
        ],
        {
            duration: 300
        }
    );

}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

    confetti.innerHTML = "";


    const pieces = 45;


    for (
        let i = 0;
        i < pieces;
        i++
    ) {

        const piece =
            document.createElement("div");


        piece.className =
            "confetti";


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.top =
            Math.random() * 20 + "%";


        piece.style.animationDelay =
            Math.random() * 0.8 + "s";


        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        const sizes =
            [4, 5, 6, 7];


        const size =
            sizes[
                Math.floor(
                    Math.random() *
                    sizes.length
                )
            ];


        piece.style.width =
            size + "px";


        piece.style.height =
            size * 1.6 + "px";


        const colors = [

            "#8b5cf6",

            "#a78bfa",

            "#ec4899",

            "#f472b6",

            "#22d3ee",

            "#facc15"

        ];


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        confetti.appendChild(
            piece
        );

    }


    setTimeout(() => {

        confetti.innerHTML = "";

    }, 3500);

}


/* =========================================
   BACKGROUND PARTICLES
========================================= */

function createParticles() {

    const amount = 45;


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const particle =
            document.createElement("div");


        particle.className =
            "particle";


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.top =
            Math.random() * 100 + "%";


        particle.style.animationDelay =
            Math.random() * 8 + "s";


        particle.style.animationDuration =
            5 + Math.random() * 8 + "s";


        particles.appendChild(
            particle
        );

    }

}


/* =========================================
   ENTER KEY
========================================= */

nameInput.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Enter"
        ) {

            event.preventDefault();

            addParticipant();

        }

    }
);


/* =========================================
   BUTTONS
========================================= */

addButton.addEventListener(
    "click",
    addParticipant
);


drawButton.addEventListener(
    "click",
    drawWinner
);


clearButton.addEventListener(
    "click",
    clearParticipants
);


newDrawButton.addEventListener(
    "click",
    newDraw
);


/* =========================================
   START
========================================= */

createParticles();

changeLanguage("en");