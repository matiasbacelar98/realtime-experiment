import { Flex, Text, Card, Box } from '@radix-ui/themes';

export default function Posts() {
  return (
    <Flex direction='column' justify='center' gapY='4'>
      <Box maxWidth='500px'>
        <Card>
          <Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            cumque unde tempora, debitis quaerat quam.
          </Text>
        </Card>
      </Box>
      <Box maxWidth='500px'>
        <Card>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            porro rerum commodi doloribus, nemo reprehenderit!
          </Text>
        </Card>
      </Box>
      <Box maxWidth='500px'>
        <Card>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            maxime! Voluptates ducimus voluptatem sed veritatis!
          </Text>
        </Card>
      </Box>
    </Flex>
  );
}
