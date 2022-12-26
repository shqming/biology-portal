import HttpService from './httpService';

const baseUrl = 'variation';

export default class Variation {
  // 分页查询变异位点详情
  static svSearch(params) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/svSearch`,
      data: params,
    };
    return HttpService.request(config);
  }

  // 分页查询变异位点
  static svAllList(params) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/svAllList`,
      params,
    };
    return HttpService.request(config);
  }
}
