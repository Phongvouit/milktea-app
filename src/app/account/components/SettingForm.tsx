"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Input from "@/components/Input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";

const SettingForm = ({ currentUser }: { currentUser: User }) => {
  const router = useRouter();
  const [file, setFile] = useState<File>();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: currentUser?.name,
      image: currentUser?.image,
    },
  });

  const imageUrl = watch("image");

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    axios
      .put("http://localhost:3000/api/settings", data)
      .then(() => {
        router.refresh();
        toast.success("Cập nhật thành công");
      })
      .catch(() => toast.error("Something went wrong"));
  };

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Lấy tệp đầu tiên
    if (file) {
      setFile(file);
      const url = await upload();
      setValue("image", url)
    } else {
      console.error("No file selected or invalid file input.");
    }
  };

  const upload = async () => {
    const data = new FormData();
    data.append("file", file!);
    data.append("upload_preset", "qg6elrqk");

    const res = await fetch("https://api.cloudinary.com/v1_1/dcioqvstr/image/upload", {
      method: "POST",
      body: data,
    });

    const resData = await res.json();
    return resData.url;
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex mb-8">
          <div className="md:w-1/3 flex flex-col">
            <div
              className="
            relative
            inline-block
            rounded-full
            overflow-hidden
            h-40
            w-40
            "
            >
              <Image
                alt="Avatar"
                src={imageUrl || "/images/profile.png"}
                fill
              />
            </div>
            <div className="w-40 text-center mt-4">
              <label className="bg-green-800 p-2 text-white cursor-pointer w-20">
                Cập nhật
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  hidden
                />
              </label>
            </div>
          </div>
          <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
            <div className="mb-4">
              <label className="block uppercase tracking-wide text-xs font-bold mb-1">
                Họ&tên
              </label>
              <Input id="name" register={register} required errors={errors} />
            </div>
            <div className="md:flex mb-4">
              <div className="md:flex-1 md:pr-3">
                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold mb-1">
                  Địa chỉ email
                </label>
                <input
                  className="w-full p-3 border border-solid border-gray-300 focus:outline-none focus:border-green-800 rounded-md"
                  type="text"
                  name="address_street"
                  placeholder="555 Roadrunner Lane"
                />
              </div>
              <div className="md:flex-1 md:pl-3">
                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold mb-1">
                  Số điện thoại
                </label>
                <input
                  className="w-full p-3 border border-solid border-gray-300 focus:outline-none focus:border-green-800 rounded-md"
                  type="text"
                  name="address_number"
                  placeholder="#3"
                />
                <span className="text-xs mb-4 font-thin">
                  We lied, this isn required.
                </span>
              </div>
            </div>
            <div className="md:flex mb-6">
              <div className="md:flex-1 md:pr-3">
                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold mb-1">
                  Ngày sinh
                </label>
                <input
                  className="w-full p-3 border border-solid border-gray-300 focus:outline-none focus:border-green-800 rounded-md"
                  type="text"
                  name="lat"
                  placeholder="30.0455542"
                />
              </div>
              <div className="md:flex-1 md:pl-3">
                <label className="block uppercase tracking-wide text-charcoal-darker text-xs font-bold mb-1">
                  Giới tính
                </label>
                <input
                  className="w-full p-3 border border-solid border-gray-300 focus:outline-none focus:border-green-800 rounded-md"
                  type="text"
                  name="lon"
                  placeholder="-99.1405168"
                />
              </div>
            </div>
            <button className="w-1/3 rounded-sm border-0 px-4 py-2 bg-green-800 text-white">
              Lưu thay đổi
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingForm;
