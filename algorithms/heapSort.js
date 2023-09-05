const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve,time));
}

let delay=200;

async function heapSort(arr, n) {
    // Build heap (rearrange array)
    for (let i = Math.floor(n/ 2) - 1; i >= 0; i--) {
        // i=Math.floor(i);
        await heapify(arr, n, i);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        let e=document.getElementById('elem'+0);
        e.style.background = 'cyan';
        let e1=document.getElementById('elem'+i);
        e1.style.background = 'grey';
        swapHeightNumber(arr,0,i);
        await sleep(delay);

        // call max heapify on the reduced heap
        await heapify(arr, i, 0);
    }
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
async function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    let l = 2 * i + 1; // left = 2*i + 1
    let r = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root
    let e4=document.getElementById('elem'+l);
    let e5=document.getElementById('elem'+largest);
    if (l < n && parseInt(e4.style.height) > parseInt(e5.style.height)) {
        // arr[l].style.background = 'lightblue'; 
        // arr[largest].style.background = 'cyan';
        largest = l;
        swapHeightNumber(arr,largest,l);
        // arr[l].style.background = '#e43f5a';
    }
    

    // If right child is larger than largest so far
    let e2=document.getElementById('elem'+r);
    let e3=document.getElementById('elem'+largest);
    if (r < n && parseInt(e2.style.height) > parseInt(e3.style.height)) { 
        // arr[r].style.background = 'lightgreen';
        // arr[largest].style.background = 'cyan'; 
        largest = r;
        swapHeightNumber(arr,largest, r);
        // arr[l].style.background = '#e43f5a'; 
    }

    // If largest is not root
    if (largest != i) {
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        swapHeightNumber(arr,i,largest);

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}
function swapHeightNumber(arr,i,j){
    let e1 = document.getElementById('elem' +i);
    let e2 = document.getElementById('elem' +(j));
    let h1=e1.clientHeight;
    let h2=e2.clientHeight;
    e1.style.height = h2+"px";
    e2.style.height = h1+"px";
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

export {heapSort};