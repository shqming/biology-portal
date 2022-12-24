import HttpService from './httpService';

const baseUrl = 'genome/';

export default class Genome {
  // 基因组列表
  static list() {
    const config = {
      method: 'GET',
      url: `${baseUrl}list`,
    };
    return HttpService.request(config);
  }

  // 查询一个基因组详情
  static genomeDetail(id) {
    const config = {
      method: 'GET',
      url: `${baseUrl}${id}`,
    };
    return HttpService.request(config);
  }

  // 退出
  // public static logout () {
  //   const config: AxiosRequestConfig = {
  //     method: 'POST',
  //     url: `${usercenter}/logout`,
  //   };
  //   return HttpService.request(config);
  // }

  // // 获取路由
  // public static getRouters () {
  //   const config: AxiosRequestConfig = {
  //     method: 'GET',
  //     url: `${usercenter}/getRouters`,
  //   };
  //   return HttpService.request(config);
  // }

  // // 根据字典类型查询字典数据信息
  // public static getDicts (data: any) {
  //   const config: AxiosRequestConfig = {
  //     method: 'GET',
  //     url: system.getDicts + data,
  //   };
  //   return HttpService.request(config);
  // }
}
