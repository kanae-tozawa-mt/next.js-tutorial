import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

/** 共通のメタデータ */
export const metadata: Metadata = {
	title: "宇宙のお友達：季節の星座を学ぼう！",
};

/** 共通のレイアウト */
export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="ja">
			<body>
				<header className="flex justify-center p-4 bg-blue-950 text-white">
					<h1>宇宙のお友達：季節の星座を学ぼう！</h1>
				</header>
				<main>{children}</main>
				<footer className="flex justify-end p-4 absolute bottom-0 w-full bg-blue-950 text-white">
					<p>© 2025 Seasonal Constellations App</p>
				</footer>
			</body>
		</html>
	);
}
