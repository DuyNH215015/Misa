const addpeople = document.getElementById("add-people");
const close = document.getElementById("close-popup");
const popup = document.getElementById("popup");
const btnSave = document.getElementById("btn-save");
const btnUpdate = document.getElementById("btn-update");

//  Mở popup thêm mới 
function openAddPopup() {
  popup.style.display = "flex";

  // Hiển thị nút Save, ẩn Update
  btnSave.style.display = "flex";
  btnUpdate.style.display = "none";

  btnSave.textContent = "Lưu";

  // Set text tiêu đề
  document.querySelector(".header-popup .text").textContent = "Thêm ứng viên";

  // Reset input
  popup.querySelectorAll("input, select, textarea").forEach((input) => {
    input.value = "";
  });
}
// Event mở popup thêm mới 
addpeople.addEventListener("click", openAddPopup);
// Đóng popup 
function closePopup() {
  popup.style.display = "none";
}
close.addEventListener("click", closePopup);
//  Đóng popup khi click ngoài 
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    closePopup();
  }
});
