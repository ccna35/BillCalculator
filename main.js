let container = document.querySelector('.container');
let bill = document.querySelector('#bill');
let slider = document.querySelector('#slider');
let tip = document.querySelector('#tip');
let tip_dollars = document.querySelector('#tipInDollars');
let total = document.querySelector('#total');

if (bill.value != parseFloat('') {
  function update() {
    let tip_value = parseFloat(slider.value) / 100;
    tip.textContent = `${slider.value}%`;
    tip_dollars.textContent = `$${tip_value*parseFloat(bill.value)}`;
    if (bill.value != '') {
      total.textContent = `$${tip_value*parseFloat(bill.value)+parseFloat(bill.value)}`
    }
  }
}
container.addEventListener('input', update);