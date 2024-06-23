import React from 'react'

const BgImage=({className, imagepath})=> {
  return (
    <div className={className} style={{
        backgroundImage:{imagepath},
        backgroundSize: `cover`,
        backgroundPosition: `center`
    }}>
    </div>
  );
};

export default BgImage;