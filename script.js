const movable = document.getElementById('movable');

function moveRight(){
    let currentLeft = parseInt(movable.style.left, 10);


    if(isNaN(currentLeft)){
        currentLeft = 0;
    }

    movable.style.left = `${currentLeft + 10}px`;

}

document.addEventListener('click',moveRight);