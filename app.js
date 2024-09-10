document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const resultsList = document.getElementById('resultsList');
    const allSearchData = document.getElementById('allSearchData');

    const searchData = ["Apple", "Apricot", "Application", "Banana", "Blueberry", "Blackberry", "Cherry"];

    function fetchSearchResults(query) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const results = searchData.filter(item => item.toLowerCase().includes(query.toLowerCase()));
          resolve(results);
        }, 1000);
      });
    }

    function updateResults(results) {
      resultsList.innerHTML = '';
      results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result;
        resultsList.appendChild(li);
      });
    }

    function debounce(fn, delay) {
      let timeoutId;
      return function (...args) {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          fn(...args);
        }, delay);
      };
    }

    allSearchData.textContent = searchData.join(", ");

    searchInput.addEventListener('input', debounce(async (e) => {
      const query = e.target.value.trim();
      if (query) {
        const results = await fetchSearchResults(query);
        updateResults(results);
      } else {
        resultsList.innerHTML = '';
      }
    }, 500));
});
