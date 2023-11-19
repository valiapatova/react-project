
// prepare body and headers for get(is empty object),post,put,patch methods from data
const buildOptions = (data) => {
    const options = {};

    if (data) {
        // need of post,put,patch methods
        options.body = JSON.stringify(data);
        options.headers = {
            'content-type': 'application/json'
        };
    }
    return options;
};

// async function - request /fetch/ data to server and return response object in result. 
// have parameters method,url,data

const request = async (method, url, data) => {
    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });

    const result = await response.json();
    return result;
};

export const get =request.bind(null,'GET');
export const post=request.bind(null,'POST');
export const put=request.bind(null,'PUT');
export const remove=request.bind(null,'DELETE');
export const patch = request.bind(null,'PATCH');




