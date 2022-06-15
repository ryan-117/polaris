import http from '@/service/http';

export const searchContent = (type: string = 'fiction', keyword: string = ''): Promise<any> => {
  return http.get(`/joy/${type}/${keyword}`)
}