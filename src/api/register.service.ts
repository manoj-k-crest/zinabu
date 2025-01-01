import axiosInstance from '../utils/axiosInstance';

export interface SignupPayload {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export const registerNewUser = async (payload: SignupPayload) => {
  try {
    // const response = await axiosInstance.post('/users/signup', payload, {
    //   headers: {
    //     tenant: 'root',
    //   },
    // });

    return {
      succeeded: true,
      message: 'User register successfully.',
      errors: null,
      data: 'User string Registered.\r\nPlease check z@gmail.com to verify your account!',
    };
  } catch (error: any) {
    return {
      type: 'https://tools.ietf.org/html/rfc9110#section-15.5.1',
      title: 'One or more validation errors occurred.',
      status: 400,
      errors: {
        Password: ['Password must contain at least one special character.'],
      },
      traceId: '00-cddd934f9ae1b68e924340cabbc6bcc2-618c2d142fcd4eeb-00',
    };
  }
};

/**
 * Confirm email for a user
 * @param email - Email of the user
 * @param code - Confirmation code
 * @returns Response from the API
 */
export const confirmEmail = async (email: string, code: string) => {
  try {
    // const response = await axiosInstance.get(`/users/confirm-email`, {
    //   params: {email, code},
    //   headers: {tenant: 'root'},
    // });
    return {
      succeeded: true,
      message: 'Account activated successfully.',
      errors: null,
      data: 'E-Mail confirmed successfully',
    };
  } catch (error: any) {
    return error.response
      ? error.response.data
      : {message: 'An unexpected error occurred'};
  }
};

/**
 * Resend OTP to the user
 * @param email - Email of the user
 * @returns Response from the API
 */
export const resendOTP = async (email: string) => {
  try {
    // const response = await axiosInstance.get(`/users/resend-otp`, {
    //   params: {email},
    //   headers: {tenant: 'root'},
    // });
    return {
      succeeded: true,
      message: 'Resend otp successfully.',
      errors: null,
      data: 'Please check Jass@yopmail.com to verify your account!',
    };
  } catch (error: any) {
    return error.response
      ? error.response.data
      : {message: 'An unexpected error occurred'};
  }
};
