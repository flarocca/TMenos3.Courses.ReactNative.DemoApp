import axiosWrapper from './axiosWrapper';

export default {
    getAll: page => axiosWrapper.get(`images?page=${page || 1}`),
    get: id => axiosWrapper.get(`images/${id}`),
};
