let arr = [1, 2, 7, 8, 9, 3, 8, 8, 9, 7, 1]
let target = 8

function positions(a, t){
  
  let indexes=[]
  
  a.forEach((el, i)=>{
    if (el == 8) {
      indexes.push(i)
    }
  })
  
  return indexes
}

console.log(positions(arr, target))
