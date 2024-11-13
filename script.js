document.addEventListener("DOMContentLoaded", () => {
  const photos = document.querySelectorAll(".photo-card");

  photos.forEach((photo) => {
    photo.draggable = true;

    photo.addEventListener("dragstart", (e) => {
      e.dataTransfer.setData("text/plain", e.target.id);
    });

    photo.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    photo.addEventListener("drop", (e) => {
      e.preventDefault();
      const draggedId = e.dataTransfer.getData("text/plain");
      const draggedElement = document.getElementById(draggedId);
      const dropTarget = e.target.closest(".photo-card");
      if (dropTarget && draggedElement) {
        const container = document.querySelector(".gallery");
        container.insertBefore(draggedElement, dropTarget.nextSibling);
      }
    });
  });
});
