const subjects = [
  "My cat",
  "A rogue Roomba",
  "Mercury in retrograde",
  "The intern from 2019",
  "A suspiciously confident pigeon",
  "My smart fridge",
];

const actions = [
  "deleted",
  "ate",
  "force-pushed over",
  "unionized against",
  "replaced with YAML",
  "achieved sentience inside",
];

const objects = [
  "the production database",
  "my homework",
  "the only working laptop charger",
  "the CI pipeline",
  "my will to refactor",
  "the semicolons",
];

function pick(list, rand) {
  return list[Math.floor(rand() * list.length)];
}

export function makeExcuse(rand = Math.random) {
  return `${pick(subjects, rand)} ${pick(actions, rand)} ${pick(objects, rand)}.`;
}
