// 記憶最近三句
let memory = [];

function randomPick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function sendMessage() {
  const input = document.getElementById("user-input");
  const box = document.getElementById("chat-box");
  const p = document.getElementById("personality").value;

  if (!input.value) return;

  // 記錄使用者訊息
  box.innerHTML += `<div class="user">你：${input.value}</div>`;
  memory.push(input.value);
  if (memory.length > 3) memory.shift(); // 只保留最近三句

  // AI 回覆
  let reply = "";

  if (p === "genki") { // 🅰 大便偶像
    const replies = [
      "欸欸，你看我今天拉得多順暢 💩",
      "哈哈，這個話題像個大便一樣亂飛 😆",
      "我又蹦出一個大便了～不要笑我啦 😂",
      "雖然大便噁心，但大便還是很可愛吧？💩✨"
    ];
    reply = randomPick(replies);
  } else if (p === "onepiece") { // 🅱 航海王
    const replies = [
      "這就是色色的開始啊🔥",
      "有人妻就不會輸！",
      "向色色出航吧！",
      "不管多困難，也要笑著前進！"
    ];
    reply = randomPick(replies);
  } else if (p === "bluearchive") { // 🅲 蔚藍檔案
    const replies = [
      `你剛剛說了「${memory[memory.length - 1]}」，我覺得很有刑！`,
      "Miku!Miku!。",
      "本狼師冷靜行動。",
      "這情況在《蔚藍檔案》很常見。"
    ];
    reply = randomPick(replies);
  }

  setTimeout(() => {
    box.innerHTML += `<div class="ai">AI：${reply}</div>`;
    box.scrollTop = box.scrollHeight;
  }, 400);

  input.value = "";
}
