import HttpService from './httpService';

const baseUrl = 'gene';

// http://124.71.211.200:8084/v1/gene/allList?page=2

// http://124.71.211.200:8084/v1/gene/search?genomeVersionID=2022021721001&geneName=LR75A&page=1

export default class Gene {
  // 分页查询基因的所有列表
  static allList(params) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/allList`,
      params,
    };
    return HttpService.request(config);
  }

  // 分页查询基因组某个基因
  static search(params) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/search`,
      params,
    };
    return HttpService.request(config);
  }
}
