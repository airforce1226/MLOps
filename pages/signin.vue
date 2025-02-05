<template>
  <!-- background -->
  <div class="background">
    <div class="circle circle-blue-1"></div>
    <div class="circle circle-blue-2"></div>
    <div class="circle circle-red"></div>
  </div>
  <div class="backdrop"></div>

  <div name="fade" tag="div" class="login-container">
    <transition name="fade">
      <div style="margin: 7px">
        <span
          class="title animate__animated animate__zoomInDown animate__delay-1s"
          >MLOps for AI Excellence</span
        >
        <br />
        <span
          class="subtitle animate__animated animate__fadeInUp animate__delay-2s"
          >Optimizing AI Workflows for Success</span
        >
      </div>
    </transition>
    <div
      v-if="isAnimating"
      class="login-box animate__animated animate__fadeInUp"
    >
      <div class="welcome-text">
        <span class="line" v-html="line1"></span><br />
        <span class="line" v-html="line2"></span>
      </div>
      <!-- form -->
      <div class="form-container">
        <div v-for="field in inputFields" :key="field.id" class="input-field">
          <span class="field-label" v-html="field.label"></span>
          <div class="input-wrapper">
            <el-icon :color="field.iconColor">
              <component :is="field.icon" />
            </el-icon>
            <input
              :type="field.type"
              class="text-input"
              :placeholder="field.placeholder"
              :maxlength="field.maxlength"
            />
          </div>
        </div>

        <div class="button-wrapper">
          <button class="button">Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const line1 = ref('');
const line2 = ref('');
const text1 = 'Welcome to Sphere AX !';
const text2 = "Let's begin the adventure.";

const isAnimating = ref(false);

const typeText = (text, lineRef, delay) => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      lineRef.value += text[index];
      index++;
    } else {
      clearInterval(interval);
    }
  }, 100); // Adjust typing speed here
};
watch(isAnimating, (newValue) => {
  if (newValue) {
    setTimeout(() => {
      typeText(text1, line1, 0);
      setTimeout(() => {
        typeText(text2, line2, 0);
      }, text1.length * 100); // Delay before starting the second line
    }, 700);
  }
});

onMounted(() => {
  setTimeout(() => {
    isAnimating.value = true;
  }, 3000);
});

const inputFields = ref([
  {
    id: 1,
    label: 'Enter your email',
    type: 'email',
    icon: 'Select',
    iconColor: '#32B74E',
    placeholder: 'ohjoo@sphereax.com',
  },
  {
    id: 2,
    label: 'Create a password',
    type: 'password',
    icon: 'Select',
    iconColor: '#32B74E',
    placeholder: 'your password',
  },
  {
    id: 3,
    label: 'Enter a username',
    type: 'text',
    icon: 'Select',
    iconColor: '#32B74E',
    placeholder: 'ohjoo',
  },
  {
    id: 4,
    label:
      'Would you like to receive product updates and <br />announcements via email? <br />Type "y" for yes or "n" for no',
    type: 'text',
    icon: 'ArrowRightBold',
    iconColor: '#D756A6',
    placeholder: 'n',
    maxlength: 1,
  },
]);
</script>

<style scoped>
.background {
  background-color: #001424;
  width: 100vw; /* 뷰포트 너비에 맞추기 위해 100vw로 변경 */
  height: 100vh; /* 높이도 100vh로 설정하여 전체 화면을 차지하도록 */
  position: fixed; /* 고정 위치로 변경하여 스크롤과 관계없이 항상 화면에 표시 */
  top: 0; /* 상단에 위치하도록 설정 */
  left: 0; /* 좌측에 위치하도록 설정 */
  overflow: hidden; /* 스크롤을 없애기 위해 추가 */
}

.circle {
  height: 800px;
  width: 800px;
  border-radius: 50%;
  position: absolute;
}

.circle-blue-1 {
  background-color: #2b7de9;
  top: -30%;
  left: -20%;
}

.circle-blue-2 {
  background-color: #0062b1;
  top: -10%;
  right: -20%;
}

.circle-red {
  background-color: #ff6b6b;
  bottom: -20%;
  right: -15%;
}

.backdrop {
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  backdrop-filter: blur(200px);
  background-color: rgba(0, 0, 0, 0.306);
}

.login-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
}

.title {
  position: relative; /* 위치 조정 */
  font-size: 58px; /* 폰트 크기를 줄임 */
  font-family: 'sans-serif';
  color: #ffffff; /* 텍스트 색상을 흰색으로 변경 */
  white-space: nowrap; /* 텍스트를 한 줄로 유지 */
}

.subtitle {
  position: relative; /* 위치 조정 */
  font-size: 18px; /* 서브타이틀의 크기 */
  font-family: 'Arial', sans-serif; /* 서브타이틀의 폰트 패밀리 */
  color: #888888; /* 어두운 색상으로 변경 */
  white-space: nowrap; /* 텍스트를 한 줄로 유지 */
  overflow: hidden; /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis; /* 넘치는 텍스트에 '...' 표시 */
}

.login-box {
  background-color: #1b2336;
  border: 2px solid #293144;
  border-radius: 8px;
  padding: 20px;
  font-family: 'Consolas';
  width: 100%; /* 추가: 너비를 100%로 설정 */
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}

.welcome-text {
  color: #6c7990;
  white-space: nowrap; /* Prevent text from wrapping */
}

.line {
  display: inline-block; /* Allow each line to be animated separately */
}
.form-container {
  margin-top: 16px;
}

.input-field {
  margin-top: 16px;
}

.field-label {
  font-weight: bold;
  color: #15c2bd;
  display: block;
}

.input-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin-top: 4px;
}

.text-input {
  outline: none;
  background-color: transparent;
  border: none;
  color: white;
  margin-left: 8px;
}

.button-wrapper {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}

.button {
  border: 1px solid #43b369;
  color: #43b369;
  padding: 4px 16px;
  border-radius: 6px;
  transition: all 0.3s;
}

.button:hover {
  background-color: #43b369;
  color: white;
}
</style>
