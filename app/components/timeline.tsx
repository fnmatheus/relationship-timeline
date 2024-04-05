import { useState } from 'react';
import { ITimeLineProps } from '../utils/interface';
import ItemCard from './itemCard';
import MomentForms from './momentForms';

export default function Timeline({ moments }: ITimeLineProps) {
  const [isAdding, setIsAdding] = useState(false);
  const handleNew = () => {
    setIsAdding(true);
  }

  return (
    <main className={`flex flex-col ${isAdding? 'overflow-hidden h-screen' : 'h-full'} font-mono bg-white gap-6 text-black pb-12`}>
      <header className="flex flex-col w-full items-center mt-2 relative pt-2">
        <div className="relative font-cursive">
          <div className="absolute bottom-1 z-0 bg-[#7d373f] w-[325px] h-[10px] origin-bottom skew-x-[20deg] -skew-y-2" />
          <h1 className="text-[5rem] -skew-y-2 leading-[3.4rem] drop-shadow-title font-bold">Our Timeline</h1>
        </div>
        <h2 className="font-semibold text-2xl">remembering moments</h2>
      </header>
      <section className="flex flex-col items-center gap-6">
        <p className="mx-5 text-center">
        I know it&#39;s simple, but I wanted to show you how important our relationship is for me. I thought I wasn&#39;t ready for a new date but you proved me that I was wrong. You&#39;re so special and kindness.I can&#39;t imagine my life without you. Love u.
        </p>
        <button className="relative" onClick={handleNew}>
          <div className="absolute bottom-1 z-0 bg-[#7d373f] w-[144px] h-[4px] origin-bottom skew-x-[20deg]" />
          <span className="drop-shadow-sub-title text-2xl">New memory</span>
        </button>
        {
          isAdding &&
          <MomentForms setIsAdding={setIsAdding} />
        }
        <section className="flex flex-wrap gap-16 justify-center w-full mx-12 ">
          {
            moments.map((moment) => (
              <ItemCard key={moment.date} date={moment.date} title={moment.title} photo={moment.photo} />
            ))
          }
        </section>
      </section>
    </main>
  )
}