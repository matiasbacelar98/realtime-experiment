import React from 'react';
import { Flex, Heading } from '@radix-ui/themes';
import { io } from 'socket.io-client';
import Posts from './Posts';

export default function PostsPage() {
  const posts = useRealtimePosts();

  return (
    <Flex direction='column' gapY='4'>
      <Heading color='indigo'>Realtime Posts</Heading>
      <Posts posts={posts} />
    </Flex>
  );
}

const URL = 'http://localhost:5000';

function useRealtimePosts() {
  const [posts, setPosts] = React.useState<string[]>([]);

  React.useEffect(() => {
    const socket = io(URL);

    socket.on('POSTS', data => setPosts(prev => [data, ...prev]));

    return () => {
      socket.disconnect();
    };
  }, []);

  return posts;
}
