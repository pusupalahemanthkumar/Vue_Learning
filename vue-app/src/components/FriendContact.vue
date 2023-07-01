<template>
    <div class="card">
        <h3>{{ friend.name }}</h3>
        <button @click="toogleDeatils">Show Details</button>
        <div class="moreInfo" v-if="detailsAreAvailable">
            <p><span>Phone : </span> {{ friend.phone }}</p>
            <p><span>Email : </span> {{ friend.email }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            detailsAreAvailable : false,
            friend: {
                id: "Hemanth",
                name : 'Hemanth',
                phone : '12344 5677',
                email : "hemanth@gmail.com"
            }
        }
    },
    methods: {
        toogleDeatils(){
            this.detailsAreAvailable = !this.detailsAreAvailable;
        }
    }
}

</script>

<style>
.card{
    width: 50%;
    display: flex;
    flex-direction: column;
    background: #f4f4f4;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}
.card h3{
    text-align: center;
}
.card button{
    margin: 1rem 0;
    padding: 0.7rem 0rem;
    background-color: rgb(54, 194, 117);
    border: none;
    border-radius: 10px;
    color:#fff;
}
.card .moreInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.card .moreInfo p{
    margin-bottom: 0.5rem;
    color: #968d8dcc;
}
.card .moreInfo p span{
    color:rgb(25, 213, 28);
}



</style>