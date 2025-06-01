import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const myths: { [key: string]: { title: string; description: string } } = {
	"1": {
		title: "ペルセポネと季節の移り変わり",
		description:
			"ペルセポネは、ギリシャ神話に登場する春の女神である。彼女は冥界の王ハデスにさらわれ、母デメテルは深い悲しみに暮れた。この影響で大地は荒れ果て、作物が育たなくなった。しかし、ゼウスの仲裁によりペルセポネは地上に戻ることが許され、その時期が春の訪れと重なっている。この神話は、季節の変化の由来とされている。",
	},
	"2": {
		title: "オルフェウスの竪琴",
		description:
			"こと座の起源とされるオルフェウスは、竪琴の名手として知られる。彼は冥界から亡き妻を救おうとしたが、約束を破ったために再び失ってしまう。彼の悲しみは深く、最終的に神々によって竪琴は天へ昇り、星座となった。この伝説は、音楽と愛の力を象徴している。",
	},
	"3": {
		title: "アンドロメダの救出",
		description:
			"アンドロメダ座は、ギリシャ神話に登場する王女アンドロメダの物語に由来する。彼女は海の怪物の生贄とされる運命だったが、英雄ペルセウスに救われた。ペルセウスはメデューサの首を使い怪物を倒し、その功績によりアンドロメダは星座として夜空に輝くようになった。",
	},
	"4": {
		title: "オリオンの伝説",
		description:
			"オリオンはギリシャ神話に登場する偉大な狩人である。彼は数々の冒険を繰り広げたが、神々の怒りを買い、毒蛇によって命を落とした。その後、彼の姿は星座となり、冬の夜空を照らしている。オリオン座は、特に明るい星「ベテルギウス」や「リゲル」を含み、冬の星空の代表的な星座の一つである。",
	},
};

export async function POST(req: NextRequest) {
	try {
		const body = await req.json();
		if (!body.id || !body.title || !body.description) {
			return NextResponse.json(
				{ success: false, message: "Invalid request body" },
				{ status: 400 },
			);
		}

		if (!myths[body.id]) {
			return NextResponse.json(
				{ success: false, message: "Myth not found" },
				{ status: 404 },
			);
		}

		myths[body.id] = { title: body.title, description: body.description };
		return NextResponse.json({ success: true, updatedData: myths[body.id] });
	} catch (error) {
		return NextResponse.json(
			{ success: false, message: "Internal server error" },
			{ status: 500 },
		);
	}
}

export async function GET(req: NextRequest) {
	try {
		const { searchParams } = new URL(req.url);
		const id = searchParams.get("id");

		if (id && !myths[id]) {
			return NextResponse.json(
				{ success: false, message: "Myth not found" },
				{ status: 404 },
			);
		}

		return NextResponse.json(id ? myths[id] : myths);
	} catch (error) {
		return NextResponse.json(
			{ success: false, message: "Internal server error" },
			{ status: 500 },
		);
	}
}
