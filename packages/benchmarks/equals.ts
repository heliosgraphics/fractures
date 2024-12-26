import benchmark from "benchmark"
import { isEqual } from "../utils/equals"
import _ from "lodash"
import { MOCK_ARRAY_OBJECTS, MOCK_LARGE_OBJECTS, MOCK_NESTED_OBJECTS, MOCK_SIMPLE_OBJECTS } from "./__mocks__/objects"

type BenchmarkResult = {
	"Test Name": string
	"Operations/sec": string
	Margin: string
	Runs: number
}

const suite = new benchmark.Suite()

const testNames: readonly string[] = [
	"Simple Objects - Identical (Fractures)",
	"Simple Objects - Identical (Lodash)",
	"Simple Objects - Different (Fractures)",
	"Simple Objects - Different (Lodash)",
	"Nested Objects (Fractures)",
	"Nested Objects (Lodash)",
	"Array Objects (Fractures)",
	"Array Objects (Lodash)",
	"Large Objects (Fractures)",
	"Large Objects (Lodash)",
]

const maxNameLength: number = Math.max(...testNames.map((name) => name.length))
const _padName = (name: string): string => name.padEnd(maxNameLength, " ")
const allResults: BenchmarkResult[] = []

suite
	.add("Simple Objects - Identical (Fractures)", () => {
		isEqual(MOCK_SIMPLE_OBJECTS.first, MOCK_SIMPLE_OBJECTS.second)
	})
	.add("Simple Objects - Identical (Lodash)", () => {
		_.isEqual(MOCK_SIMPLE_OBJECTS.first, MOCK_SIMPLE_OBJECTS.second)
	})
	.add("Simple Objects - Different (Fractures)", () => {
		isEqual(MOCK_SIMPLE_OBJECTS.first, MOCK_SIMPLE_OBJECTS.third)
	})
	.add("Simple Objects - Different (Lodash)", () => {
		_.isEqual(MOCK_SIMPLE_OBJECTS.first, MOCK_SIMPLE_OBJECTS.third)
	})
	.add("Nested Objects (Fractures)", () => {
		isEqual(MOCK_NESTED_OBJECTS.first, MOCK_NESTED_OBJECTS.second)
	})
	.add("Nested Objects (Lodash)", () => {
		_.isEqual(MOCK_NESTED_OBJECTS.first, MOCK_NESTED_OBJECTS.second)
	})
	.add("Array Objects (Fractures)", () => {
		isEqual(MOCK_ARRAY_OBJECTS.first, MOCK_ARRAY_OBJECTS.second)
	})
	.add("Array Objects (Lodash)", () => {
		_.isEqual(MOCK_ARRAY_OBJECTS.first, MOCK_ARRAY_OBJECTS.second)
	})
	.add("Large Objects (Fractures)", () => {
		isEqual(MOCK_LARGE_OBJECTS.first, MOCK_LARGE_OBJECTS.second)
	})
	.add("Large Objects (Lodash)", () => {
		_.isEqual(MOCK_LARGE_OBJECTS.first, MOCK_LARGE_OBJECTS.second)
	})
	.on("cycle", function (event: { target: benchmark.Target }) {
		const benchmark: benchmark.Target = event.target

		const result: BenchmarkResult = {
			"Test Name": _padName(benchmark?.name || "a mistery function"),
			"Operations/sec": Math.floor(benchmark?.hz ?? 0).toLocaleString(),
			Margin: `±${benchmark?.stats?.rme.toFixed(2)}%`,
			Runs: benchmark?.stats?.sample?.length ?? 0,
		}

		allResults.push(result)
	})
	.on("complete", function () {
		console.table(allResults)
	})
	.run({ async: true })
