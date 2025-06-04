import { ConstellationsInput } from "@/app/component/ConstellationsInput";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

describe("ConstellationsInputContainer", () => {
	test("必須項目が空の場合にエラーメッセージが表示される", async () => {
		render(<ConstellationsInput />);
		await userEvent.click(screen.getByRole("button", { name: "登録" }));
		expect(await screen.findByText("タイトルは必須です")).toBeInTheDocument();
	});

	test("成功メッセージが表示される", async () => {
		render(<ConstellationsInput />);
		// 入力欄が2つ（タイトルと内容）と仮定
		const [titleInput, contentInput] = screen.getAllByRole("textbox");
		// 有効な値を入力する
		await userEvent.type(titleInput, "季節の星座");
		await userEvent.type(contentInput, "春の星座はとても美しいです。");
		await userEvent.click(screen.getByRole("button", { name: "登録" }));
		expect(await screen.findByText("フォーム送信成功")).toBeInTheDocument();
	});
});
