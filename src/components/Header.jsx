import React from 'react'
import { useUser } from '../userContext'
import { Moon, Sun1 } from 'iconsax-react'
import { useTheme } from '../ThemeContext'

const Header = () => {

    const {theme} = useTheme()
    const { user } = useUser()
    return (
        <div className='flex justify-between bg-red-400 py-5 px-20 items-center'>
            <div className="capitalize font-bold text-lg">hello {user.name}</div>
            <div className="bg-white p-2 w-28 rounded-full">
                <div className="bg-yellow-400 p-2 rounded-full max-w-fit">
                    <Sun1 color='black' size={24} />
                    {theme.name}
                </div>
            </div>
        </div>
    )
}

export default Header