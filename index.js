function addingEventListener() {
console.log('adding event listener...'); 
const input = document.getElementById('input');   
function clickAlert() {
alert('I was clicked!');

}
input.addEventListener('click', clickAlert);
}

