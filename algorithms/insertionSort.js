const sleep = (time) => {
    return new Promise(resolve => setTimeout(resolve,time));
}
let delay=50;
async function insertionSort(arr){
    for(let i=0;i<(arr.length);i++){
        let e = document.getElementById('elem' +i);
        e.style.backgroundColor='#FF0000';
        let br=0;
        for(let j=i;j>0;j--){
            await sleep(delay);
            if(arr[j]<arr[j-1]){
                swapNumber(arr,j);
                swapColor(j);
                swapHeight(j);
            }
            else{
                br=j;
                break;
            }
            
        }
        await sleep(delay);
        let e1= document.getElementById('elem' +br);
        e1.style.backgroundColor='#AA9870';
    }
}

function swapNumber(arr,j) {
    let temp =arr[j];
    arr[j]=arr[j-1];
    arr[j-1]=temp;
}

function swapHeight(j) {
    
    let e1 = document.getElementById('elem' +j);
    let e2 = document.getElementById('elem' +(j-1));
    
    let h1=e1.clientHeight;
    let h2=e2.clientHeight;
    e1.style.height = h2+"px";
    e2.style.height = h1+"px";

}

function swapColor(j){
    let e1 = document.getElementById('elem' +j);
    let e2 = document.getElementById('elem' +(j-1));

    let tempcolor = e1.style.backgroundColor;
    e1.style.backgroundColor = e2.style.backgroundColor;
    e2.style.backgroundColor=tempcolor;
}


export { insertionSort };