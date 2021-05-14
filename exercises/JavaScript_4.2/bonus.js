const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

// Ordene o array numbers em ordem crescente e imprima seus valores

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - 1; j++) {
    if (numbers[j] > numbers[j + 1]) {
      const pos = numbers[j]
      numbers[j] = numbers[j + 1]
      numbers[j + 1] = pos
    }
  }
}

console.log('numbers ordenados de forma crescente: ' + numbers)

// Ordene o array numbers em ordem decrescente e imprima seus valores

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length - 1; j++) {
    if (numbers[j] < numbers[j + 1]) {
      const pos = numbers[j]
      numbers[j] = numbers[j + 1]
      numbers[j + 1] = pos
    }
  }
}

console.log('numbers ordenados de forma decrescente: ' + numbers)
