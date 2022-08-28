// const fs = require("fs");
const data1 = require("./data1.json");
const data2 = require("./data2.json");
const dataArrays2 = [ data2.data, data1.data];

const objsOfObj={}

for (const item of dataArrays2) {
  for (const id of Object.keys(item)) {
    if(objsOfObj[id]===undefined){
 
      objsOfObj[id]=item[id]
    }else{
      objsOfObj[id]={...objsOfObj[id], messages:[...objsOfObj[id].messages, ...item[id].messages]}
    }
  }
}

// console.log(objsOfObj)

// const write = ()=>fs.writeFile(
//   `books${Math.random().toString()}.json`,
//   JSON.stringify(objsOfObj),
//   (err) => {}
// );
// setTimeout(()=>write(), 2000)
