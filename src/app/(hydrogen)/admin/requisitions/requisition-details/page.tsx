'use client';

import { routes } from '@/config/routes';
import { Button, Textarea } from 'rizzui';
import PageHeader from '@/app/shared/commons/page-header';
import { metaObject } from '@/config/site.config';
import CustomerDetailsCard from '@/app/shared/logistics/dashboard/cutomer-details';

import WidgetCard3 from '@/components/cards/widget-card3';
import ToastButton from '@/components/buttons/toast-button';
import Link from 'next/link';
import ChunkedGrid from '@/app/shared/custom-chunked-grid';
import { completeJobDetailsData, JobDescription } from '@/data/job-data';
import { useSearchParams } from 'next/navigation';
import JobDescriptionChunked from '@/app/shared/job-description-chunked';

const pageHeader = {
  title: 'View Job',
  breadcrumb: [
    {
      href: routes.admin.dashboard,
      name: 'Home',
    },
    {
      href: routes.admin.requisitions,
      name: 'All requisitions',
    },
    {
      name: 'View Request',
    },
  ],
};

export default function RequisitionDetailsPage() {
  const searchParams = useSearchParams();

  const jobId = searchParams.get('id');
  return (
    <>
      <PageHeader
        title={pageHeader.title}
        breadcrumb={pageHeader.breadcrumb}
      ></PageHeader>

      <CustomerDetailsCard className="mt-2" />
      {/* <JobDetailsCard className="mt-6" /> */}
      <div className="mt-4">
        <ChunkedGrid
          data={
            jobId === '3416'
              ? completeJobDetailsData[0]
              : jobId === '3420'
                ? completeJobDetailsData[2]
                : jobId === '3419'
                  ? completeJobDetailsData[1]
                  : completeJobDetailsData[0]
          }
          dataChunkSize={8}
          // className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        />
      </div>

      <WidgetCard3
        title="Notes"
        rounded="lg"
        className="mt-4"
        action={<Textarea size="sm" className="ml-12 flex flex-grow" />}
      ></WidgetCard3>

      <div className="mt-6 flex items-center justify-center space-x-6">
        {jobId === '3420' || jobId === '3419' ? (
          <>
            <Link
              href={{
                pathname: routes.admin.professionalQuotation,
                query: { jobId },
              }}
            >
              <ToastButton title="Create Quotation" />
            </Link>
            <Link
              href={{
                pathname: routes.admin.assignServiceProvider,
                query: { jobId },
              }}
            >
              <ToastButton title="Assign Professionals" />
            </Link>
          </>
        ) : jobId === '3502' || jobId === '3700' ? (
          <>
            <Link
              href={{
                pathname: routes.admin.professionalQuotation,
                query: { jobId },
              }}
            >
              <ToastButton title="Create Quotation" />
            </Link>
            <Link
              href={{
                pathname: routes.admin.assignServiceProvider,
                query: { jobId },
              }}
            >
              <ToastButton title="Assign Contractors" />
            </Link>
          </>
        ) : (
          <Link
            href={{
              pathname: routes.admin.assignServiceProvider,
              query: { jobId },
            }}
          >
            <ToastButton title="Assign Fundis" />
          </Link>
        )}
      </div>
    </>
  );
}