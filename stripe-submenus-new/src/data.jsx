import { FaCreditCard, FaBook, FaBriefcase, FaBars } from 'react-icons/fa';
import React from 'react';
import logo from './images/logo.svg'

export const mainLogo = logo

export const menuIcon = <FaBars className='text-3xl'/>

 export const mainNavOptions = [
    {
        id: 1,
        name: 'Product',
        url: "#",
        optionSubMenus: [
            {
                id: 1,
                menuName: 'Payment',
                icon: <FaCreditCard className='text-[#3e5366]'/>
            },
            {
                id: 2,
                menuName: 'Terminal',
                icon: <FaCreditCard className='text-[#3e5366]'/>
            },
            {
                id: 3,
                menuName: 'Connect',
                icon: <FaCreditCard className='text-[#3e5366]'/>
            },
        ]
    },
    {
        id: 2,
        name: 'Developers',
        url: "#",
        optionSubMenus: [
            {
                id: 1,
                menuName: 'Plugins',
                icon: <FaBook className='text-[#3e5366]'/>
            },
            {
                id: 2,
                menuName: 'Libraries',
                icon: <FaBook className='text-[#3e5366]'/>
            },
            {
                id: 3,
                menuName: 'Help',
                icon: <FaBook className='text-[#3e5366]'/>
            },
            {
                id: 4,
                menuName: 'Bolling',
                icon: <FaBook className='text-[#3e5366]'/>
            },
        ]
    },
    {
        id: 3,
        name: 'Company',
        url: "#",
        optionSubMenus: [
            {
                id: 1,
                menuName: 'About',
                icon: <FaBriefcase className='text-[#3e5366]'/>
            },
            {
                id: 2,
                menuName: 'Customers',
                icon: <FaBriefcase className='text-[#3e5366]'/>
            },
        ]
    }
 ]

 export const mainHeading = "Payments infrastructure for the internet"

 export const pageText = "Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online."