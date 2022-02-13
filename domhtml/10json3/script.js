// METHOD1
let catalog = []

async function main() {
  let response = await axios.get("products.json");
  catalog = response.data;
  for (let product of response.data) {
      let optionElement = document.createElement('option')
      optionElement.value = product.sku
      optionElement.innerHTML = product.name

      document.querySelector('#product').appendChild(optionElement)
  }
}

document.querySelector("#btnDisplay").addEventListener("click", function() {
    let selectedProductSKU = document.querySelector('#product').value;
    let targetProduct = null;
    for (let product of catalog) {
        if (selectedProductSKU == product.sku) {
            targetProduct = product;
            break;
        }
    }
    document.querySelector('#details').style.display = "block"
    document.querySelector("#name").innerHTML=targetProduct.name
    document.querySelector("#price").innerHTML=targetProduct.price    
})

main();


// METHOD2
// (async function(){
//     await axios.get("products.json");
// })();

// METHOD3
// window.addEventListener('DOMContentLoaded', async function (){
//     await axios.get('products.json')
// })


