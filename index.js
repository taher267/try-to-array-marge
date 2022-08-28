const data1 = require("./data1.json");
const data2 = require("./data2.json");
const dataArrays = [ data1, data2];
const dataArrays2 = [ data2, data1];
const fs = require("fs");
let test = false;
// console.log(dataArrays);
// const newArrs = [];

const tracker = [];

const stracuteChange = dataArrays2.reduce((acc, cur, idx) => {
  let newAcc = {};
  for (const id of Object.keys(cur.data)) {
    if (tracker.indexOf(id) === -1) {
      tracker.push(id);
      tracker.push(idx);
      // console.log(id)
      newAcc = { ...cur, data: { ...cur.data, [id]: cur.data[id] } };
    } else {
      const checkIndex = tracker[tracker.indexOf(id) + 1];

      // console.log(id);
      const anotherAcc = [...acc];

      anotherAcc[checkIndex] = {
        ...anotherAcc[checkIndex],
        data: {
          ...anotherAcc[checkIndex].data,
          [id]: {
            ...anotherAcc[checkIndex].data[id],
            messages: anotherAcc[checkIndex].data[id].messages.concat(
              cur.data[id].messages
            ),
          },
          // [anotherAcc[checkIndex].data[id]]:
        },
        // anotherAcc[checkIndex].data[id].messages=
      }; //message concat
      acc = anotherAcc;
    } //else
  }
  acc = [...acc, newAcc];
  return acc;
}, []);

// console.log("=", stracuteChange);
// if (test === false) {
//   console.log(test);

// const write = ()=>fs.writeFile(
//   `books${Math.random().toString()}.json`,
//   JSON.stringify(stracuteChange),
//   (err) => {}
// );
// setTimeout(()=>write(), 2000)
