import SeasonConstellations, {
	seasons,
} from "@/app/component/SeasonConstellations";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("SeasonConstellations コンポーネント", () => {
	test("タイトルが正しく表示される", () => {
		render(<SeasonConstellations id="1" />);
		const seasonData = seasons["1"];
		expect(screen.getByText(seasonData.title)).toBeInTheDocument();
	});

	it("戻るボタンを押すと処理が走る", async () => {
		expect(screen.getByText("戻る")).toBeInTheDocument();
		await userEvent.click(screen.getByRole("button", { name: "戻る" }));
	});
});
