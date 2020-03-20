/*
 * @Date: 2020-03-19 15:07:34
 * @LastEditors: Pluto
 * @LastEditTime: 2020-03-20 11:37:22
 */
import chiliReqBase from "chili-request";

export const baseConfig = {
  baseURL: 'https://music-api.apluto.cn',
  interceptorReq: (request: any) => {
    console.log(request)
    return {
      ...request,
      withCredentials: true
    };
  },
  interceptorRes: (res: any) => {
    console.log(res)
    return res;
  }
};

const chiliReq = chiliReqBase(baseConfig);

export default chiliReq;
