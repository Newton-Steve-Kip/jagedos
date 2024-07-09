'use client';

import { useParams } from 'next/navigation';
import { PiCheckCircle, PiCopySimple, PiMoped } from 'react-icons/pi';
import Timeline from './timeline';
import { Button } from 'rizzui';
import Link from 'next/link';
import { routes } from '@/config/routes';

const timelineData = [
  {
    title: 'Milestone 3',
    text: 'Brick Layering',
    hightlightedText: 'Job complete',
    date: 'May 02, 2023',
    time: '11:30 am',
    icon: '',
    status: '',
  },
  {
    title: 'Milestone 2',
    text: 'Reinforcements',
    hightlightedText: '',
    date: 'May 02, 2023',
    time: '11:00 am',
    icon: <PiCheckCircle className="h-6 w-6 text-blue" />,
    status: 'ongoing',
  },
  {
    title: 'Milestone 1',
    text: 'Wall Escavations',
    hightlightedText: '',
    date: 'May 02, 2023',
    time: '09:00 am',
    icon: <PiCheckCircle className="h-6 w-6 text-blue" />,
    status: 'ongoing',
  },
  {
    title: 'Start',
    text: '',
    hightlightedText: '',
    date: 'April 29, 2023',
    time: '05:31 am',
    icon: <PiCheckCircle className="h-6 w-6 text-blue" />,
    status: 'ongoing',
  },
];

export default function ProgressBarActive({
  className,
}: {
  className?: string;
}) {
  return (
    <>
      <div className='ml-14 lg:ml-28'>
        <div className='mb-8'>
          <Link href={routes.serviceProvider.fundi.activeJobs}>
              <Button>Complete Milestone</Button>
          </Link>
        </div>

        <Timeline data={timelineData} order="desc" />   
      </div>
    </>
  );
}
