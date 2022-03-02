import { useRouter } from 'next/router';
import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { Icon } from './Icon';
import { NavLink } from './NavLink';

export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [navClass, setNavClass] = useState('');
    const prevScrollPos = useRef(0);
    const router = useRouter();

    useEffect(() => {
        setMenuOpen(false);
    }, [router]);

    const handleScroll = () => {
        const currentScrollPos = window.scrollY;

        if (prevScrollPos.current > currentScrollPos) {
            // Scrolling down.
            setNavClass('');
        } else {
            // Scrolling up.
            setNavClass('nav-hidden');
            setMenuOpen(false);
        }

        prevScrollPos.current = currentScrollPos;
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    }, []);

    return (
        <nav className={navClass}>
            <div className={styles['nav-title-container']}>
                <span>FHNA</span>
                <span className={styles['nav-menu-btn']} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen 
                        ? <Icon name='cancel' sizeRem={2} />
                        : <Icon name='hamburger' sizeRem={2} />}
                </span>
            </div>
            <span className={menuOpen ? styles['nav-link-container-active'] : styles['nav-link-container']}>
                <NavLink href='/' label='Home' />
                <NavLink href='/about' label='About' />
                <NavLink href='/meetings' label='Meetings' />
            </span>
        </nav>
    )
}