import axios from 'axios';

const endPointStub = '../assets/stub/';
const randomFaceUrl = 'thisPersondoesnotexist.com/image';
const chuckNorrisJokeUrl = 'https://api.chucknorris.io/jokes/random';

const apiGetRequest = (url: string) => {
    return axios.get(url);
};

const getRandomFace = () => {
    return axios({
        method: 'GET',
        url: randomFaceUrl,
        responseType: 'stream'
    }).then(stream => {
//fs does not work on client-side
    })
};

const getRandomJoke = () => {
    return axios.get(chuckNorrisJokeUrl).then((data: any) => Promise.resolve(data.data.value));
};

export default {
    getRandomJoke
};