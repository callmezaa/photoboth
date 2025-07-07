const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// Aktifin kamera
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error("Gagal akses kamera", err);
  });

// Ambil Foto
function takePhoto() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Tambahin frame
  const frame = document.getElementById("frame");
  const img = new Image();
  img.src = frame.src;
  img.onload = () => {
    context.drawImage(img, 0, 0, canvas.width, canvas.height);
  };
}

// Download Foto
function downloadPhoto() {
  const link = document.createElement("a");
  link.download = "foto-lucu.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
}

function scrollToBooth() {
  document.getElementById("booth").scrollIntoView({ behavior: "smooth" });
}
function changeFrame() {
  const select = document.getElementById("frameSelect");
  const frame = document.getElementById("frame");
  frame.src = "assets/frames/" + select.value;
}
function changeFilter() {
  const selectedFilter = document.getElementById("filterSelect").value;
  video.style.filter = selectedFilter;
}
