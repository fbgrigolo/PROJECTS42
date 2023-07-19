export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

// const pessoa1 = new Pessoa('Luiz', 30);
// const pessoa1 = new Pessoa(['Luiz'], 30);
// const pessoa1 = new Pessoa(['Luiz'], { idade: 30 });

export class Pilha<T> {
  private contador = 0;
  private elementos: { [k: number]: T } = {};

  push(elemento: T) {
    this.elementos[this.contador] = elemento;
    this.contador++;
  }

  pop(): T | void {
    if (this.estaVazia()) return undefined;

    this.contador--;
    const elemento = this.elementos[this.contador];
    delete this.elementos[this.contador];
    return elemento;
  }

  estaVazia(): boolean {
    return this.contador === 0;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(): void {
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

const pilha = new Pilha<number>();
pilha.push(1);
pilha.push(2);
pilha.push(3);
pilha.push(4);
pilha.push(5);
pilha.mostrarPilha();

while (!pilha.estaVazia()) {
  console.log(pilha.pop());
}
