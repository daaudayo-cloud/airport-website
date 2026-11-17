// ご意見フォームの送信処理
const form = document.querySelector("form");
const messageInput = document.getElementById("message");
const sendStatus = document.getElementById("send-status");

form.addEventListener("submit", function (event) {
  // ページが再読み込みされないようにする
  event.preventDefault();

  // 入力欄が空（スペースや改行だけの場合も含む）なら警告を出す
  if (messageInput.value.trim() === "") {
    alert("内容を入力してください");
    messageInput.focus();
    return;
  }

  // ボタンの上に「送信完了！」を表示し、入力欄を空にする
  sendStatus.textContent = "送信完了！";
  messageInput.value = "";
});

// 再び入力を始めたら「送信完了！」の表示を消す
messageInput.addEventListener("input", function () {
  sendStatus.textContent = "";
});
