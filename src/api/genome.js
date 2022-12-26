import HttpService from './httpService';

const baseUrl = 'genome';

export default class Genome {
  // 基因组列表
  static list() {
    const config = {
      method: 'GET',
      url: `${baseUrl}/list`,
    };
    return HttpService.request(config);
  }

  // 查询一个基因组详情
  static genomeDetail(id) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/introduction?genomeVersionID=${id}`,
    };
    return HttpService.request(config);
  }

  // 查询一个基因组染色体列表
  static getGenomeChrList(id) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/genomeChrList`,
      params: {
        genomeVersionID: id,
      },
    };
    return HttpService.request(config);
  }
}
