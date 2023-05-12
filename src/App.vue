<template>
  <div class="container">
    <div class="header">
      <a class="link__logo" href="#"
        ><img
          class="header__logo"
          src="./assets/images/Logo.png"
          alt="image logo"
      /></a>
      <nav :class="['header__nav', { show: isOpenMenu }]">
        <router-link class="header__link" to="/" @click="clickIconOpen"
          >Home</router-link
        >
        <router-link
          class="header__link"
          to="/university"
          @click="clickIconOpen"
          >University</router-link
        >
        <router-link class="header__link" to="/course" @click="clickIconOpen"
          >Course</router-link
        >
        <router-link class="header__link" to="/usecases" @click="clickIconOpen"
          >Use cases</router-link
        >
        <router-link class="header__link" to="/plans" @click="clickIconOpen"
          >Plans</router-link
        >
        <router-link class="header__link" to="/resources" @click="clickIconOpen"
          >Resources</router-link
        >
      </nav>
      <div class="header__icon">
        <div class="icon__close--menu"><i class="fa-solid fa-xmark"></i></div>
        <div class="icon__open--menu" @click="clickIconOpen">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpenMenu: false,
    };
  },
  methods: {
    clickIconOpen() {
      this.isOpenMenu = !this.isOpenMenu;
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
@import "@/assets/css/common.scss";

.container {
  max-width: 1400px;
  min-width: 300px;
  margin: 0 auto;
  position: relative;
  padding-inline: 50px;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 18px;
  background-color: #1b333e;
  .link__logo {
    background-color: #ffffff;
    margin-left: 20px;
    border-radius: 15px;
  }
  .header__nav {
    .header__link {
      display: inline-block;
      text-decoration: none;
      padding: 12px;
      @include styleFont(600, 16px, #000, 24px);
      transition: all 0.1s;
      &:not(:last-child) {
        margin-right: 8px;
      }
      &:hover {
        transform: scale(1.2);
      }
    }
    .router-link-active {
      color: #aacb73;
    }
  }
  .header__icon {
    display: none;
    .icon__close--menu {
      font-size: 50px;
    }
    .icon__open--menu {
      font-size: 50px;
      color: #ffffff;
    }
  }
}
// reponsive
@media (max-width: 992px) {
  .container {
    padding-inline: 20px;
  }
}
@media (max-width: 790px) {
  .header {
    display: block;
    text-align: center;
    .header__nav {
      margin-top: 20px;
      .header__link {
        font-size: 20px;
      }
    }
    .link__logo {
      .header__logo {
        padding: 10px;
      }
    }
  }
}
@media (max-width: 768px) {
  .header {
    @include display(flex, center, space-between);
    padding-inline: 15px;
    position: relative;
    .header__nav {
      display: none;
      position: absolute;
      top: 75px;
      left: 0;
      z-index: 10000;
      text-align: center;
      background-color: #ffffff;
      height: 100vh;
      width: 100%;
      transform: translateX(300px);
      opacity: 1;

      .header__link {
        width: 100%;
        font-size: 22px;
        border-bottom: 1px solid #000000;
        padding: 40px 0px;
        transition: all 0.5s;
        &:not(:last-child) {
          margin-right: 0px;
        }
        &:hover {
          transform: scale(1);
          background-color: #1b333e;
          opacity: 0.7;
        }
      }
    }
    .show {
      display: block;
      transform: translateX(0);
      opacity: 1;
    }
    .link__logo {
      margin-left: 0;
    }
    .header__icon {
      display: block;
      .icon__close--menu {
        display: none;
      }
      .icon__close--open {
        display: block;
        cursor: pointer;
      }
    }
  }
}
@media (max-width: 414px) {
  .container {
    padding-inline: 10px;
  }
}
@media (max-width: 375px) {
  .header .header__icon .icon__open--menu {
    font-size: 40px;
}
}
</style>
