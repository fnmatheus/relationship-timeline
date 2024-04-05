import { ChangeEvent, FormEvent, useState } from 'react';
import Image from 'next/image';
import { IMomentFormsProps } from '../utils/interface';

export default function MomentForms({ setIsAdding }: IMomentFormsProps) {
  const submitForms = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('teste');
    // setIsAdding(false);
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
        <form className="flex flex-col gap-2 w-max items-center bg-white p-6" onSubmit={submitForms}>
          <label>
            <span className="font-bold text-md">title</span>
            <input className="border-[1px] border-black rounded-md bg-transparent w-full px-2" type="text" name="" id="" />
          </label>
          <label>
          <span className="text-md font-bold">date</span>
            <input className="border-[1px] border-black rounded-md bg-transparent w-full px-2" type="text" name="" id="" />
          </label>
          <input className="block w-[260px] text-xs text-slate-500 file:mr-2 file:py-1 file:px-2 file:rounded-md file:border-[1px] file:text-sm file:font-semibold file:bg-white hover:file:bg-slate-100" onChange={onFileChage} type="file" name="" id="" title="" />
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
          <button className="relative w-max pt-6" type="submit">
            <div className="absolute bottom-1 z-0 bg-[#7d373f] w-[45px] h-[4px] origin-bottom skew-x-[20deg]" />
            <span className="drop-shadow-sub-title text-2xl">Add</span>
          </button>
        </form>
      </div>
    </div>
  )
}
