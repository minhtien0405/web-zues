<template>
  <div class="asked-question">
    <div class="asked-question__content">
      <h2 class="asked-question__title">Frequently Asked Questions</h2>
      <p class="asked-question__desc">
        Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
        feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna
        semper orci a tincidunt.
      </p>
    </div>
    <div class="asked-question__item">
      <div class="dropdown" v-for="dataAsked in dataAskeds" :key="dataAsked.id">
        <div class="dropdown-toggle">
          <p class="drop__question">{{ dataAsked.question }}</p>
          <div class="drop__icon">
            <div
              :class="['btn-dropdown-down', { hide: dataAsked.drop }]"
              @click="getId(dataAsked.id)"
            >
              <i class="fa-solid fa-angle-down"></i>
            </div>
            <div
              :class="['btn-dropdown-up', { show: dataAsked.drop }]"
              @click="getId(dataAsked.id)"
            >
              <i class="fa-solid fa-angle-up"></i>
            </div>
          </div>
        </div>
        <div :class="['dropdown-content', { show: dataAsked.drop }]">
          {{ dataAsked.asked }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["dataAskeds", "datatest"]),
  },
  methods: {
    ...mapMutations(["checkDrop"]),
    ...mapActions(["clickDrop"]),
    getId(numId) {
      this.clickDrop(numId);
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
@import "@/assets/css/common.scss";
.asked-question {
  @include display(flex, flex-start, space-between);
}
.asked-question__content {
  width: 35%;
  padding-right: 20px;
  .asked-question__title {
    @include styleFont(700, 48px, #000000, 64px);
  }
  .asked-question__desc {
    @include styleFont(400, 16px, #532c59, 24px);
  }
}
.asked-question__item {
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px 30px;
  .dropdown {
    border: 1px solid #d6bcfa;
    border-radius: 15px;
    padding: 24px;
    .dropdown-toggle {
      @include display(flex, stretch, space-between);
      .drop__question {
        @include styleFont(500, 20px, #000000, 26px);
      }
      .drop__icon {
        padding-left: 30px;
        font-size: 1rem;
        .btn-dropdown-down {
          cursor: pointer;
        }
        .btn-dropdown-up {
          display: none;
          font-size: 1.2rem;
          cursor: pointer;
        }
        .show {
          display: block;
        }
      }
    }
    .dropdown-content {
      @include styleFont(300, 14px, #000000, 20px);
      display: none;
      margin-top: 10px;
    }
    .show {
      display: block;
    }
    .hide {
      display: none;
    }
  }
}
// reponsive
@media (max-width: 960px) {
  .asked-question {
    display: block;
    margin-bottom: 105px;
  }
  .asked-question__content {
    width: 90%;
    margin: auto;
    padding-right: 0;
    text-align: center;
    .asked-question__desc {
      margin-block: 30px;
    }
  }
}
@media (max-width: 620px) {
  .asked-question__item {
    grid-template-columns: auto;
  }  .asked-question__content {
    width: 100%;
  }
}
@media (max-width: 576px) {
  .asked-question{
    margin-bottom: 40px;
  }
  .asked-question__content .asked-question__desc {
    font-size: 20px;
  }
  .asked-question__item .dropdown .dropdown-content[data-v-74311c9a] {
    font-size: 18px;
  }
}
</style>
