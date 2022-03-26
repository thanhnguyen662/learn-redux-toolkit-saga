import axiosClient from './axiosClient';

const todoApi = {
   getTodos: () => {
      const url = '/todos';
      return axiosClient.get(url);
   },
};

export default todoApi;
