import { FormEvent } from 'react';
import { IMomentFormsProps } from '../utils/interface';

export default function MomentForms({ setIsAdding }: IMomentFormsProps) {
  const submitForms = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsAdding(false);
  };

  return (
    <div className="absolute w-full h-full top-0 bg-black/40">
      <form onSubmit={submitForms}>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
        <input type="file" name="" id="" />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}
