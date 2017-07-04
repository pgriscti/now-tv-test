import React from 'react';

const Avatar = ({img}) => {

    if (!img) {
        img = "http://www.piblawg.co.uk/Content/images/blog/noavatar.jpg";
    }
    
    return ( 
        <div>
          <img src={img} alt=""></img>
        </div>
    );
};

export default Avatar;