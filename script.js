feather.replace();

const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburgerMenu = document.querySelector("#hamburger-menu");
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Fetching Data

const gistUrl = "https://gist.githubusercontent.com/fanhdt/c79a84879456e2832d88bf3e1020895a/raw/0c38afd136e1176bdc6de54e06ee3a1bd5f6049d/course.json";

async function getCourses() {
  try {
    const response = await fetch(gistUrl);
    if (!response.ok) {
      throw new Error("Gagal mengambil data");
    }
    const courses = await response.json();
    displayCourses(courses);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayCourses(courses) {
  const courseList = document.querySelector("#course-list");

  courseList.innerHTML = "";

  courses.forEach((course) => {
    courseList.innerHTML += `
    <div class="menu-card">
        <img src="${course.image}"></img>
        <div class="menu-card-content">
            <span>${course.category}</span>
            <h3>${course.title}</h3>
            <p>${course.description}</p>
            <small>Mentor: ${course.mentor}</small>
            <strong>${course.price}</strong>
            <a href="course.html?slug=${course.slug}">
            Lihat Kelas
            </a>
        </div>
    </div>
    `;
  });
}

getCourses();
