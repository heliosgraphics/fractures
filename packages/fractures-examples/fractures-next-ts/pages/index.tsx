import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<main className="m-16 md:m-8">
			<div className={styles.container}>
				<Head>
					<title>Fractures ✕ NextJS</title>
					<meta name="description" content="Fractures NextJS Example" />
				</Head>
				<div className="bg-blue-100 p-8 sans">
					<div className="bg-blue-200 p-8">
						<h1 className="h1 bolder">Green and Blue</h1>
						<div className="bg-green-300 blue-700 p-4">Test 700</div>
						<div className="bg-green-200 blue-600 p-4">Test 600</div>
						<div className="bg-green-100 blue-500 p-4">Test 500</div>
					</div>
				</div>
			</div>
		</main>
	);
}
