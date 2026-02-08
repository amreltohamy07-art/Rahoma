function checkPassword() {
  const pass = document.getElementById("password").value;
  if (pass === "23.2.2010") {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");

    // ظهور الرسالة النصية المشوقة
    const welcome = document.getElementById("welcome-message");
    welcome.classList.remove("hidden");
    setTimeout(() => { welcome.style.opacity = 1; }, 100);
    setTimeout(() => { welcome.style.opacity = 0; }, 4000);

    // ظهور الفقرات تدريجي
    const boxes = document.querySelectorAll(".fade");
    boxes.forEach((box, index) => {
      setTimeout(() => { box.classList.add("show"); }, index * 1500);
    });

  } else {
    alert("كلمة السر غلط 💔");
  }
}

// قلوب متحركة
setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}, 400);
