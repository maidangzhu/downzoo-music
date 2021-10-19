import {networkService} from "./config";

export const getBannerRequest = () => {
  return networkService.get('/banner');
}

export const getRecommendListRequest = () => {
  return networkService.get('/personalized');
}

export const getHotSingerListRequest = (count) => {
  return networkService.get(`/top/artists?offset=${count}`);
}

export const getSingerListRequest = (category, alpha, count) => {
  return networkService.get(`/artist/list?cat=${category}&initial=${alpha.toLowerCase()}&offset=${count}`);
}
