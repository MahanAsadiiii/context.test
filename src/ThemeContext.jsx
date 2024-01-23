import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined)


export const ThemeProvider = ({ children }) => {
    const [dark] = useState({ theme: 'light', name: 'mahan' })
    return <ThemeContext.Provider value={{ dark }}>
        {children}
    </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)