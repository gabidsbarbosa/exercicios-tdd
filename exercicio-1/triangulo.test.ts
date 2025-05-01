import { Triangulo } from "./triangulo";

describe("Classificação de Triângulos", () => {
  test("Escaleno válido", () => {
    expect(Triangulo.classificar(7, 8, 9)).toBe("Escaleno");
  });

  test("Equilátero válido", () => {
    expect(Triangulo.classificar(6, 6, 6)).toBe("Equilátero");
  });

  test("Isósceles válido (permutações)", () => {
    expect(Triangulo.classificar(6, 6, 4)).toBe("Isósceles");
    expect(Triangulo.classificar(4, 6, 6)).toBe("Isósceles");
    expect(Triangulo.classificar(6, 4, 6)).toBe("Isósceles");
  });

  test("Valor zero ou negativo", () => {
    expect(Triangulo.classificar(0, 5, 5)).toBe("Inválido");
    expect(Triangulo.classificar(-2, 5, 5)).toBe("Inválido");
  });

  test("Soma de dois lados igual ao terceiro", () => {
    expect(Triangulo.classificar(5, 5, 10)).toBe("Inválido");
    expect(Triangulo.classificar(10, 5, 5)).toBe("Inválido");
    expect(Triangulo.classificar(5, 10, 5)).toBe("Inválido");
  });

  test("Soma de dois lados menor que o terceiro", () => {
    expect(Triangulo.classificar(3, 4, 8)).toBe("Inválido");
    expect(Triangulo.classificar(8, 3, 4)).toBe("Inválido");
    expect(Triangulo.classificar(4, 8, 3)).toBe("Inválido");
  });

  test("Todos os valores zero", () => {
    expect(Triangulo.classificar(0, 0, 0)).toBe("Inválido");
  });
});