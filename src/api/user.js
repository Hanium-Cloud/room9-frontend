import Axios from 'axios';

export const getMyInfo = async () => {
  return await Axios.get('/api/v1/users/info');
}

export const changeRole = async (userId) => {
  return await Axios.post(`/api/v1/users/${userId}/role`)
}