import React from 'react'; 
import { ColorTokens } from './ColorTokens';
import { defaultColorTokens } from './AppBrand';


export interface AppTheme {
    colors: ColorTokens;
  }

  export const defaultTheme: AppTheme = {
    colors: defaultColorTokens
  };

const AppThemeContext = React.createContext<AppTheme>(defaultTheme);  // Create our context       
export default AppThemeContext;

