import axiosInstance from '../utils/axiosInstance';

export const createStore = async storeData => {
  try {
    const response = await axiosInstance.post('/api/v1/stores', storeData, {
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImM0MGVjNjg1LWJkMjItNDM4NS1iMjk5LWU1YWNkOWE0NTNjOCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Imphc3NkaG9sYW4xMkBnbWFpbC5jb20iLCJmdWxsTmFtZSI6Imphc2hhbiAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiamFzaGFuIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6IiIsImlwQWRkcmVzcyI6IjEwNi4yMDUuMTc5LjUwIiwidGVuYW50Ijoicm9vdCIsImltYWdlX3VybCI6IiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiKzQgNjY1MyA3NzM4MzEiLCJleHAiOjE3MzQ2NzY2Njh9.llNQSXeucdf_wgLVpR38zG4GfLYgSeoQxAT86cENMl8',
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating store:', error);
    throw error;
  }
};
