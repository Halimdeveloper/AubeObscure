import { Navigate } from "react-router-dom";

export const AuthGuard = ({ currentUser, children }) => {
  if (!currentUser._id) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export const PlayerGuard = ({ currentUser, children }) => {
  if (!currentUser._id || currentUser.role !== "Player") {
    return <Navigate to="/player" replace />;
  }
  return children;
};

export const GameMasterGuard = ({ currentUser, children }) => {
  if (!currentUser._id || currentUser.role !== "GameMaster") {
    return <Navigate to="/gameMaster" replace />;
  }
  return children;
};
export default { AuthGuard, PlayerGuard, GameMasterGuard };
