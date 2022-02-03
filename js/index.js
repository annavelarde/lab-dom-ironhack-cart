// ITERATION 1

function updateSubtotal(product) {
  // console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  // getting elements value
  const priceValue = price.innerHTML;
  // console.log(priceValue);

  const quantityValue = quantity.value;
  // console.log(quantityValue);

  const totalValue = priceValue * quantityValue;
  // console.log(totalValue);

  // getting dom subtotal to be able to swap with totalValue
  const subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = totalValue;

  //return subtotal value
  return totalValue;
}

// ITERATION 2
//... your code goes here

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  const getElements = document.getElementsByClassName('product');
  // console.log(getElements);

  // let initialSubtotal = 0;
  // // console.log(initialSubtotal);
  // for (const i = 0; i < getElements.length; i++) {
  //   initialSubtotal += updateSubtotal(getElements[i]);
  //   // console.log(getElement[i]);
  // }

  let initialValue = 0;
  for (const product of getElements) {
    initialValue += updateSubtotal(product);
    console.log(initialValue);
  }

  // ITERATION 3
  document.querySelector('#total-value span').innerHTML = initialValue;
}

// ITERATION 4
//implementar 71/72 con remove y se conectara con la function de la linea 58
function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
