import { Navigate } from "react-router-dom";

export const AuthGuard = ({ currentUser, children }) => {
  if (!currentUser._id) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default { AuthGuard };
