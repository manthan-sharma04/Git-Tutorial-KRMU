// const para=document.querySelector("p")
// para.innerText="Hello Shubham"
// para.style.backgroundColor="Black"
// para.style.color="White"

// Selecting elements by class name

// const paras=document.getElementsByClassName("para")
// paras[0].innerText="Hello!"
// paras[0].innerHTML="<h1 style='color:red; background-color:Thistle;'>WOOWWWW</h1>"
// paras[1].style.color='Blue'
// Returns an array of elements if there are multiple.

// Selecting elements by id

// const para=document.getElementById("heading")
// para.innerText="MAIN SHUBHAM HUN"
// para.innerHTML="<p id='heading' style='color:Blue;background-color:Thistle;'>MAIN SHUBHAM HUN</p> " 


// Returns a new array
// let arr=[1, 2, 3, 4, 5, 6 ,7]
// const newarr=arr.map((arr)=>2*arr)
// console.log(newarr)    OUTPUT=> Array(7) [ 2, 4, 6, 8, 10, 12, 14 ]


// Doesn't return a new array
// let arr=[1,2,3,4,5,6,7]
// arr.forEach((ele)=>console.log(arr+=2))

// Difference in .textContent and .innerText

// .textContent applies changes to the hidden elements also (display:none or visibility:hidden).
// .innerText doesn't apply changes to hidden elements.

// const container=document.querySelector(".container")
// const button=document.querySelector("button")
// container.addEventListener("click",()=>{
//     console.log("Container clicked")
// })

// button.addEventListener("click",()=>{
//     console.log("Button clicked")
// })

// console.log(a) ERROR: ReferenceError: Cannot access 'a' before initialization
// console.log(b) Undefined

// let a = 239
// var b = 2595

// function hello(){
//     console.log("Hello World")
// }

// hello()



// function first() {
    // second()
// }
// function second() {
    // third()
// }
// function third() {
    // console.trace()
// }
// first()

// let val=40
// 
// function calc(){
    // console.log(val)
    // let val=100
// }
// 
// calc()

// console.log("Navya pagal hai")
// setTimeout(()=>{console.log("Thodi jada hai")},2000)
// console.log("Everything is true here.")

// const variable=setTimeout(()=>{console.log(a);}, 1000)
// clearTimeout(variable, 10000)

// let a=1
// const variable=setInterval(()=>{console.log(a);a++;}, 1000)
// const timeID=setTimeout(()=>{clearInterval(variable)},11000)
// clearTimeout(timeID)

// const name=document.querySelector("#name")
// const btn=document.querySelector(".btnadd")
// const list=document.querySelector(".list")
// const dlt=document.createElement('btndlt')
// 
    // btn.addEventListener("click",()=>{
        // const li=document.createElement('li')
        // const dlt=document.createElement('button')
        // li.innerText=name.value;
        
        // list.appendChild(li)
        // name.value="";
    // })
// dlt.addEventListener("click",()=>{
    // list.removeChild(li)
    // dlt.innerText="Delete"
    // list.removeChild(li)
// })
    


// const btn=document.querySelector('.btnadd')
// const list=document.querySelector('.list')
// btn.addEventListener('click',()=>{
    // if (name.value===""){
        // return;
    // }
    // const li=document.createElement('li')
    // const dlt=document.createElement('btndlt')
    // dlt.innerText="Delete"
// })



// function shubham(something){
//     console.log("Hello Shubham")
//     something()
// }

// function krish(){
//     console.log("Krish ka sunega gaana")
// }

// shubham(krish())


console.log("Startinghomework...")
setTimeout(()=>{
    console.log("Homework Done!")
    console.log("Starting Dinner....")

    setTimeout(()=>{
        console.log("Dinner Done!")
        console.log("Getting ready to go out")
    
        setTimeout(()=>{
        console.log("Going to playground")
            
        }, 1000)
    }, 1500)
},2000)