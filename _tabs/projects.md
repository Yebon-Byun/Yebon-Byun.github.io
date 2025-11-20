---
layout: projects
icon: fas fa-laptop-code
order: 0
---

<div class="filter-bar text-center">
  <button class="filter-button active" onclick="filterSelection('all', this)">All</button>
  <button class="filter-button" onclick="filterSelection('mldl', this)">ML/DL</button>
  <button class="filter-button" onclick="filterSelection('python', this)">Python</button>
  <button class="filter-button" onclick="filterSelection('java', this)">Java</button>
  <button class="filter-button" onclick="filterSelection('data', this)">Data</button>
  <button class="filter-button" onclick="filterSelection('web', this)">Web</button>
  <button class="filter-button" onclick="filterSelection('app', this)">App</button>
</div>

<div id="project-grid" class="project-grid"></div>