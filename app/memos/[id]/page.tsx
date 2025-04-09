import RootLayout from "@/app/layout";
import Season from "./Season";

export const metadata = {
	title: "メモ詳細",
};

export default function MemoDetailPage({ params }: { params: { id: string } }) {
	return (
		<RootLayout>
			<main>
				<Season id={params.id} />
			</main>
		</RootLayout>
	);
}
