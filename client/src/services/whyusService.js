import * as request from '../lib/request';

const baseUrl = 'http://localhost:3030/data/services';

//const baseUrl = 'http://localhost:3030/jsonstore/services';

// return result of request as Array , all services
export const getAll = async () => {

    try {
        const result = await request.get(baseUrl);

        return result;
        // return Object.values(result);

    } catch (error) {
        throw new Error('Get all services faild');
    }
};

// return result of request as object , one post with postId
export const getOne = async (serviceId) => {
    try {
        const result = await request.get(`${baseUrl}/${serviceId}`,);

        return result;

    } catch (error) {
        throw new Error(`Get post with id ${serviceId} failed`);
    }
};

export const getTopThree = async () => {
    const query = new URLSearchParams({
       // where : `category="Документи"`,
        //sortBy:`_createdOn%20desc`,

        offset: 0,
        pageSize: 3,
    });

    try {

        const result = await request.get(`${baseUrl}?${query}`);

        return result;

    } catch (error) {
        throw new Error('Get Top services failed');
    };
};


