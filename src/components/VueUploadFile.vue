<template>
  <div v-if="isShowUploadFile" class="uploadFileModalArea">
    <div class="modalStyle">
      <h3 style="margin-left: 3%">上傳檔案</h3>
      <hr style="margin-bottom: 3%" color="#e0e0e0" size="1" />
      <label style="margin-left: 3%">檔案類別：</label>
      <select style="border: 1px solid #d0d0d0; margin-bottom: 3%; width: 175px; height: 33px; border-radius: 3px">
        <template v-for="(option, optionIdx) in fileTypeOptions">
          <option :key="optionIdx" :value="option.value">{{ option.label }}</option>
        </template>
      </select>
      <br />
      <label style="margin-left: 3%">檔案名稱：</label>
      <input style="border: 1px solid #d0d0d0; margin-bottom: 3%; height: 25px; border-radius: 3px" v-model="fileName" />
      <br />
      <input style="margin-left: 3%; margin-bottom: 3%" type="file" id="uploadFile" @change="checkFileName(), viewFile()" />
      <img v-show="isViewImg" src id="viewFile" height="200" width="300" />
      <p v-show="isPDF" class="fz-16">此為PDF檔案，無法預覽顯示，如需檢閱請下載檔案。</p>
      <hr color="#e0e0e0" size="1" />
      <div style="float: right; margin-bottom: 2.5%; margin-top: 1.5%; margin-right: 3%">
        <button class="uploadBtn" type="button" @click="upload()">上傳</button>
        <button class="cancelBtn" type="button" @click="cancel()">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueUploadFile",
  props: ["isShowUploadFile", "fileTypeOptions"],
  data() {
    return {
      fileName: "",
      // 圖片的base64
      uploadImgBase64: "",
      // 是否可以預覽圖片
      isViewImg: false,
      // 是否為PDF
      isPDF: false,
      // 警示訊息Modal
      warningModal: false,
      // 警示訊息Array
      warningMsg: [],
    };
  },

  methods: {
    checkFileName() {
      // 初始化錯誤訊息Array
      this.warningMsg = [];

      let uploadFile = document.getElementById("uploadFile");
      let uploadFileName = uploadFile.value;

      let acceptNameArr = new Array(".pdf", ".jpg", ".jpeg", ".png");
      uploadFileName = uploadFileName.substring(uploadFileName.lastIndexOf("."));
      if (acceptNameArr.indexOf(uploadFileName) == -1) {
        let acceptStr = "檔案類型錯誤。只可上傳PDF、JPG、PNG，請重新上傳。";
        this.warningMsg.push(acceptStr);
        uploadFile.value = null;
        this.warningModal = true;
        return false;
      } else {
        console.log("檔案類型正確");
        return true;
      }
    },

    viewFile() {
      let input = document.getElementById("uploadFile").files[0];
      console.log(input);
      if (input) {
        let fileType = input.type;
        let fileName = input.name;
        this.fileName = fileName;
        if (fileType == "image/jpeg" || fileType == "image/jpg" || fileType == "image/png") {
          // 還原
          this.isPDF = false;
          // 圖片檔才可預覽
          // 將上傳圖片轉為base64 URL
          let reader = new FileReader();
          reader.readAsDataURL(input);
          // 讀取base64 URL
          reader.onload = (e) => {
            this.uploadImgBase64 = e.target.result;
            document.getElementById("viewFile").src = this.uploadImgBase64;
          };
          this.isViewImg = true;
        } else {
          // PDF不可以預覽
          this.isViewImg = false;
          this.isPDF = true;
        }
      }
    },

    upload() {},

    cancel() {
      this.fileName = "";
      let uploadFile = document.getElementById("uploadFile");
      uploadFile.value = null;
      this.isViewImg = false;
      this.isPDF = false;
      this.$emit("closeShowUploadFileModal");
    },
  },
};
</script>

<style lang="scss" scoped>
.uploadFileModalArea {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 50vh;
  z-index: 999;
}

.modalStyle {
  width: 500px;
  border: 1px solid #e0e0e0;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.uploadBtn {
  margin-right: 7px;
  width: 60px;
  height: 32px;
  border: 0;
  border-radius: 5px;
  color: #ffffff;
  background-color: rgb(0, 0, 255);
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}

.cancelBtn {
  width: 60px;
  height: 32px;
  border: 0;
  border-radius: 5px;
  color: #7b7b7b;
  background-color: #e0e0e0;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
}
</style>
