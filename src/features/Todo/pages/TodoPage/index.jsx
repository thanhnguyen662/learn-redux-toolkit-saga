import { Box, Button, Checkbox, Flex } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoActions, todoListData } from './todoSlice';

function TodoPage(props) {
   const todoDataSelector = useSelector(todoListData);
   const [todoList, setTodoList] = useState([]);
   const dispatch = useDispatch();

   useEffect(() => {
      setTodoList(todoDataSelector);
   }, [todoDataSelector]);

   // const initialValues = {
   //    columnName: '',
   // };

   const onCheckboxClick = (value) => {
      dispatch(todoActions.updateTodoStatusRequest(value));
   };

   const onClickFetchTodoData = () => {
      dispatch(todoActions.fetchTodoList());
   };

   return (
      <>
         <Flex
            justify='center'
            alignItems='center'
            w='full'
            h='100vh'
            direction='column'
         >
            <Button onClick={onClickFetchTodoData}>Fetch</Button>
            <Box>
               {todoList?.map((todo, index) => {
                  return (
                     <Box key={todo.id}>
                        <Checkbox
                           defaultChecked={todo.completed}
                           onChange={(e) =>
                              onCheckboxClick({
                                 id: todo.id,
                                 completed: e.target.checked,
                              })
                           }
                        >
                           {todo.title}
                        </Checkbox>
                     </Box>
                  );
               })}
            </Box>
            {/* <Box w='30%'>
               <Formik initialValues={initialValues} onSubmit={onFormSubmit}>
                  {({ handleChange, handleSubmit, values }) => (
                     <VStack spacing='4'>
                        <FormControl id='columnName'>
                           <FormLabel htmlFor='email'>Column</FormLabel>
                           <Input
                              type='text'
                              value={values.columnName}
                              onChange={handleChange}
                              placeholder='Input column name...'
                           />
                        </FormControl>
                        <Button
                           onClick={handleSubmit}
                           w='full'
                           colorScheme='red'
                        >
                           Submit
                        </Button>
                     </VStack>
                  )}
               </Formik>
            </Box> */}
         </Flex>
      </>
   );
}

export default TodoPage;
