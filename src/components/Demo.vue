<template>
  <div>
    <div style="display: flex; justify-content: center">
      <button class="uploadBtnStyle" type="button" @click="isShowUploadFile = true">上傳</button>
    </div>
    <VueUploadFile :isShowUploadFile="isShowUploadFile" :fileTypeOptions="fileTypeOptions" @closeShowUploadFileModal="closeShowUploadFileModal" />
  </div>
</template>

<script>
import VueUploadFile from "./VueUploadFile.vue";

export default {
  name: "Demo",
  data() {
    return {
      isShowUploadFile: false,
      fileTypeOptions: [
        { label: "客戶第一證件正面", value: "CCFF" },
        { label: "客戶第一證件反面", value: "CCFB" },
        { label: "客戶第二證件", value: "CCS" },
      ],
    };
  },

  components: {
    VueUploadFile,
  },

  methods: {
    closeShowUploadFileModal() {
      this.isShowUploadFile = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.uploadBtnStyle {
  width: 120px;
  height: 50px;
  border: 1px #e0e0e0 solid;
  border-radius: 5px;
  background-color: rgb(0, 0, 255);
  font-size: 20px;
  color: azure;
  cursor: pointer;
}
</style>
