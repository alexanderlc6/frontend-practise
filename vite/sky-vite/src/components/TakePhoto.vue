<template>
    <div class="camera_outer">
        <video id="videoCamera" :width="videoWidth" :height="videoHeight" autoplay></video>
        <canvas id="canvasCamera" class="cameraInner" :width="videoWidth" :height="videoHeight"></canvas>

        <div class="operateBtn">
            <el-button type="primary" @click="setImage()">拍照</el-button>
            <el-upload class="uploadImg" :headers="headers" :show-file-list="false" :on-success="handleImgSuccess"
                action="/location/upload">
                <el-button type="primary">上传照片</el-button>
            </el-upload>
            <el-button @click="getCompetence()">Open Camera</el-button>
        </div>
    </div>
</template>
<script>
import { store } from '@/store'
// import uploadImg from '@/api/file/FileManage.js'
import { resolve } from 'path'
 
function uploadImg(data){
        return new Promise(function(resolve, reject){
            resolve({ 
                    "data": {
                        "data": {
                            "url": "http://www.abcde.com/img01.png"
                        }
                    }
                });  
            });
    }

export default {
    data() {
        return {
            videoWidth: 300,
            videoHeight: 300,
            imgSrc: '',
            thisCanvas: null,
            thisContext: null,
            thisVideo: null,
            headers: {
                
            }
        }
    },

    mounted(){
        this.getCompetence()
    },
    destroyed() {
        this.stopNavigator()
    },
    methods: {
        handleImgSuccess(res, file){
            this.$emit('refreshDataList', res.data.url)
        },

        //调用权限打开摄像头
        getCompetence(){
            var _this = this
            this.thisCanvas = document.getElementById('canvasCamera')
            this.thisContext = this.thisCanvas.getContext('2d')
            this.thisVideo = document.getElementById('videoCamera')

            if(navigator.mediaDevices === undefined){
                navigator.mediaDevices = {}
            }

            //若缺少getUserMedia属性则添加
            if(navigator.mediaDevices.getUserMedia === undefined){
                navigator.mediaDevices.getUserMedia = function(constraints) {
                    //先获取现存的getUserMedia
                    this.getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.getUserMedia
                    //若浏览器不支持，会返回错误信息
                    if(!getUserMedia){
                        return Promise.reject(new Error('getUserMedia is not implemented in the browser.'))
                    }

                    //使用Promise将调用包装到旧的navigator.getUserMedia
                    return new Promise(function(resolve, reject) {
                        getUserMedia.call(navigator, constraints, resolve, reject)
                    })
                }
            }

            var constraints = { audio: false, video: { width: this.videoWidth, height: this.videoHeight, transform: 'scaleX(-1)'}}
            navigator.mediaDevices.getUserMedia(constraints).then(function(stream){
                //旧的浏览器可能没有srcObject
                if('srcObject' in _this.thisVideo){
                    _this.thisVideo.srcObject = stream
                }else {
                    //// 避免在新的浏览器中使用它，因为它正在被弃用
                    _this.thisVideo.src = window.URL.createObjectURL(stream)
                }

                _this.thisVideo.onloadedmetadata = function(e){
                    _this.thisVideo.play()
                    console.log("Camera opened.")
                }
            }).catch(err => {
                console.log(err)
            })
        },

    //绘制图片(拍照功能)
    setImage(){
        var _this = this
        _this.thisContext.drawImage(_this.thisVideo, 0, 0, _this.videoWidth, _this.videoHeight)
        var image = this.thisCanvas.toDataURL('image/png')
        _this.imgSrc = image

        const file = image
        const time = (new Date()).valueOf
        const name = time + '.png'
        console.log("Taken photo:", name, file)

        const conversions = this.base64ToFile(file, name)
      const data = new FormData()
      data.append('file', conversions)
      uploadImg(data).then(res => {
        console.log(res)
        if (res.data.code == 0) {
          this.$emit('refreshDataList', res.data.data.url)
        }
      })
    },
    // base64图片转file的方法（base64图片, 设置生成file的文件名）
    base64ToFile(base64, fileName) {
      // 将base64按照 , 进行分割 将前缀  与后续内容分隔开
      const data = base64.split(',')
      // 利用正则表达式 从前缀中获取图片的类型信息（image/png、image/jpeg、image/webp等）
      const type = data[0].match(/:(.*?);/)[1]
      // 从图片的类型信息中 获取具体的文件格式后缀（png、jpeg、webp）
      const suffix = type.split('/')[1]
      // 使用atob()对base64数据进行解码  结果是一个文件数据流 以字符串的格式输出
      const bstr = window.atob(data[1])
      // 获取解码结果字符串的长度
      let n = bstr.length
      // 根据解码结果字符串的长度创建一个等长的整形数字数组
      // 但在创建时 所有元素初始值都为 0
      const u8arr = new Uint8Array(n)
      // 将整形数组的每个元素填充为解码结果字符串对应位置字符的UTF-16 编码单元
      while (n--) {
        // charCodeAt()：获取给定索引处字符对应的 UTF-16 代码单元
        u8arr[n] = bstr.charCodeAt(n)
      }
      // 利用构造函数创建File文件对象
      // new File(bits, name, options)
      const file = new File([u8arr], `${fileName}.${suffix}`, {
        type: type
      })
      // 将File文件对象返回给方法的调用者
      return file
    },
    // 关闭摄像头
    stopNavigator() {
      this.thisVideo.srcObject.getTracks()[0].stop()
      console.log("Camera closed.")
    }
}
}
</script>
<style lang="less">
    .camera_outer {
        position: relative;
        overflow: hidden;
        // background: url("../../assets/img/user_0608_04.png") no-repeat center;
        background-size: 100%;
        video,
        canvas,
        .tx_img {
          -moz-transform: scaleX(-1);
          -webkit-transform: scaleX(-1);
          -o-transform: scaleX(-1);
          transform: scaleX(-1);
        }
        .btn_camera {
          position: absolute;
          bottom: 4px;
          left: 0;
          right: 0;
          height: 50px;
          background-color: rgba(0, 0, 0, 0.3);
          line-height: 50px;
          text-align: center;
          color: #ffffff;
        }
        .bg_r_img {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
        }
        .img_bg_camera {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          top: 0;
          img {
            width: 300px;
            height: 300px;
          }
          .img_btn_camera {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50px;
            line-height: 50px;
            text-align: center;
            background-color: rgba(0, 0, 0, 0.3);
            color: #ffffff;
            .loding_img {
              width: 50px;
              height: 50px;
            }
          }
        }

        .cameraInner {
            display: none;
        }

        .operateBtn {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .uploadImg {
                display: flex;
                align-items: center;
            }
        }
    }





</style>