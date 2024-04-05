"use client";
import { useEffect, useState } from 'react';
import { IMoment } from './utils/interface';
import Timeline from './components/timeline';
import Loading from './components/loading';
import { momentsDataUrl } from './utils/urls';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [moments, setMoments] = useState<IMoment[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(momentsDataUrl, {method: 'GET'});
        const data = await response.json();
        setMoments(data);
        setIsLoading(false);
      } catch (error) {
        console.log('error');
      }
    }
    getData();
  }, []);

  return (
      <>
        {
          isLoading ?
          <Loading /> :
          <Timeline moments={moments} />
        }
      </>
  );
}
