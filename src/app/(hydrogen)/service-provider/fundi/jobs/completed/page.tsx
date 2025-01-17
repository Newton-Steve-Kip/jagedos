// import SpCompletedJobsTable from '@/app/shared/service-provider/tables/sp-completed-jobs-table';
import FundiCompletedJobsTable from '@/app/shared/service-provider/tables/sp-completed-jobs-table/fundi';
import { metaObject } from '@/config/site.config';
// import { Title } from 'rizzui';

export const metadata = {
  ...metaObject(),
};

export default function JobsPage() {
  return (
    <>
      {/* <Title as="h4" className="mb-3.5 font-semibold @2xl:mb-5 pb-5">
                Completed Jobs
            </Title> */}

      <div className="@container">
        <div className="grid grid-cols-1 gap-6 @4xl:grid-cols-2 @7xl:grid-cols-12 3xl:gap-8">
          <FundiCompletedJobsTable className="relative @4xl:col-span-12  @7xl:col-span-8" />
        </div>
      </div>
    </>
  );
}
