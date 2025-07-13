<div class="container">
  <div class="color-box">
    <div class="title">색상 선택기</div>
    <input type="color" v-model="selectedColor" class="color-input" />
    <p class="color-code">선택한 색상: {{ computedRGBA }}</p>
    <button @click="copyToClipboard" class="copy-button">
      RGBA 값 복사
    </button>
  </div>
  <div class="toast-container">
    <div v-if="copied" class="toast">
      복사되었습니다!
    </div>
  </div>
</div>

<script setup>
import { ref, computed } from 'vue'

const selectedColor = ref('#000000')
const copied = ref(false)

// HEX 코드를 0~1 사이의 값으로 변환하여 RGBA 문자열 생성
const computedRGBA = computed(() => {
  let hex = selectedColor.value;
  if (hex.charAt(0) === '#') hex = hex.substring(1);
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${(r / 255).toFixed(1)}, ${(g / 255).toFixed(1)}, ${(b / 255).toFixed(1)}, 1.0`
});

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(computedRGBA.value);
    copied.value = true;
    setTimeout(() => { copied.value = false }, 2000);
  } catch (err) {
    console.error('복사 실패:', err);
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 고정된 크기와 내부 여백 조정 */
.color-box {
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 24px; /* 내부 요소와 떨어지게 패딩 추가 */
  background-color: rgba(0, 0, 0, 0.4); /* 훨씬 더 투명한 어두운 배경 */
  color: #fff; /* 텍스트 색은 고정 */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

/* 제목은 div로 처리 */
.title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 6px; /* 요소 간 간격 살짝 줄임 */
}

/* 색상 선택 input과 선택된 색상 텍스트 간 간격 줄임 */
.color-input {
  margin-bottom: 6px;
}

.color-code {
  margin: 0 0 6px 0;
}

.copy-button {
  padding: 8px 16px;
  background-color: #444;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.copy-button:hover {
  background-color: #666;
}

/* 토스트 알림을 위한 자리 미리 확보 (박스 아래에 고정된 높이) */
.toast-container {
  margin-top: 10px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toast {
  padding: 8px 12px;
  background-color: #4caf50;
  color: #fff;
  border-radius: 6px;
  animation: fadein 0.3s, fadeout 0.3s 1.7s;
}

@keyframes fadein {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes fadeout {
  from { opacity: 1; transform: translateY(0); }
  to   { opacity: 0; transform: translateY(-10px); }
}
</style>
