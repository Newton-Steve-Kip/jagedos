import axios, { AxiosRequestConfig } from 'axios';
import { BASE_URL } from './axios';

type RequestMethod = 'GET' | 'POST' | 'PATCH';

interface RequestOptions {
  method: RequestMethod;
  endpoint: string;
  data?: object;
  headers?: object;
}

const apiRequest = async (options: RequestOptions) => {
  const { method, endpoint, data, headers } = options;

  const config: AxiosRequestConfig = {
    method: method.toLowerCase(),
    url: `${BASE_URL}${endpoint}`,
    headers: {
      Authorization: 'Basic c2Vja190ZXN0X3dha1dBNDFyQlRVWHMxWTVvTlJqZVk1bzo=',
      ...headers,
    },
  };

  if (method === ('POST' || 'PATCH')) {
    config.data = data;
  }

  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    console.error(`${method} request to ${endpoint} failed:`, error);
    throw error;
  }
};

export default apiRequest;
