import {
   Box,
   Flex,
   Input,
   FormControl,
   FormLabel,
   Button,
   VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { todoActions } from './todoSlice';

function TodoPage(props) {
   const dispatch = useDispatch();

   const initialValues = {
      columnName: '',
   };

   const onFormSubmit = (formData) => {
      console.log('🚀 ~ formData', formData);
   };

   const onClickFetchTodo = () => {
      dispatch(todoActions.fetchTodoList());
   };

   return (
      <Flex justify='center' alignItems='center' w='full' h='100vh'>
         <Button onClick={onClickFetchTodo}>Fetch todo</Button>
         <Box w='30%'>
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
                     <Button onClick={handleSubmit} w='full' colorScheme='red'>
                        Submit
                     </Button>
                  </VStack>
               )}
            </Formik>
         </Box>
      </Flex>
   );
}

export default TodoPage;
