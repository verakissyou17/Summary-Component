const allSections = document.querySelectorAll(".js--section")
console.log(allSections)

fetch("./data.json")
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    data.forEach((item, index) => {
      allSections[index].innerHTML += `
          <div class="image--section">
            <img src="${item.icon}" alt="a small svg icon">
            <h3 class="reaction--p">${item.category}</h3>
          </div>
          <p><strong>${item.score}</strong><span> / 100</span></p>`
    })
  })
