import {AxiosRequestConfig} from 'axios';

export type RequestData = Record<string, any>;
export interface AxiosRequest<T = RequestData> {
  path: string;
  data?: T;
  query?;
  config?: AxiosRequestConfig;
}
