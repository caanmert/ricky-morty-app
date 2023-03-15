import axiosConfig from '../configs/axiosConfig';

export const getAll = () => axiosConfig.get('/episode');
