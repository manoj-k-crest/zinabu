import {guideIcons} from '../assets/GuideIcons';
import {Dimensions} from 'react-native';

export enum AllCategories {
  All = 'All',
  Cosmetics = 'Cosmetics',
  Construction = 'Construction',
  Clothing = 'Clothing',
  Car_Parts = 'Car Parts',
}

export enum ServiceTabs {
  ForSale = 'For Sale',
  ForRent = 'For Rent',
  Jobs = 'Jobs',
  Promotions = 'Promotions',
  Services = 'Services',
}

export const guidePageSlides = [
  {
    id: '1',
    title: 'Lorem ipsum dolor consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Euismod pellentesque fringilla tempor purus sit quis. Ultrices tincidunt risus aliquam vitae sit consectetur sed enim mauris. Lorem ipsum dolor sit amet consectetur. Euismod pellentesque fringilla tempor purus sit quis. Ultrices.',
    image: guideIcons.guide1,
  },
  {
    id: '2',
    title: 'Lorem ipsum dolor consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Euismod pellentesque fringilla tempor purus sit quis. Ultrices tincidunt risus aliquam vitae sit consectetur sed enim mauris. Lorem ipsum dolor sit amet consectetur. Euismod pellentesque fringilla tempor purus sit quis. Ultrices.',
    image: guideIcons.guide2,
  },
  {
    id: '3',
    title: 'Lorem ipsum dolor consectetur.',
    description:
      'Lorem ipsum dolor sit amet consectetur. Euismod pellentesque fringilla tempor purus sit quis. Ultrices tincidunt risus aliquam vitae sit consectetur sed enim mauris. Lorem ipsum dolor sit amet consectetur. Euismod pellentesque fringilla tempor purus sit quis. Ultrices.',
    image: guideIcons.guide3,
  },
];

export const WIDTH = Dimensions.get('screen').width;
export const HEIGHT = Dimensions.get('screen').height;

export const COLORS = {
  backGround: '#262832',
};
