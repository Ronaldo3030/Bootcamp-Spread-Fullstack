class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia = agencia
        this.numero = numero
        this.tipo = tipo
        this._saldo = 0
    }

    sacar(val){
        if(val > this._saldo){
            return console.log("Saldo insuficiente!")
        }
        this._saldo -= val
        return console.log("Seu saldo após o saque é de :" + this._saldo)
    }

    depositar(val){
        this._saldo += val
        return console.log("Depositado o valor de: " + val)
    }

    get saldo(){
        return this._saldo
    }

    set saldo(val){
        this._saldo = val
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero)
        this._cartaoCredito = cartaoCredito
        this.tipo = 'Conta corrente'
    }

    get cartaoCredito(){
        return this._cartaoCredito
    }

    set cartaoCredito(val){
        this.cartaoCredito = val
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero, tipo){
        super(agencia, numero, tipo)
        this._saldo = 0
    }

    sacar(val){
        if(val > 500)
            return console.log("Não é possivel sacar um valor maior que R$500,00")
        this.saldo -= val
        return console.log("Seu saldo após o saque é de :" + this._saldo)
    }
}

const contaUni = new ContaUniversitaria("Brasil", 123, "Universitaria")

contaUni.depositar(7000)
console.log(contaUni)
contaUni.sacar(3000)