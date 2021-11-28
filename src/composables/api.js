import axios from 'axios';

// 打信到 MSE 的 API
const jobQueueApiInstance = axios.create({
    baseURL: 'http://api.ses.smtp/api/jobQueue',
    headers: { 'Content-Type': 'application/json' },
})

// 取得所有 MSE 機器 IP 列表
const mseIpListApiInstance = axios.create({
    baseURL: 'http://api.ses.smtp/api',
    headers: { 'Content-Type': 'application/json' },
})


export const jobQueueApi = () => jobQueueApiInstance.get()
export const ipListApi = () => mseIpListApiInstance.get('/IPList')

