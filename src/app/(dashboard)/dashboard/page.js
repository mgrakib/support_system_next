
import StatusCard from '@/components/StatusCard/StatusCard';
import TicketTable from '@/components/TicketTable/TicketTable';
import React from 'react';
const Page = () => {
    
    const value = [
        {
            id: 1,
            ticket: 'tick1',
            issuedBy: 'mgr@gmail.com',
            userName: 'MG Rakib',
            organization: 'NTMC',
            project: 'PIDS',
            priority: 'high',
            ticketDate: '02-11-2024',
            status: 'open'
        },
        {
            id: 2,
            ticket: 'tick2',
            issuedBy: 'mgr@gmail.com',
            userName: 'MG Rakib',
            organization: 'NTMC',
            project: 'PIDS',
            priority: 'medium',
            ticketDate: '02-11-2024',
            status: 'in progress'
        },
        {
            id: 3,
            ticket: 'tick3',
            issuedBy: 'mgr@gmail.com',
            userName: 'MG Rakib',
            organization: 'NTMC',
            project: 'PIDS',
            priority: 'low',
            ticketDate: '02-11-2024',
            status: 'close'
        },
        {
            id: 4,
            ticket: 'tick4',
            issuedBy: 'mgr@gmail.com',
            userName: 'MG Rakib',
            organization: 'NTMC',
            project: 'PIDS',
            priority: 'low',
            ticketDate: '02-11-2024',
            status: 'answered'
        },
    ]
    return (
        <div>
            <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-6'>
                <StatusCard title={'open'} number={'0'} newTicket={0} highPriority={0} />
                <StatusCard title={'Answered'} number={'0'} newTicket={0} highPriority={0} />
                <StatusCard title={'In Progress'} number={'0'} newTicket={0} highPriority={0} />
                <StatusCard title={'Close'} number={'0'} newTicket={0} highPriority={0} />

            </div>

            <div className='mt-8 '>
                <TicketTable />
                

               
            </div>
        </div>
    );
};

export default Page;