"use client";

import React, {useState, useEffect, useCallback} from 'react'
import styles from '../styles/Header.module.css'
import { HiMenuAlt4, HiX } from "react-icons/hi"
import Link from 'next/link'

const Header = () => {
    const navs = [
        {
            text: "O nas",
            href: "https://www.villazosia.pl/#o-nas"
        },
        {
            text: "Galeria",
            href: "https://www.villazosia.pl/#galeria"
        },
        {
            text: "Dojazd",
            href: "https://www.villazosia.pl/#dojazd"
        },
        {
            text: "Pokoje",
            href: "https://www.villazosia.pl/#pokoje" 
        },
        {
            text: "Rezerwacja",
            href: "https://www.villazosia.pl/#rezerwacja" 
        },
        {
            text: "Opinie",
            href: "https://www.villazosia.pl/#opinie"
        },   
        {
            text: "Kontakt",
            href: "https://www.villazosia.pl/#kontakt"
        }
    ]

    const [isOpen, setOpen] = useState(false);

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(e => {
            if(window.scrollY >= 10){
                setScrolled(true);
            } else if(window.scrollY < 10){ 
                setScrolled(false);
            }
    }, [])

    useEffect(() => {
      
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll, { passive: true });
        };
    }, [])

    return (
    <header className={`${styles.header} ${scrolled && styles.scrolled}`}>
        <div className={styles.container}>
            <Link href='https://www.villazosia.pl/' className={styles.logo} >
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
                            <Link href={dest.href} className={styles.navLink}>{dest.text}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header
