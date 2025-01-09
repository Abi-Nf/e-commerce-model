import { PropsWithChildren } from 'react';

export type SectionProps = PropsWithChildren<{
  title: string;
}>;

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="p-4 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold font-poppins text-gray-800">
          {title}
        </h3>
        <button className="hover:underline font-quicksand font-semibold text-gray-700">
          See all
        </button>
      </div>
      <div className="flex gap-3 w-full overflow-x-auto scroll-bar-off">
        { children }
      </div>
    </section>
  )
}