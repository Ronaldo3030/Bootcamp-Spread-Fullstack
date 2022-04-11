function valida(array, num){
    try {
        if(!array || !num) throw new ReferenceError("Parâmetros não enviados")

        if(array !== 'object') throw new TypeError("Array não é um 'object'")

        if(num !== 'number') throw new TypeError("Numero não é do tipo number")

        if(array.length !== num) throw new RangeError("O tamanho do array é diferente do numero")
        
        return array
    } catch (e) {
        if(e instanceof ReferenceError){
            console.log("Reference Error")
            console.log(e.stack)
        }else if(e instanceof TypeError){
            console.log("Type Error")
            console.log(e.stack)
        }else if(e instanceof RangeError){
            console.log("Range Error")
            console.log(e.stack)
        }else{
            console.log("Outro erro")
            console.log(e.stack)
        }
    }
}

const array = [1,2,3]
const num = 'asd'

valida(array, num)