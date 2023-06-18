import React, { useState, useEffect, useMemo } from 'react';
import './Menu.css';

const Menu = () => {
    const categories = useMemo(() => ['Category 1', 'Category 2', 'Category 3', 'Category 4'], []);

    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'ArrowUp') {
                event.preventDefault();
                setSelectedIndex((prevIndex) => (prevIndex === 0 ? categories.length - 1 : prevIndex - 1));
            } else if (event.key === 'ArrowDown') {
                event.preventDefault();
                setSelectedIndex((prevIndex) => (prevIndex === categories.length - 1 ? 0 : prevIndex + 1));
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [categories.length]);

    useEffect(() => {
        setSelectedIndex(0); // Reset the selected index to 0 when categories change
    }, [categories]);

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h1 className="header-title">Menu Title</h1>
            </div>
            <ul className="menu-items">
                {categories.map((category, index) => (
                    <li
                        key={index}
                        className={index === selectedIndex ? 'selected' : ''}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
