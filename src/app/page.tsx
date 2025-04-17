import Link from "next/link";

/** ホームページ */
export default function HomePage() {
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
		</main>
	);
}
