import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { Icon } from './Icon';
import { NavLink } from './NavLink';

export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navbarTopPosPx, setNavbarTopPosPx] = useState(0);
    const prevScrollPos = useRef(0);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (prevScrollPos.current > currentScrollPos) {
            // Scrolling up.
            setNavbarTopPosPx(0);
        } else {
            // Scrolling down.
            setNavbarTopPosPx(-50);
            setMenuOpen(false);
        }

        prevScrollPos.current = currentScrollPos;
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    }, []);

    return (
        <nav style={{top: navbarTopPosPx}}>
            <span>FHNA</span>
            <span className={styles['nav-menu-btn']} onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen 
                    ? <Icon name='cancel' sizeRem={2} />
                    : <Icon name='hamburger' sizeRem={2} />}
            </span>
            <span className={menuOpen ? styles['nav-link-container-active'] : styles['nav-link-container']}>
                <NavLink href='/' label='Home' />
                <NavLink href='/meetings' label='Meetings' />
            </span>
        </nav>
    )
}