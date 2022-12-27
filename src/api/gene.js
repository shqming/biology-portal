import HttpService from './httpService';

const baseUrl = 'gene';

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

  // 查询某基因简要信息
  static information(params) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/annotation/information`,
      params,
    };
    return HttpService.request(config);
  }

  // 查询基因序列
  static sequences(params) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/annotation/sequences`,
      params,
    };
    return HttpService.request(config);
  }

  // 查询基因外显子结构
  static structure(params) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/annotation/structure`,
      params,
    };
    return HttpService.request(config);
  }

  // 查询基因注释连接
  static annotation(params) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/annotation/annotation`,
      params,
    };
    return HttpService.request(config);
  }

  // 查询基因文章信息
  static articles(params) {
    const config = {
      method: 'GET',
      url: `${baseUrl}/annotation/articles`,
      params,
    };
    return HttpService.request(config);
  }
}
