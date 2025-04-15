import RootLayout from "@/app/layout";
import Link from "next/link";

/** 季節の星座一覧ページ */
export default function SeasonsConstellationsPage() {
	const memos = [
		{ id: 1, title: "春の星座" },
		{ id: 2, title: "夏の星座" },
		{ id: 3, title: "秋の星座" },
		{ id: 4, title: "冬の星座" },
	];

	return (
		<RootLayout>
			<main className="flex flex-col items-center h-screen gap-10 p-6">
				<h1>季節の星座</h1>
				<ul className="grid grid-cols-2 gap-6">
					{memos.map((memo) => (
						<li key={memo.id} className="text-amber-600 hover:underline">
							<Link href={`/memos/${memo.id}`}>{memo.title}</Link>
						</li>
					))}
				</ul>
				<Link href="/" className="text-blue-500 hover:underline">
					戻る
				</Link>
			</main>
		</RootLayout>
	);
}
