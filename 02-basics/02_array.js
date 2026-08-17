const heros = ["thor","ironman","spiderman"]
const dc_heros = ["batman","flash","superman"]

// heros.push(dc_heros)

// console.log(heros)
// console.log(heros[3][1])

// const allheros = heros.concat(dc_heros);
// console.log(allheros)

const all_new = [...heros,...dc_heros]
console.log(all_new)

const sp = [2,3,4,[1,5,6],7,[6,8, [7,3]]]
const real_usable_array = sp.flat(Infinity)

console.log(real_usable_array)