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

// return result of request for Created object on the server
export const create = async (postData) => {
    try {
        const result = await request.post(baseUrl, postData)
        return result;

    } catch (error) {
        throw new Error('Create post failed');
    }
};