import Link from "next/link";
import Mythology from "./Mythology";

/** それぞれの季節の星座を表示するコンポーネント */
export default function SeasonConstellations({ id }: { id: string }) {
	const season = seasons[id];

	if (!season) {
		return <div>季節の星座が見つかりませんでした。</div>;
	}

	return (
		<div className="flex flex-col items-center gap-10 p-6">
			<h1>{season.title}</h1>
			<p>{season.content}</p>
			<Mythology id={id}/>
			<Link href="/seasons" className="text-blue-500 hover:underline">
				戻る
			</Link>
		</div>
	);
}

export const seasons: { [key: string]: { title: string; content: string } } = {
	"1": {
		title: "春の星座",
		content:
			"春の夜空では、しし座がその姿を現し、明るい星「レグルス」が見つけやすいポイントです。また、おとめ座は「スピカ」という一等星が輝き、春の夜空に華やかさを加えます。さらに、うしかい座の「アークトゥルス」も春の夜を特徴づける重要な星座です。",
	},
	"2": {
		title: "夏の星座",
		content:
			"夏には、天の川とともに輝く星座が観察できます。はくちょう座はその名前通り白鳥の形をしており、天の川を横切るように広がります。こと座の「ベガ」は夏の大三角を形成する重要な一角で、わし座の「アルタイル」とともにその壮大な構造を楽しむことができます。",
	},
	"3": {
		title: "秋の星座",
		content:
			"秋の夜空は静かで落ち着いた雰囲気を持ちます。カシオペア座はW字型の星の並びで見つけやすく、星座観察を始めるのに適しています。また、アンドロメダ座はその中にアンドロメダ銀河を含み、宇宙の広がりを感じさせる星座です。ペガスス座の四角形の構造も秋の夜空を特徴づける星座の一つです。",
	},
	"4": {
		title: "冬の星座",
		content:
			"冬は澄んだ空気の中で明るい星座を楽しむことができます。オリオン座は冬の夜空の象徴ともいえる星座で、「ベテルギウス」と「リゲル」という明るい星が輝きます。おおいぬ座の「シリウス」は冬の夜空で最も明るい星として知られ、ふたご座の「カストル」と「ポルックス」は双子の星の並びを形成します。",
	},
};
