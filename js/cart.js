'use strict';

let total = 0;
let tableTotal = document.getElementById('table-total');
let tableBody = document.getElementById('table-body');
let cartQuantity = document.getElementById('cart-quantity');

(function fillTableIn() {
  let tableRows = [];
  let products = fetchedData();
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < products.length; j++) {
      if (products[j] == +data[i].id) {
        tableRows.push(data[i]);
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
        '<td class="item-price">' +
          '<i>$'+ item.price +'</i>' +
        '</td>' +
        '<td class="item-quantity"><i>1</i></td>' +
        '<td class="item-button"><button class="remove-btn" onclick="">Remove</button></td>' +
      '</tr>'
    );
  }).join('');
  
  tableTotal.innerHTML = '$' + total;
  tableBody.innerHTML = tableRows;
  cartQuantity.innerHTML = products.length;
})();

let removeBtns = document.getElementsByClassName('remove-btn');
for (let i = 0; i < removeBtns.length; i++) {  
  removeBtns[i].addEventListener('click', function() {  
    let productTableData = this.parentElement;
    let productTableRow = productTableData.parentElement;
    let productId = +productTableRow.getAttribute('data-id');
    // Remove a row on client before updating localStorage.
    tableBody.removeChild(productTableRow);
    // Update total products.
    total -= data[productId - 1].price;
    tableTotal.innerHTML = total;
    // Remove product deleted.
    let products = fetchedData().filter(function(item) {
      return item != productId;
    });
    cartQuantity.innerHTML = products.length;
    localStorage.setItem('products', JSON.stringify(products));
  });
}
