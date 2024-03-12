const showBtns = document.querySelectorAll("#show-btn")
const boxes = document.querySelectorAll(".box")

boxes.forEach((box, ind) => {

    
    box.addEventListener("click", () => {
        box.classList.add("active")

    })

    showBtns[ind].addEventListener("click", 
    (e) => {
        box.classList.toggle("active")
        e.stopPropagation();
    })
});
