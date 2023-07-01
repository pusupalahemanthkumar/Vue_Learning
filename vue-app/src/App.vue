<template>
  <header>
    <h1>{{title}}</h1>
  </header>

    <div class="contacts">
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>

    </div>


</template>

<script>
export default {
  data(){
    return {
      title : `Vue CLI Project`
    }
  }
}

</script>



<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
header{
  padding: 1rem;
  text-align: center;
  background-color: rgb(70, 172, 70);
}
header h1{
  color: #f4f4f4;
}
.contacts{
  margin: 3rem auto;
  max-width: 1000px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>