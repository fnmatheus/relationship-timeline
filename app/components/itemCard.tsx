import Image from 'next/image';

import { IMoment } from '../utils/interface';

export default function ItemCard({ date, title, photo }: IMoment) {
  return (
    <div>
      <div>
        <h3 className="m-2">{title}</h3>
        <h4 className="m-2">{date}</h4>
      </div>
      <div className="flex justify-center pt-[15px] w-[280px] h-[330px] shadow-xl shadow-black/25">
        <Image
          className="w-[250px] h-[250px]"
          width={250}
          height={250}
          src={photo}
          alt="moment photo"
        />
      </div>
    </div>
  )
}