export class Email {
    constructor(public endereco: string) { }
}

export class Person {
    constructor(public nome: string, public idade: number, public emails: Email[]) { }
}

export class PersonValidator {
    static isValidToInclude(pessoa: Person): string[] {
        const erros: string[] = [];

        const partesNome = pessoa.nome.trim().split(" ");
        if (partesNome.length < 2 || !/^[A-Za-zÀ-ú\s]+$/.test(pessoa.nome)) {
            erros.push("Nome inválido");
        }

        if (pessoa.idade < 1 || pessoa.idade > 200) {
            erros.push("Idade inválida");
        }

        if (pessoa.emails.length === 0) {
            erros.push("Pessoa sem email");
        }

        for (const email of pessoa.emails) {
            if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.endereco)) {
                erros.push(`Email inválido: ${email.endereco}`);
            }
        }

        return erros;
    }
}