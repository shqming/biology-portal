import HttpService from './httpService';

const baseUrl = 'download';

export default class Download {
  // 分页查询下载文件列表
  static getPageList(params) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/genome`,
      params,
    };
    return HttpService.request(config);
  }

  // 下载某个文件
  static downloadFile(params) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/file`,
      params,
    };
    return HttpService.request(config);
  }
}
