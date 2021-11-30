import { ref } from 'vue';
import { ipListApi } from '@/composables/api';
const getMseIpLists = () => {
    const progress = ref(1)
    const ipList = ref([])
    const error = ref(null)
    const load = async () => {
        try {
            await waitUntil(progress, 50)
            let response = await ipListApi()
            if (response.status >= 500) {
                throw new Error('Opps! server have some problms.')
            }
            await waitUntil(progress, 100)
            ipList.value = response.data
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
            }, 2);
        });
    }
    return { progress, ipList, error, load }
}

export default getMseIpLists