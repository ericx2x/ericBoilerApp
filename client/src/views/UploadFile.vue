<template>
  <div class="uploadFile">
    <h1>This is an upload file page</h1>

  <file-upload v-model="files" post-action="/">Upload file</file-upload>
  </div>
</template>

<style>
/*
import '~vue-upload-component/dist/vue-upload-component.part.css'
@import "~vue-upload-component/dist/vue-upload-component.part.css";


or


 */
.file-uploads {
  overflow: hidden;
  position: relative;
  text-align: center;
  display: inline-block;
}
.file-uploads.file-uploads-html4 input[type="file"] {
  opacity: 0;
  font-size: 20em;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  width: 100%;
  height: 100%;
}
.file-uploads.file-uploads-html5 input[type="file"] {
  overflow: hidden;
  position: fixed;
  width: 1px;
  height: 1px;
  z-index: -1;
  opacity: 0;
}
</style>

<script>
import FileUpload from 'vue-upload-component/src'
export default {
  components: {
    FileUpload,
  },
  data() {
    return {
      files: []
    }
  },
}
</script>
