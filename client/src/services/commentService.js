import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/comments';


export const getAll = async (postId) => {
    try {
        const query = new URLSearchParams({
            where: `postId="${postId}"`,
            load: `owner=_ownerId:users`,
        });

        console.log(`${baseUrl}?${query}`);
        //http://localhost:3030/data/comments?where=postId%3D%2220fa933e-88bd-4097-a714-8431153a9f77%22&load=owner%3D_ownerId%3Ausers

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