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


// const getProfileInfo = (id: number) => {
//     return apiGetRequest('getProfileInfo' + 1 + '.json').then((data: any) => {
//         return data.data;
//     });
// };
//
// const getSections = () => {
//     return apiGetRequest('getSections.json').then((data: any) => {
//         return data.data;
//     });
// };
//
// const getThreads = (id: number) => {
//     return apiGetRequest('getThreads.json').then((data: any) => {
//         return data.data.find((sectionObject: { sectionId: number }) => sectionObject.sectionId === id);
//     });
// };
//
// const getThread = (id: number) => {
//     return apiGetRequest('getThread' + 1 + '.json').then((data: any) => {
//         return data.data;
//     });
// };
//
//
// const getHelpSections = () => {
//     return apiGetRequest('getHelpSections.json').then((data: any) => {
//         return data.data;
//     });
// };
//
// const getHelpThreads = (id: number) => {
//     return apiGetRequest('getHelpThreads.json').then((data: any) => {
//         return data.data.find((sectionObject: { sectionId: number }) => sectionObject.sectionId === id);
//     });
// };
//
// const getHelpThread = (id: number) => {
//     return apiGetRequest('getHelpThread' + 1 + '.json').then((data: any) => {
//         return data.data;
//     });
// };


export default {
    getRandomJoke
};