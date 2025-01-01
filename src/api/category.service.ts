import axiosInstance from '../utils/axiosInstance';

export const fetchCategories = async () => {
  try {
    // const response = await axiosInstance.post(
    //   '/api/v1/category/search',
    //   {
    //     keyword: '',
    //     pageNumber: 1,
    //     pageSize: 10,
    //   },
    //   {
    //     headers: {
    //       accept: 'application/json',
    //       Authorization:
    //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImM0MGVjNjg1LWJkMjItNDM4NS1iMjk5LWU1YWNkOWE0NTNjOCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Imphc3NkaG9sYW4xMkBnbWFpbC5jb20iLCJmdWxsTmFtZSI6Imphc2hhbiAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiamFzaGFuIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6IiIsImlwQWRkcmVzcyI6IjEwNi4yMDUuMTc5LjUwIiwidGVuYW50Ijoicm9vdCIsImltYWdlX3VybCI6IiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiKzQgNjY1MyA3NzM4MzEiLCJleHAiOjE3MzQ2NzY2Njh9.llNQSXeucdf_wgLVpR38zG4GfLYgSeoQxAT86cENMl8',
    //       'Content-Type': 'application/json',
    //     },
    //   },
    // );
    return {
      data: [
        {
          id: '46acae39-cc13-4e15-3c7a-08dd1a69e7d7',
          name: 'Construction',
          image: null,
        },
        {
          id: 'da7fde5b-ff70-4838-3c79-08dd1a69e7d7',
          name: 'Cosmetics',
          image: null,
        },
        {
          id: '46acae39-cc13-4e15-3c7a-08dd1a69e7d7',
          name: 'Construction',
          image: null,
        },
        {
          id: 'da7fde5b-ff70-4838-3c79-08dd1a69e7d7',
          name: 'Cosmetics',
          image: null,
        },
        {
          id: '46acae39-cc13-4e15-3c7a-08dd1a69e7d7',
          name: 'Construction',
          image: null,
        },
        {
          id: 'da7fde5b-ff70-4838-3c79-08dd1a69e7d7',
          name: 'Cosmetics',
          image: null,
        },
        {
          id: '46acae39-cc13-4e15-3c7a-08dd1a69e7d7',
          name: 'Construction',
          image: null,
        },
        {
          id: 'da7fde5b-ff70-4838-3c79-08dd1a69e7d7',
          name: 'Cosmetics',
          image: null,
        },
        {
          id: '46acae39-cc13-4e15-3c7a-08dd1a69e7d7',
          name: 'Construction',
          image: null,
        },
        {
          id: 'da7fde5b-ff70-4838-3c79-08dd1a69e7d7',
          name: 'Cosmetics',
          image: null,
        },
        {
          id: '46acae39-cc13-4e15-3c7a-08dd1a69e7d7',
          name: 'Construction',
          image: null,
        },
        {
          id: 'da7fde5b-ff70-4838-3c79-08dd1a69e7d7',
          name: 'Cosmetics',
          image: null,
        },
        {
          id: '46acae39-cc13-4e15-3c7a-08dd1a69e7d7',
          name: 'Construction',
          image: null,
        },
        {
          id: 'da7fde5b-ff70-4838-3c79-08dd1a69e7d7',
          name: 'Cosmetics',
          image: null,
        },
        {
          id: '46acae39-cc13-4e15-3c7a-08dd1a69e7d7',
          name: 'Construction',
          image: null,
        },
        {
          id: 'da7fde5b-ff70-4838-3c79-08dd1a69e7d7',
          name: 'Cosmetics',
          image: null,
        },
        {
          id: '46acae39-cc13-4e15-3c7a-08dd1a69e7d7',
          name: 'Construction',
          image: null,
        },
        {
          id: 'da7fde5b-ff70-4838-3c79-08dd1a69e7d7',
          name: 'Cosmetics',
          image: null,
        },
        {
          id: 'da7fde5b-ff70-4838-3c79-08dd1a69e7d7',
          name: 'Cosmetics',
          image: null,
        },
        {
          id: 'da7fde5b-ff70-4838-3c79-08dd1a69e7d7',
          name: 'Cosmetics',
          image: null,
        },
        {
          id: 'da7fde5b-ff70-4838-3c79-08dd1a69e7d7',
          name: 'Cosmetics',
          image: null,
        },
        {
          id: 'da7fde5b-ff70-4838-3c79-08dd1a69e7d7',
          name: 'Cosmetics',
          image: null,
        },
      ],
      currentPage: 1,
      totalPages: 1,
      totalCount: 2,
      pageSize: 10,
      hasPreviousPage: false,
      hasNextPage: false,
    };
    // console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export const fetchSubcategories = async categoryId => {
  try {
    // const response = await axiosInstance.post(
    //   '/api/v1/subcategory/search',
    //   {
    //     keyword: '',
    //     pageNumber: 1,
    //     pageSize: 10,
    //     categoryId,
    //   },
    //   {
    //     headers: {
    //       accept: 'application/json',
    //       Authorization:
    //         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6ImM0MGVjNjg1LWJkMjItNDM4NS1iMjk5LWU1YWNkOWE0NTNjOCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Imphc3NkaG9sYW4xMkBnbWFpbC5jb20iLCJmdWxsTmFtZSI6Imphc2hhbiAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiamFzaGFuIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvc3VybmFtZSI6IiIsImlwQWRkcmVzcyI6IjEwNi4yMDUuMTc5LjUwIiwidGVuYW50Ijoicm9vdCIsImltYWdlX3VybCI6IiIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL21vYmlsZXBob25lIjoiKzQgNjY1MyA3NzM4MzEiLCJleHAiOjE3MzQ2NzY2Njh9.llNQSXeucdf_wgLVpR38zG4GfLYgSeoQxAT86cENMl8',
    //       'Content-Type': 'application/json',
    //     },
    //   },
    // );
    return {
      data: [
        {
          id: '46acae39-cc13-4e15-3c7a-08dd1a69e7d7',
          name: 'Construction',
          image: null,
        },
        {
          id: 'da7fde5b-ff70-4838-3c79-08dd1a69e7d7',
          name: 'Cosmetics',
          image: null,
        },
      ],
      currentPage: 1,
      totalPages: 1,
      totalCount: 2,
      pageSize: 10,
      hasPreviousPage: false,
      hasNextPage: false,
    };
  } catch (error) {
    console.error(error);
  }
};
