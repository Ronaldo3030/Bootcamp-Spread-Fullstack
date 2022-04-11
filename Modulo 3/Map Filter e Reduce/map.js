function mapThis(array){
    return array.map((item) => item * 2)
}

const array1 = [1,2,3,4,5]

let novoArray = mapThis(array1)

console.log(novoArray)