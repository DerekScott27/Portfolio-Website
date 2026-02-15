import React from 'react';





function SocialLinks({socialItem}){

    const {link, title, image = [] } = socialItem;




    return (
        <div className='social-links'>
            <a href = {link}>{title}</a>
            <img src={image}></img>
        </div>

    )
}

export default SocialLinks;