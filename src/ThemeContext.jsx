import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined)
const ThemeUpdateContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(true)

    function toggleTheme() {
        setDark(!dark)
    }

    return <ThemeContext.Provider value={ dark }>
        <ThemeUpdateContext.Provider value={toggleTheme}>
            {children}
        </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)
export const useThemeUpdate = () => useContext(ThemeUpdateContext)