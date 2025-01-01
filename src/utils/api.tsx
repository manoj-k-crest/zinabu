import axiosInstance from './axiosInstance';

interface UserCredentials {
  email: string;
  password: string;
}

export const getToken = async (body: UserCredentials) => {
  const myResponse = await axiosInstance.post('tokens', body);
  console.log(myResponse?.data);

  return myResponse;
};
