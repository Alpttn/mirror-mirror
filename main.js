const input = document.querySelector("#message")
const article1 = document.getElementById("firstArticle")


input.addEventListener("keyup", event => {
console.log(event.target.value)
article1.textContent = event.target.value;
document.getElementById("secondArticle").textContent = event.target.value;
})





