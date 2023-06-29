// Creating Vue App
const app = Vue.createApp({
  data() {
    return {
      name: "",
      fullName: "",
    };
  },
  watch: {
    name(newValue, oldValue) {
      if (newValue === "") {
        this.fullName = "";
      } else {
        // this.fullName = this.name + " " + "TESTING !!!!";
        this.fullName = newValue + " " + "TESTING !!!!";
      }
    },
  },
  computed: {
    // fullName(){
    //     if(this.name === ''){
    //         return '';
    //     }
    //     return this.name + "TESTING!!";
    // }
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    resetName() {
      this.name = "";
    },
  },
});

app.mount("#app");
