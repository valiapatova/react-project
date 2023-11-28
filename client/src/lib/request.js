
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
    const token = localStorage.getItem('accessToken');

    if (token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        };
    }

    console.log('Options:');
    console.log(options); 
     
    return options;
};


// async function - request /fetch/ data to server and return response object in result. 
// have parameters method,url,data

const request = async (method, url, data) => {

    const response = await fetch(url, {
        ...buildOptions(data),
        method,
    });


    // 204- None content

    if (response.status === 204) {
        return {};
    };

    const result = await response.json();


    if (!response.ok) {
        throw result;
    }

    return result;

};

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const remove = request.bind(null, 'DELETE');
export const patch = request.bind(null, 'PATCH');




