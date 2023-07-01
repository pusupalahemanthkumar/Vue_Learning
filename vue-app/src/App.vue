<template>
  <header>
    <h1>{{ title }}</h1>
  </header>

  <div class="contacts">
    <friend-contact
      v-for="friend in friends"
      :id="friend.id"
      :key="friend.id"
      :name="friend.name"
      :phone-number="friend.phone"
      :email-address="friend.email"
      :is-favorite="friend.isFavorite"
      @toggle-favorite="toggleFavoriteStatus"
    ></friend-contact>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: `Vue CLI Project`,
      friends: [
        {
          id: "HEMANTH",
          name: "HEMANTH",
          phone: "123456788",
          email: "hemanth@gmail.com",
          isFavorite: true,
        },
        {
          id: "Jhon",
          name: "JHON !!",
          phone: "123456788",
          email: "jhon@gmail.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      console.log(friendId);
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
header {
  padding: 1rem;
  text-align: center;
  background-color: rgb(70, 172, 70);
}
header h1 {
  color: #f4f4f4;
}
.contacts {
  margin: 3rem auto;
  max-width: 1000px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
