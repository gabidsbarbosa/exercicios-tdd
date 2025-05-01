export class Triangulo {
  static classificar(a: number, b: number, c: number): string {
    if (a <= 0 || b <= 0 || c <= 0) return "Inválido";
    if (a + b <= c || a + c <= b || b + c <= a) return "Inválido";
    if (a === b && b === c) return "Equilátero";
    if (a === b || b === c || a === c) return "Isósceles";
    return "Escaleno";
  }
}  