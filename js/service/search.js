const searchInput = document.getElementById("search-grid");

searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase().trim();
  
  const allCandidates = getCandidates();

  const filtered = allCandidates.filter((c) => {
    return (
      (c.fullName && c.fullName.toLowerCase().includes(query)) ||
      (c.email && c.email.toLowerCase().includes(query)) ||
      (c.phone && c.phone.toLowerCase().includes(query))
    );
  });

  renderCandidates(filtered);
});

