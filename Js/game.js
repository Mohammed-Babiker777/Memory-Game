let t_duration = 1000;
let blocksContainer = document.querySelector('.blocks-game');
let blocks = Array.from(blocksContainer.children);
let orderRange = [...Array(blocks.length).keys()];

document.querySelector('.button-control span').onclick = () => {
    let yourname = prompt("What's your name?");

    if (yourname == null || yourname == '') {
        document.querySelector('.name span').innerHTML = 'Unknown';
    } else {
        document.querySelector('.name span').innerHTML = yourname;
    }
    document.querySelector('.button-control').remove();
}



// Function

const shuffle = orderRange.sort((a, b) => 0.5 - Math.random());

function flipBlock(selectBlock) {
    selectBlock.classList.add('is-flipped');

    let allFlippedBlocks = blocks.filter((flippedBlocks) => flippedBlocks.classList.contains('is-flipped'));

    if (allFlippedBlocks.length === 2) {
        stopClicking();

        compareBlocks(allFlippedBlocks[0], allFlippedBlocks[1]);
    }
}


function stopClicking() {
    blocksContainer.classList.add('no-clicking');

    setTimeout(() => {
        blocksContainer.classList.remove('no-clicking');
    }, t_duration);
}

function compareBlocks(firstBlock, secondBlock) {
    if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

        firstBlock.classList.remove('is-flipped');
        secondBlock.classList.remove('is-flipped');

        firstBlock.classList.add('is-match');
        secondBlock.classList.add('is-match');


    } else {
        let tries = document.querySelector('.tries span');
        tries.innerHTML = parseInt(tries.innerHTML) + 1;

        setTimeout(() => {
            firstBlock.classList.remove('is-flipped');
            secondBlock.classList.remove('is-flipped');
        }, t_duration);
    }
}




blocks.forEach((block, index) => {
    block.style.order = orderRange[index];

    block.addEventListener('click', () => {
        flipBlock(block);
    })
})




