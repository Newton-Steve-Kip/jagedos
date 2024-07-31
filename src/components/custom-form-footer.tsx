import { Button } from 'rizzui';
import cn from '@/utils/class-names';

interface FormFooterProps {
  className?: string;
  altBtnText?: string;
  submitBtnText?: string;
  isLoading?: boolean;
  handleAltBtn?: () => void;
  handleSubmitBtn?: () => void;
}

export const negMargin = '-mx-4 md:-mx-5 lg:-mx-6 3xl:-mx-8 4xl:-mx-10';

export default function FormFooter({
  isLoading,
  altBtnText,
  submitBtnText = 'Submit',
  className,
  handleAltBtn,
  handleSubmitBtn,
}: FormFooterProps) {
  return (
    <div
      className={cn(
        'sticky bottom-0 left-0 right-0 z-10 -mb-8 flex items-center justify-end gap-4 border-t bg-white px-4 py-4 dark:bg-gray-50 md:px-5 lg:px-6 3xl:px-8 4xl:px-10',
        className,
        negMargin
      )}
    >
      {altBtnText && (
        <Button
          variant="outline"
          className="w-full @xl:w-auto"
          onClick={handleAltBtn}
        >
          {altBtnText}
        </Button>
      )}
      {/* <Button
        variant="outline"
        className="w-full @xl:w-auto"
        onClick={handleAltBtn}
      >
        {altBtnText}
      </Button> */}
      <Button
        onClick={handleSubmitBtn}
        isLoading={isLoading}
        className="w-full @xl:w-auto"
      >
        {submitBtnText}
      </Button>
    </div>
  );
}