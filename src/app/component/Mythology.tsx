"use client";
import useSWR from "swr";
import { updateData } from "../utils/updateData";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

/** 神話を表示するコンポーネント */
export default function Mythology({ id }: { id: string }) {
  const { data, error, isLoading, mutate } = useSWR(`/api/memos?id=${id}`, fetcher);
  if (isLoading) return <p className="text-center text-gray-500">読み込み中...</p>;
  if (error) return <p className="text-center text-red-500">取得に失敗しました</p>;

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 border border-gray-300 rounded-lg">
      <h1 className="text-xl font-bold text-center text-gray-800 mb-4">Tips</h1>
      <h2 className="font-semibold text-center text-gray-700 mb-6">{data.title}</h2>
      <p className="text-gray-600 leading-relaxed">{data.description}</p>
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => updateData(id, mutate)}
          className="px-6 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-600 transition-colors"
        >
          再取得
        </button>
      </div>
    </div>
  );
}
