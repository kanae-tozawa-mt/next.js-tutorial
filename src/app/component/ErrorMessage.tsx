import React from "react";

type ErrorMessageProps = {
	message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
	if (!message) return null;

	return <p className="mt-4 text-red-500 font-bold">{message}</p>;
};
