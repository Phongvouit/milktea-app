"use client";

import MessageInput from "./MessageInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPhoto, HiPaperAirplane } from "react-icons/hi2";
import { CldUploadButton } from "next-cloudinary";
import axios from "axios";
import useConversation from "@/hooks/useConversation";

const Form = () => {
  const conversationId = useConversation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setValue("message", "", { shouldValidate: true });
    axios.post("http://localhost:3000/api/messages", {
      ...data,
      conversationId,
    });
  };

  const handleUpload = () => {};

  return (
    <footer className="bg-white border-t border-gray-300 p-4 w-full flex items-center gap-4">
      <CldUploadButton
        options={{ maxFiles: 1 }}
        onUpload={handleUpload}
        uploadPreset="cdxaurgb"
      >
        <HiPhoto size={30} className="text-green-500 hover:text-green-600" />
      </CldUploadButton>
      <form
        className="flex items-center w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <MessageInput
          id="message"
          register={register}
          errors={errors}
          required
          placehoder="Nhắn tin"
        />
        <button
          type="submit"
          className="
                rounded-full
                p-2
                bg-green-500
                cursor-pointer
                hover:bg-green-600
                transition
                "
        >
          <HiPaperAirplane size={18} className="text-white" />
        </button>
      </form>
    </footer>
  );
};

export default Form;
