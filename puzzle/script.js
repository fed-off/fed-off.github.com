const gridSize = 6;
let blockSize;
const blocks = [
    { id: 'red1', x: 0, y: 1, width: 1, height: 2, color: 'red' },
    { id: 'red2', x: 1, y: 0, width: 1, height: 3, color: 'red' },
    { id: 'red3', x: 3, y: 0, width: 1, height: 2, color: 'red' },
    { id: 'red4', x: 4, y: 1, width: 1, height: 3, color: 'red' },
    { id: 'red5', x: 2, y: 3, width: 1, height: 2, color: 'red' },
    { id: 'red6', x: 0, y: 4, width: 1, height: 2, color: 'red' },
    { id: 'red7', x: 5, y: 4, width: 1, height: 2, color: 'red' },
    { id: 'green1', x: 4, y: 0, width: 2, height: 1, color: 'green' },
    { id: 'green2', x: 0, y: 3, width: 2, height: 1, color: 'green' },
    { id: 'green3', x: 3, y: 4, width: 2, height: 1, color: 'green' },
    { id: 'green4', x: 1, y: 5, width: 2, height: 1, color: 'green' },
    { id: 'key', x: 2, y: 2, width: 2, height: 1, color: 'key' }
];


document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const viewPortSize = document.documentElement.clientWidth;
    if (viewPortSize < 768) {
        blockSize = 48;
    } else {
        blockSize = 100;
    }
    function createBlock(block) {
        const element = document.createElement('button');
        element.classList.add('block', block.color);
        element.style.width = `${block.width * blockSize + (block.width - 1) * 5}px`;
        element.style.height = `${block.height * blockSize + (block.height - 1) * 5}px`;
        element.style.left = `${block.x * blockSize + block.x * 5}px`;
        element.style.top = `${block.y * blockSize + block.y * 5}px`;
        element.dataset.x = block.x;
        element.dataset.y = block.y;
        element.dataset.width = block.width;
        element.dataset.height = block.height;
        element.dataset.color = block.color;
        element.dataset.id = block.id;
        grid.appendChild(element);
    }


    blocks.forEach(createBlock);

    let selectedBlock = null;

    function startDrag(e) {
        const event = e.touches ? e.touches[0] : e;
        if (event.target.classList.contains('block')) {
            selectedBlock = event.target;
            selectedBlock.initialX = event.clientX;
            selectedBlock.initialY = event.clientY;
            selectedBlock.startX = parseInt(selectedBlock.dataset.x);
            selectedBlock.startY = parseInt(selectedBlock.dataset.y);
        }
    }

    function stopDrag() {
        if (selectedBlock) {
            selectedBlock = null;
        }
    }

    function drag(e) {
        e.preventDefault();
        const event = e.touches ? e.touches[0] : e;
        if (selectedBlock) {
            const dx = event.clientX - selectedBlock.initialX;
            const dy = event.clientY - selectedBlock.initialY;
            const deltaX = Math.round(dx / blockSize);
            const deltaY = Math.round(dy / blockSize);
            const newX = selectedBlock.startX + (selectedBlock.dataset.color === 'green' || selectedBlock.dataset.color === 'key' ? deltaX : 0);
            const newY = selectedBlock.startY + (selectedBlock.dataset.color === 'red' ? deltaY : 0);

            if (canMove(selectedBlock, newX, newY)) {
                selectedBlock.style.left = `${newX * blockSize + newX * 5}px`;
                selectedBlock.style.top = `${newY * blockSize + newY * 5}px`;
                selectedBlock.dataset.x = newX;
                selectedBlock.dataset.y = newY;
            }
        }
    }

    grid.addEventListener('mousedown', startDrag);
    grid.addEventListener('touchstart', startDrag);

    document.addEventListener('mouseup', stopDrag);
    document.addEventListener('touchend', stopDrag);

    document.addEventListener('mousemove', drag);
    document.addEventListener('touchmove', drag);

    function canMove(block, newX, newY) {
        const width = parseInt(block.dataset.width);
        const height = parseInt(block.dataset.height);

        // Check boundaries
        if (newX < 0 || newY < 0 || newX + width > gridSize || newY + height > gridSize) {
            return false;
        }

        // Check collisions
        for (const otherBlock of document.querySelectorAll('.block')) {
            if (otherBlock === block) continue;
            const otherX = parseInt(otherBlock.dataset.x);
            const otherY = parseInt(otherBlock.dataset.y);
            const otherWidth = parseInt(otherBlock.dataset.width);
            const otherHeight = parseInt(otherBlock.dataset.height);

            if (
                newX < otherX + otherWidth &&
                newX + width > otherX &&
                newY < otherY + otherHeight &&
                newY + height > otherY
            ) {
                return false;
            }
        }
        return true;
    }
});
