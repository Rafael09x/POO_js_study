class ContaBancaria {
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return "Operação Negada, saldo insuficiente"
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    deposit(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agenca, numero, cartaoCredito){
        super(agenca, numero);
        this.tipo = "corrente";
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupança';
	}
}

class ContaUni extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitaria';
	}

    sacar(valor){
        if(valor > 500){
            return "Operação negada, limite de saque da sua conta é no máximo R$ 500,00"
        }
        this._saldo = this._saldo - valor;
		return this._saldo;
    }
}

const minhaConta = new ContaCorrente(1, 211, true);
const contaUni = new ContaUni(2, 333);