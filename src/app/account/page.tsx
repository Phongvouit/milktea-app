"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

// import { FieldValues, useForm } from "react-hook-form";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { User } from "@prisma/client";

// const fetchCurrentUser = () => {
//   return fetch("http://localhost:3000/api/settings").then((res) => {
//     if (!res.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return res.json(); // Trả về dữ liệu
//   });
// };

const AccountPage = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/api/settings")
  //     .then((data) => setCurrentUser(data?.data))
  //     .catch((err) => console.log(err));
  // }, []);

  // const { data: currentUser } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: fetchCurrentUser,
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   setValue,
  //   watch,
  //   formState: { errors },
  // } = useForm<FieldValues>({
  //   defaultValues: {
  //     name: currentUser?.name,
  //     image: currentUser?.image,
  //   },
  // });

  // const image = watch("image");
  // const name = watch("name");

  // console.log("user", currentUser);
  // console.log("image", image);
  // console.log("name", name);


  return (
    <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6 text-gray-600 font-semibold">
      Thông tin cá nhân
    </h2>
  );
};

export default AccountPage;
