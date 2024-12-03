const text = await Deno.readTextFile("puzzle-input.txt");

const pattern = /mul\([0-9]{1,3},[0-9]{1,3}\)/g;

const matches = text.match(pattern);

let result = 0;

if (!matches) {
  console.log("No matches found");
  Deno.exit();
}

for (const match of matches) {
  const [a, b] = match.slice(4, -1).split(",");

  result += parseInt(a) * parseInt(b);
}

console.log(result);
