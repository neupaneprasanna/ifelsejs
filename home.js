document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const questionItems = document.querySelectorAll(".question-item");
  
    searchInput.addEventListener("input", function () {
      const searchText = searchInput.value.toLowerCase();
  
      questionItems.forEach((item) => {
        const questionText = item.textContent.toLowerCase();
  
        // Toggle visibility based on search query match
        if (questionText.includes(searchText)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
  