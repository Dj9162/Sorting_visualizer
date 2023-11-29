const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve, time));
};

// Red - '#FF0000'
// Green - '#00FF00'
// Grey - '#AA9870'
// Violet - '#BB0123'

async function quickSort(arr, start, end, speed) {
    if (start < end) {
        let pivot = arr[start];
        let pivotIndex = start;
        let e1 = document.getElementById('elem' + pivotIndex);
        e1.style.backgroundColor = '#FF0000';
        await sleep(speed);

        for (let i = start + 1; i <= end; i++) {
            let e2 = document.getElementById('elem' + i);
            e2.style.backgroundColor = '#BB0123';
            await sleep(speed);

            if (arr[i] < pivot) {
                pivotIndex++;
                [arr[i], arr[pivotIndex]] = [arr[pivotIndex], arr[i]];
                await sleep(speed);
                swapHeight(i, pivotIndex);
                swapColor(i, pivotIndex);
            }
            e2.style.backgroundColor = '#AA9870';
        }

        [arr[start], arr[pivotIndex]] = [arr[pivotIndex], arr[start]];
        swapHeight(start, pivotIndex);
        swapColor(start, pivotIndex);
        e1.style.backgroundColor = '#00FF00';

        await sleep(speed);

        await quickSort(arr, start, pivotIndex - 1, speed);
        await quickSort(arr, pivotIndex + 1, end, speed);
    } else {
        let e = document.getElementById('elem' + start);
        e.style.backgroundColor = '#FF0000';
        await sleep(speed);
        e.style.backgroundColor = '#AA9870';
    }
}

async function swapHeight(first, last) {
    let e1 = document.getElementById('elem' + first);
    let e2 = document.getElementById('elem' + last);

    let h1 = e1.clientHeight;
    let h2 = e2.clientHeight;
    e1.style.height = h2 + "px";
    e2.style.height = h1 + "px";
}

function swapColor(first, last) {
    let e1 = document.getElementById('elem' + first);
    let e2 = document.getElementById('elem' + last);

    let tempcolor = e1.style.backgroundColor;
    e1.style.backgroundColor = e2.style.backgroundColor;
    e2.style.backgroundColor = tempcolor;
}

export { quickSort };
