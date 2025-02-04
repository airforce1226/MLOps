<template>
  <div class="cmd-window">
    <h2>회원가입</h2>
    <el-form :model="registerForm" ref="registerForm" label-width="0">
      <el-form-item>
        <el-input
          v-model="registerForm.email"
          placeholder="이메일을 입력하세요"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="registerForm.password"
          placeholder="비밀번호를 입력하세요"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="password"
          v-model="registerForm.confirmPassword"
          placeholder="비밀번호 확인"
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleRegister">회원가입</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const registerForm = ref({
  email: '',
  password: '',
  confirmPassword: '',
});

const handleRegister = () => {
  // 회원가입 처리 로직
  console.log('회원가입 시도:', registerForm.value);
};
</script>

<style scoped>
.cmd-window {
  background-color: #282c34;
  color: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  margin: auto;
}
</style>
