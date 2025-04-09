import RootLayout from "@/app/layout";
import Link from "next/link";

export const metadata = {
	title: "メモ一覧",
};

export default function MemosPage() {
	const memos = [
		{ id: 1, title: "春の星座" },
		{ id: 2, title: "夏の星座" },
		{ id: 3, title: "秋の星座" },
		{ id: 4, title: "冬の星座" },
	];

	return (
		<RootLayout>
			<main>
				<h1>季節の星座</h1>
				<ul>
					{memos.map((memo) => (
						<li key={memo.id}>
							<Link href={`/memos/${memo.id}`}>{memo.title}</Link>
						</li>
					))}
				</ul>
			</main>
		</RootLayout>
	);
}
