import { Flex, Heading } from '@radix-ui/themes';
import Posts from './Posts';

export default function PostsPage() {
  return (
    <Flex direction='column' gapY='4'>
      <Heading color='indigo'>Realtime Posts</Heading>
      <Posts />
    </Flex>
  );
}
