import { ref } from 'vue';

const getMseIpLists = () => {
    const progress = ref(1)
    const ipList = ref([])
    const error = ref(null)
    const load = async () => {
        try {
            await waitUntil(progress, 50)
            let data = await fetch('http://api.ses.smtp/api/IPList')
            if (data.status >= 500) {
                throw new Error('Opps! Data not found.')
            }
            await waitUntil(progress, 100)
            if (!data.ok) {
                let mess = await data.json()
                error.value = mess[0]
            } else {
                ipList.value = await data.json()
            }
        } catch (err) {
            error.value = err.message
        }
    }
    async function waitUntil(progressVal, goal) {
        return new Promise(resolve => {
            const interval = setInterval(() => {

                progressVal.value += 1
                if (progressVal.value >= goal) {
                    resolve('foo');
                    clearInterval(interval);
                };
            }, 5);
        });
    }
    return { progress, ipList, error, load }
}

export default getMseIpLists