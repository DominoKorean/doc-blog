<!-- HEX 색상 선택기 -->
<div class="container">
  <div class="color-box">
    <div class="title">색상 선택기</div>
    <input type="color" v-model="selectedColor" class="color-input" />
    <p class="color-code">선택한 색상: {{ selectedColor }}</p>
    <button @click="copyToClipboard" class="copy-button">
      HEX 코드 복사
    </button>
  </div>
  <div class="toast-container">
    <div v-if="copied" class="toast">
      복사되었습니다!
    </div>
  </div>
</div>

<script setup>
import { ref } from 'vue'

const selectedColor = ref('#000000')
const copied = ref(false)

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(selectedColor.value)
    copied.value = true
    setTimeout(() => copied.value = false, 2000)
  } catch (err) {
    console.error('복사 실패:', err)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.color-box {
  width: 300px;
  height: 200px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 24px; /* ✔ 패딩 살짝 증가 */
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 6px; /* ✔ 간격 줄임 */
}

.color-input {
  margin-bottom: 6px; /* ✔ 간격 줄임 */
}

.color-code {
  margin: 0 0 6px 0; /* ✔ 간격 줄임 */
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

/* ✔ 토스트 영역은 고정 높이 유지 */
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
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeout {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-10px); }
}
</style>
<!-- HEX 색상 선택기 -->