"use client";
import { useParams } from "next/navigation";

export default function Season({ id }: { id: string }) {
	const memos: { [key: string]: { title: string; content: string } } = {
		"1": { title: "春の星座", content: "春の星座についての詳細情報。" },
		"2": { title: "夏の星座", content: "夏の星座についての詳細情報。" },
		"3": { title: "秋の星座", content: "秋の星座についての詳細情報。" },
		"4": { title: "冬の星座", content: "冬の星座についての詳細情報。" },
	};

	const memo = memos[id];

	if (!memo) {
		return <div>メモが見つかりませんでした。</div>;
	}

	return (
		<>
			<h1>{memo.title}</h1>
			<p>{memo.content}</p>
		</>
	);
}
