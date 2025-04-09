import RootLayout from "@/app/layout";
import Season from "./Season";

export const metadata = {
	title: "季節の星座",
};

export default function SeasonIndex({ params }: { params: { id: string } }) {
	return (
		<RootLayout>
			<main>
				<Season id={params.id} />
			</main>
		</RootLayout>
	);
}
