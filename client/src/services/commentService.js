import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';


export const getAll = async (postId) => {
    try {
        const query = new URLSearchParams({
            where: `postId="${postId}"`,
            load: `owner=_ownerId:users`,
        });

        const result = await request.get(`${baseUrl}?${query}`);

        return result;

        //return result.filter(comment => comment.postId === postId);
        //return Object.values(result).filter(comment => comment.postId === postId);

    } catch (error) {
        throw new Error(`Get all comments for postId ${postId} failed`);

    }
};

export const create = async (postId, text) => {
    try {

        const newComment = await request.post(baseUrl, {
            postId,          
            text,
        });

        return newComment;

    } catch (error) {
        throw new Error(`Create comment for postId ${postId}  failed `);

    }
};