"use client";
import LayoutUser from "@/components/LayoutUser";
import Image from "next/image";

const AccountPage = () => {
  return (
    <LayoutUser>
      <section className="bg-white p-4 rounded-md">
        <div className="md:flex">
          <h2 className="md:w-1/3 uppercase tracking-wide text-sm sm:text-lg mb-6 text-gray-600 font-semibold">
            Thông tin cá nhân
          </h2>
        </div>
        <form>
          <div className="md:flex mb-8">
            <div className="md:w-1/3">
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
                <Image alt="Avatar" src={"/images/profile.png"} fill />
              </div>
            </div>
            <div className="md:flex-1 mt-2 mb:mt-0 md:px-3">
              <div className="mb-4">
                <label className="block uppercase tracking-wide text-xs font-bold mb-1">
                  Họ & Tên
                </label>
                <input
                  className="w-full p-3 border border-solid border-gray-300 focus:outline-none focus:border-green-800 rounded-md"
                  type="text"
                  name="name"
                  placeholder="Acme Mfg. Co."
                />
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
      </section>
    </LayoutUser>
  );
};

export default AccountPage;
