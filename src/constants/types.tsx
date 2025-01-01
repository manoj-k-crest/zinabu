export interface NavigationProps {
  [x: string]: any;
  navigate: (screen: string, params?: object) => void;
}
