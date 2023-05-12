<template>
  <div class="slide-container">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            class="swiper-img"
            src="@/assets/images/img-slide01.jpeg"
            alt="image slide"
          />
          <div class="swiper-content">
            <h1 class="content-title">NFTs today</h1>
            <p class="content-desc">
              Velit, odio bibendum eu, viverra sit laoreet posuere. Ut
              scelerisque posuere massa amet. Ornare lacinia vitae at vestibulum
              morbi. Volutpat libero curabitur feugiat risus dui pulvinar.
              Elementum. Velit, odio bibendum eu, viverra sit laoreet posuere.
              Ut scelerisque posuere massa amet. Ornare lacinia vitae at
              vestibulum morbi. Volutpat libero curabitur feugiat risus dui
              pulvinar. Elementum
            </p>
            <button class="btn btn-sell">Let's sell</button>
          </div>
        </div>
        <div class="swiper-slide">
          <img
            class="swiper-img"
            src="@/assets/images/img-slide02.jpeg"
            alt="image slide"
          />
          <div class="swiper-content">
            <h1 class="content-title">NFTs today</h1>
            <p class="content-desc">
              Velit, odio bibendum eu, viverra sit laoreet posuere. Ut
              scelerisque posuere massa amet. Ornare lacinia vitae at vestibulum
              morbi. Volutpat libero curabitur feugiat risus dui pulvinar.
              Elementum. Velit, odio bibendum eu, viverra sit laoreet posuere.
              Ut scelerisque posuere massa amet. Ornare lacinia vitae at
              vestibulum morbi. Volutpat libero curabitur feugiat risus dui
              pulvinar. Elementum
            </p>
            <button class="btn btn-sell">Let's sell</button>
          </div>
        </div>
        <div class="swiper-slide">
          <img
            class="swiper-img"
            src="@/assets/images/img-slide03.jpeg"
            alt="image slide"
          />
          <div class="swiper-content">
            <h1 class="content-title">NFTs today</h1>
            <p class="content-desc">
              Velit, odio bibendum eu, viverra sit laoreet posuere. Ut
              scelerisque posuere massa amet. Ornare lacinia vitae at vestibulum
              morbi. Volutpat libero curabitur feugiat risus dui pulvinar.
              Elementum. Velit, odio bibendum eu, viverra sit laoreet posuere.
              Ut scelerisque posuere massa amet. Ornare lacinia vitae at
              vestibulum morbi. Volutpat libero curabitur feugiat risus dui
              pulvinar. Elementum
            </p>
            <button class="btn btn-sell">Let's sell</button>
          </div>
        </div>
        <div class="swiper-slide">
          <img
            class="swiper-img"
            src="@/assets/images/img-slide04.jpeg"
            alt="image slide"
          />
          <div class="swiper-content">
            <h1 class="content-title">NFTs today</h1>
            <p class="content-desc">
              Velit, odio bibendum eu, viverra sit laoreet posuere. Ut
              scelerisque posuere massa amet. Ornare lacinia vitae at vestibulum
              morbi. Volutpat libero curabitur feugiat risus dui pulvinar.
              Elementum. Velit, odio bibendum eu, viverra sit laoreet posuere.
              Ut scelerisque posuere massa amet. Ornare lacinia vitae at
              vestibulum morbi. Volutpat libero curabitur feugiat risus dui
              pulvinar. Elementum
            </p>
            <button class="btn btn-sell">Let's sell</button>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next">
        <i class="fa-solid fa-arrow-right-long"></i>
      </div>
      <div class="swiper-button-prev">
        <i class="fa-solid fa-arrow-left-long"></i>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper, { Navigation, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

Swiper.use([Navigation, Pagination]);

export default {
  data() {
    return {
      swiper: null,
    };
  },
  mounted() {
    this.swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  },
  beforeUnmount() {
    if (this.swiper) {
      this.swiper.destroy();
    }
  },
};
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
@import "@/assets/css/common.scss";
.swiper-container {
  max-width: 1400px;
  height: 650px;
  overflow: hidden;
  position: relative;
  margin-bottom: 50px;
}

.swiper-slide {
  text-align: center;
  font-size: 30px;
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .swiper-img {
    width: 100%;
    height: 100%;
  }
  .swiper-content {
    position: absolute;
    width: 80%;
    text-align: left;

    .content-title {
      @include styleFont(600, 80px, #ffffff, 96px);
      width: 64%;
      margin-bottom: 32px;
      text-align: left;
      transform: translateY(-50px);
      opacity: 0;
    }
    .content-desc {
      @include styleFont(400, 16px, #ffffff, 24px);
      margin-top: 50px;
      margin-bottom: 45px;
      background: rgba(255, 255, 255, 0.1);
      padding: 20px 10px;
      border-radius: 10px;
      backdrop-filter: blur(10px);
      width: 80%;
      transform: translateX(-20px);
      opacity: 0;
    }
    .btn-sell {
      @include styleFont(700, 20px, #000000, 20px);
      padding: 16px 20px;
      border-radius: 15px;
      border: none;
      cursor: pointer;
      transition: transform 0.2s;
      &:hover {
        transform: scale(1.1);
      }
      border: none;
    }
  }
}
.swiper-slide-active {
  .swiper-content {
    .content-title {
      transform: translateY(0);
      opacity: 1;
      transition-property: transform, opacity;
      transition-duration: 1s;
    }
    .content-desc {
      transform: translateX(0);
      opacity: 1;
      transition-property: transform, opacity;
      transition-duration: 1s;
    }
  }
}

.swiper-button-next,
.swiper-button-prev {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  background-color: #f7f7f7;
  border-radius: 50%;
  border: 1px solid #ccc;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
.swiper-button-next {
  color: #000000;
  i {
    transform: translateX(-100px);
  }
}
.swiper-button-prev {
  color: #000000;
  i {
    transform: translateX(10px);
  }
}

.swiper-button-next:after,
.swiper-button-prev:after {
  content: "";
}

.swiper-button-next:after,
.swiper-button-next:hover,
.swiper-button-prev:hover {
  background-color: #e6e6e6;
}

// reponsive
@media (max-width: 1200px) {
  .swiper-slide-active {
    .swiper-content {
      width: 70%;
      padding-inline: 100px;
      text-align: center;
      .content-title {
        width: 100%;
        text-align: center;
      }
      .content-desc {
        width: 100%;
      }
    }
  }
}
@media (max-width: 992px) {
  .swiper-slide-active {
    .swiper-content {
      width: 70%;
      .content-title {
        width: 100%;
      }
      .content-desc {
        width: 92%;
      }
    }
  }
}
@media (max-width: 768px) {
  .swiper-slide {
    .swiper-content {
      .content-desc {
        font-size: 20px;
      }
      .btn-sell {
        font-size: 24px;
      }
    }
  }
  .swiper-container {
    height: 800px;
  }
}
@media (max-width: 576px) {
  .swiper-container {
    height: 600px;
  }
  .swiper-slide-active {
    .swiper-content {
      width: 100%;
      padding-inline: 20px;
      padding-bottom: 10px;
      .content-title {
        font-size: 54px;
        margin-bottom: 0;
    }
    .content-desc{
      text-align: left;
      width: 96%;
    margin-top: 0;
  }
    }
  }
.swiper-button-next,
.swiper-button-prev {
  width: 20px;
  height: 20px;
  padding: 5px;
  opacity: 0.4;
}
}
@media (max-width: 375px) {
  .swiper-container {
    height: 650px;
  }
}
@media (max-width: 320px) {
  .swiper-container {
    height: 730px;
  }
}
</style>
