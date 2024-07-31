function toggleMenu()  {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//filter buttons 
//source : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_elements

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filter-div");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    console.log(element.className, arr2[i]);
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// source: https://www.w3schools.com/howto/howto_css_modals.asp
// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("button-container");
var btns = btnContainer.getElementsByClassName("filter-button");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    console.log(current);
  });
}


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// soruce: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
// function myFunction() {
//   var element = document.body;
//   element.classList.toggle("dark-mode");
// }


// document.addEventListener('DOMContentLoaded', (event) => {
//   const body = document.body;
//   const toggle = document.getElementById('dark-mode-toggle');

//   // 페이지 로드 시 로컬 스토리지에서 다크 모드 상태를 불러오기
//   if (localStorage.getItem('dark-mode') === 'enabled') {
//       body.classList.add('dark-mode');
//       toggle.checked = true;
//   }

//   window.toggleDarkMode = () => {
//       body.classList.toggle('dark-mode');
      
//       // 다크 모드 상태를 로컬 스토리지에 저장
//       if (body.classList.contains('dark-mode')) {
//           localStorage.setItem('dark-mode', 'enabled');
//       } else {
//           localStorage.setItem('dark-mode', 'disabled');
//       }
//   };
// });


function myFunction() {
  var element = document.body;
  var lightIcon = document.getElementById('light-icon');
  var darkIcon = document.getElementById('dark-icon');
  
  // 다크 모드 상태를 토글
  element.classList.toggle("dark-mode");

  // 다크 모드 상태에 따라 아이콘 업데이트
  if (element.classList.contains("dark-mode")) {
    lightIcon.style.display = 'block';
    darkIcon.style.display = 'none';
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    lightIcon.style.display = 'none';
    darkIcon.style.display = 'block';
    localStorage.setItem('dark-mode', 'disabled');
  }
}

document.addEventListener('DOMContentLoaded', (event) => {
  const body = document.body;
  const lightIcon = document.getElementById('light-icon');
  const darkIcon = document.getElementById('dark-icon');

  // 페이지 로드 시 로컬 스토리지에서 다크 모드 상태를 불러오기
  if (localStorage.getItem('dark-mode') === 'enabled') {
      body.classList.add('dark-mode');
      lightIcon.style.display = 'none';
      darkIcon.style.display = 'block';
  } else {
      lightIcon.style.display = 'block';
      darkIcon.style.display = 'none';
  }

  window.myFunction = myFunction;
});

// Modal
// 웹사이트 다크 모드 상태를 저장하는 함수
function setDarkMode(isDark) {
  if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('dark-mode', 'true');
  } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('dark-mode', 'false');
  }
}

// 웹사이트 로드 시 다크 모드 상태를 적용하는 함수
function applyStoredDarkMode() {
  const isDark = localStorage.getItem('dark-mode') === 'true';
  setDarkMode(isDark);
}

function openModal(element) {
  let title, description, image, video;

  if (element.classList.contains('project-title')) {
      title = element.getAttribute('data-title');
      description = element.getAttribute('data-description').replace(/\n/g, '<br>');
      image = element.getAttribute('data-image');
      video = element.getAttribute('data-video');
  } else if (element.classList.contains('article-container')) {
      const titleElement = element.nextElementSibling;
      title = titleElement.getAttribute('data-title');
      description = titleElement.getAttribute('data-description').replace(/\n/g, '<br>');
      image = titleElement.getAttribute('data-image');
      video = titleElement.getAttribute('data-video');
  } else {
      return;
  }

  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-description').innerHTML = description;

  const videoElement = document.getElementById('modal-video');
  const imageElement = document.getElementById('modal-image');

  if (video) {
      videoElement.style.display = 'block';
      document.getElementById('modal-video-source').src = video;
      videoElement.load();
      videoElement.play();
      imageElement.style.display = 'none';
  } else {
      imageElement.src = image;
      imageElement.style.display = 'block';
      videoElement.style.display = 'none';
  }

  document.getElementById('myModal').style.display = "block";

  // 모달이 열릴 때 다크 모드 적용
  if (document.body.classList.contains('dark-mode')) {
      document.getElementById('myModal').classList.add('dark-mode');
  } else {
      document.getElementById('myModal').classList.remove('dark-mode');
  }
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
  document.getElementById('modal-video').pause();
}

window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
      modal.style.display = "none";
      document.getElementById('modal-video').pause();
  }
}

// 다크 모드 토글 함수
function toggleDarkMode() {
  const isDark = !document.body.classList.contains('dark-mode');
  setDarkMode(isDark);

  // 모달이 열려 있을 때 다크 모드 적용
  if (document.getElementById('myModal').style.display === 'block') {
      if (isDark) {
          document.getElementById('myModal').classList.add('dark-mode');
      } else {
          document.getElementById('myModal').classList.remove('dark-mode');
      }
  }
}

// 웹사이트 로드 시 다크 모드 상태 적용
document.addEventListener('DOMContentLoaded', applyStoredDarkMode);

// 예시: 버튼 클릭으로 다크 모드 전환
document.getElementById('toggleModeButton').addEventListener('click', toggleDarkMode);
