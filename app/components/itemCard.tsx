import Image from 'next/image';

import { IMoment } from '../utils/interface';

export default function ItemCard({ date, title, photo }: IMoment) {
  return (
    <div>
      <div className="">
        <h3>{title}</h3>
        <h4>{date}</h4>
      </div>
      <div className="">
        <Image
          width={250}
          height={250}
          src={photo}
          alt="moment photo"
        />
      </div>
    </div>
  )
}