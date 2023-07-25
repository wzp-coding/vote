import axios, {
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

// 创建一个自定义的Axios实例
const http = axios.create({
  baseURL: "https://api.example.com", // 设置API的基础URL
  timeout: 5000, // 设置请求超时时间
});

// 添加请求拦截器
http.interceptors.request.use(
  (config: InternalAxiosRequestConfig<any>) => {
    // 在请求发送前，可以在这里对config进行处理，例如添加token等
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  (response: AxiosResponse) => {
    // 在这里对响应数据进行处理，例如提取data字段
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default http;
