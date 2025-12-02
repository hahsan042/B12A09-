import React, { useEffect } from 'react';

const ExtraPage = () => {
      useEffect(() => {
      document.title = "ExtraPages | GameHub";
    }, []);
    
    return (
        <div>
            <h1> this is extra page</h1>
        </div>
    );
};

export default ExtraPage;