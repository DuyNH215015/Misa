const STORAGE_KEY = "CANDIDATE_LIST";
const DATA_URL = "./js/data/candidate-data.json";
// fetch dữ liệu lên storage
async function initCandidateData() {
  const storedData = localStorage.getItem(STORAGE_KEY);

  if (storedData) return;

  try {
    const res = await fetch(DATA_URL);
    const data = await res.json();

    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (err) {
    console.error("Không load được candidate-data.json", err);
  }
}
// lấy dữ liệu vêf
function getCandidates() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}


