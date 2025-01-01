import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

// import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
  marketPlaces: [],
  error: null,
  loading: false,
};

// Async thunk to handle login API call
export const marketPlaces = createAsyncThunk(
  '/marketplaces/search',
  async credentials => {
    try {
      return {
        data: [
          {
            id: 'e04da300-e830-492d-393b-08dd1a69e7c3',
            name: 'Sector 70',
            latitude: '',
            longitude: '',
            radius: '',
            locality: '',
          },
          {
            id: 'a9fa7453-4178-4d32-393c-08dd1a69e7c3',
            name: 'Sector 74',
            latitude: '',
            longitude: '',
            radius: '',
            locality: '',
          },
        ],
        currentPage: 1,
        totalPages: 1,
        totalCount: 2,
        pageSize: 10,
        hasPreviousPage: false,
        hasNextPage: false,
      };

      // const response = await axiosInstance.post('/api/tokens', {
      //   email: credentials.email,
      //   password: credentials.password,
      // });

      // return response.data;
    } catch (error) {
      // throw new Error(error.response?.data?.message || 'Login failed');
    }
  },
);

const locatonSlice = createSlice({
  name: 'marketPlace',
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
      .addCase(marketPlaces.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(marketPlaces.fulfilled, (state, action) => {
        state.loading = false;
        state.marketPlaces = action.payload.data;
      })
      .addCase(marketPlaces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {loginRequest, loginSuccess, loginFailure, logout} =
  authSlice.actions;

export default authSlice.reducer;
