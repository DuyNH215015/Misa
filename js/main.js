document.addEventListener("DOMContentLoaded", async () => {
  await initCandidateData();
  initPagination();
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleBtn = document.getElementById("toggleBtn");
  // kiểm tra trạng thái đang lưu trong localstorage
  const STORAGE_KEY = "sidebar-collapsed";
  const isCollapsed = localStorage.getItem(STORAGE_KEY) === "true";
  if (isCollapsed) {
    sidebar.classList.add("collapsed");
  }
  // set trạng thái cho localstorage
  toggleBtn.addEventListener("click", function () {
    sidebar.classList.toggle("collapsed");

    localStorage.setItem(STORAGE_KEY, sidebar.classList.contains("collapsed"));
  });
});

// đếm số bản ghi
const candidates = getCandidates();
const total = candidates.length;
const totalEl = document.getElementById("total");
if (totalEl) {
  totalEl.textContent = total;
}
// đặt active cho sidebar
const sidebarItems = document.querySelectorAll(".sidebar-item");

sidebarItems.forEach((item) => {
  item.addEventListener("click", () => {
    sidebarItems.forEach((i) => i.classList.remove("active"));

    item.classList.add("active");

    console.log("Active:", item.innerText.trim());
  });
});

// kiem tra trang thai dateinput
const dateInputs = document.querySelectorAll(".date-input");

function updateDateState(input) {
  if (input.value) {
    input.classList.add("has-value");
  } else {
    input.classList.remove("has-value");
  }
}
dateInputs.forEach((input) => {
  input.addEventListener("change", () => updateDateState(input));
  input.addEventListener("blur", () => updateDateState(input));
  updateDateState(input);
});
