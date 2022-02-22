import React, { useMemo } from 'react';

interface IconProps {
    name: string;
    sizeRem?: number;
    rotateDeg?: number;
}

export const Icon: React.FC<IconProps> = ({ name, sizeRem = 1, rotateDeg = 0}) => {
    const style = {
        width: `${sizeRem}rem`,
        height: `${sizeRem}rem`
    }

    const icon = useMemo(() => {
        switch (name) {
            case 'hamburger':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" style={style} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="4" y1="6" x2="20" y2="6" />
                        <line x1="4" y1="12" x2="20" y2="12" />
                        <line x1="4" y1="18" x2="20" y2="18" />
                    </svg>
                );
            case 'cancel':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" style={style} viewBox="0 0 24 24" strokeWidth="1.5" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                )    
            default:
                break;
        }
    }, [name]);

    return (
        <span>{icon}</span>
    )
};