import {AxiosResponse} from 'axios';
import {AxiosRequest, RequestData} from './type';
import api from './api';
import {backend_url} from '@api/config';

export class Transport {
  public static post<Req, Res = RequestData>(
    request: AxiosRequest<Req>,
  ): Promise<AxiosResponse<Res>> {
    const {path} = request;
    return api.get(`${backend_url}/${path}`);
  }
  public static get<Req, Res = RequestData>(
    request: AxiosRequest<Req>,
  ): Promise<AxiosResponse<Res>> {
    const {path} = request;
    return api.get(`${backend_url}/${path}`);
  }
}
