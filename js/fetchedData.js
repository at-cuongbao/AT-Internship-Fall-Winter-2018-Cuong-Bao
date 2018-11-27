function fetchedData() {
  let products = localStorage.getItem('products') ? 
    JSON.parse(localStorage.getItem('products')) : 
    [];
  return products;
}
