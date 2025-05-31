"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { type BasicFormSchemaType, basicFormSchema } from "../zod";

/** 入力フォーム */
export const ConstellationsInput = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitted },
	} = useForm<BasicFormSchemaType>({
		resolver: zodResolver(basicFormSchema),
		mode: "onSubmit", // 登録ボタンを押したときのみバリデーションを実行
		reValidateMode: "onSubmit", // 再バリデーションを登録ボタン押下時に実行
	});

	const [message, setMessage] = useState("");

	const onSubmit = (data: BasicFormSchemaType) => {
		setMessage("フォーム送信成功");
		console.log("送信されたデータ:", data);
		reset();
	};

	return (
		<div className="max-w-md mx-auto mt-10 p-6">
			<h2 className="text-xl font-bold mb-4 text-gray-700">入力フォーム</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="mb-4">
					<label htmlFor="title" className="block text-gray-600 font-medium">
						タイトル：
					</label>
					<input
						id="title"
						{...register("title")}
						className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
					/>
					{isSubmitted && errors.title && (
						<p className="text-red-500 text-sm">{errors.title.message}</p>
					)}
				</div>

				<div className="mb-4">
					<label htmlFor="content" className="block text-gray-600 font-medium">
						内容：
					</label>
					<textarea
						id="content"
						{...register("content")}
						className="w-full border p-2 rounded-md focus:ring focus:ring-blue-300"
					/>
					{isSubmitted && errors.content && (
						<p className="text-red-500 text-sm">{errors.content.message}</p>
					)}
				</div>
				<button
					type="submit"
					className="w-full py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600"
				>
					登録
				</button>
				{message && <p className="mt-4 text-green-600 font-bold">{message}</p>}
			</form>
			<div className="mt-6 flex justify-center">
				<Link href="/" className="text-blue-500 hover:underline">
					戻る
				</Link>
			</div>
		</div>
	);
};
