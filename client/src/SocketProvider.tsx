import React from 'react';
import { io, Socket } from 'socket.io-client';

const URL = 'http://localhost:5000';

/** Theme Context */
type SocketContextType = { socket: Socket | null };
export const SocketContext = React.createContext<SocketContextType>({
  socket: null,
});

/** Theme Provider */
export function SocketProvider({ children }: React.PropsWithChildren) {
  const [currentSocket, setCurrentSocket] = React.useState<null | Socket>(null);

  const value = React.useMemo(() => {
    return { socket: currentSocket };
  }, [currentSocket]);

  React.useEffect(() => {
    const socket = io(URL);
    setCurrentSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={value}>
      <React.Fragment>{children}</React.Fragment>
    </SocketContext.Provider>
  );
}

export function useSocketContext() {
  const context = React.useContext(SocketContext);

  if (context === undefined) {
    throw new Error('useSocketContext must be used within a SocketProvider');
  }

  return context;
}
