import Link from "next/link";
import CommentIndex from "./component/CommentIndex";

/** ホームページ */
export default async function HomePage() {
	// サーバーサイドでコメントデータを取得
	const comments = await getComments();

	return (
		<main className="flex flex-col items-center h-screen gap-10 p-6 max-w-screen-md mx-auto">
			<div>
				<h1>ようこそ！</h1>
				<p>
					それぞれの季節に楽しめる代表的な星座を、わかりやすくまとめました。
				</p>
				<p>星座を知ることで、夜空を見上げる楽しみが広がります。</p>
				<p>ぜひ、季節ごとの星座を探してみてください。</p>
			</div>
			<Link href="/seasons" className="text-blue-500 hover:underline">
				季節の星座一覧を見る
			</Link>
			<Link href="/seasons/new" className="text-blue-500 hover:underline">
				観察した星座を入力する
			</Link>
			{/* コメント一覧コンポーネント */}
			<CommentIndex initialComments={comments} />
		</main>
	);
}

// コメントデータの型定義
export type CommentData = {
	id: number;
	text: string;
	date: string;
	likes: number;
};

// サーバーサイドでコメントデータを取得する関数
export async function getComments(): Promise<CommentData[]> {
	return [
		{
			id: 1,
			text: "素晴らしい星座ですね！",
			date: new Date().toLocaleDateString("ja-JP", {
				year: "numeric",
				month: "long",
				day: "numeric",
			}),
			likes: 0,
		},
		{
			id: 2,
			text: "夜空を見上げるのが楽しみです。",
			date: new Date().toLocaleDateString("ja-JP", {
				year: "numeric",
				month: "long",
				day: "numeric",
			}),
			likes: 0,
		},
	];
}
