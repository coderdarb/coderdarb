// القائمة
const hamburger = document.getElementById("hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  const hamIcon = this.querySelector(".hamburger-icon");
  const crossIcon = this.querySelector(".cross-icon");
  if (hamIcon.style.display === "none") {
    hamIcon.style.display = "inline-block";
    menu.style.display = "none";
    crossIcon.style.display = "none";
  } else {
    crossIcon.style.display = "inline-block";
    hamIcon.style.display = "none";
    menu.style.display = "block";
  }
});


// التحميل

window.addEventListener("load", () => {
  const overlay = document.querySelector(".overlay");
  const content = document.querySelector(".content");

  // بعد فترة معينة (مثلاً 3 ثواني)، نغلق الـ overlay ونظهر المحتوى
  setTimeout(() => {
    overlay.style.opacity = "0";
    setTimeout(() => {
      overlay.style.display = "none"; // إخفاء الـ overlay بعد التلاشي
      content.style.display = "block"; // إظهار المحتوى
    }, 1000); // تأخير بسيط ليكتمل التلاشي
  }, 1000); // فترة العرض للانيميشن (3 ثواني)
});