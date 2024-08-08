'use client';

import { Button, Text } from 'rizzui';
import { Fragment } from 'react';
import cn from '@/utils/class-names';
import { DragEndEvent } from '@dnd-kit/core';
// import { createId } from '@paralleldrive/cuid2';

import { QuoteInput } from '@/app/shared/create-quotation/create-quotation/quote-forms/quote-input';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { SortableList } from '@/components/dnd-sortable/dnd-sortable-list';
// import {
//   PiPlusCircle,
//   PiTrashBold,
//   PiArrowsOutCardinalBold,
// } from 'react-icons/pi';

export default function MilestonesTable() {
  const { control, register, getValues } = useFormContext();
  const { fields, move } = useFieldArray({
    control: control,
    name: 'milestonesTable',
  });

  function handleChange(event: DragEndEvent) {
    const { active, over } = event;
    if (!active || !over) return;
    const oldIndex = fields.findIndex((item) => item.id === active.id);
    const newIndex = fields.findIndex((item) => item.id === over.id);
    move(oldIndex, newIndex);
  }

  return (
    <div className="relative mb-8 mt-8 rounded-lg border border-muted bg-gray-0 px-2 pb-10 pt-6 dark:bg-gray-50 sm:rounded-sm lg:rounded-xl xl:rounded-2xl">
      <p className="mb-4 ps-4 text-lg font-semibold text-gray-900">
        Milestones
      </p>

      <div className="grid grid-cols-12 gap-4 rounded-t-md bg-gray-100 p-2 dark:bg-gray-900">
        <TableHeaderCell className="col-span-2 py-2 ps-4">
          <p className="text-center font-semibold text-gray-500"></p>
        </TableHeaderCell>
        <TableHeaderCell className="col-span-2 py-2">
          <p className="text-center font-semibold text-gray-500">
            % DISBURSEMENT
          </p>
        </TableHeaderCell>
        <TableHeaderCell className="col-span-6 py-2">
          <p className="text-center font-semibold text-gray-500">
            MILESTONE ACTIVITY
          </p>
        </TableHeaderCell>
        <TableHeaderCell className="col-span-2 py-2">
          <p className="text-center font-semibold text-gray-500">
            AMOUNT (KES)
          </p>
        </TableHeaderCell>
      </div>
      <ul>
        <SortableList items={fields} onChange={handleChange}>
          {fields?.map((field, index) => {
            return (
              <Fragment key={`milestones-table-${index}`}>
                <SortableList.Item id={field.id}>
                  <div className="group grid min-h-10 grid-cols-12 gap-0 border-b border-muted dark:border-muted/20">
                    <div className="col-span-2 py-2 pe-2 ps-4">
                      <QuoteInput
                        inputClassName="[&_input]:text-center"
                        placeholder="A"
                        {...register(`milestonesTable.${index}.milestone`)}
                      />
                    </div>
                    <div className="col-span-2 p-2 pb-4">
                      <QuoteInput
                        inputClassName="[&_input]:text-center"
                        placeholder="50%"
                        {...register(
                          `milestonesTable.${index}.percentageDisbursement`,
                          {
                            valueAsNumber: true,
                          }
                        )}
                      />
                    </div>

                    <div className="col-span-6 p-2">
                      <QuoteInput
                        placeholder="First Draft"
                        inputClassName="[&_input]:text-center"
                        {...register(
                          `milestonesTable.${index}.milestoneActivity`
                        )}
                      />
                    </div>

                    <div className="col-span-2 p-2">
                      <QuoteInput
                        type="number"
                        placeholder="0"
                        inputClassName="[&_input]:text-center"
                        {...register(`milestonesTable.${index}.amount`, {
                          valueAsNumber: true,
                        })}
                      />
                    </div>
                  </div>
                </SortableList.Item>
              </Fragment>
            );
          })}
        </SortableList>
      </ul>
    </div>
  );
}

function TableHeaderCell({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        'font-semibold [&_input]:uppercase [&_input]:text-gray-500 dark:[&_input]:text-gray-400',
        className
      )}
    >
      {children}
    </div>
  );
}