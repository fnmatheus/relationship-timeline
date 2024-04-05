import { Dispatch, SetStateAction } from 'react';

export interface IMoment {
  date: string,
  title: string,
  photo: string
}

export interface ITimeLineProps {
  moments: IMoment[]
}

export interface IMomentFormsProps {
  setIsAdding: Dispatch<SetStateAction<boolean>>
}
