import type { AxiosError } from 'axios';
import axios from 'axios';
import { createQuery } from 'react-query-kit';
import { bearerToken } from './api-provider';
import { EventItemsMain } from '~/types/type';


type Response = EventItemsMain[];
type Variables = void;

export const useGetEventItems = createQuery<Response, Variables, AxiosError>({
  queryKey: ['event-items'],
  fetcher: async() => {
    const url = 'http://ec2-35-78-87-126.ap-northeast-1.compute.amazonaws.com:8080/event/items';
    const response = await axios.get(url, {
      headers: {
        Authorization: bearerToken,
      }
    })

    return response.data;
  },
});
