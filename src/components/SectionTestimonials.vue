<template>
  <div class="testimonials">
    <h2 class="testimonials__title">Testimonials</h2>
    <div class="testimonials__content">
      <div
        class="testimonials__item"
        v-for="dataTestimonial in dataTestimonials"
        :key="dataTestimonial.id"
      >
        <div class="testimonials__info">
          <img class="info__img" :src="dataTestimonial.img" alt="image" />
          <div class="info__name__mail">
            <p class="info__name">{{ dataTestimonial.name }}</p>
            <span class="info__mail">{{ dataTestimonial.mail }}</span>
          </div>
        </div>
        <p class="testimonials__comment">{{ dataTestimonial.comment }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["dataTestimonials"]),
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
@import "@/assets/css/common.scss";
.testimonials {
  margin-block: 80px 105px;
  .testimonials__title {
    @include styleFont(700, 48px, #000000, 64px);
    text-align: center;
    margin-bottom: 80px;
  }
}
.testimonials__content {
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  gap: 20px;
  .testimonials__item {
    background: #ffffff;
    border: 1px solid #d6bcfa;
    border-radius: 10px;
    padding: 24px;
    &:nth-child(3n + 5) {
      transform: translateY(-20px);
    }
    &:nth-child(2) {
      margin-bottom: 20px;
    }
    .testimonials__info {
      display: flex;
      justify-content: left;
      align-items: center;
      .info__name__mail {
        margin-left: 10px;
        .info__name {
          @include styleFont(500, 16px, #000000, 20px);
        }
        .info__mail {
          @include styleFont(400, 16px, #000000, 24px);
        }
      }
    }
    .testimonials__comment {
      @include styleFont(400, 16px, #532c59, 24px);
      margin-top: 20px;
    }
  }
}
// reponsive
@media (max-width: 960px) {
  .testimonials__content {
    grid-template-columns: auto auto;
    .testimonials__item {
      &:nth-child(3n + 5) {
        transform: translateY(0px);
      }
      &:nth-child(2) {
        margin-bottom: 0px;
      }
    }
  }
}
@media (max-width: 620px) {
  .testimonials .testimonials__title{
    margin-bottom: 40px;
}
  .testimonials__content {
    grid-template-columns: auto;
    .testimonials__item .testimonials__info{
    justify-content: center;
}
  }
  
}
@media (max-width: 576px){
    .testimonials {
    margin-block: 50px;
}
  }
  .testimonials__content .testimonials__item .testimonials__info .info__name__mail .info__name{
    font-size: 20px;
}
.testimonials__content .testimonials__item .testimonials__info .info__name__mail .info__mail {
    font-size: 20px;
}
.testimonials__content .testimonials__item .testimonials__comment{
    font-size: 20px;
}

</style>
