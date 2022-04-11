function soma(array) {
    return array.reduce((prev, current) => {
        return prev + current
    })
}

const array = [1,2,3,4,5]
console.log(soma(array))