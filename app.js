const inputReason = document.querySelector('#input-reason');
const inputAmount = document.querySelector('#input-amount');
const cancelButton = document.querySelector('#btn-cancel');
const addButton = document.querySelector('#btn-add');

// add button
addButton.addEventListener('click', ($event) => {
    const reason = inputReason.value;
    const amount = inputAmount.value;

    if(reason.trim().length===0 || amount.trim().length===0){
        return;
    }

    console.log(reason,amount)
})

