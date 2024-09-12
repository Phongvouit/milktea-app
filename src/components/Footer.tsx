const Footer = () => {
  return (
    <div className="border-t-4">
      <div className="mx-auto grid max-w-screen-xl gap-y-8 gap-x-12 px-4 py-10 md:grid-cols-2 xl:px-0">
        <div className="">
          <div className="mt-4 mb-2 font-bold xl:mb-4">Liên hệ</div>
          <nav aria-label="Guides Navigation">
            <ul className="space-y-3">
              <li>
                <b>Trụ sở chính</b>: Công ty Cổ Phần Phúc Long Heritage - ĐKKD:
                0316 871719 do sở KHĐT TPHCM cấp lần đầu ngày 21/05/2021
              </li>
              <li>
                <b>Nhà máy</b>: D_8D_CN Đường XE 1, Khu Công Nghiệp Mỹ Phước
                III, phường Mỹ Phước, thị xã Bến Cát, tỉnh Bình Dương, Việt Nam
              </li>
              <li>
                <b>Địa chỉ</b>: Phòng 702, Tầng 7, Tòa nhà Central Plaza, số 17
                Lê Duẩn, phường Bến Nghé, quận 1, Hồ Chí Minh
              </li>
              <li>Hotline Đặt hàng: 1800 6779</li>
              <li>
                <b>Hotline Công ty</b>: 1900 2345 18 (Bấm phím 0: Lễ Tân | phím
                1: CSKH)
              </li>
              <li>
                <b>Email</b>:
                sales@phuclong.masangroup.com;info2@phuclong.masangroup.com
              </li>
            </ul>
          </nav>
        </div>
        <div className="pl-0 xl:pl-3">
          <div className="mt-4 mb-2 font-bold xl:mb-4">
            Đăng ký nhận tin khuyến mãi
          </div>
          <div className="flex flex-col">
            <div className="mb-6 flex gap-x-2">
              <input
                type="text"
                className="w-full rounded-lg flex-shrink appearance-none border border-green-800 bg-white p-2 text-base focus:outline-none"
                placeholder="Nhập địa chỉ email"
              />
              <button className="rounded-lg border border-green-800 px-6 py-2 font-medium text-green-800 hover:bg-green-800 hover:text-white">
                Gửi
              </button>
            </div>
            <ul>
                <li>Chính sách đặt hàng</li>
                <li>Chính sách bảo mật thông tin</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
