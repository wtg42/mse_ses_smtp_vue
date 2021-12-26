import axios from 'axios';

// 取得所有 MSE 機器 IP 列表
const apiInstance = axios.create({
    baseURL: 'http://api.ses.smtp/api',
    headers: { 'Content-Type': 'application/json' },
})

// 打信到 MSE 的 API from, to, subject, ip, content
export const sendMailApi = data => apiInstance.post('/sendMail', data)

// 取得所有 MSE 機器 IP 列表
export const ipListApi = () => apiInstance.get('/IPList')

// 新增打信到 MSE 機器的 IP
export const addIpListApi = data => apiInstance.post('/IPList', data)
