import {createAsyncThunk} from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axiosInstance';
import {getToken} from '../../utils/api';
import {UserCredentials} from '../../types/auth'; // Assuming the interface is moved to a shared file
import {log} from 'sonarqube-scanner/build/src/logging';

// Create the login thunk
export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: UserCredentials, {rejectWithValue}) => {
    console.log(credentials);

    try {
      // Send login request to the server
      const response = await getToken(credentials);
      return response.data; // Return the response data if successful
    } catch (error: any) {
      console.log('>>>>', error);
      // Reject with a detailed error message
      return rejectWithValue(
        error.response?.data?.message || error.message || 'Login failed',
      );
    }
  },
);
