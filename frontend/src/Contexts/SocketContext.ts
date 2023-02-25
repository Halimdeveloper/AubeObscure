// import { createContext, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { socket } from '../Sockets';
// import { socketEvents } from '../Sockets/events';
// import { useDiceStore } from '../stores/DiceStore';
// import { usePlayerStore } from '../stores/PlayerStore';

// interface SocketProviderProps {
//   children: React.ReactNode;
// }

// const SocketContext = ({ children }: SocketProviderProps) => {
//   const navigate = useNavigate();
//   const setDices = useDiceStore((state:any) => state.setDices);
//   const setPlayers = usePlayerStore((state:any) => state.setPlayers);

//   useEffect(() => {
//     socketEvents(navigate, setDices, setPlayers);

//     return () => {
//       socket.off("dices");
//       socket.off("players");
//     };
//   }, [navigate, setDices, setPlayers]);

//   return <>{children}</>;
// };

// export default SocketContext;