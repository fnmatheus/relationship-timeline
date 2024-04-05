import { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image';
import { IMomentFormsProps } from '../utils/interface';

export default function MomentForms({ setIsAdding }: IMomentFormsProps) {
  const submitForms = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAdding(false);
  };
  
  const [selectedImage, setSelectedImage] = useState<File>();

  const onFileChage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <div className="absolute w-full h-full top-0 bg-black/40">
      <div className="w-full h-full flex items-center justify-center">
        <form className="flex flex-col gap-2 w-max items-center" onSubmit={submitForms}>
          <input className="border-2 bg-transparent w-full" type="text" name="" id="" />
          <input type="text" name="" id="" />
          <input onChange={onFileChage} type="file" name="" id="" />
          <div className="flex justify-center pt-[15px] w-[280px] h-[330px] shadow-xl shadow-black/25 bg-white">
            {
              selectedImage &&
              <Image
                className="w-[250px] h-[250px]"
                width={250}
                height={250}
                src={URL.createObjectURL(selectedImage)}
                alt='photo'
                />
            }
          </div>
          <button className="relative w-max" type="submit">
            <div className="absolute bottom-1 z-0 bg-[#7d373f] w-[45px] h-[4px] origin-bottom skew-x-[20deg]" />
            <span className="drop-shadow-sub-title text-2xl">Add</span>
          </button>
        </form>
      </div>
    </div>
  )
}
