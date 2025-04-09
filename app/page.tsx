// top page
import RootLayout from "@/app/layout";
import Link from "next/link";

export const metadata = {
	title: "宇宙のお友達：季節の星座を学ぼう！",
};

export default function HomePage() {
	return (
		<RootLayout>
			<main>
				<h1>ようこそ！</h1>
				<p>季節の星座やメモを見てみましょう。</p>
				<Link href="/memos">季節の星座一覧を見る</Link>
			</main>
		</RootLayout>
	);
}
