<template>
  <div class="result">
    <div class="your_scores">
      <header>
        <span class="score_num">{{num}}</span>
        <span>分!</span>
      </header>
       <div class="result_tip">{{prompt}}</div>
    </div>
    <div class="share_button" @click="hideShare">
    </div>
    <div class="share_code">
      <header class="share_header">关注葡萄之家，获取答案。</header>
       <img src="http://pa3otstvm.bkt.clouddn.com/18-8-23/82964825.jpg" alt="二维码" width="212" height="212" class="share_img">
    </div>
    <div class="share_cover" v-show="share">
      <img src="../Images/5-2.png" alt="分享">
      <div class="exit" @click="exitShare">关闭</div>
    </div>
    <button class="renew" @click="renew">再来一次</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      prompt: "",
      share: false
    };
  },
  methods: {
    hideShare() {
      this.share = true;
    },
    exitShare() {
      this.share = false;
    },
    renew() {
      this.$store.commit("reselt");
      this.$router.push("/");
    }
  },
  created() {
    let index = this.$store.state.count;
    console.log(index);
    switch (index) {
      case 1:
        this.num = 20;
        this.prompt = "你说，是不是把知识都还给小学老师了?";
        break;
      case 2:
        this.num = 40;
        this.prompt = "还不错，但还需要继续加油哦！";
        break;
      case 3:
        this.num = 60;
        this.prompt = "不要嘚瑟还有进步的空间！";
        break;
      case 4:
        this.num = 80;
        this.prompt = "智商离爆表只差一步了！";
        break;
      case 5:
        this.num = 100;
        this.prompt = "你也太聪明啦，葡萄之家欢迎你";
        break;
      default:
        this.num = 0;
        this.prompt = "你说，是不是把知识都还给小学老师了?";
    }
  }
};
</script>


<style lang="scss" scoped>
.result {
  height: 100vh;
  background: url("../Images/4-1.jpg");
  text-align: center;
  padding: 2em;
  .your_scores {
    width: 9.7rem;
    height: 9.1rem;
    background: url("../Images/4-2.png");
    background-size: 100% 100%;
    margin: 0 auto;
    position: relative;
    header {
      position: absolute;
      width: 100%;
      text-indent: 3.3rem;
      top: 4.7rem;
      right: 1rem;
      font-size: 1.6rem;
      font-weight: 900;
      color: #a51d31;
    }
    .result_tip {
      position: absolute;
      top: 7rem;
      width: 9rem;
      left: 0.6rem;
      color: #3e2415;
      font-size: 0.65rem;
      text-align: center;
    }
  }
  .share_button {
    background: url("../Images/4-3.png") no-repeat 0.4rem 0;
    width: 6.025rem;
    height: 2.4rem;
    margin: 0.8rem auto 0;
    background-size: 5.825rem 100%;
  }
  .share_code {
    width: 5.3rem;
    margin: 1.5rem auto 0;
    .share_header {
      color: #664718;
      font-size: 0.475rem;
      font-family: Microsoft YaHei;
      width: 6rem;
      font-weight: 500;
    }
    img {
      height: 5.3rem;
      width: 5.3rem;
      margin-top: 0.5rem;
    }
  }
  .share_cover {
    position: fixed;
    bottom: 0;
    right: 0;
    top: 0;
    left: 0;
    background: url("../Images/5-1.png");
    background-size: 100% 100%;
    opacity: 0.92;
    img {
      height: 10.975rem;
      width: 11.95rem;
      position: fixed;
      top: 0.5rem;
      left: 50%;
      margin-left: -5.975rem;
    }
    .exit {
      color: white;
      font-weight: 200;
      position: absolute;
      bottom: 1em;
      right: 1em;
    }
  }
  .renew {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    border: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    position: fixed;
    bottom: 2em;
    right: 2em;
  }
}
</style>
