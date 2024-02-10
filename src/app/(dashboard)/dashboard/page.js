import StatusCard from '@/components/StatusCard/StatusCard';
import TicketTable from '@/components/TicketTable/TicketTable';
import React from 'react';

const Page = () => {
    return (
        <div>
            <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-6'>
                <StatusCard title={'open'} number={'0'} newTicket={0} highPriority={0}/>
                <StatusCard title={'Answered'} number={'0'} newTicket={0} highPriority={0}/>
                <StatusCard title={'In Progress'} number={'0'} newTicket={0} highPriority={0}/>
                <StatusCard title={'Close'} number={'0'} newTicket={0} highPriority={0}/>
                
            </div>
            
            <div className='mt-8 p-4 bg-dark-4'>
                <TicketTable />
            </div>
        </div>
    );
};

export default Page;