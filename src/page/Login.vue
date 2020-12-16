<template>
  
  <div>
    <scroll
      class="content"
      ref="scroll"
      @pullingUp="loadMore"
      :pull-up-load="true"
    >
      <div class="scroll_con">
        <div class="scroll_c">
          <list-top class="clearfix" text="佳御智慧安防公众号" />
          <el-form
            :model="Register"
            ref="RegisterForm"
            label-width="0"
            class="RegisterForm"
          >
            <el-form-item prop="phone">
              <el-input
                 v-model='mobile'
                placeholder="请输入手机号"
              ></el-input>
            </el-form-item>
            <el-form-item prop="验证码" class="code">
              <el-input
                v-model='code'
                placeholder="请输入验证码"
              ></el-input>
              <el-button
                type="button"
                :disabled="disabled"
                v-if="disabled == false"
                :class="{'active' : count !==0}" @click="doGetCode"
                >{{count ===0 ? '获取验证码':count + 's'}}
              </el-button>
              <el-button
                type="button"
                @click="sendcode"
                :disabled="disabled"
                v-if="disabled == true"
                >{{ btntxt }}
              </el-button>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click='doLogin'>提交</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </scroll>
  </div> 
</template>

<script src="../js/bind.js"></script>

<style scoped lang="less">
  form {
  width: 80%;
  margin: auto;
  margin-top: 15px;
  .code {
    .el-input {
      width: 55%;
      border-radius: 0px;
      float: left;
      display: inline-block;
    }
    .el-button {
      width: 45%;
      border-top-left-radius: 0px;
      border-bottom-left-radius: 0px;
      border-left: 0px;
      float: left;
      display: inline-block;
    }
  }
  .el-button--primary {
    width: 100%;
    background-color: var(--color-high-text);
    border: none;
    color: #000;
  }
}

.login {
  height: 100vh;
}
.content {
  position: absolute;
  top: 0;
  bottom: 49px;
  left: 0;
  right: 0;
}
.card {
  width: 96%;
}
.scroll_con {
  display: flex;
  width: 100%;
  align-items: center;
  height: 100%;
}
.scroll_c {
  width: 96%;
  margin: 0 auto;
  background-color: #fff;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 1px 1px 10px #c3bcbc;
}
</style>