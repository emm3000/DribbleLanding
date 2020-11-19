const aea = document.querySelector("#aea")
const li = document.querySelector(".show")

console.log(li)
li.addEventListener("mouseover", () => {
  aea.style.display = 'block'
})


li.addEventListener("mouseout", () => {
  aea.style.display = 'none'
})

