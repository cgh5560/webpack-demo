const volume = x => x * x * x;
const area = x => x * x;
// CommonJS 전체 모듈화 module.exports = 전체내용
// => es6 모듈에서는 export default 전체
// export default {
//   volume: volume,
//   area : area
// };

// export default {
//   // key와 value가 같으면 1개를 생략한다 : shorthand property
//   volume,
//   area
// };

export default volume;