// form-handler.js
import { validateCandidate } from "./validate.js";

const form = document.querySelector(".right-content");

function getFormData() {
  const data = {};
  form
    .querySelectorAll("input[name], select[name], textarea[name]")
    .forEach((el) => {
      data[el.name] = el.value.trim();
    });
  return data;
}
function generateUniqueId(list) {
  let id;
  do {
    id = Date.now() + Math.floor(Math.random() * 1000);
  } while (list.some((item) => item.id === id));
  return id;
}
// lấy dữ liệu về push vào up lại lên storage
function saveToLocalStorage(data) {
  const list = getCandidates() || [];

  const newItem = {
    id: generateUniqueId(list),
    ...data,
  };

  list.unshift(newItem);
  localStorage.setItem("CANDIDATE_LIST", JSON.stringify(list));
}

// Luu ứng viên đẩy lên storage
document.getElementById("btn-save").addEventListener("click", () => {
  const data = getFormData();
  const result = validateCandidate(data);

  if (!result.isValid) {
    console.log("Lỗi validate:", result.errors);
    alert(Object.values(result.errors)[0]);
    return;
  }

  saveToLocalStorage(data);
  closePopup();
  renderCandidateRowFirst(data);
  alert("Lưu ứng viên thành công ✅");
});
