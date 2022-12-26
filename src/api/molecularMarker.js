import HttpService from './httpService';

const baseUrl = 'MolecularMarker';

// http://124.71.211.200:8084/v1/MolecularMarker/info?genomeVersionID=2022021721001&typeID=1&page=1

export default class MolecularMarker {
  // 查询某一个基因组中分子标记类型列表
  static getTypeList(genomeId) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/typeList`,
      params: {
        genomeVersionID: genomeId,
      },
    };
    return HttpService.request(config);
  }

  // 查询某一个基因组中分子标记类型列表
  static getPageList(params) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/info`,
      params,
    };
    return HttpService.request(config);
  }
}
