// // way 01
// let str = "abbacd";
// let obj = {}
// let arr = str.split("")
// for ( let i = 0; i< arr.length; i++){
//     if(obj[arr[i]]){
//         obj[arr[i]] ++;
//     }
//     else{
//         obj[arr[i]] = 1;
//     }
// }
// console.log(obj)


// way 02
let str = "Engineering";
let result = str.split("").reduce((acc, value)=>
{if (acc[value]){
    acc[value]++
}
else{
    acc[value] = 1;
}
return acc
}
,{})

console.log(result);





