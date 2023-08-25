const axios = require('axios');


const updatedProducts = [];
const fetchInfo = async () => {
  try {

    if(updatedProducts.length==0){

      const response = await axios.get("https://fakestoreapi.com/products");
      
      for (const product of response.data) {
        const updatedProduct = {
          ...product,
          count: 1
        };
        updatedProducts.push(updatedProduct);
      }

    }
  } catch (error) {
    console.error("Veri getirme hatası:", error);
  }

};


module.exports = {
  fetchInfo,
  updatedProducts
}

