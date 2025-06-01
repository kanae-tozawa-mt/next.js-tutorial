import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { basicFormSchema } from "./zod";
import type { BasicFormSchemaType } from "./zod";

export const useBasicFormTop = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<BasicFormSchemaType>({
		resolver: zodResolver(basicFormSchema),
	});

	const onSubmit = (data: BasicFormSchemaType) => {
		console.log(data);
	};

	return {
		register,
		onSubmit: handleSubmit(onSubmit),
		errors,
	};
};
