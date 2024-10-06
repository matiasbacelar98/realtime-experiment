import React from 'react';
import { Flex, Dialog, Button, TextArea } from '@radix-ui/themes';
import { useSocketContext } from '../SocketProvider';

export default function PostForm() {
  const [postMsg, setPostMsg] = React.useState('');

  const { socket } = useSocketContext();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (postMsg) {
      socket?.emit('POST MSG', postMsg);
      setPostMsg('');
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Add</Button>
      </Dialog.Trigger>

      <Dialog.Content>
        <form onSubmit={handleSubmit}>
          <Dialog.Title>Add post</Dialog.Title>

          <Dialog.Description size='2' mb='4'>
            Add post in realtime.
          </Dialog.Description>

          <TextArea
            value={postMsg}
            onChange={e => setPostMsg(e.target.value)}
            placeholder='Write a post…'
          />

          <Flex gap='3' mt='4' justify='end'>
            <Dialog.Close>
              <Button variant='soft' color='gray'>
                Cancel
              </Button>
            </Dialog.Close>
            <Dialog.Close>
              <Button disabled={postMsg === ''} type='submit'>
                Save
              </Button>
            </Dialog.Close>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  );
}
