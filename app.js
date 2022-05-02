let rating;
let ratingSelected = false
let selected;

const ratingBoxEl = document.querySelector('.rating__box')
const givenRatingEl = document.querySelector('.given__rating')
const ratingErrorEl = document.querySelector('.rating__error')

function ratingInput(elem) {
    if (ratingSelected === false && rating !== elem.textContent) {
        elem.classList += ' rating__selected'
        ratingSelected = true
        ratingErrorEl.textContent = ''
        rating = elem.textContent
        selected = elem
    } else if (ratingSelected === true && rating === elem.textContent) {
        elem.classList.remove('rating__selected')
        ratingSelected = false
        rating = null
    } else if (ratingSelected === true && rating !== elem.textContent) {
        selected.classList.remove('rating__selected')
        elem.classList += ' rating__selected'
        ratingSelected = true
        ratingErrorEl.textContent = ''
        rating = elem.textContent
        selected = elem
    }
}

function submitRating() {
    if (rating) {
        console.log(rating)
        givenRatingEl.textContent = `You selected ${rating} out of 5`
        ratingBoxEl.classList += ' loading__active'
        setTimeout(() => {
            ratingBoxEl.classList += ' success__active'
        }, 1000)
    } else {
        ratingErrorEl.textContent = 'Oops! You need to select a rating first'
    }
}