const container1 = document.querySelector('.container__1') 
const container2 = document.querySelector('.container__2') 
const options = document.getElementsByName('rating')
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
options.forEach(element => {
    if (element.checked) {
        result = element.nextElementSibling.children[0].textContent
    }
});
    infoSelection.innerHTML = `You selected ${result} out of 5`
}