"use client";

import { useState } from "react";
import type { CommentData } from "./page";

export default function CommentIndex({
	initialComments,
}: { initialComments: CommentData[] }) {
	const [comments, setComments] = useState<CommentData[]>(initialComments);

	// コメントに「いいね」をつける機能
	const handleLike = (id: number) => {
		setComments((prevComments) =>
			prevComments.map((comment) =>
				comment.id === id ? { ...comment, likes: comment.likes + 1 } : comment,
			),
		);
	};

	return (
		<div className="mt-8 w-full max-w-md">
			<h2 className="text-lg font-bold mb-4">コメント一覧</h2>
			<ul className="space-y-4">
				{comments.map((comment) => (
					<li
						key={comment.id}
						className="p-4 border border-gray-300 rounded bg-gray-50"
					>
						<p>{comment.text}</p>
						<p className="text-sm text-gray-500">投稿日: {comment.date}</p>
						<div className="flex items-center gap-2 mt-2">
							<button
								type="button"
								onClick={() => handleLike(comment.id)}
								className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
							>
								いいね
							</button>
							<span>{comment.likes} いいね</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
