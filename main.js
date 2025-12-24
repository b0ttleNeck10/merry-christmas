const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const letter = document.querySelector('#letter');

const p1 = document.querySelector('#page1');
const p2 = document.querySelector('#page2');

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage)

let currentLocation = 1;
let paperNum = 2;
let maxLocation = paperNum + 1;

function updateButtonsVisibility() {
    if (currentLocation === 1) {
        prevBtn.style.visibility = "hidden"; 
    } else {
        prevBtn.style.visibility = "visible"; 
    }

    if (currentLocation === maxLocation) {
        nextBtn.style.visibility = "hidden"; 
    } else {
        nextBtn.style.visibility = "visible"; 
    }
}

function openBook() {
    letter.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isBeginning) {
    if(isBeginning) {
        letter.style.transform = "translateX(0%)";
    } else {
        letter.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translate(0px)";
    nextBtn.style.transform = "translate(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1: 
                openBook();
                p1.classList.add("flipped");
                p1.style.zIndex = 1; 
                break;
            case 2:
                p2.classList.add("flipped");
                p2.style.zIndex = 2;
                closeBook(false);
                break;
            default:
                throw new Error("Unknown state");
        }
        currentLocation++;
        updateButtonsVisibility();
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2: 
                closeBook(true);
                p1.classList.remove("flipped");
                p1.style.zIndex = 2;
                break;
            case 3:
                openBook();
                p2.classList.remove("flipped");
                p2.style.zIndex = 1;
                break;
            default:
                throw new Error("Unknown state");
        }
        currentLocation--;
        updateButtonsVisibility();
    }
}

updateButtonsVisibility();