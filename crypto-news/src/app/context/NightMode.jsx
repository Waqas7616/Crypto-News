import React, { createContext, useContext, useState } from 'react';

const NightModeContext = createContext();

export const useNightMode = () => useContext(NightModeContext);

export const NightModeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleNightMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <NightModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </NightModeContext.Provider>
    );
};
