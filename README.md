# vueuploadfile

## 目的

    在Vue框架中，提供可上傳圖片檔（JPG、JPEG、PNG）、PDF的Modal，使用者可設定上傳檔案之類別。

## 安裝

    npm install vueuploadfile

## 用法

#### 簡易範例

    <template>
       <div>
         <button type="button" @click="isShowUploadFile = true">上傳檔案</button>
         <VueUploadFile :isShowUploadFile="isShowUploadFile" :fileTypeOptions="fileTypeOptions" @closeShowUploadFileModal="closeShowUploadFileModal" />
       </div>
    </template>
    <script>
    import VueUploadFile from "./VueUploadFile.vue"

    export default {
      data(){
          return {
            isShowUploadFile: false,
            fileTypeOptions: [
                { label: "客戶第一證件正面", value: "CCFF" },
                { label: "客戶第一證件反面", value: "CCFB" },
                { label: "客戶第二證件", value: "CCS" },
            ],
          }
      },

      components: {
        VueUploadFile,
      },

      methods: {
        closeShowUploadFileModal() {
           this.isShowUploadFile = false;
        },
      }
    }

    </script>

#### 變數用途

| 變 數 名 稱      |         用 途          |
| ---------------- | :--------------------: |
| isShowUploadFile | 是否顯示上傳檔案 Modal |
| fileTypeOptions  |      檔案類別列表      |
| fileName         |        檔案名稱        |

<!-- See [Configuration Reference](https://cli.vuejs.org/config/). -->
