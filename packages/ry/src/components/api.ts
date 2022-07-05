import http from '@/service/http';

export const searchContent = async (type: string = 'fiction', keyword: string = ''): Promise<any> => {
  // 默认只支持搜索名称前30条
  return await http.get(`/joy/${type}/search/title/${keyword}/1/30`)
}