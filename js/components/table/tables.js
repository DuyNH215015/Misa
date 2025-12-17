function initResizableTable(tableSelector) {
  const table = document.querySelector(tableSelector);
  const ths = table.querySelectorAll("th");

  let startX, startWidth, colIndex;

  ths.forEach((th, index) => {
    const handle = document.createElement("div");
    handle.className = "resize-handle";
    th.appendChild(handle);

    handle.addEventListener("mousedown", (e) => {
      startX = e.pageX;
      startWidth = th.offsetWidth;
      colIndex = index;

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    });
  });

  function onMouseMove(e) {
    const newWidth = startWidth + (e.pageX - startX);
    if (newWidth < 60) return;

    ths[colIndex].style.width = newWidth + "px";

    table.querySelectorAll("tbody tr").forEach(tr => {
      tr.children[colIndex].style.width = newWidth + "px";
    });
  }

  function onMouseUp() {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }
}
