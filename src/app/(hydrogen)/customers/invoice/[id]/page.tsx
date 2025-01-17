import { PiDownloadSimpleBold } from 'react-icons/pi';
import InvoiceDetails from '@/app/shared/invoice/invoice-details';
import PrintButton from '@/app/shared/commons/print-button';
import PageHeader from '@/app/shared/commons/page-header';
import { metaObject } from '@/config/site.config';
import { Button } from 'rizzui';
import { routes } from '@/config/routes';

export const metadata = {
  ...metaObject('Invoice'),
};

const pageHeader = {
  title: 'Invoice Details',
  breadcrumb: [
    {
      href: '',
      name: 'Home',
    },
    {
      href: '',
      name: 'Invoice',
    },
    {
      name: 'Details',
    },
  ],
};

export default function InvoiceDetailsPage() {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <div className="mt-4 flex items-center gap-3 @lg:mt-0">
          <PrintButton />
          <Button className="w-full @lg:w-auto">
            <PiDownloadSimpleBold className="me-1.5 h-[17px] w-[17px]" />
            Download
          </Button>
        </div>
      </PageHeader>

      <InvoiceDetails />
    </>
  );
}
