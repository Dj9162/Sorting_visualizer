import { bubbleSort } from './algorithms/bubbleSort.js';
import { selectionSort } from './algorithms/selectionSort.js';
import { insertionSort } from './algorithms/insertionSort.js';
import { quickSort } from './algorithms/quickSort.js';
import { mergeSort } from './algorithms/mergeSort.js';
import { heapSort } from './algorithms/heapSort.js';
import { generateRandomArray } from './input.js';
import { animateSoundBars } from './input.js';
import { createBars } from './input.js';
import { bubbleSortCode } from './algorithms/allSortingMethods.js';
import { selectionSortCode } from "./algorithms/allSortingMethods.js";
import { insertionSortCode } from "./algorithms/allSortingMethods.js";
import { quickSortCode } from "./algorithms/allSortingMethods.js";
import { mergeSortCode } from "./algorithms/allSortingMethods.js";
import { heapSortCode } from "./algorithms/allSortingMethods.js";

document.addEventListener('DOMContentLoaded',  () => {
  let arrSize=15;
  let sliderForSize=document.getElementById('arraySize');
  let sizeValue=document.getElementById('arraySizeValue');
  function getarraySize(){
    let ans=sliderForSize.value;
    arrSize=ans;
    sizeValue.textContent=arrSize;
  }
  sliderForSize.addEventListener("input", getarraySize);

  let mini=1,maxi=101;
  let gen = document.getElementsByClassName('btn')[0];
  let arr=generateRandomArray(arrSize,mini,maxi);
  createBars(arr);
  animateSoundBars();
  let generateArrayCheck=false;
  gen.addEventListener('click',()=>{
    arr=generateRandomArray(arrSize,mini,maxi);
    createBars(arr);
    generateArrayCheck=true;
  });

  
  let btn = document.getElementsByClassName('btn')[1];
  btn.addEventListener('click', () => {
    if(generateArrayCheck){
    let selectedOption = document.querySelector('.options');
    let sortingMethod = selectedOption.value;
    let selectedLanguage = document.querySelector(".language-option");
    selectedLanguage.selectedIndex = 1; 
    switch (sortingMethod) {
      case "bubbleSort":
        bubbleSort(arr);
        bubbleSortCode();
        break;
      case "selectionSort":   
        selectionSort(arr);
        selectionSortCode();
        break;
      case "insertionSort":
        insertionSort(arr);
        insertionSortCode();
        break;
      case "quickSort":
        let speed=50;
        quickSort(arr,0,arr.length-1,speed);
        quickSortCode();
        break;
      case "mergeSort":
        mergeSort(arr,0,arr.length-1);
        mergeSortCode();
        break;
      case "heapSort":
        heapSort(arr,arr.length);
        heapSortCode();
        break;
      default:
        let selectedLanguage = document.querySelector(".language-option");
        selectedLanguage.selectedIndex = 0; 
        Toastify({
          text: "Please select a Sorting Method",
          duration: 3000,
          gravity: "bottom",
          position: "center"
        }).showToast();
        break;
    }
  }
  else{
    Toastify({
      text: "Please Generate the array first",
      duration: 3000,
      gravity: "left",
      position: "left"
    }).showToast();
  }
  });






});

// Red - '#FF0000'
// green - '#00FF00'
// grey - '#AA9870'
// violet - '#BB0123'
  


