import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

// import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
  error: null,
  loading: false,
};

// Async thunk to handle login API call
export const login = createAsyncThunk('auth/login', async credentials => {
  try {
    return {
      succeeded: true,
      message: 'Token get successfully',
      errors: null,
      data: {
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImM0MGVjNjg1LWJkMjItNDM4NS1iMjk5LWU1YWNkOWE0NTNjOCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Imphc3NkaG9sYW4xMkBnbWFpbC5jb20iLCJmdWxsTmFtZSI6Imphc2hhbiAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiamFzaGFuIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6IiIsImlwQWRkcmVzcyI6IjIyMy4xNzguMjEzLjEwNSIsInRlbmFudCI6InJvb3QiLCJpbWFnZV91cmwiOiIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9tb2JpbGVwaG9uZSI6Iis0IDY2NTMgNzczODMxIiwiZXhwIjoxNzM0MTc0NDU2fQ.8JWDGefqZGoJDIj5GBCzu4ba9kFGJnndfNdh_15K_5Q',
        refreshToken: 'kUK71rpInsF9PBqweLlyN1epEiSMHrRCXFZI/1al+jA=',
        refreshTokenExpiryTime: '2024-12-20T11:07:36.6959064Z',
      },
    };

    // const response = await axiosInstance.post('/api/tokens', {
    //   email: credentials.email,
    //   password: credentials.password,
    // });

    // return response.data;
  } catch (error) {
    // throw new Error(error.response?.data?.message || 'Login failed');
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginRequest: state => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: state => {
      state.user = null;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        // Save user data to AsyncStorage
        // try {
        //   await AsyncStorage.setItem('user', JSON.stringify(action.payload));
        // } catch (error) {
        //   console.error('Failed to save user data to storage:', error);
        // }
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {loginRequest, loginSuccess, loginFailure, logout} =
  authSlice.actions;

export default authSlice.reducer;
