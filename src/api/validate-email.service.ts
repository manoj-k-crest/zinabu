import axiosInstance from '../utils/axiosInstance';

export interface AppReviewPayload {
  email: string;
}

export const validateEmail = async (payload: AppReviewPayload) => {
  return await axiosInstance.post('/users/validate-email', {
    email: payload.email,
  });

  // return {
  //   succeeded: true,
  //   message: 'Email already exists',
  //   errors: null,
  //   data: true,
  // };
};
