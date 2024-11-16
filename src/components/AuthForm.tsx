"use client";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import Input from "./Input";
import Button from "./Button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const toggleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER");
    } else {
      setVariant("LOGIN");
    }
  }, [variant]);

  //Khởi tạo useForm nhận vào các hàm và đối tượng cần thiết như register, handleSubmit, formState
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  //Hàm xử lý khi submit form
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    setIsLoading(true);
    if (variant === "REGISTER") {
      //Gọi API đăng ký bằng fetch
      fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), //Chuyển đổi dữ liệu form sang JSON
      })
        .then((res) => {
          //Kiểm tra phản hồi từ API
          if (!res.ok) {
            throw new Error("Đăng ký thất bại");
          } else {
            signIn("credentials", data);
          }
        })
        .catch(() => toast.error("Something went wrong!"))
        .finally(() => setIsLoading(false));
    }

    if (variant === "LOGIN") {
      signIn("credentials", {
        ...data,
        redirect: false,
      })
        .then((callback) => {
          if (callback?.error) {
            toast.error("Invalid credentials");
          }

          if (callback?.ok && !callback?.error) {
            toast.success("Đăng nhập thành công");
            router.push("/");
          }
        })
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white overflow-hidden sm:rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)}>
        {variant === "REGISTER" && (
          <div className="mb-4">
            <Input
              id="name"
              placeholder="Tên"
              register={register}
              errors={errors}
              disabled={isLoading}
            />
          </div>
        )}
        <Input
          id="email"
          placeholder="Email"
          register={register}
          errors={errors}
          disabled={isLoading}
        />

        <div className="mt-4">
          <Input
            id="password"
            placeholder="Mật khẩu"
            register={register}
            errors={errors}
            disabled={isLoading}
          />
        </div>

        <div className="flex flex-col mt-4">
          {/* <button className="inline-flex items-center justify-center px-4 py-3 bg-[#f84525] border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-800 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150">
            {variant === "LOGIN" ? "Đăng nhập" : "Đăng ký"}
          </button> */}
          <Button type="submit" disabled={isLoading}>
            {variant === "LOGIN" ? "Đăng nhập" : "Đăng ký"}
          </Button>
          <div className="flex mt-3">
            <span className="mr-1 text-xs text-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              {variant === "LOGIN" ? "Chưa có tài khoản?" : "Đã có tài khoản?"}
            </span>
            <span
              onClick={toggleVariant}
              className="cursor-pointer text-xs font-semibold text-green-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {variant === "LOGIN" ? "Tạo tài khoản" : "Đăng nhập"}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
