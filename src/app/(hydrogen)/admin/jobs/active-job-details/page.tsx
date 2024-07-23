import ActiveJobDetailsCard from '@/app/shared/admin/details/active-job-details';
// import SpJobsTable from '@/app/shared/service-provider/tables/sp-jobs-table';
import { metaObject } from '@/config/site.config';
import { Button, Progressbar } from 'rizzui';
import Link from 'next/link';
import cn from '@/utils/class-names';
import { routes } from '@/config/routes';
import ProgressBarActive from '@/app/shared/admin/progress-bar-admin';

export const metadata = {
  ...metaObject(),
};

type PageProps = {
  className: string;
  // other props as needed
};

export default function JobDetailsPage({ className }: PageProps) {
  return (
    <>
      <div className="flex justify-between">
        <h3 className="mb-4">Job Details</h3>
        <div className="">
          <Button>Complete Job</Button>
        </div>
      </div>

      <div
        className={cn('xl:gap-15 grid grid-cols-1 lg:grid-cols-1', className)}
      >
        <ProgressBarActive />

        <ActiveJobDetailsCard />

        {/* <Progressbar
          className="mt-6"
          value={75}
          label="75% Ongoing"
          color="info"
          size="xl"
        /> */}

        <div className="flex  justify-center">
          <Link href={routes.admin.active}>
            <Button className="mt-6">Back</Button>
          </Link>
        </div>
      </div>
    </>
  );
}