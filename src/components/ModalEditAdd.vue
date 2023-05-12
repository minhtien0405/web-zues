<template>
  <div :class="['modal', { show: true }]">
    <div :class="['modal-edit', { show: isEdit }]">
      <div class="group__title">
        <h3>EDIT COLLECTION</h3>
        <div class="icon__close" @click="clickEdit">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <div class="group__edit">
        <label class="title" for="">Edit Title</label>
        <input class="edit__title" type="text" v-model="valueTitle"/>
      </div>
      <div class="group__edit">
        <label class="desc" for="">Edit Desc</label>
        <input class="edit__desc" type="text" v-model="valueDesc"/>
      </div>
      <div class="group__edit">
        <button class="btn__edit" @click="actions()">EDIT</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  props: {
    isEdit: {
      type: Boolean,
    },
    clickEdit:{
      type: Function,
    }
  },
  data() {
    return {
      isShow: this.isEdit,
    };
  },
  computed:{
    // ...mapGetters(['valueTitle','valueDesc'])
    valueTitle:{
        get() {
        return this.$store.state.valueTitle
      },
      set(value) {
        this.$store.commit('setValueTitle', value);
      }
    },
    valueDesc:{
        get() {
        return this.$store.state.valueDesc
      },
      set(value) {
        this.$store.commit('setValueDesc', value);
      }
    },
  },
  methods:{
    ...mapMutations(['setValueEdit']),
    ...mapActions(['getValueEdit']),
    actions(){
      this.clickEdit()
      this.getValueEdit()
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  max-width: 700px;
  min-width: 300px;
  background-color: #2a2f4f;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: 10px 10px 10px;
  .modal-edit {
    display: none;
    padding: 20px;

    .group__title {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      h3 {
        color: #ffffff;
        font-weight: 600;
        font-size: 20px;
        margin-bottom: 50px;
      }
      .icon__close {
        font-size: 24px;
        color: #ffffff;
      }
    }
    .group__edit {
      margin-bottom: 20px;
      label {
        color: #ffffff;
        font-weight: 400;
        font-size: 18px;
        margin-bottom: 10px;
      }
      input {
        display: block;
        width: 100%;
        padding: 10px 5px;
        box-sizing: border-box;
        outline: none;
        font-size: 18px;
      }
      .btn__edit {
        display: block;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        color: #ffffff;
        background-color: #f7d060;
        font-weight: 400;
        font-size: 18px;
        margin: auto;
        cursor: pointer;
      }
    }
  }
  .show {
    display: block;
  }
}
.show {
  display: block;
}
</style>
