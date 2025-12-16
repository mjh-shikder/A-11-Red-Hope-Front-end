import React from 'react';

const Container = ({className, children}) => {
    return (
       <div className={`${className} container mx-auto  md:px-2 lg:px-0 `}>
            {children}
        </div>
    );
};

export default Container;