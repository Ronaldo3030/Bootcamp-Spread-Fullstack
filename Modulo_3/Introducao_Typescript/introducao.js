let lines = 3;

//TODO: Complete os espaços em branco com uma possível solução para o desafio
let frase = ""
let N = lines;
for (let i = 0; i < N; i++) {
  if (i == N-1) {
    frase += "Ho!"
  }
  else{
    frase += "Ho "
  } ;
}

console.log(frase)