import { Flex, Text, Card, Box, Badge } from '@radix-ui/themes';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { Post as PostEntity } from './post';

type Props = {
  posts: PostEntity[];
};

export default function PostList({ posts }: Props) {
  const [parent] = useAutoAnimate();

  return (
    <Flex direction='column' justify='center' gapY='4' ref={parent}>
      {posts.map(post => (
        <Post msg={post.msg} type={post.type} key={post.id} />
      ))}
    </Flex>
  );
}

function Post({ msg, type }: PostEntity) {
  const badgeClr = type === 'client' ? 'blue' : 'green';

  return (
    <Box maxWidth='550px'>
      <Card>
        <Flex align='center' justify='between' gapX='2'>
          <Text>{msg}</Text>
          <Badge color={badgeClr}>{capitalize(type)}</Badge>
        </Flex>
      </Card>
    </Box>
  );
}

function capitalize(word: string): string {
  return word[0].toUpperCase() + word.slice(1);
}
