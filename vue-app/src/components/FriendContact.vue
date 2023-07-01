<template>
  <div class="card">
    <h3>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h3>
    <button @click="toggleFavorite">Toggle Favorite</button>
    <button @click="toggleDeatils">{{ detailsAreAvailable ? 'Hide' : 'Show' }} Details</button>
    <div class="moreInfo" v-if="detailsAreAvailable">
      <p><span>Phone : </span> {{ phoneNumber }}</p>
      <p><span>Email : </span> {{ emailAddress }}</p>
    </div>
  </div>
</template>

<script>
export default {
  // props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  props: {
    id:String,
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      required: false,
      default: false,
    //   validator: function (value) {
    //     return value === "1" || value === "0";
    //   },
    },
  },
  emits: ['toggle-favorite'],
  // emits: {
  //   'toggle-favorite': function(id) {
  //     if (id) {
  //       return true;
  //     } else {
  //       console.warn('Id is missing!');
  //       return false;
  //     }
  //   } 
  // },
  data() {
    return {
      detailsAreAvailable: false,
    };
  },
  methods: {
    toggleDeatils() {
      this.detailsAreAvailable = !this.detailsAreAvailable;
    },
    toggleFavorite() {
      console.log('testing')
      this.$emit('toggle-favorite', this.id);
    },
  },
};
</script>

<style>
.card {
  width: 50%;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}
.card h3 {
  text-align: center;
}
.card button {
  margin: 1rem 0;
  padding: 0.7rem 0rem;
  background-color: rgb(54, 194, 117);
  border: none;
  border-radius: 10px;
  color: #fff;
}
.card .moreInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card .moreInfo p {
  margin-bottom: 0.5rem;
  color: #968d8dcc;
}
.card .moreInfo p span {
  color: rgb(25, 213, 28);
}
</style>
