import React from 'react';

// Composant BreadcrumbItem
const BreadcrumbItem = ({ label, active }) => {
    return (
        <li className={`breadcrumb_item ${active ? 'active' : ''}`}>
            {active ? (
                <span>{label}</span>
            ) : (
                <a href="#">{label}</a>
            )}
        </li>
    );
};

export default BreadcrumbItem;