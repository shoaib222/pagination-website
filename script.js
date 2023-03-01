const itemsPerPage = 10;
let currentPage = 1;
let totalItems = 100;

const listEl = document.getElementById("list");
const paginationEl = document.querySelector("#pagination ul");

function displayList() {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  listEl.innerHTML = "";
  for (let i = startIndex; i < endIndex && i < totalItems; i++) {
    const liEl = document.createElement("li");
    liEl.classList.add("list-group-item");
    liEl.innerText = `Item ${i + 1}`;
    listEl.appendChild(liEl);
  }
}

function displayPagination() {
  paginationEl.innerHTML = "";
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const pageLink = document.createElement("li");
    pageLink.classList.add("page-item");
    const linkEl = document.createElement("a");
    linkEl.classList.add("page-link");
    linkEl.innerText = i;
    if (i === currentPage) {
      pageLink.classList.add("active");
    } else {
      linkEl.addEventListener("click", () => {
        currentPage = i;
        displayList();
        displayPagination();
      });
    }
    pageLink.appendChild(linkEl);
    paginationEl.appendChild(pageLink);
  }
}

displayList();
displayPagination();
