import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function AddTodo({ addTodo }) {
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!content) {
      toast({
        title: "no Content.",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent("");
  };

  const [content, setContent] = useState("");
  const toast = useToast();

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt='8'>
        <Input
          variant='filled'
          placeholder='learning chackra-ui whith todo app'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme='pink' px='8' type='submit'>
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
