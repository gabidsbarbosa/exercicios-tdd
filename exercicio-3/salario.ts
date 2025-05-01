export type Cargo = "DESENVOLVEDOR" | "DBA" | "TESTADOR" | "GERENTE";

export class Funcionario {
    constructor(
        public nome: string,
        public email: string,
        public salarioBase: number,
        public cargo: Cargo
    ) { }
}

export class CalculadoraSalario {
    static calcularLiquido(func: Funcionario): number {
        const { salarioBase, cargo } = func;

        switch (cargo) {
            case "DESENVOLVEDOR":
                return salarioBase >= 3000 ? salarioBase * 0.8 : salarioBase * 0.9;
            case "DBA":
            case "TESTADOR":
                return salarioBase >= 2000 ? salarioBase * 0.75 : salarioBase * 0.85;
            case "GERENTE":
                return salarioBase >= 5000 ? salarioBase * 0.7 : salarioBase * 0.8;
            default:
                throw new Error("Cargo inválido");
        }
    }
}