import axiosClient from './axiosClient';

const categoryApi = {
    getAll(params){
        const url = '/categoris';
        return axiosClient.get(url, {params});
    },

    get(id){
        const url = `/categoris/${id}`;
        return axiosClient.get(url);
    },

    add(data){
        const url = '/categoris';
        return axiosClient.post(url, data);
    },

    update(data){
        const url = `/categoris/${data.id}`;
        return axiosClient.patch(url, data);
    },

    remove(id){
        const url = `/categoris/${id}`;
        return axiosClient.delete(url);
    }

};

export default categoryApi;