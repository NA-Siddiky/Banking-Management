// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const newDepositAmount = depositInput.value;
    // console.log(depositAmount);

    // update Deposit Total
    const depositTotal = document.getElementById('deposit-total');
    // console.log(depositTotal.innerText);
    const previousDepositAmount = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositAmount) + parseFloat(newDepositAmount);

    depositTotal.innerText = newDepositTotal;

    // update total balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotal.innerText;
    console.log(previousBalanceTotal)
    const newBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(newDepositAmount);

    console.log(newBalanceTotal);
    balanceTotal.innerText = newBalanceTotal;


    // Clean the input box
    depositInput.value = '';
})