<template>
  <div id="SMS">
    <h3 style="margin-bottom: 30px">短信验证码</h3>
    <div class="main">
      <div class="top" style="margin-bottom: 20px">
        <input
          type="text"
          placeholder="请输入手机号"
          v-model="phone"
          style="flex: 1"
        />
      </div>
      <div class="bottom">
        <input
          type="text"
          placeholder="请输入验证码"
          style="width: 60%"
          v-model="verify_code"
        />
        <button>
          <span @click="Countdown">{{ count > 0 ? count : "发送验证码" }}</span>
        </button>
      </div>
    </div>
    <button style="margin-top: 30px" @click="login">登录</button>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.baseURL = "https://toutiao.itheima.net";
export default {
  data() {
    return {
      phone: "",
      verify_code: "",
      count: 0,
    };
  },
  methods: {
    login() {
      const phoneREG = /^1[3-8]\d{9}$/;
      const vcREG = /^\d{6}$/;
      if (phoneREG.test(this.phone) && vcREG.test(this.verify_code)) {
        axios
          .post("v1_0/authorizations", {
            mobile: this.phone,
            code: this.verify_code,
          })
          .then(() => {
            alert("用户登录成功");
          })
          .catch(() => {
            alert("用户的手机号或者密码错误");
          });
      } else {
        alert("手机号码格式错误");
      }
    },
    Countdown() {
      const phoneREG = /^1[3-8]\d{9}$/;
      if (phoneREG.test(this.phone) && this.count == 0) {
        axios.get(`https://toutiao.itheima.net/v1_0/sms/codes/${this.phone}`);
        this.count = 60;
        this.timer = setInterval(() => {
          if (this.count == 0) {
            clearInterval(this.timer);
          } else {
            this.count--;
          }

          console.log(this.count);
        }, 1000);
      }
    },
  },
};
</script>


<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#SMS {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0 auto;
  color: #2c3e50;
  margin-top: 60px;
  border: solid 2px black;
}
.main {
  display: flex;
  flex-direction: column;
  width: 15rem;
  margin: 0 auto;
}
.top {
  display: flex;
}
.bottom {
  display: flex;
  justify-content: space-between;
}
</style>
