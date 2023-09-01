

function createCards(data) {
    data.forEach(element => {
        let card = document.createElement('div');
        card.classList.add('show-info__card');

        card.innerHTML = `<li class="card">
        <h2 class="card__title">${element.cardTitle}</h2>
        <a href="#" class="card__name">${element.cardName}</a>
        <div class="card__img-wrapper">
            <a href="#" class="card__img"><img
                    src="${element.cardImg}"
                    alt="${element.cardImgAlt}"></a>
        </div>
        <div class="card__price">
            <s class="card__price-old"> ${element.cardValuta}  ${element.cardOldPrice}</s>
            <span class="card__price-sale">${element.cardValuta} ${element.cardNewPrice}</span>
        </div>
        <button class="btn">Add to cart</button>
        <div class="card__hover">
            <button class="card__hover-view">
                <span class="card__hover-text">View</span>
                <svg class="svg__view" width="15" height="10" viewBox="0 0 15 10"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.50001 7.55771C8.91259 7.55771 10.0577 6.41259 10.0577 5.00001C10.0577 3.58744 8.91259 2.44232 7.50001 2.44232C6.08744 2.44232 4.94232 3.58744 4.94232 5.00001C4.94232 6.41259 6.08744 7.55771 7.50001 7.55771Z"
                        stroke="black" stroke-width="0.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                    <path
                        d="M0.557678 5C0.557678 5 3.08215 0.25 7.49999 0.25C11.9178 0.25 14.4423 5 14.4423 5C14.4423 5 11.9178 9.75 7.49999 9.75C3.08215 9.75 0.557678 5 0.557678 5Z"
                        stroke="black" stroke-width="0.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
            </button>
            <button class="card__hover-list">
                <span class="card__hover-text">Wish List</span>
                <svg class="svg__heart" width="14" height="12" viewBox="0 0 14 12"
                    fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.4976 1.06089C12.1799 0.724555 11.8028 0.457752 11.3877 0.275722C10.9726 0.0936915 10.5276 0 10.0783 0C9.629 0 9.18407 0.0936915 8.76897 0.275722C8.35386 0.457752 7.97671 0.724555 7.65907 1.06089L6.99983 1.75857L6.3406 1.06089C5.69898 0.381838 4.82874 0.000351975 3.92135 0.000351982C3.01395 0.000351989 2.14372 0.381838 1.50209 1.06089C0.860462 1.73994 0.5 2.66092 0.5 3.62124C0.5 4.58157 0.860462 5.50255 1.50209 6.1816L2.16132 6.87928L6.99983 12L11.8383 6.87928L12.4976 6.1816C12.8154 5.84543 13.0675 5.44628 13.2395 5.00697C13.4115 4.56765 13.5 4.09678 13.5 3.62124C13.5 3.14571 13.4115 2.67484 13.2395 2.23552C13.0675 1.79621 12.8154 1.39706 12.4976 1.06089Z"
                        fill="#C6B7B7" />
                </svg>
            </button>
        </div>
    </li>
    `
        document.querySelector('.show-info').appendChild(card);
    });
}

export default createCards;