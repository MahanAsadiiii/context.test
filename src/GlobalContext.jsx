import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children }) => {
    const [dark, setDark] = useState(true)

    return <ThemeContext.Provider value={{
        dark,
        toggleTheme: () => setDark(!dark)
    }}  >
        {children}
    </ThemeContext.Provider >
}

export const useTheme = () => useContext(ThemeContext)



const UserContext = createContext(undefined);

export const UserProvider = ({ children }) => {
    const [user] = useState({
        name: 'Mahan',
        email: 'mahan.asadi@yahoo.com',
        dob: "01/01/2000"
    })
    return <UserContext.Provider value={{ user }}>
        {children}
    </UserContext.Provider>
}


export const useUser = () => useContext(UserContext)