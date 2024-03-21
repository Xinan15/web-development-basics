// get the list items
const items = document.querySelectorAll('.list');
const right = document.getElementById('right');
const left = document.getElementById('left');

// loop through the list items
items.forEach((item) => {
    // listen for the start of a drag event
    item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', e.target.id);
        setTimeout(() => {
            e.target.classList.add('invisible');
        }, 0);
    });

    // listen for the end of a drag event
    item.addEventListener('dragend', (e) => {
        e.target.classList.remove('invisible');
    });
});

// handle the drag over event for the right and left containers
[right, left].forEach((container) => {
    container.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    // handle the drop event
    container.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = e.dataTransfer.getData('text/plain');
        const draggableElement = document.getElementById(id);
        e.target.appendChild(draggableElement);
    });
});