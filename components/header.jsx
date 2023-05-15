"use client";

import React, {useState, useEffect} from 'react'
import styles from '../styles/Header.module.css'
import { HiMenuAlt4, HiX } from "react-icons/hi"
import Link from 'next/link'

const Header = () => {
    const navs = [
        {
            text: "O nas",
            href: "#o-nas"
        },
        {
            text: "Galeria",
            href: "#galeria"
        },
        {
            text: "Dojazd",
            href: "#dojazd"
        },
        {
            text: "Pokoje",
            href: "#pokoje" 
        },
        {
            text: "Rezerwacja",
            href: "#rezerwacja" 
        },
        {
            text: "Opinie",
            href: "#opinie"
        },   
        {
            text: "Kontakt",
            href: "#kontakt"
        }
    ]

    const [isOpen, setOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = e => {
            if(window.scrollY >= 10){
                setScrolled(true);
            } else if(window.scrollY < 10){ 
                setScrolled(false);
            }
        };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
    }, [])

    return (
    <header className={`${styles.header} ${scrolled && styles.scrolled}`}>
        <div className={styles.container}>
            <Link href='/' className={styles.logo} >
                VILLA<span className={styles.fancy}>ZOSIA</span>
            </Link>

            <button className={`${styles.openMenuIcon} ${styles.btn}`} onClick={() => setOpen(!isOpen)}>
                <HiMenuAlt4 />
            </button>

            <nav className={`${styles.navContainer} ${isOpen && styles.isOpen}`}>
                <button className={`${styles.closeMenuIcon} ${styles.btn}`} onClick={() => setOpen(false)}>
                    <HiX />
                </button>
                <ul className={styles.navItems}>
                    {navs.map((dest, index) => (
                        <li className={styles.navItem} key={index}>
                            <a href={dest.href} className={styles.navLink}>{dest.text}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header
