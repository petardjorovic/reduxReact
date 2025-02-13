import axios from "axios";

class ProductsServices {
  static getAllProducts = () => axios.get("https://dummyjson.com/products");
}

export default ProductsServices;
