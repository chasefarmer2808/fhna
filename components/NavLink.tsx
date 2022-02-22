import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styles from '../styles/NavLink.module.css';

interface NavLinkProps {
    href: string
    label?: string;
}

export const NavLink: React.FC<NavLinkProps> = ({href, label = href}) => {
    const router = useRouter();

    return (
        <button className={`${styles['nav-link-button']} ${router.asPath === href ? styles['nav-link-active'] : ''}`}>
            <Link href={href}>
                <a>{label}</a>
            </Link>
        </button>
    )
}