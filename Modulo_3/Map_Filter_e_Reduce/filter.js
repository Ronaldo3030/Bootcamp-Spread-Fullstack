function numerosPares(array) {
    return array.filter((item) => {
        if (item % 2 == 0) {
            return item
        }
    })
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(numerosPares(array))