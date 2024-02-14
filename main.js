const button = document.querySelector(`button`)

function addName(obj) {
    const nameEl = document.createElement(`h2`)
    nameEl.textContent = obj.data.name
    document.querySelector(`section`).appendChild(nameEl)
    // console.log(obj.data.name)
}

function click(evt) {
    axios.get(`https://swapi.dev/api/planets/?search=alderaan`)
    .then(response => {
        for (let i = 0; i < response.data.results[0].residents.length; i++) {
            axios.get(response.data.results[0].residents[i])
            .then(res => {
                addName(res)
            })
        } 
    })
}

// console.log(response.data.results[0].residents)
button.addEventListener(`click`, click)