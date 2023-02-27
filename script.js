const cards = document.querySelector('.cards')

const populate = async(e) => {
    const data = await fetch('./data.json');
    const response = await data.json();
    cards.innerHTML = response.map(card =>{
        return `
        <div class="card-wrapper">
        <div class="icon"><img src="${card.icon}"></div>
        <div class="name">${card.category}</div>
        <p class="score">${card.score}&nbsp;<span>/ 100</span></p>
    </div>
        `
    }).join('')


}
populate();