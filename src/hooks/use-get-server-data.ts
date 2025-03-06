'use client'

import { useState, useEffect, useCallback } from 'react';

const useGetServerData = <T>(fn: () => Promise<T>, initialState: T) => {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState<T>(initialState)
  const [error, setError] = useState<string | null>(null)

  const getData = useCallback(async () => {
    try{
      setIsloading(true)
      const result = await fn()
      setData(result)
      setIsloading(false)
    }catch (error) {
      console.log(error);
      
      setError((error as Error).message)
      setIsloading(false)
    }
  }, [fn])

  const refetch = async () => {
    await getData()
  }

  useEffect(() => {
    getData()
  }, [getData]);

  return {isLoading, refetch, data, error};
};

export default useGetServerData;
