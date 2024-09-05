console.log('Hello');

const showNotificationDiv = document.querySelector('.notification');
const successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted';
const errorMsg = '<i class="fa-solid fa-circle-exclamation"></i> Error Occured';
const invalidMsg = '<i class="fa-solid fa-circle-xmark"></i> Invalid Input';


function showNotification(msg) {

    let popUp = document.createElement('div');

    popUp.classList.add('pop');
    popUp.innerHTML = msg;
    showNotificationDiv.appendChild(popUp);

    if (msg.includes('Error')) {
        popUp.classList.add('error');
    }
    if (msg.includes('Invalid')) {
        popUp.classList.add('invalid');
    }

    setTimeout(() => {
        popUp.remove();
    }, 3500);
}