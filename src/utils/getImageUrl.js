import { baseUrl } from '../redux/features/baseApi';

const getImageUrl = (url) => {
        if (url.startsWith('http')) {
                return url;
        } else {
                return `${baseUrl}${url}`;
        }
};

export default getImageUrl;
