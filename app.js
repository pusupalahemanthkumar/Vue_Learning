// Creating Vue App
const app = Vue.createApp({
    data(){
        return {
            title1: `Learn VueJs`,
            title2: `Master VueJs`,
            vueLink: 'https://vuejs.org/',
            htmlContent: `<h1>HTML CONTENT</h1>`,
            counter:0,
            counter1:0,
            counter2:0,
            name:'',

        }
    },
    methods:{
        dynamicTitle(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.title1;
            }else{
                return this.title2;
            }
        },
        add(){
            this.counter1 = this.counter1 +2;

        },
        reduce(){
            this.counter1 = this.counter1 -2;

        },
        addv(val){
            this.counter2 = this.counter2 +val;

        },
        reducev(val){
            this.counter2 = this.counter2 -val;

        },
        setName(event,suffix){
            this.name = event.target.value + suffix;

        },
        submitForm(event){
            event.preventDefault();
            alert("Testing");
        },

        submitForm1(event){
            alert("Testing-1");
        }
    }
});


app.mount('#app');