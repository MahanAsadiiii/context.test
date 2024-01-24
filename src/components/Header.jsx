import React from 'react'
import { useUser } from '../userContext'
import { Moon, Sun1 } from 'iconsax-react'
import { useTheme, useThemeUpdate } from '../ThemeContext'

const Header = () => {

    const dark = useTheme()
    const toggleTheme = useThemeUpdate()
    const { user } = useUser()

    return (
        <div className={`flex justify-between ${ dark ? 'bg-red-400' : 'bg-gray-500'}  py-5 px-20 items-center`}>
            <div className="capitalize font-bold text-lg text-white">hello {user.name}</div>
            <button onClick={toggleTheme} className="bg-white  p-2 w-28 rounded-full">
                <div className={`${dark ? 'bg-yellow-400' : 'bg-gray-500 translate-x-16'} duration-500 p-2 rounded-full max-w-fit`}>
                    {dark ?
                        <Sun1 color='black' size={16} />
                        : <Moon color='white' size={16} />
                    }
                </div>
            </button>
        </div>
    )
}

export default Header