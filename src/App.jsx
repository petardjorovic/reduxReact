import { useDispatch } from "react-redux";
import {
  handleAllProductsAction,
  handleSingleProductAction,
} from "./store/productSlice";
import { useEffect } from "react";
import ProductsServices from "./services/productsServices";
import ShowInfo from "./components/ShowInfo";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    ProductsServices.getAllProducts()
      .then((res) =>
        dispatch(
          handleAllProductsAction({
            isLoading: false,
            data: res.data.products,
            error: false,
            errorMsg: "",
          })
        )
      )
      .catch((err) =>
        dispatch(
          handleAllProductsAction({
            isLoading: false,
            data: [],
            error: true,
            errorMsg: err.message,
          })
        )
      );
    dispatch(
      handleSingleProductAction({
        title: "Petar je car",
        desc: "Bingo redux",
        price: "$455",
      })
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl text-green-600">Redux Toolkit</h1>
      <ul className="flex gap-[20px]">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>Products</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
