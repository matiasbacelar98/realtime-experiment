import { Flex, Text, Card, Box } from '@radix-ui/themes';
import { useAutoAnimate } from '@formkit/auto-animate/react';

type Props = {
  posts: string[];
};

export default function Posts({ posts }: Props) {
  const [parent] = useAutoAnimate();

  return (
    <Flex direction='column' justify='center' gapY='4' ref={parent}>
      {posts.map(post => (
        <Box maxWidth='500px' key={post}>
          <Card>
            <Text>{post}</Text>
          </Card>
        </Box>
      ))}
    </Flex>
  );
}
