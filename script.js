const searchBox = document.getElementById("searchBox");
const searchButton = document.getElementById("searchButton");
const results = document.getElementById("results");
const status = document.getElementById("status");

searchButton.addEventListener("click", search);

searchBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    search();
  }
});

function search() {
  const query = searchBox.value.trim();

  if (!query) {
    status.textContent = "اكتب كلمة للبحث أولاً";
    results.innerHTML = "";
    return;
  }

  status.textContent = "جاري البحث...";
  results.innerHTML = `
    <div class="result">
      <h2>نتيجة البحث</h2>
      <p>أنت تبحث عن: <strong>${query}</strong></p>
    </div>
  `;
}
