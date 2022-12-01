import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n\n")

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const summedCalories: number[] = input.map((calBlock =>
    calBlock.split("\n").reduce((total, n) => total + (parseInt(n) || 0), 0)
  ))

  return Math.max(...summedCalories).toString()
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  return
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
      // {
      //   input: ``,
      //   expected: "",
      // },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
})
