import { Theme, Container } from '@radix-ui/themes';
import PostsPage from './components/PostsPage';
import { SocketProvider } from './SocketProvider';

export default function App() {
  return (
    <Theme accentColor='indigo'>
      <Container size='2' py='4' px='2' align='left'>
        <SocketProvider>
          <PostsPage />
        </SocketProvider>
      </Container>
    </Theme>
  );
}
