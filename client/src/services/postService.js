import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/posts';

//const baseUrl = 'http://localhost:3030/jsonstore/posts';

// return result of request as Array , all posts
export const getAll = async () => {

    try {
        const result = await request.get(baseUrl);

        return result;
        // return Object.values(result);

    } catch (error) {
        throw new Error('Get all posts faild');
    }
};

// return result of request as object , one post with postId
export const getOne = async (postId) => {
    try {
        const result = await request.get(`${baseUrl}/${postId}`,);

        return result;

    } catch (error) {
        throw new Error(`Get post with id ${postId} failed`);
    }
};

export const getTopThree = async () => {
    const query = new URLSearchParams({
        // sortBy:`_createdOn desc`,
        offset: 0,
        pageSize: 3,
    });

    try {

        const result = await request.get(`${baseUrl}?${query}`);

        return result;

    } catch (error) {
        throw new Error('Get Top posts failed');
    };
};



// return result of request for Created object on the server
export const create = async (postData) => {
    try {
        const result = await request.post(baseUrl, postData)

        return result;

    } catch (error) {
        throw new Error('Create post failed');
    }
};

export const edit = async (postId, postData) => {
    try {
        const result = await request.put(`${baseUrl}/${postId}`,postData);

        return result;

    } catch (error) {
        throw new Error('Edit post failed');
    }

};

export const remove = async (postId) => request.remove(`${baseUrl}/${postId}`);