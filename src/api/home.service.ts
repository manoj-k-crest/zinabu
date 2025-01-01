import axiosInstance from '../utils/axiosInstance';

export const fetchHomeProducts = async () => {
  const url = '/api/v1/products/home-products';
  const payload = {
    pageNumber: 0,
    pageSize: 10,
  };

  try {
    // const response = await axiosInstance.post(url, payload, {
    //   headers: {
    //     accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // });

    return {
      data: [],
      currentPage: 0,
      totalPages: 0,
      totalCount: 0,
      pageSize: 10,
      hasPreviousPage: false,
      hasNextPage: false,
    };
  } catch (error) {}
};

export const fetchProductsInfo = async id => {
  const url = `/api/v1/products/$s{id}`;
  const payload = {
    pageNumber: 0,
    pageSize: 10,
  };

  try {
    // const response = await axiosInstance.post(url, payload, {
    //   headers: {
    //     accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // });

    return {
      id: 'string',
      productId: 'string',
      name: 'string',
      description: 'string',
      price: 0,
      storeId: 'string',
      productTypeId: 'string',
      store: 'string',
      marketPlace: 'string',
      brand: 'string',
      origin: 'string',
      isStockAvailable: true,
      quantity: 0,
      manufacturedDate: '2024-12-20T12:52:02.330Z',
      condition: 0,
      isDiscounted: true,
      isPromotionalItem: true,
      hasReturnPolicy: true,
      isAgeRestricted: true,
      hasWarranty: true,
      isNewArrival: true,
      isOnSale: true,
      isOnWholeSale: true,
      isBargain: true,
      isMakeOffer: true,
      latitude: 'string',
      longitude: 'string',
      totalViews: 0,
      totalLikes: 0,
      ratings: 0,
      views: 0,
      likes: 0,
      productImages: [
        {
          id: 'string',
          productId: 'string',
          url: 'string',
        },
      ],
    };
  } catch (error) {}
};
