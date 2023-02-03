export default{
    template : `
        <button class="bg-gray-200 hover:bg-gray-400 rounded px-5 py-2" :disable="processing" @click="buttonDisable"> <slot />  </button>
    `,
    data() {
        return {
            processing : false
        }
    },
    methods : {
        buttonDisable (){
            this.processing = true
        }
    }
}