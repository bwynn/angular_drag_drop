// get items
var items = document.querySelectorAll(".item");
var receivers = document.querySelectorAll(".receiver");
var dragSrcEl = null;

// visual cue to user that item is draggable when drag starts
function handleDragStart(e) {
    this.style.opacity = '0.4';

    dragSrcEl = this;

    // add data transfer attribute and set data contents
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.innerHTML);
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'move';

    return false;
}

function handleDragEnter(e) {
    this.classList.add('over'); // add .over class to item being dragged
}

function handleDragLeave(e) {
    this.classList.remove('over');
}

function handleDrop(e) {
    // e.target/this current target element
    if (e.stopPropagation) {
        e.stopPropagation(); // stops browser from redirecting
    }

    if (dragSrcEl != this) {
        dragSrcEl.innerHTMl = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/html');
    }

    return false;
}
m
function handleDragEnd(e) {
    [].forEach.call(receivers, function(receiver) {
        receiver.classList.remove('over');
    });
}

// apply event on items being dragged
[].forEach.call(items, function(item) {
    item.addEventListener('dragstart', handleDragStart, false);
    item.addEventListener('dragover', handleDragOver, false);
});

[].forEach.call(receivers, function(receiver) {
    receiver.addEventListener('dragenter', handleDragEnter, false);
    receiver.addEventListener('dragleave', handleDragLeave, false);
    receiver.addEventListener('drop', handleDrop, false);
    receiver.addEventListener('dragend', handleDragEnd, false);
});
