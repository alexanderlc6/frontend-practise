

<template>
  <div>
    <TakePhoto ref="TakePhotos" @refreshDataList="refreshDataList"></TakePhoto>
    <!-- <CameraTake/> -->
  </div>
</template>

<script>
import TakePhoto from './components/TakePhoto.vue'
import CameraTake from './components/CameraTake.vue'


export default {
  components: {
    TakePhoto,
    CameraTake
  },
  methods: {
    refreshDataList(imgSrc){
        console.log(imgSrc)
    }
  }
}
</script>

<style>

</style>
