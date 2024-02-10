import Container from '@/components/Container/Container';
import NavBar from '@/components/NavBar/NavBar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div className='px-4 md:px-6 2xl:px-0 py-2'>

            <Container>
                <div>
                    <NavBar />
                </div>
                {children}
           </Container>
        </div>
    );
};

export default layout;