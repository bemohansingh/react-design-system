import React from 'react';
import AppTheme, { defaultTheme } from './AppTheme';

const themeProvider = () => (
<AppTheme.Provider value={defaultTheme}>
</AppTheme.Provider> 
);

export default themeProvider;