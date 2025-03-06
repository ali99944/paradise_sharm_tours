'use client'

import { useState, useCallback } from 'react';

const useServerAction = <T, P>(fn: (params: P) => Promise<T>) => {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);

  const mutation = useCallback(
    async (
      params: P,
      callbacks?: {
        onSuccess?: (data: T) => void,
        onFailure?: (error: string) => void
      }
    ) => {
      try {
        setIsloading(true);
        const result = await fn(params);
        setData(result);
        setIsloading(false);
        callbacks?.onSuccess?.(result);
      } catch (error) {
        const errorMessage = (error as Error).message;
        setError(errorMessage);
        setIsloading(false)
        callbacks?.onFailure?.(errorMessage);
      }
    },
    [fn]
  );

  return { isLoading, mutation, data, error };
};

export default useServerAction;

