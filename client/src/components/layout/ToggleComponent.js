import React, { useState } from 'react';

const ToggleContent = props => {
  const [isShown, setIsShown] = useState(true);
  const hide = () => setIsShown(false);
  const show = () => setIsShown(true);

  return(
    <>    
      { isShown && props.content(hide) }
    </>
  );
};

export default ToggleContent;
