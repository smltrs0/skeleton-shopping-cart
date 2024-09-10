import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductListPage from "./pages/ProductListPage";
import Navigation from "./components/Navigation";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";
import Wellcome from "./pages/Wellcome";
import OrderPage from "./pages/OrdersPage";
import OrderDetail from "./pages/OrderDetail";

function App() {
	return (
		<BrowserRouter>
			<Navigation />
			<Routes>
				<Route index element={<Wellcome />} />
				<Route path="products" element={<ProductListPage />} />
				<Route path="home" element={<Home />} />
				<Route path="car" element={<CartPage />} />
				<Route path="orders" element={<OrderPage />} />
				<Route
					path="order-detail/:orderId"
					element={<OrderDetail />}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
