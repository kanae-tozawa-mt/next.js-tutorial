"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { basicFormSchema, BasicFormSchemaType } from "@/app/zod";
import { ConstellationsInput } from "@/app/component/ConstellationsInput";

export default function ConstellationsInputContainer () {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<BasicFormSchemaType>({
    resolver: zodResolver(basicFormSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
  });

  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data: BasicFormSchemaType) => {
    setMessage("");
    setErrorMessage("");

    try {
      setMessage("フォーム送信成功");
      console.log("送信されたデータ:", data);
      reset();
    } catch (error) {
      console.error("送信エラー:", error);
      setErrorMessage("データ送信に失敗しました。再試行してください。");
    }
  };

  return (
    <>
      <ConstellationsInput onSubmit={handleSubmit(onSubmit)} register={register} errors={errors} message={message} />
      {errorMessage && <p className="mt-4 text-red-500 font-bold">{errorMessage}</p>}
    </>
  );
};
