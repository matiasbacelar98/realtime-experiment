import React from 'react';
import { Flex, Heading } from '@radix-ui/themes';

import { Post as PostEntity } from './post';

import { useSocketContext } from '../SocketProvider';

import PostList from './PostList';
import PostForm from './PostForm';

export default function PostsPage() {
  const posts = useRealtimePosts();

  return (
    <Flex direction='column' gapY='4'>
      <Flex align='center' justify='between' gapX='2' maxWidth='550px'>
        <Heading color='indigo'>Realtime Posts</Heading>
        <PostForm />
      </Flex>
      <PostList posts={posts} />
    </Flex>
  );
}

function useRealtimePosts() {
  const [posts, setPosts] = React.useState<PostEntity[]>([]);
  const { socket } = useSocketContext();

  React.useEffect(() => {
    if (socket) {
      socket.on('POSTS', data => setPosts(prev => [data, ...prev]));
    }
  }, [socket]);

  return posts;
}

/**
function seed() {
  return [
    {
      id: '1',
      msg: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, eligendi!',
      type: 'server',
    },
    {
      id: '2',
      msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, id voluptas.',
      type: 'client',
    },
  ];
}
*/
