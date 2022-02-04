const searchForm = document.getElementById('search-form')
const searchInput = document.getElementById('search')
const searchBtn = document.getElementById('search-btn')
const main = document.getElementById('main')
const moreBtn = document.getElementById('more')

let id = 11


// Functions
async function getCharacters() {
    const response = await fetch(`https://www.breakingbadapi.com/api/characters?limit=10&offset=0`)
    const data = await response.json()

    for(i = 0; i < data.length; i++) {
        const flipCard = document.createElement('div')
        flipCard.classList.add('flip-card')
        
        flipCard.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${data[i].img}" id="avatar">
            </div>
            <div class="flip-card-back">
                <h2>${data[i].name}</h2>
                <p>${data[i].nickname}</p>

                <div class="occupation">
                    <span>Occupation:</span>
                    <p>${data[i].occupation}</p>
                </div>

                <div class="birthday">
                    <span>Birthday:</span>
                    <p>${data[i].birthday}</p>
                </div>

                <div class="appearance">
                    <span>Seasons appearing:</span>
                    <p>${data[i].appearance}</p>
                </div>

                <div class="status">
                    <span>Status:</span>
                    <p>${data[i].status}</p>
                </div>
            </div>
        </div>
        `
        main.appendChild(flipCard)
    }
}

// Search for a character
async function searchCharacter(e) {
    e.preventDefault()

    main.innerHTML = ''

    const searchTerm = searchInput.value
    
    const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${searchTerm}`)
    const data = await response.json()
    
    for(i = 0; i < data.length; i++) {
        const flipCard = document.createElement('div')
        flipCard.classList.add('flip-card')
        
        flipCard.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${data[i].img}" id="avatar">
            </div>
            <div class="flip-card-back">
                <h2>${data[i].name}</h2>
                <p>${data[i].nickname}</p>

                <div class="occupation">
                    <span>Occupation:</span>
                    <p>${data[i].occupation}</p>
                </div>

                <div class="birthday">
                    <span>Birthday:</span>
                    <p>${data[i].birthday}</p>
                </div>

                <div class="appearance">
                    <span>Seasons appearing:</span>
                    <p>${data[i].appearance}</p>
                </div>

                <div class="status">
                    <span>Status:</span>
                    <p>${data[i].status}</p>
                </div>
            </div>
        </div>
        `
        main.appendChild(flipCard)
        searchInput.value = ''
    }
}

// Get more characters by clicking a button
async function getMoreCharacters() {
    const response = await fetch(`https://www.breakingbadapi.com/api/characters/${id++}`)
    const data = await response.json()

    for(i = 0; i < data.length; i++) {
        const flipCard = document.createElement('div')
        flipCard.classList.add('flip-card')
        
        flipCard.innerHTML = `
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${data[i].img}" id="avatar">
            </div>
            <div class="flip-card-back">
                <h2>${data[i].name}</h2>
                <p>${data[i].nickname}</p>

                <div class="occupation">
                    <span>Occupation:</span>
                    <p>${data[i].occupation}</p>
                </div>

                <div class="birthday">
                    <span>Birthday:</span>
                    <p>${data[i].birthday}</p>
                </div>

                <div class="appearance">
                    <span>Seasons appearing:</span>
                    <p>${data[i].appearance}</p>
                </div>

                <div class="status">
                    <span>Status:</span>
                    <p>${data[i].status}</p>
                </div>
            </div>
        </div>
        `
        main.appendChild(flipCard)
    }
}

// Event Listeners
searchForm.addEventListener('submit', searchCharacter)
moreBtn.addEventListener('click', getMoreCharacters)


// INvoked functions
getCharacters()