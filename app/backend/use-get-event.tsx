import type { AxiosError } from "axios";
import axios from "axios";
import { createQuery } from "react-query-kit";
import { Events } from "~/types/type";
import { bearerToken } from './api-provider';

type Response = Events[];
type Variables = void;

export const useGetEvents = createQuery<Response, Variables, AxiosError>({
  queryKey: ["event-details"],
  fetcher: async () => {
    const url =
      "http://ec2-35-78-87-126.ap-northeast-1.compute.amazonaws.com:8080/event/events";
 
    const response = await axios.get(url, {
      headers: {
        Authorization: bearerToken,
      },
    });
    return response.data;
  },
});
