
<template>
  <div class="home">
      <header>
        <span>{{msg}}</span>
      </header>
      <div class="home_logo">
      </div>
      <router-link to="/answer" class="start">
      </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "第一周"
    };
  }
};
</script>

<style lang="scss" scoped>
.home {
  margin: 7em auto;
  header {
    background: url("../Images/WechatIMG2.png");
    position: absolute;
    height: 7.35rem;
    width: 3.25rem;
    top: -1.3rem;
    right: 1.6rem;
    z-index: 10;
    background-size: 100% 100%;
    span {
      position: absolute;
      left: 0.48rem;
      bottom: 1.1rem;
      height: 0.7rem;
      width: 2.5rem;
      font-size: 0.6rem;
      font-family: \\9ed1\4f53;
      font-weight: 600;
      color: #a57c50;
      text-align: center;
    }
  }
  .home_logo {
    background: url("../Images/1-2.png");
    background-size: 13.142rem 100%;
    background-position: 100%;
    height: 11.625rem;
    width: 13.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
  }
  .start {
    background: url("../images/1-4.png") no-repeat;
    display: block;
    height: 2.1rem;
    width: 4.35rem;
    position: absolute;
    top: 16.5rem;
    left: 50%;
    margin-left: -2.4rem;
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
</style>
