import { ColorTokens } from './ColorTokens';
import { defaultColorTokens } from './AppBrand';
import * as React from 'react';


export interface AppTheme {
    colors: ColorTokens;
  }

  export const defaultTheme: AppTheme = {
    colors: defaultColorTokens
  };

 export const AppThemeContext: React.Context<AppTheme>  = React.createContext<AppTheme>(defaultTheme);  // Create our context
export default AppThemeContext