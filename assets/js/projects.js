let projectData = [];

fetch('/projects.json')
  .then((res) => res.json())
  .then((data) => {
    projectData = data;
    renderProjects();
  });

function renderProjects() {
  const grid = document.getElementById('project-grid');
  grid.innerHTML = '';
  projectData.forEach((p) => {
    const card = document.createElement('div');
    card.className = `project-card ${p.category}`;
    let mediaHTML = "";

    if (p.video) {
      mediaHTML = `
        <video class="project-thumb" muted autoplay loop playsinline>
          <source src="${p.video}" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      `;
    } else if (p.image) {
      mediaHTML = `<img src="${p.image}" alt="${p.title}" class="project-thumb">`;
    } else {
      // 이미지도 비디오도 없으면 렌더링하지 않음
      mediaHTML = "";
    }


    card.innerHTML = `
  ${mediaHTML}
  <div class="project-info">
    <h3>${p.title}</h3>
    <p>${p.description}</p>
    <div class="skills">
      ${(p.skills || []).map((s) => `<span>${s}</span>`).join('')}
    </div>
  </div>
`;
    card.onclick = () => openModal(p.title);
    grid.appendChild(card);
  });
}

const modal = document.getElementById('projectModal');
const modalVideo = document.getElementById('modal-video');
const modalVideoSource = document.getElementById('modal-video-source');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');
const modalBody = document.getElementById('modal-body'); // 본문
const modalGitHub = document.getElementById('modal-github');
const modalDemo = document.getElementById('modal-demo');

function openModal(title) {
  const p = projectData.find((proj) => proj.title === title);

  modalVideo.pause();
  modalVideo.currentTime = 0;
  modalVideo.removeAttribute('src');
  modalVideo.load();

  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // 스크롤 고정

  // 미디어 처리
  if (p.video) {
    modalVideo.style.display = "block";
    modalImg.style.display = "none";
    modalVideoSource.src = p.video;
    modalVideo.load();
    modalVideo.play().catch(() => {});
  } else if (p.image) {
    modalVideo.style.display = "none";
    modalImg.style.display = "block";
    modalImg.src = p.image;
  } else {
    modalVideo.style.display = "none";
    modalImg.style.display = "none"; // 아무 미디어도 없을 때
  }
  

  modalTitle.innerHTML = p.title;
  modalDesc.innerHTML = p.description;
  modalBody.innerHTML = p.content || '';

  // 버튼 처리
  modalGitHub.style.display = p.github ? "inline-block" : "none";
  modalDemo.style.display = p.demo ? "inline-block" : "none";

  if (p.github) modalGitHub.href = p.github;
  else modalGitHub.removeAttribute("href");

  if (p.demo) modalDemo.href = p.demo;
  else modalDemo.removeAttribute("href");

  // 포커스 이동 (접근성)
  modal.setAttribute('aria-hidden', 'false');
  modal.focus();
}

function closeModal() {
  const modal = document.getElementById('projectModal');
  const modalVideo = document.getElementById('modal-video');
  const modalVideoSource = document.getElementById('modal-video-source');

  // 영상 멈추고 재생 위치 초기화
  modalVideo.pause();
  modalVideo.currentTime = 0;

  // 소스 제거 및 load()로 완전히 초기화
  modalVideoSource.src = '';
  modalVideo.load(); // 중요: 완전한 리셋

  // 모달 닫기 및 스크롤 복원
  modal.style.display = 'none';
  document.body.style.overflow = '';
  modal.setAttribute('aria-hidden', 'true');
}

// 6. 외부 클릭 & ESC 키 감지
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.style.display === 'flex') {
    closeModal();
  }
});

// 7. 필터 기능
function filterSelection(category, el) {
  const cards = document.querySelectorAll('.project-card');
  const buttons = document.querySelectorAll('.filter-button');

  buttons.forEach((btn) => btn.classList.remove('active'));
  el.classList.add('active');

  cards.forEach((card) => {
    card.style.display =
      category === 'all' || card.classList.contains(category)
        ? 'block'
        : 'none';
  });
}
