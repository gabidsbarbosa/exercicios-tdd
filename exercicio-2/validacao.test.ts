import { Person, Email, PersonValidator } from "./validacao";

describe("Validação de Pessoa", () => {
    test("Pessoa válida", () => {
        const pessoa = new Person("Joana Silva", 30, [new Email("joana@dominio.com")]);
        expect(PersonValidator.isValidToInclude(pessoa)).toEqual([]);
    });

    test("Nome inválido", () => {
        const pessoa = new Person("Joana123", 30, [new Email("joana@dominio.com")]);
        expect(PersonValidator.isValidToInclude(pessoa)).toContain("Nome inválido");
    });

    test("Nome com apenas uma parte", () => {
        const pessoa = new Person("Joana", 30, [new Email("joana@dominio.com")]);
        expect(PersonValidator.isValidToInclude(pessoa)).toContain("Nome inválido");
    });

    test("Idade inválida", () => {
        const pessoa = new Person("Joana Silva", 0, [new Email("joana@dominio.com")]);
        expect(PersonValidator.isValidToInclude(pessoa)).toContain("Idade inválida");
    });

    test("Sem emails", () => {
        const pessoa = new Person("Joana Silva", 30, []);
        expect(PersonValidator.isValidToInclude(pessoa)).toContain("Pessoa sem email");
    });

    test("Email inválido", () => {
        const pessoa = new Person("Joana Silva", 30, [new Email("joanaemail.com")]);
        expect(PersonValidator.isValidToInclude(pessoa)).toContain("Email inválido: joanaemail.com");
    });
});