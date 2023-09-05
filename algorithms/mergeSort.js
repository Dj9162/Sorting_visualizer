const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve,time));
}

let delay=50;

async function merge(arr, low, mid, high){
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await sleep(delay);
        let e=document.getElementById('elem'+(low+i));
        e.style.background = 'orange';
        left[i] = e.style.height;
    }
    for(let i = 0; i < n2; i++){
        await sleep(delay);
        let e=document.getElementById('elem'+(mid + 1 + i));
        e.style.background = 'cyan';
        right[i] = e.style.height;
    }
    await sleep(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await sleep(delay);
        let e=document.getElementById('elem'+(k));
        if(parseInt(left[i]) <= parseInt(right[j])){
            
            if((n1 + n2) === arr.length){
                e.style.background = 'grey';
            }
            else{
                e.style.background = 'lightgreen';
            }
            
            e.style.height = left[i];
            i++;
            k++;
        }
        else{
            if((n1 + n2) === arr.length){
                e.style.background = 'grey';
            }
            else{
                e.style.background = 'lightgreen';
            } 
            e.style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await sleep(delay);
        let e=document.getElementById('elem'+(k));
        if((n1 + n2) === arr.length){
            e.style.background = 'grey';
        }
        else{
            e.style.background = 'lightgreen';
        }
        e.style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        let e=document.getElementById('elem'+(k));
        await sleep(delay);
        if((n1 + n2) === arr.length){
            e.style.background = 'grey';
        }
        else{
            e.style.background = 'lightgreen';
        }
        e.style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(arr, l, r){
    if(l >= r){
        //sorting complete
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSort(arr, l, m);
    await mergeSort(arr, m + 1, r);
    await merge(arr, l, m, r);
}

export{ mergeSort};