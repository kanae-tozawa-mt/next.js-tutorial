import SeasonConstellations from "./SeasonConstellations";

/** それぞれの季節の星座を説明するページ */
export default function SeasonConstellationsDetailPage({
	params,
}: { params: { id: string } }) {
	return (
		<div className="max-w-screen-md mx-auto p-6 ">
			<SeasonConstellations id={params.id} />
		</div>
	);
}
