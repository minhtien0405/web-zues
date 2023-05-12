<template>
  <div class="banner">
    <h1 :class="['banner__title', {active: isActive}]">Create & sell your NFTs today</h1>
    <p class="banner__desc">
      Velit, odio bibendum eu, viverra sit laoreet posuere. Ut scelerisque
      posuere massa amet. Ornare lacinia vitae at vestibulum morbi. Volutpat
      libero curabitur feugiat risus dui pulvinar. Elementum.
    </p>
    <button class="btn btn__sell">Let's sell</button>
  </div>
</template>

<script>
  export default{
    data(){
        return{
            isActive: false
        }
    },
    methods:{
        active(){
            this.isActive = !this.isActive
        }
    }
  }
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
@import "@/assets/css/common.scss";
.banner {
  text-align: center;
  background: url("@/assets/images/banner.png") #d7e9b9 no-repeat;
  background-size: 100%;
  padding: 140px 290px;
  .banner__title {
    @include styleFont(700, 80px, #000000, 96px);
    margin-bottom: 32px;
  }
  .banner__desc {
    @include styleFont(400, 16px, #532c59, 24px);
    margin-bottom: 32px;
  }
  .btn__sell {
    @include button();
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
    border: none;
  }
}

// reponsive
@media (max-width: 1345px){
  .banner{
    padding: 140px 235px;
}
}
@media (max-width: 1235px){
  .banner{
    padding: 100px 100px;
}
}
@media (max-width: 960px){
  .banner{
    padding: 20px 15px;
}
}
</style>
