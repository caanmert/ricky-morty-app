import axiosConfig from '../configs/axiosConfig';

const getAllEpisodesByPage = (page: number) => {
  return axiosConfig.get('/episode?page=' + page);
};

const getEpisodeDetails = (episodeId: number) => {
  return axiosConfig.get('/episode/' + episodeId);
};

export {getAllEpisodesByPage, getEpisodeDetails};
