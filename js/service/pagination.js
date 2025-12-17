document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.getElementById("candidate-table-body");
  const totalSpan = document.getElementById("total");
  const startSpan = document.getElementById("start");
  const endSpan = document.getElementById("end");
  const selectRecords = document.querySelector(".drop-down-record select");
  const btnPrev = document.getElementById("icon-left");
  const btnNext = document.getElementById("icon-right");

  let candidates = getCandidates(); 
  let currentPage = 1;
  let recordsPerPage = parseInt(selectRecords.value) || 15;

  function renderPage() {
    tbody.innerHTML = "";

    const totalRecords = candidates.length;
    totalSpan.textContent = totalRecords;

    const start = (currentPage - 1) * recordsPerPage;
    const end = Math.min(start + recordsPerPage, totalRecords);

    startSpan.textContent = start + 1;
    endSpan.textContent = end;

    if (totalRecords === 0) {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td colspan="23" style="text-align:center">Không có dữ liệu</td>`;
      tbody.appendChild(tr);
      return;
    }

    const pageData = candidates.slice(start, end);
    pageData.forEach(renderCandidateRow); 
  }

  // chọn số bản ghi/trang
  selectRecords.addEventListener("change", () => {
    recordsPerPage = parseInt(selectRecords.value);
    currentPage = 1;
    renderPage();
  });

  // nút prev/next 
  btnPrev.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderPage();
    }
  });

  btnNext.addEventListener("click", () => {
    const totalPages = Math.ceil(candidates.length / recordsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderPage();
    }
  });

  renderPage();
});
