const inputReason = document.querySelector('#input-reason');
const inputAmount = document.querySelector('#input-amount');
const cancelButton = document.querySelector('#btn-cancel');
const addButton = document.querySelector('#btn-add');
const expensesList = document.querySelector('#expenses-list');
const totalExpenses = document.querySelector('#total-expenses');
let total = 0;


// add button
addButton.addEventListener('click', ($event) => {
    const reason = inputReason.value;
    const amount = inputAmount.value;

    if(reason.trim().length===0 || amount.trim().length===0){
        presentAlert()
        return;
    }

    // add the amount
    total = total + (+amount);
    // create the new item
    const newItem = document.createElement('ion-item');
    newItem.textContent  = reason + ': $' + amount;

    // append the new item
    expensesList.appendChild(newItem);

    // add the total
    totalExpenses.textContent = total.toString();

    // clear
    clear();

});

// clear function
function clear(){
    inputReason.value = '';
    inputAmount.value = '';
}
cancelButton.addEventListener('click',()=>{
    clear();
})


// alert function
function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Invalid Input !';
    alert.subHeader = '';
    alert.message = 'Please Fill The Amount & Expenses';
    alert.buttons = ['OK'];

    document.body.appendChild(alert);
    return alert.present();
}
