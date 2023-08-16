import { ColorTokens } from './ColorTokens';
import * as React from 'react';
export interface AppTheme {
    colors: ColorTokens;
}
export declare const defaultTheme: AppTheme;
export declare const AppThemeContext: React.Context<AppTheme>;
export default AppThemeContext;
