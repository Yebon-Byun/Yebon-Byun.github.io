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
    let mediaHTML = '';

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
      mediaHTML = '';
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
    modalVideo.style.display = 'block';
    modalImg.style.display = 'none';
    modalVideoSource.src = p.video;
    modalVideo.load();
    modalVideo.play().catch(() => {});
  } else if (p.image) {
    modalVideo.style.display = 'none';
    modalImg.style.display = 'block';
    modalImg.src = p.image;
  } else {
    modalVideo.style.display = 'none';
    modalImg.style.display = 'none'; // 아무 미디어도 없을 때
  }

  modalTitle.innerHTML = p.title;
  modalDesc.innerHTML = p.description;
  modalBody.innerHTML = p.content || '';

  // 버튼 처리
  modalGitHub.style.display = p.github ? 'inline-block' : 'none';
  modalDemo.style.display = p.demo ? 'inline-block' : 'none';

  if (p.github) modalGitHub.href = p.github;
  else modalGitHub.removeAttribute('href');

  if (p.demo) modalDemo.href = p.demo;
  else modalDemo.removeAttribute('href');

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

/* ───────────────────────────────
   8. 모달 안에서도 이미지 확대 기능 되도록 만들기
─────────────────────────────── */

// 1. 뷰어 HTML 생성 (화살표 버튼 추가됨)
if (!document.getElementById('dynamic-image-viewer')) {
  const viewerHTML = `
    <div id="dynamic-image-viewer" class="js-image-viewer">
      <span class="viewer-close-btn">&times;</span>
      
      <button class="viewer-nav prev">&#10094;</button> <button class="viewer-nav next">&#10095;</button> <img id="dynamic-viewer-img" src="" alt="Full Screen Image">
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', viewerHTML);
}

// 요소 가져오기
const viewer = document.getElementById('dynamic-image-viewer');
const fullImg = document.getElementById('dynamic-viewer-img');
const closeBtn = document.querySelector('.viewer-close-btn');
const prevBtn = document.querySelector('.viewer-nav.prev');
const nextBtn = document.querySelector('.viewer-nav.next');

// 상태 변수 (현재 보고 있는 이미지 그룹과 순서)
let currentImages = []; // 현재 그리드의 모든 이미지 태그들
let currentIndex = 0; // 현재 보고 있는 이미지의 번호

// 2. 이미지 클릭 시 뷰어 열기
document.addEventListener('click', function (e) {
  // ig-grid 안의 이미지를 클릭했을 때
  if (e.target.tagName === 'IMG' && e.target.closest('.ig-grid')) {
    e.stopPropagation();
    e.preventDefault();

    // 2-1. 현재 클릭한 이미지가 속한 그리드(.ig-grid)를 찾음
    const currentGrid = e.target.closest('.ig-grid');

    // 2-2. 그 그리드 안에 있는 모든 이미지를 순서대로 가져옴
    currentImages = Array.from(currentGrid.querySelectorAll('img'));

    // 2-3. 클릭한 이미지가 몇 번째인지 확인
    currentIndex = currentImages.indexOf(e.target);

    // 뷰어 업데이트 및 열기
    updateViewerImage();
    openViewer();
  }
});

// 3. 뷰어 열기 함수
function openViewer() {
  viewer.style.display = 'flex';
  document.body.style.overflow = 'hidden'; // 스크롤 잠금
  setTimeout(() => viewer.classList.add('show'), 10);
}

// 4. 뷰어 이미지 업데이트 함수
function updateViewerImage() {
  // 현재 인덱스에 해당하는 이미지 주소를 넣음
  fullImg.src = currentImages[currentIndex].src;

  // (선택) 이미지가 1개뿐이면 화살표 숨기기
  if (currentImages.length <= 1) {
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';
  } else {
    prevBtn.style.display = 'block';
    nextBtn.style.display = 'block';
  }
}

// 5. 다음/이전 버튼 클릭 이벤트
function showNext() {
  currentIndex = (currentIndex + 1) % currentImages.length; // 끝에 가면 처음으로
  updateViewerImage();
}

function showPrev() {
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length; // 처음에서 뒤로 가면 끝으로
  updateViewerImage();
}

// 버튼 클릭 시 이벤트 버블링 막기 (배경 클릭 닫기 방지)
nextBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  showNext();
});
prevBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  showPrev();
});

// 6. 키보드 화살표 키로도 넘기기 (Left/Right)
document.addEventListener('keydown', (e) => {
  if (viewer.style.display === 'flex') {
    if (e.key === 'ArrowRight') showNext();
    if (e.key === 'ArrowLeft') showPrev();
    if (e.key === 'Escape') closeViewer();
  }
});

// 7. 닫기 관련 (X버튼, 배경 클릭)
closeBtn.addEventListener('click', closeViewer);
viewer.addEventListener('click', (e) => {
  if (e.target !== fullImg && e.target !== prevBtn && e.target !== nextBtn) {
    closeViewer();
  }
});

function closeViewer() {
  viewer.classList.remove('show');
  setTimeout(() => {
    viewer.style.display = 'none';
    fullImg.src = '';

    // 모달이 열려있는지 확인 후 스크롤 복원
    const modal = document.getElementById('projectModal');
    if (!modal || modal.style.display !== 'flex') {
      document.body.style.overflow = '';
    }
  }, 300);
}
