const text = await Deno.readTextFile("puzzle-input.txt");

const pattern = /mul\([0-9]{1,3},[0-9]{1,3}\)|do\(\)|don't\(\)/g;

const matches = text.match(pattern);

let result = 0;

let enabled = true;
console.log(matches);

if (!matches) {
  console.log("No matches found");
  Deno.exit();
}

for (const match of matches) {
  if (match === "do()") {
    enabled = true;
    continue;
  } else if (match === "don't()") {
    enabled = false;
    continue;
  }

  if (!enabled) {
    continue;
  }

  const [a, b] = match.slice(4, -1).split(",");

  result += parseInt(a) * parseInt(b);
}

console.log(result);
