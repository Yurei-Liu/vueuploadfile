// src/components/index.js
import VueUploadFile from "./VueUploadFile.vue";

VueUploadFile.install = function (Vue) {
  Vue.component("vue-upload-file", VueUploadFile);
};

export default VueUploadFile;
