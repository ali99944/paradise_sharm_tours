import {
  useQuery,
  useMutation,
  useQueryClient,
  UseQueryOptions,
  UseMutationOptions,
  QueryKey,
  UseQueryResult,
} from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useAxios } from "./axios";

// Generic type for response data structure
type ApiData<T> = {
  data: T;
  limit: number;
  page: number;
  total: number;
};

export type TApiError = {
  data: string;
  statusCode: number;
  message: string;
  response: {
    data: {
      data: string;
      message: string;
      statusCode: number;
    };
    statusCode: number;
    message: string;
  };
};

type TApiSuccess<T> = {
  data: T;
  success: boolean;
  message: string;
};

// Hook options types
interface QueryProps<TData> {
  key: QueryKey;
  url: string;
  options?: Omit<
    UseQueryOptions<ApiData<TData>, Error>,
    "queryKey" | "queryFn"
  >;
  onErrorCallback?: (error: AxiosError) => void;
}

// Hook options types
interface MutationProps<TData = unknown, TVariables = void> {
  method: "post" | "put" | "delete" | "patch";
  url: string;
  onSuccessMessage?: string;
  key?: QueryKey;
  options?: UseMutationOptions<TApiSuccess<TData>, AxiosError, TVariables>;
  headers?: object;
  contentType?: "aplication/json" | "multipart/form-data";
  onErrorCallback?: (error: AxiosError) => void;
  onSuccessCallback?: (data: TApiSuccess<TData>) => void;
}

// GET Query Hook
export function useGetQuery<TData = unknown>({
  key,
  url,
  options = {},
}: QueryProps<TData>): UseQueryResult<ApiData<TData>, Error> {
  const axios = useAxios();

  const queryOptions: UseQueryOptions<ApiData<TData>, Error> = {
    queryKey: key,
    queryFn: async () => {
      const response = await axios.get<ApiData<TData>>(url);
      return response.data;
    },
    ...options,
  };

  return useQuery<ApiData<TData>>(queryOptions);
}

function useCustomMutation<TData, TVariables>(
  mutationFn: (values: TVariables) => Promise<TApiSuccess<TData>>,
  {
    key,
    onSuccessCallback,
    onErrorCallback,
    options,
  }: MutationProps<TData, TVariables>
) {
  const queryClient = useQueryClient();

  const mutation = useMutation<TApiSuccess<TData>, AxiosError, TVariables>({
    mutationFn,
    onSuccess: async (data) => {
      if (key) {
        await queryClient.invalidateQueries({ queryKey: key });
      }

      if (onSuccessCallback) {
        onSuccessCallback(data);
      }
    },

    onError: (error: AxiosError) => {
      onErrorCallback?.(error);
    },
    ...options,
  });

  return mutation;
}

// Mutation Hook
export function useMutationAction<TData = unknown, TVariables = unknown>(
  props: MutationProps<TData, TVariables>
) {
  const axios = useAxios(props.contentType);

  return useCustomMutation<TData, TVariables>(
    async (values: TVariables): Promise<TApiSuccess<TData>> => {
      const response = await axios[props.method]<TApiSuccess<TData>>(
        props.url,
        values,
        { headers: props.headers }
      );

      return response.data;
    },
    props
  );
}
