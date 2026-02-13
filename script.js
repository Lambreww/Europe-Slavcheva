const points = {
  1: { title: "Любовта като солидарност", img: "./assets/popup-1.jpg", desc: "" },
  2: { title: "Когато любовта боли", img: "./assets/popup-2.jpg", desc: "" },
  3: { title: "Когато любовта липсва", img: "./assets/popup-3.jpg", desc: "" },
  4: { title: "Уважение към различието", img: "./assets/popup-4.jpg", desc: "" },
  5: { title: "Европа, която избираме.", img: "./assets/popup-5.jpg", desc: "" },
};

const modalBackdrop = document.getElementById("modalBackdrop");
const modalTitle = document.getElementById("modalTitle");
const modalImg = document.getElementById("modalImg");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.getElementById("closeBtn");

function openModal(data) {
  modalTitle.textContent = data.title;
  modalImg.src = data.img;
  modalImg.alt = data.title;
  modalDesc.textContent = data.desc || "";
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modalBackdrop.hidden = true;
  modalImg.src = "";
  document.body.style.overflow = "";
}

document.querySelectorAll(".map-point").forEach((btn) => {
  btn.addEventListener("click", () => {
    const id = btn.dataset.id;
    const data = points[id];
    if (!data) return;
    openModal(data);
  });
});

closeBtn.addEventListener("click", closeModal);

modalBackdrop.addEventListener("mousedown", (e) => {
  if (e.target === modalBackdrop) closeModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modalBackdrop.hidden) closeModal();
});

function openModal(data) {
  modalTitle.textContent = data.title || "";

  // Ако няма снимка – скриваме img (иначе браузърът прави грешен request)
  if (data.img) {
    modalImg.hidden = false;
    modalImg.src = data.img;
    modalImg.alt = data.title || "";
  } else {
    modalImg.hidden = true;
    modalImg.src = "";
    modalImg.alt = "";
  }

  modalDesc.textContent = data.desc || "";
  modalBackdrop.hidden = false;
  document.body.style.overflow = "hidden";
}

