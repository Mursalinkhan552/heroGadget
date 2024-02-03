import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg-px-8'>
            <div className='relative flex items-center justify-between'>
                <Link
                    to='/'
                    aria-label='HeroGadget'
                    title='HeroGadget'
                    className='inline-flex items-center'
                >
                    <div className='flex items-center justify-center w-12 h-12 bg-cyan-200 rounded-full'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 32 32'
                            fill='currentColor'
                            className='flex-shrink-0 w-5 h-5 rounded-full text-cyan-600'
                        >
                            <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
                        </svg>
                    </div>
                    <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                        HeroGadget
                    </span>
                </Link>
                <ul className='lg:flex items-center hidden space-x-8'>
                    <li>
                        <NavLink
                            to='/'
                            aria-label='Home'
                            title='Home'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/shop'
                            aria-label='Shop'
                            title='Shop'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <Link
                            to='/cart'
                            aria-level='Cart'
                            title='Cart'
                        >
                            <div className='relative py-3'>
                                <ShoppingCartIcon className='h-6 w-6 text-cyan-400' />
                            </div>
                        </Link>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            aria-label='About Us'
                            title='About Us'
                            className={({ isActive }) => (isActive ? 'active' : 'default')}
                        >
                            About Us
                        </NavLink>
                    </li>
                </ul>
                <div className='lg:hidden'>
                    <button
                        aria-level='Open Menu'
                        title='Open Menu'
                        className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-purple-50'
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                            <path
                                fill='currentColor'
                                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
                            />
                            <path
                                fill='currentColor'
                                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
                            />
                        </svg>
                    </button>
                    {
                        isMenuOpen && (
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <Link>
                                                <div>
                                                    <svg
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        viewBox='0 0 32 32'
                                                        fill='currentColor'
                                                        className='flex-shrink-0 w-5 h-5 rounded-full text-cyan-600'
                                                    >
                                                        <path d='M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z'></path>
                                                    </svg>
                                                </div>
                                                <span>
                                                    HG
                                                </span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;