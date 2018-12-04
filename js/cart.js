'use strict';

let total = 0;
let tableTotal = document.getElementById('table-total');
let tableBody = document.getElementById('table-body');
let cartQuantity = document.getElementById('cart-quantity');

(function fillTableIn() {
  let tableRows = [];
  let products = fetchedData();
  
  for (let i = 0; i < products.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (products[i] === data[j].id) {
        tableRows.push(data[j]);
      }
    }
  }

  tableRows = tableRows.map(function(item, key) {
    total += item.price;
    
    return (
      '<tr data-id="'+ item.id +'" class="table-item">' +
        '<td class="item-content">' +
          '<img class="item-img" width="90px" height="75px"' +
            'src="'+ item.src +'" alt="img-content-6">' +
          '<div class="item-controller">' +
            '<h3 class="item-title">'+ item.title +'</h3>' +
            '<p class="item-decs">'+ item.desc +'</p>' +
          '</div>' +
        '</td>' +
        '<td class="item-quantity"><i>1</i></td>' +
        '<td class="item-price">' +
          '<i>$'+ item.price +'</i>' +
        '</td>' +
        '<td class="item-button"><button class="js-remove-btn" onclick="">Remove</button></td>' +
      '</tr>'
    );
  }).join('');
  
  tableTotal.innerHTML = '$' + total;
  tableBody.innerHTML = tableRows;
  cartQuantity.innerHTML = products.length;
})();

let removeBtns = document.getElementsByClassName('js-remove-btn');

for (let i = 0; i < removeBtns.length; i++) {  
  removeBtns[i].addEventListener('click', function() {  
    alert(i);
    let productTableRow = this.parentElement.parentElement;
    let productId = +productTableRow.getAttribute('data-id');

    // Remove product deleted.
    // let products = fetchedData().filter(function(item) {
    //   return item != productId;
    // });

    let products = fetchedData();
    let inp = products.indexOf(productId);
    products.splice(inp, 1);

    data.map(function(item) {
      if (item.id === productId) {
        total -= item.price;
      }
    });

    // Remove a row on client before updating localStorage.
    tableBody.removeChild(productTableRow);

    // Update total products and cart quantity.
    tableTotal.innerHTML = total;
    cartQuantity.innerHTML = products.length;

    localStorage.setItem('products', JSON.stringify(products));
  });
}
