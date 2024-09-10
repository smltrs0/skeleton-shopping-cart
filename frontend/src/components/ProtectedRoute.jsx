import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ auth, children }) => {
	const { isLoggedIn } = auth;
	return isLoggedIn ? children || <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
