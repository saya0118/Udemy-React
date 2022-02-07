import axios from 'axios';

const KEY = 'AIzaSyCcEEQ7KRk1AmOwXnnLr8x49fNi_P74scY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/search',
    params:{
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
});