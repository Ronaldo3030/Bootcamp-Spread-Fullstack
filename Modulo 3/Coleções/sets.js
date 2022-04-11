function valorUnico(array){
    let unico = new Set(array)
    return [...unico]
}
const array = [30, 30, 40, 5, 223, 2049, 3034, 5]
console.log(valorUnico(array))