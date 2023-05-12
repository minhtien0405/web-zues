<template>
  <div class="collections">
    <h2 class="collections__title">Hottest Collections</h2>
    <p class="collections__desc">
      Risus commodo id odio turpis pharetra elementum. Pulvinar porta porta
      feugiat scelerisque in elit. Morbi rhoncus, tellus, eros consequat magna
      semper orci a tincidunt.
    </p>
    <div class="collections__item--find">
      <input
        class="input--find"
        type="text"
        placeholder="Enter to search"
        v-model="valueTextFind"
        @keyup="findCollections(valueTextFind)"
      />
      <div v-if="valueTextFind != ''" class="icon__close" @click="deleteInput">
        <i class="fa-solid fa-xmark"></i>
      </div>
      <div class="icon__find">
        <i class="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
    <div class="collections__item">
      <div
        class="collections__card"
        v-for="dataCollection in dataCollections"
        :key="dataCollection.id"
      >
        <img
          class="card__thumbnail"
          :src="dataCollection.thumbnail"
          alt="image collection"
        />
        <h3 class="card__title">{{ dataCollection.title }}</h3>
        <p class="card__desc">{{ dataCollection.desc }}</p>

        <div class="collections__func">
          <div class="icon__dot" @click="ClickShowBtn()">
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
          <button
            :class="['btn__func btn__edt', { show: isShowBtn }]"
            @click="clickEdit(), clickGetId(dataCollection.id)"
          >
            Edit <i class="fa-solid fa-pen-to-square"></i>
          </button>
          <button
            :class="['btn__func btn__delete', { show: isShowBtn }]"
            @click="clickIdDelete(dataCollection.id)"
          >
            Delete <i class="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </div>
    <ModalEditAdd :isEdit="isEdit" :clickEdit="clickEdit" />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
import ModalEditAdd from "@/components/ModalEditAdd.vue";

export default {
  data() {
    return {
      isEdit: false,
      isShowBtn: false,
      valueTextFind: "",
    };
  },
  components: {
    ModalEditAdd,
  },
  computed: {
    ...mapGetters(["dataCollections"]),
  },
  methods: {
    ...mapMutations(["setIdEdit", "deleteCollection", "getFind"]),
    ...mapActions(["getIdEdit", "getIdDelete", "findCollections"]),
    clickEdit() {
      this.isEdit = !this.isEdit;
    },
    clickGetId(id) {
      this.getIdEdit(id);
    },
    clickIdDelete(id) {
      this.getIdDelete(id);
    },
    ClickShowBtn() {
      this.isShowBtn = !this.isShowBtn;
    },
    deleteInput() {
      this.valueTextFind = "";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
@import "@/assets/css/common.scss";
.collections {
  margin-block: 80px;
  position: relative;
  .collections__title {
    @include styleFont(700, 48px, #000000, 64px);
    text-align: center;
  }
  .collections__desc {
    @include styleFont(400, 20px, #000000, 24px);
    margin: auto;
    margin-block: 18px 30px;
    width: 75%;
    text-align: center;
  }
  .collections__item--find {
    @include display(flex, center, space-between);
    padding: 5px 10px;
    margin-bottom: 20px;
    border-radius: 5px;
    width: 60%;
    margin: auto;
    margin-bottom: 50px;
    box-shadow: 2px 2px 4px 2px rgba(0, 0, 0, 0.3);
    .input--find {
      @include styleFont(400, 20px, #000000, 26px);
      width: 90%;
      border: none;
      outline: none;
      padding: 10px 5px;
    }
    .icon__close {
      font-size: 18px;
      border-right: 1px solid gray;
      padding: 5px 10px;
      cursor: pointer;
      color: gray;
    }
    .icon__find {
      font-size: 18px;
      padding: 5px 10px;
      cursor: pointer;
      color: gray;
    }
  }
  .collections__item {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 64px 32px;
    .collections__card {
      position: relative;
      .card__thumbnail {
        width: 100%;
      }
      .card__title {
        text-align: center;
        @include styleFont(600, 32px, #000000, 42px);
        margin-block: 16px 12px;
      }
      .card__desc {
        text-align: center;
        @include styleFont(400, 16px, #532c59, 20px);
      }
    }
  }
  .collections__func {
    position: absolute;
    right: 10px;
    top: 20px;
    .icon__dot {
      text-align: right;
      padding: 10px;
      cursor: pointer;
      font-size: 20px;
    }
    .btn__func {
      display: none;
      width: 70px;
      color: #fff;
      border: none;
      border-radius: 5px;
      padding-block: 5px;
      cursor: pointer;
      box-shadow: 3px 3px 10px;
    }
    .show {
      display: block;
    }
    .btn__edt {
      background-color: #f7d060;
      &:hover {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
    .btn__delete {
      background-color: #df2e38;
      &:hover {
        transform: scale(1.1);
        opacity: 0.8;
      }
    }
  }
}
// reponsive
@media (max-width: 1070px) {
  .collections {
    margin-block: 0px;
    .collections__desc {
      margin-block: 18px 30px;
    }
    .collections__item {
      gap: 30px 20px;
      .collections__card {
        .card__title {
          font-size: 27px;
        }
      }
    }
  }
}
@media (max-width: 960px) {
  .collections {
    .collections__item {
      gap: 20px 15px;
    }
    .collections__desc {
      width: 100%;
    }
  }
}
@media (max-width: 920px) {
  .collections .collections__item {
    grid-template-columns: 1fr 1fr;
    gap: 30px 20px;
  }
}
@media (max-width: 768px) {
  .collections {
    .collections__item--find {
      width: 80%;
    }
  }
}
@media (max-width: 620px) {
  .collections .collections__item {
    grid-template-columns: 1fr;
    gap: 40px 0px;
  }
}
@media (max-width: 576px) {
  .collections .collections__item .collections__card .card__desc {
    font-size: 20px;
  }
  .collections {
    .collections__item--find {
      width: 92%;
    }
  }
}
</style>
