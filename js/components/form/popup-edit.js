document.addEventListener("DOMContentLoaded", () => {
  let editingCandidateId = null;
  //  update obj vào storage
  function updateCandidateInLocalStorage(updatedData, id) {
    const list = getCandidates();
    const index = list.findIndex((item) => item.id == id);

    if (index === -1) {
      console.error("[updateCandidateInLocalStorage] Không tìm thấy id:", id);
      return;
    }
    // Chỉ update object đúng
    list[index] = { ...list[index], ...updatedData };
    localStorage.setItem("CANDIDATE_LIST", JSON.stringify(list));
    console.log(
      "[updateCandidateInLocalStorage] Đã update id:",
      id,
      list[index]
    );
  }

  // --------------------- Mở popup edit ---------------------
  function openEditPopup(candidateId) {
    const candidates = getCandidates();
    const candidate = candidates.find((c) => c.id == candidateId);
    if (!candidate) {
      console.error("[openEditPopup] Không tìm thấy ứng viên id:", candidateId);
      return;
    }

    editingCandidateId = candidateId;

    // Thay đổi tiêu đề
    const title = document.querySelector(".header-popup .text");
    if (title) title.textContent = "Chỉnh sửa thông tin ứng viên";

    // Ẩn import CV
    const importCv = document.querySelector(".import-cv");
    if (importCv) importCv.style.display = "none";
    btnUpdate.style.display = "flex";
    btnSave.style.display = "none";
    btnUpdate.textContent = "Cập nhật";

    // Bind dữ liệu lên pip
    popup.querySelectorAll("input, select, textarea").forEach((input) => {
      const name = input.name;
      input.value = candidate[name] !== undefined ? candidate[name] : "";
    });

    // Hiển thị popup
    popup.style.display = "flex";
  }

  //  Event delegation cho nút edit
  document
    .getElementById("candidate-table-body")
    .addEventListener("click", (e) => {
      const editBtn = e.target.closest(".row-edit-icon");
      if (!editBtn) return;

      const row = e.target.closest("tr");
      if (!row) return;

      const id = row.dataset.id;
      if (!id) return console.error("[click] Không tìm thấy data-id trên tr");

      openEditPopup(id);
    });

  //Lưu dữ liệu edit
  document.getElementById("btn-update").addEventListener("click", () => {
    if (!editingCandidateId) {
      return;
    }
    const updatedData = {};
    popup.querySelectorAll("input, select, textarea").forEach((input) => {
      const name = input.name;
      if (name) updatedData[name] = input.value;
    });

    updateCandidateInLocalStorage(updatedData, editingCandidateId);
    closePopup();
    renderCandidates();
    alert("Cập nhật ứng viên thành công ✅");
  });
});
