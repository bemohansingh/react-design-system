import AppTheme, {defaultTheme } from './AppTheme';
import * as React from "react";
export const DesignThemeProvider = () => (
<AppTheme.Provider value={defaultTheme}>
</AppTheme.Provider> 
);
