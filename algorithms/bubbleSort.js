const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve,time));
}

async function bubbleSort(arr){
    // console.log('btn press hua');
    for(let i=0;i<(arr.length-1);i++){
        for(let j=0;j< (arr.length-i-1);j++){
            let e = document.getElementById('elem' +j);
            e.style.backgroundColor='#FF0000';
            await sleep(50);
            e.style.backgroundColor='#AA9870';
            if(arr[j]>=arr[j+1]){
                swapNumber(arr,j)
                swapHeight(j)
                swapColor(j);
            }
            else{
                swapColor(j);
            }
        }
    }
}

function swapNumber(arr,j) {
    let temp =arr[j];
    arr[j]=arr[j+1];
    arr[j+1]=temp;
}

function swapHeight(j) {
    
    let e1 = document.getElementById('elem' +j);
    let e2 = document.getElementById('elem' +(j+1));
    
    let h1=e1.clientHeight;
    let h2=e2.clientHeight;
    e1.style.height = h2+"px";
    e2.style.height = h1+"px";

}

function swapColor(j){
    let e1 = document.getElementById('elem' +j);
    let e2 = document.getElementById('elem' +(j+1));

    let tempcolor = e1.style.backgroundColor;
    e1.style.backgroundColor = e2.style.backgroundColor;
    e2.style.backgroundColor=tempcolor;
}

export { bubbleSort };