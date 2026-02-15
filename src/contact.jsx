import React from 'react';

function Contact({ socialItem }) {
    const { className, icon, text, link, alt = '' } = socialItem;
    const isInlineSvg = React.isValidElement(icon);

    const content = text ? (
        <>
            {isInlineSvg ? icon : <img src={icon} alt={alt} />}
            <a href={link} aria-label={alt || text}>{text}</a>
        </>
    ) : null;

    return (
        <p className={className}>
            {content}
        </p>
    );
}

export default Contact;