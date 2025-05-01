import { Funcionario, CalculadoraSalario } from "./salario";

describe("Cálculo de Salário Líquido", () => {
    test("Desenvolvedor com salário >= 3000", () => {
        const f = new Funcionario("Bruno", "bruno@email.com", 3700, "DESENVOLVEDOR");
        expect(CalculadoraSalario.calcularLiquido(f)).toBeCloseTo(2960);
    });

    test("Desenvolvedor com salário < 3000", () => {
        const f = new Funcionario("Juliana", "juliana@email.com", 2800, "DESENVOLVEDOR");
        expect(CalculadoraSalario.calcularLiquido(f)).toBeCloseTo(2520);
    });

    test("DBA com salário >= 2000", () => {
        const f = new Funcionario("Carlos", "carlos@email.com", 2200, "DBA");
        expect(CalculadoraSalario.calcularLiquido(f)).toBeCloseTo(1650);
    });

    test("TESTADOR com salário < 2000", () => {
        const f = new Funcionario("Luciana", "luciana@email.com", 1600, "TESTADOR");
        expect(CalculadoraSalario.calcularLiquido(f)).toBeCloseTo(1360);
    });

    test("GERENTE com salário >= 5000", () => {
        const f = new Funcionario("André", "andre@email.com", 5500, "GERENTE");
        expect(CalculadoraSalario.calcularLiquido(f)).toBeCloseTo(3850);
    });

    test("GERENTE com salário < 5000", () => {
        const f = new Funcionario("Vanessa", "vanessa@email.com", 4500, "GERENTE");
        expect(CalculadoraSalario.calcularLiquido(f)).toBeCloseTo(3600);
    });
});