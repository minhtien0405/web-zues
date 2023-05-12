<template>
  <div class="team">
    <h2 class="team__title">{{ title }}</h2>
    <p class="team__desc">
      Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
      feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna
      semper orci a tincidunt.
    </p>
    <div class="team__item">
      <div class="team__info" v-for="dataTeam in datas" :key="dataTeam.id">
        <img
          class="info__thumbnail"
          :src="dataTeam.thumbnail"
          alt="image member"
        />
        <h3 class="info__name">{{ dataTeam.name }}</h3>
        <p class="info__position">{{ dataTeam.position }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["dataTeams"]),
  },
  props: {
    datas: {
      type: Array,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
@import "@/assets/css/common.scss";

.team {
  margin-block: 152px;
  .team__title {
    @include styleFont(700, 48px, #000000, 64px);
    text-align: center;
  }
  .team__desc {
    @include styleFont(400, 20px, #000000, 24px);
    margin: auto;
    margin-block: 18px 64px;
    width: 75%;
    text-align: center;
  }
  .team__item {
    display: grid;
    grid-template-columns: auto auto auto auto;
    justify-content: space-between;
    gap: 20px;
    .team__info {
      .info__thumbnail {
        display: block;
        margin: 0 auto;
      }
      .info__name {
        text-align: center;
        @include styleFont(700, 24px, #000000, 32px);
        padding-block: 12px;
      }
      .info__position {
        text-align: center;
        @include styleFont(400, 16px, #532c59, 20px);
      }
    }
  }
}

// reponsive
@media (max-width: 1360px) {
  .team {
    margin-block: 70px;
    .team__desc {
      margin-block: 18px 40px;
    }
  }
}
@media (max-width: 920px) {
  .team {
    .team__item {
      grid-template-columns: auto auto;
      justify-content: space-around;
    }
  }
}
@media (max-width: 620px) {
  .team .team__desc {
    width: 100%;
  }
}
@media (max-width: 576px) {
  .team {
    margin-block: 50px;
    .team__desc {
      width: 100%;
    }
  }
  .team .team__item .team__info .info__position {
    font-size: 20px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
  }
}
</style>
