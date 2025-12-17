// tạo avartar cho người dùng
function getAvatarText(fullName) {
  if (!fullName) return "";

  const words = fullName.trim().split(/\s+/).filter(Boolean);

  if (words.length === 1) {
    return words[0][0].toUpperCase();
  }

  const firstChar = words[0][0];
  const lastChar = words[words.length - 1][0];

  return (firstChar + lastChar).toUpperCase();
}
// check dữ liệu null
function renderValue(value) {
  if (value === null || value === undefined || value === "") {
    return "--";
  }
  return value;
}
// render dữ liệu ra bảng
// function renderCandidates() {
//   const tbody = document.getElementById("candidate-table-body");
//   const candidates = getCandidates();

//   tbody.innerHTML = "";

//   candidates.forEach(renderCandidateRow);
// }
function renderCandidates(list = null) {
  const tbody = document.getElementById("candidate-table-body");
  tbody.innerHTML = "";

  const candidates = list || getCandidates();
  if (candidates.length === 0) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td colspan="24" style="text-align: start; color: #999; padding: 20px;">
        Không có dữ liệu phù hợp
      </td>
    `;
    tbody.appendChild(tr);
    return;
  }
  candidates.forEach((c) => renderCandidateRow(c));
}

function renderCandidateRow(c) {
  const tbody = document.getElementById("candidate-table-body");
  const avatar = getAvatarText(c.fullName);

  const tr = document.createElement("tr");
  const colors = [
    "#FF5733",
    "#33FFFF",
    "#3357FF",
    "#F1C40F",
    "#8E44AD",
    "#99FF00",
    "#FFCCCC",
    "#CCCCCC",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  tr.dataset.id = c.id;

  tr.innerHTML = `
     <td class="col-checkbox">
      <input type="checkbox" />
    </td>
      <td>
      <div class="display-flex align-items-center">
        <div class="avatar-circle" style="background-color: ${randomColor}">${avatar}</div>
        <span>${renderValue(c.fullName)}</span>
      </div>
    </td>
    <td>${renderValue(c.phone)}</td>
    <td>${renderValue(c.source)}</td>
  
    <td>${renderValue(c.email)}</td>
    <td>${renderValue(c.campaign)}</td>
    <td>${renderValue(c.position)}</td>
    <td>${renderValue(c.jobPost)}</td>
    <td>${renderValue(c.stage)}</td>
    <td>${renderValue(c.rating)}</td>
    <td>${renderValue(c.applyDate)}</td>
    <td>${renderValue(c.educationLevel)}</td>
    <td>${renderValue(c.educationPlace)}</td>
    <td>${renderValue(c.major)}</td>
    <td>${renderValue(c.lastCompany)}</td>
    <td>${renderValue(c.recruiter)}</td>
    <td>${renderValue(c.department)}</td>
    <td>${renderValue(c.jobFit)}</td>
    <td>${renderValue(c.area)}</td>
    <td>${renderValue(c.referrer)}</td>
    <td>${renderValue(c.receivingInfo)}</td>
    <td>${renderValue(c.talentPool)}</td>
    <td class="col-action" >
      <div class="row-action">
        <div class="row-edit-icon" id="icon-edit" </div>
      </div>
    </td>
  `;

  tbody.appendChild(tr);
}
function renderCandidateRowFirst(c) {
  const tbody = document.getElementById("candidate-table-body");
  const avatar = getAvatarText(c.fullName);

  const tr = document.createElement("tr");
  const colors = [
    "#FF5733",
    "#33FFFF",
    "#3357FF",
    "#F1C40F",
    "#8E44AD",
    "#99FF00",
    "#FFCCCC",
    "#CCCCCC",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  tr.dataset.id = c.id;

  tr.innerHTML = `
     <td class="col-checkbox">
      <input type="checkbox" />
    </td>
      <td>
      <div class="display-flex align-items-center">
        <div class="avatar-circle" style="background-color: ${randomColor}">${avatar}</div>
        <span>${renderValue(c.fullName)}</span>
      </div>
    </td>
    <td>${renderValue(c.phone)}</td>
    <td>${renderValue(c.source)}</td>
  
    <td>${renderValue(c.email)}</td>
    <td>${renderValue(c.campaign)}</td>
    <td>${renderValue(c.position)}</td>
    <td>${renderValue(c.jobPost)}</td>
    <td>${renderValue(c.stage)}</td>
    <td>${renderValue(c.rating)}</td>
    <td>${renderValue(c.applyDate)}</td>
    <td>${renderValue(c.educationLevel)}</td>
    <td>${renderValue(c.educationPlace)}</td>
    <td>${renderValue(c.major)}</td>
    <td>${renderValue(c.lastCompany)}</td>
    <td>${renderValue(c.recruiter)}</td>
    <td>${renderValue(c.department)}</td>
    <td>${renderValue(c.jobFit)}</td>
    <td>${renderValue(c.area)}</td>
    <td>${renderValue(c.referrer)}</td>
    <td>${renderValue(c.receivingInfo)}</td>
    <td>${renderValue(c.talentPool)}</td>
    <td class="col-action" >
      <div class="row-action">
        <div class="row-edit-icon" id="icon-edit" </div>
      </div>
    </td>
  `;

  tbody.insertBefore(tr, tbody.firstChild);
}
