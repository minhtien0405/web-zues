<template>
  <div class="partner">
    <ul class="partner__list">
      <li class="partner__item">
        <a class="partner__link" href="#"
          ><img src="@/assets/images/logo-logoipsum.png" alt="logo partner"
        /></a>
      </li>
      <li class="partner__item">
        <a class="partner__link" href="#"
          ><img src="@/assets/images/logo-logoipsum1.png" alt="logo partner"
        /></a>
      </li>
      <li class="partner__item">
        <a class="partner__link" href="#"
          ><img src="@/assets/images/logo-logoipsum2.png" alt="logo partner"
        /></a>
      </li>
      <li class="partner__item">
        <a class="partner__link" href="#"
          ><img src="@/assets/images/logo-partner.png" alt="logo partner"
        /></a>
      </li>
      <li class="partner__item">
        <a class="partner__link" href="#"
          ><img src="@/assets/images/logo-logoipsum4.png" alt="logo partner"
        /></a>
      </li>
      <li class="partner__item">
        <a class="partner__link" href="#"
          ><img src="@/assets/images/logo-logoipsum3.png" alt="logo partner"
        /></a>
      </li>
    </ul>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@import '@/assets/css/common.scss';
.partner {
  padding-block: 40px;
  .partner__list {
    @include display(flex, stretch, space-between);
    flex-wrap: wrap;
  }
}
// reponsive
@media (max-width: 1200px){
  .partner .partner__list{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    text-align: center;
}
}
@media (max-width: 576px){
  .partner{
    padding-block: 0px;
    margin-block: 50px;
}
  .partner .partner__list{
    grid-template-columns: 1fr 1fr;
}
}
@media (max-width: 375px){
  .partner .partner__list{
    grid-template-columns: 1fr;
}
}
</style>
