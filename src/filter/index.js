// 全局过滤器
import Vue from 'vue';
import store from '@/store';

// 根据基因组id查基因组名称
const getGenomeName = function (id) {
  const { genomeList } = store.state;
  const genome = genomeList.find((item) => item.gnome_version_id === id);
  return genome ? genome.gnome_species_name : '';
};

Vue.filter('getGenomeName', getGenomeName);
