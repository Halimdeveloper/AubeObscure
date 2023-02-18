import { io } from "socket.io-client";
import { getQueueLength } from "./emit";
import { socketEvents } from "./events";

export const socket = io("http://localhost:3333");
export const initSockets = (navigate: any) => {
  socketEvents(navigate);
  // setValue    ^ is passed on to be used by socketEvents
  getQueueLength();
};
