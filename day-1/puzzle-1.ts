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

input1.sort((a, b) => a - b);
input2.sort((a, b) => a - b);

let totalDistance = 0;

for (let i = 0; i < input1.length; i++) {
  // Calculate the absolute difference between the two values
  const difference = Math.abs(input1[i] - input2[i]);

  totalDistance += difference;
}

console.log(totalDistance);
