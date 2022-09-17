import React from 'react'

const NavMenu = () => {

    const menuItems = [
        {
            name: 'Home',
            id: 'home'
        }, {
            name: 'About',
            id: 'about'
        }, {
            name: 'Interested In',
            id: 'interestedIn'
        }, {
            name: 'Tech Stack',
            id: 'techStack'
        }, {
            name: 'Contact',
            id: 'contact'
        }
    ];

    return (
        <ul className="text-center grid gap-2 place-items-center">
            {
                menuItems.map(({ name, id }) => {
                    return (
                        <li key={id} className="transition-all hover:border-b-2 border-gray-200 p-2">
                            <a href={id} className="no-underline">{name}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default NavMenu