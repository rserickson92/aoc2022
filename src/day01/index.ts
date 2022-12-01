import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n\n")

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const summedCalories = sumCalorieBlocks(input)

  return Math.max(...summedCalories).toString()
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const summedCalories = sumCalorieBlocks(input)

  return summedCalories
    .sort((a, b) => {
      if (a > b) {
        return 1
      } else if (a < b) {
        return -1
      } else {
        return 0
      }
    })
    .slice(summedCalories.length - 3)
    .reduce((total, n) => total + n)
    .toString()
}

const sumCalorieBlocks = (input: string[]): number[] => {
  return input.map(calBlock =>
    calBlock.split("\n").reduce((total, n) => total + (parseInt(n) || 0), 0)
  )
}

run({
  part1: {
    tests: [
      {
        input: `
          1000
          2000
          3000

          4000

          5000
          6000

          7000
          8000
          9000

          10000
        `,
        expected: "24000",
      },
      {
        input: `
          69420

          40000
          4000

          30000

          20000
          22222
          10000
        `,
        expected: "69420"
      },
      {
        input: `
          22

          9001

          9000
        `,
        expected: "9001"
      },
      {
        input: `7777`,
        expected: "7777"
      }
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
          1000
          2000
          3000

          4000

          5000
          6000

          7000
          8000
          9000

          10000
        `,
        expected: "45000",
      },
      {
        input: `
          69420

          40000
          4000

          30000

          20000
          22222
          10000
        `,
        expected: "165642"
      },
      {
        input: `
          22

          9001

          9000
        `,
        expected: "18023"
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
