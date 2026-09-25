function search() {
  const input = document.getElementById("searchInput").value;
  const results = document.getElementById("results");

  if (input.trim() === "") {
    results.innerHTML = "اكتب كلمة للبحث أولاً.";
    return;
  }

  results.innerHTML = `
    <h2>نتائج البحث</h2>
    <p>أنت تبحث عن: <strong>${input}</strong></p>
  `;
}
