const input1: number[] = [];

const input2: number[] = [];

const text = await Deno.readTextFile("puzzle-input.txt");

text.split("\n").forEach((line) => {
  const parsedLine = line.split("   ");

  const id1 = parseInt(parsedLine[0]);
  const id2 = parseInt(parsedLine[1]);

  input1.push(id1);
  input2.push(id2);
});

const occurenceCount: Record<number, number> = {};

for (let i = 0; i < input2.length; i++) {
  const value = input2[i];

  occurenceCount[value] = occurenceCount[value] ? occurenceCount[value] + 1 : 1;
}

let similarityScore = 0;

for (let i = 0; i < input1.length; i++) {
  const value = input1[i];

  const occurences = occurenceCount[value];

  if (occurences) {
    similarityScore += value * occurences;
  }
}

console.log(similarityScore);
