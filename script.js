const container1 = document.querySelector('.container__1') 
const container2 = document.querySelector('.container__2') 
const option1 = document.getElementById('rating-1')
const option2 = document.getElementById('rating-2')
const option3 = document.getElementById('rating-3')
const option4 = document.getElementById('rating-4')
const option5 = document.getElementById('rating-5')
const infoSelection = document.querySelector('.container__selection')
const button = document.querySelector('.container__button')

button.addEventListener("click", activate);

function activate () {
    if (document.querySelector('input[name="rating"]:checked').value) {
        container1.classList.toggle('inactive')
        container2.classList.toggle('inactive')
        printSelec()
    }
}
function printSelec () {
    switch (true) {
        case option1.checked:
            result = 1
        break;
        case option2.checked:
            result = 2
        break;
        case option3.checked:
            result = 3
        break;
        case option4.checked:
            result = 4
        break;
        case option5.checked:
            result = 5
        break;
    }
    infoSelection.innerHTML = `You selected ${result} out of 5`
}