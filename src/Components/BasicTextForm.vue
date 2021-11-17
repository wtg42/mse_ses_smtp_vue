    <template>
<div id="nesscss">
    <form @submit.prevent="handleSubmit()">
    <div class="nes-container with-title mx-20 mt-10 mb-10">
        <h3 class="title">Send Mail With Basic Text</h3>
        <label for="ip_selector"></label>
        <div class="nes-field nes-select">
            <select name="ip_selector" id="ip_selector" v-model="selected">
                <option v-for="ip in ipList" :key="ip.id">{{ ip.name }}</option>
            </select>
        </div>
        <div class="nes-field mt-10">
            <label for="mail_field">Sender Email:</label>
            <input type="text" id="mail_field" class="nes-input" :placeholder="senderEmail" v-model="senderEmail">
        </div>
        <div class="nes-field mt-10">
            <label for="receiver_field">Receiver Email:</label>
            <input type="text" id="receiver_field" class="nes-input" :placeholder="receiverEmail" v-model="receiverEmail">
        </div>
        <div class="nes-field mt-10">
            <label for="subject_field">Receiver Email:</label>
            <input type="text" id="subject_field" class="nes-input" :placeholder="subject" v-model="subject">
        </div>
        <div class="nes-field mt-10">
            <label for="contents_field">Subject:</label>
            <textarea class="nes-textarea" name="contents_field" id="contents_field" cols="30" rows="10" :placeholder="contents" v-model="contents"></textarea>
        </div>
        <div class="nes-field mt-10 flex justify-evenly">
            <button type="submit" class="nes-btn is-primary">Send It</button>
            <button type="reset" class="nes-btn is-warning">Clean Up</button>
        </div>
    </div>
    </form>
</div>

</template>

<script>
import { ref } from "vue";

export default {
  props:['ipList'],
  setup(props) {
    const senderEmail = ref("weitingshih@softnext.com.tw")
    const receiverEmail = ref("weitingshih@rd01.softnext.com.tw")
    const subject = ref("test mail")
    const contents = ref("this is default contents.")
    const selected = ref(props.ipList[0].name) // ip default selected binding.

    const formData = ref({
        senderEmail: String,
        receiverEmail: String,
        subject: String,
        contents: String,
        selected: String,
    })
    const handleSubmit = function() {
        console.log('handleSubmit')
    }
    return {
        senderEmail,
        receiverEmail,
        subject,
        contents,
        selected,
        formData,
        handleSubmit,
    }
  },
  data() {
    return {

    };
  },
};
</script>

<style scope>
/* @import '/css/nes.min.css'; */
</style>
