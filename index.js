const data1 = require("./data1.json");
const data2 = require("./data2.json");
const dataArrays = [data1, data2];
const dataArrays2 = [data1.data, data2.data];
const fs = require("fs");
let test = false;
// console.log(dataArrays);
// const newArrs = [];

const tracker = [];
const marges = [];

const stracuteChange = dataArrays.reduce((acc, cur, idx, arr) => {
  let newAcc = {};
  for (const id of Object.keys(cur.data)) {
    if (tracker.indexOf(id) === -1) {
      tracker.push(id);
      tracker.push(idx);
      newAcc = { ...cur, data: { ...cur.data, [id]: cur.data[id] } };
    } else {
      const checkIndex = tracker[tracker.indexOf(id) + 1];
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

      // anotherAcc[id] = {
      //   ...anotherAcc[id],
      //   data: {
      //     ...anotherAcc[id].data,
      //     [id]: {
      //       ...anotherAcc[id].data[id],
      //       messages: [],
      //     },
      //   },
      // };
      // console.log(acc[id]);
      //   console.log(Object.keys(anotherAcc[checkIndex].data[id].messages).length);
    } //else
  }
  acc = [...acc, newAcc];
  return acc;
}, []);

// console.log("=", stracuteChange);
// if (test === false) {
//   console.log(test);

// fs.writeFile(
//   `books${Math.random().toString()}.json`,
//   JSON.stringify(stracuteChange),
//   (err) => {}
// );
