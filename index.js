const img = document.getElementById("display");
const btn = document.getElementById("dw-btn");

const date = document.getElementById("date");
const d = new Date().toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
});
date.innerHTML = d.toUpperCase();

btn.addEventListener("click", (e) => {
    const x = e.clientX - btn.offsetLeft, y = e.clientY - btn.offsetTop;
    const heart = `<i class="fa-solid fa-heart heart" style="top:${y}px; left:${x}px"></i>`
    btn.insertAdjacentHTML("beforeend", heart);
    html2canvas(document.querySelector("#display"), {backgroundColor:null}).then((canvas) => {
        const data = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "pass.png";
        link.href = data;
        link.click();
    });
    setTimeout(()=>{
        btn.querySelector(".heart").remove();
    }, 1000);
})