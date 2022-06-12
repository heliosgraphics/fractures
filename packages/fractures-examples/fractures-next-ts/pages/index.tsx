import Head from "next/head";
import { Button, Flex, Heading } from "@fractures/ui";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<Flex
			className={styles.container}
			isCentered={true}
			gap={4}
			padding={16}
			isColumn={true}
		>
			<Head>
				<title>Fractures ✕ NextJS</title>
				<meta name="description" content="Fractures NextJS Example" />
			</Head>
			<Heading level={1}>Yellow and Purple</Heading>
			<Button type="primary" value="Hello" color="purple" />
			<div className="bg-yellow-500 purple-700 p-4">Test 500</div>
			<div className="bg-yellow-300 purple-700 p-4">Test 300</div>
			<div className="bg-yellow-100 purple-700 p-4">Test 100</div>
		</Flex>
	);
}
