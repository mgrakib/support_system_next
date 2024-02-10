
import Container from '@/components/Container/Container';
import LoginSection from '@/components/LoginSection/LoginSection';

import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <Container>
      <div className='px-4 h-[100%] 2xl:h-[100vh] flex items-center justify-center ' >

        <div className='bg-secondary-color px-[15px] my-[30px] py-[30px] md:p-[30px]  md:w-[90%] xl:w-[70%] mx-auto '>
          {/* type  */}
          <p className='text-center text-text-primary-color font-bold text-xl md:text-2xl xl:text-3xl'>NTMC SUPPORT SYSTEM</p>

          {/* container  */}

          <div className='w-full  grid xl:grid-cols-2 gap-5 md:mt-10'>

            {/* image  */}
            <div className='w-full min-h-80 relative'>
              <div className=' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%]'>
                <Image
                  src={'https://i.ibb.co/X8mGwVK/logo.png'}
                  alt='ntmc logo'
                  layout='fill' // Fill parent container
                  objectFit='contain' // Cover parent container
                />
              </div>
            </div>



            <div>
              {/* inputs  */}
              <div>
                <LoginSection />
              </div>
            </div>
          </div>

          <div className='mt-10 text-[14px] text-center text-text-primary-color'>
            <p>© 2018-2024 <span className='text-red-500'>NTMC</span>. All Rights Reserved | Designed & Developed By</p>
          </div>
        </div>

      </div>
    </Container>
  );
};

export default page;