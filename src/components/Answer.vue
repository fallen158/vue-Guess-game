<template>
  <div class="amswer">
    <header>
      <span>题目{{index}}</span>
    </header>
    <div class="home_logo">
      <div class="item_list_container">
        <div class="item_title">题目{{index}}</div>
        <ul>
          <li v-for="list,index in topics" :key="list.id"  @click="onActive(list,index)">
              <span class="option_style" :class="{active:index === currentIndex}">{{list.name}}</span>
              <span class="option_detail">{{list.answer}}</span>
          </li>
        </ul>
      </div>
    </div>
    <a class="start" @click="onTopics"></a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 1,
      currentIndex: 4,
      coeect: false,
      checkbox: false,
      topics: [
        {
          name: "A",
          answer: "答案aaaa"
        },
        {
          name: "B",
          answer: "答案bbbb"
        },
        {
          name: "C",
          answer: "正确答案"
        },
        {
          name: "D",
          answer: "答案ccc"
        }
      ]
    };
  },
  methods: {
    onTopics() {
      if (this.index >= 5) {
        this.$router.push("/result");
      }
      if (!this.checkbox) {
        alert("您还没有选择答案哦");
      } else {
        this.currentIndex = "";
        this.checkbox = false;
        this.index += 1;
      }
      if (this.coeect) {
        this.coeect = false
        return this.$store.commit("add");
      }
    },
    onActive(list, index) {
      this.currentIndex = index;
      this.checkbox = true;
      if (list.answer === "正确答案") {
        this.coeect = true;
      }
    }
  },
  watch: {
    index(item) {
      let toAnswer = this.topics;
      let problem
      switch (item) {
        case 2:
          problem = ['答案a错误','答案b错误','答案c错误','正确答案']
          break;
        case 3:
          problem = ['正确答案','测试BBB','测试CCC','测试DDD']
          break;
        case 4:
          problem = ['嘿嘿嘿','正确答案','哈哈哈','呵呵呵']
          break;
        case 5:
          problem = ['A是错的','B是错的','正确答案','C是错的']
          break;
        default:
          break
      }
      for (let i = 0; i < toAnswer.length; i++) {
        toAnswer[i].answer = problem[i];
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.amswer {
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
    background: url("../Images/2-1.png");
    background-size: 13.142rem 100%;
    background-position: 100%;
    height: 11.625rem;
    width: 13.15rem;
    background-repeat: no-repeat;
    position: absolute;
    top: 4.1rem;
    left: 1rem;
    .item_list_container {
      position: absolute;
      height: 7rem;
      width: 8rem;
      top: 2.4rem;
      left: 3rem;
      font-weight: 100;
      .item_title {
        font-size: 0.65rem;
        color: #999999;
        line-height: 0.7rem;
      }
      li {
        width: 10rem;
        span {
          display: inline-block;
          font-size: 0.6rem;
          color: #999999;
          vertical-align: middle;
        }
        .option_style {
          height: 0.725rem;
          width: 0.725rem;
          border: 1px solid #fff;
          border-radius: 50%;
          line-height: 0.725rem;
          text-align: center;
          margin-right: 0.3rem;
          font-size: 0.5rem;
          font-family: Arial;
        }
        .active {
          background: yellow;
        }
        .option_detail {
          width: 7.5rem;
          padding-top: 0.11rem;
        }
      }
    }
  }
  .start {
    background: url("../images/2-2.png") no-repeat;
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
