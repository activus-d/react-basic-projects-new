import React from 'react'
import { 
    FaBars, 
    FaUsers, 
    FaFolderOpen, 
    FaWpforms, 
    FaBehance, 
    FaFacebook, 
    FaLinkedin, 
    FaTwitter, 
    FaSketch, 
    FaHome, 
    FaUserFriends, 
    FaCalendarAlt
} from "react-icons/fa";

export const menuIcon = <FaBars className='text-3xl fill-skyBlue scale-110' />

export const options = [
    {
        id: 1,
        url: '#',
        text: 'Home',
        icon: <FaHome className='text-3xl fill-iconColor'/>
    },
    {
        id: 2,
        url: '#',
        text: 'Team',
        icon: <FaUserFriends className='text-2xl fill-iconColor'/>
    },
    {
        id: 3,
        url: '#',
        text: 'Projects',
        icon: <FaFolderOpen className='text-2xl fill-iconColor'/>
    },
    {
        id: 4,
        url: '#',
        text: 'Calendar',
        icon: <FaCalendarAlt className='text-2xl fill-iconColor'/>
    },
    {
        id: 5,
        url: '#',
        text: 'Documents',
        icon: <FaWpforms className='text-2xl fill-iconColor'/>
    },
];

export const socials = [
    {
        id: 1,
        url: '#',
        icon: <FaFacebook className='text-2xl fill-skyBlue hover:fill-socialHover'/>
    },
    {
        id: 2,
        url: '#',
        icon: <FaTwitter className='text-2xl fill-skyBlue hover:fill-socialHover'/>
    },
    {
        id: 3,
        url: '#',
        icon: <FaLinkedin className='text-2xl fill-skyBlue hover:fill-socialHover'/>
    },
    {
        id: 4,
        url: '#',
        icon: <FaBehance className='text-2xl fill-skyBlue hover:fill-socialHover'/>
    },
    {
        id: 5,
        url: '#',
        icon: <FaSketch className='text-2xl fill-skyBlue hover:fill-socialHover'/>
    },
]