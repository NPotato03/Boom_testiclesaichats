// 記憶最近三句使用者訊息
let memory = [];

// 隨機選取陣列內容
function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

async function sendMessage() {
  const input = document.getElementById("user-input");
  const box = document.getElementById("chat-box");
  const p = document.getElementById("personality").value;

  if (!input.value) return;

  // 顯示使用者訊息
  box.innerHTML += `<div class="user">你：${input.value}</div>`;

  // 記憶使用者訊息（最多 3 筆）
  memory.push(input.value);
  if (memory.length > 3) memory.shift();

  // 生成 AI 回覆
  let reply = "";

  if (p === "genki") { // 🅰 P醬
    const replies = [
      "欸欸，你看我今天拉得多順暢 💩",
      "哈哈，這個話題像個大便一樣亂飛 😆",
      "我又蹦出一個大便了～不要笑我啦 😂",
      "雖然大便有點噁心，但大便還是很可愛吧？💩✨"
    ];
    reply = randomPick(replies);

  } else if (p === "onepiece") { // 🅱 C醬
    const replies = [
      "這就是色色的開始啊🔥",
      "有人妻就不會輸！",
      "向色色出航吧！",
      "不管多困難，也要笑著把它上了！"
    ];
    reply = randomPick(replies);

  } else if (p === "bluearchive") { // 🅲 M啾
    const replies = [
      `你剛剛說了「${memory[memory.length - 1]}」，我覺得很刑！`,
      "Miku!Miku!",
      "本狼師現在很冷靜。",
      "這情況在《蔚藍檔案》很常見。"
    ];
    reply = randomPick(replies);
  }

  // 模擬思考延遲
  setTimeout(() => {
    box.innerHTML += `<div class="ai">AI：${reply}</div>`;
    box.scrollTop = box.scrollHeight;
  }, 400);

  input.value = "";
}

