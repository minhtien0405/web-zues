<template>
  <div class="banner-footer">
    <div class="banner-footer__content">
      <h1 class="content__title">Ready to sell your NFTs?</h1>
      <p class="content__desc">
        Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
        feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna
        semper orci a tincidunt.
      </p>
      <button class="btn__sell">Sell right now</button>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
@import "@/assets/css/common.scss";

.banner-footer {
  text-align: center;
  background: url("@/assets/images/banner.png") #9dc08b no-repeat;
  background-size: 100%;
  padding: 140px 290px;
  margin-block: 80px;
}
.banner-footer__content {
  .content__title {
    @include styleFont(700, 80px, #000000, 96px);
    margin-bottom: 32px;
  }
  .content__desc {
    @include styleFont(400, 16px, #532c59, 24px);
    margin-bottom: 32px;
  }
  .btn__sell {
    border: none;
    @include button();
    cursor: pointer;
    transition: transform 0.2s;
    &:hover {
      transform: scale(1.1);
    }
  }
}
// reponsive
@media (max-width: 1200px){
  .banner-footer{
    padding: 140px 160px;
}
}
@media (max-width: 960px){
  .banner-footer{
    padding: 46px 15px;
}
}
@media (max-width: 576px){
  .banner-footer{
    margin-block: 50px;
  }
  .banner-footer__content .content__title{
    font-size: 54px;
    line-height: 65px;
  }
  .banner-footer__content .content__desc{
    font-size: 20px;
}
  .banner-footer__content .btn__sell{
    font-size: 20px;
}
}
</style>
