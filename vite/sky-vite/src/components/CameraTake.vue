<template>
    <div class="camera-container">
      <!-- 显示视频流 -->
      <video ref="videoElement" autoplay></video>
      
      <!-- 按钮触发拍照操作 -->
      <button @click="takePhoto">拍照</button>
      
      <!-- 展示拍到的图片 -->
      <img v-if="photoDataUrl" :src="photoDataUrl" alt="拍摄的照片">
    </div>
  </template>
   
  <script>
  export default {
    data() {
      return {
        photoDataUrl: null // 存放拍摄后的图片数据URL
      };
    },
    
    mounted() {
      this.startCamera();
    },
    
    methods: {
      startCamera() {
        const video = this.$refs.videoElement;
        
        navigator.mediaDevices.getUserMedia({ video: true })
          .then(stream => {
            video.srcObject = stream;
            
            // 获取视频元素的上下文对象
            const canvasContext = document.createElement('canvas').getContext('2d');
            
            // 设置画布大小与视频元素相同
            canvasContext.width = video.clientWidth;
            canvasContext.height = video.clientHeight;
            
            // 将视频内容绘制到画布上
            setInterval(() => {
              canvasContext.drawImage(video, 0, 0);
              
              // 将画布转换为Base64格式的图片数据URL
              this.photoDataUrl = canvasContext.canvas.toDataURL("image/jpeg");
            }, 1000);
          });
      },
      
      takePhoto() {
        if (this.photoDataUrl) {
          console.log("已经成功拍摄了照片！");
          
          // 这里可以根据需要处理或保存拍摄的照片
        } else {
          console.error("无法拍摄照片，请确认摄像头正常工作。");
        }
      }
    }
  };
  </script>
   
  <style scoped>
  .camera-container {
    display: flex;
    justify-content: center;
  }
   
  video {
    width: 300px;
    height: auto;
  }
   
  button {
    margin-top: 10px;
  }
   
  img {
    max-width: 50%;
    border: 1px solid #ccc;
    padding: 5px;
  }
  </style>