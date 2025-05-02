import { z } from "zod";

export const basicFormSchema = z.object({
  title: z.string().min(1, "タイトルは必須です"),
  content: z.string().min(10, "内容は10文字以上入力してください").optional(),
});

export type BasicFormSchemaType = z.infer<typeof basicFormSchema>;