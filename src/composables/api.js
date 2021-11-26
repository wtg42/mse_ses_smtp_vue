import axios from 'axios';

const jobQueueApiInstance = axios.create({
    baseURL: 'http://api.ses.smtp/api/',
    headers: { 'Content-Type': 'application/json' },
})
export const jobQueueApi = () => jobQueueApiInstance.get('/jobQueue')
