import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { basicFormSchema, BasicFormSchemaType } from "./zod";

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