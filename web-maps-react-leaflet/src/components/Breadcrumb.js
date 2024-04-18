import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';

// Composant Breadcrumb
const Breadcrumb = ({ items }) => {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {items.map((item, index) => (
                    <BreadcrumbItem
                        key={index}
                        label={item.label}
                        active={index === items.length -1}
                    />
                ))}
            </ol>
        </nav>
    )
}

export default Breadcrumb;