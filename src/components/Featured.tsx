import Image from "next/image";

const Featured = () => {
  return (
    <section className="md:mx-auto my-10 flex w-full flex-col lg:max-w-screen-xl px-4 xl:px-0 py-6 md:flex-row">
      <div className="mb-8 md:mb-0 md:w-1/2 relative lg:h-[520px] pt-[80%] lg:pt-0">
        <Image className="object-cover" src="/images/banner1.jpg" alt="" fill />
      </div>
      <div className="md:w-1/2 md:pl-10 flex items-center">
        <div className="">
          <h2 className="text-2xl font-medium text-green-800">
            TỪ NHỮNG MẦM TRÀ, CHÚNG TÔI TẠO RA NIỀM ĐAM MÊ
          </h2>
          <p className="mt-6 text-md">
            Trải qua hơn 50 năm chắt chiu tinh hoa từ những búp trà xanh và hạt
            cà phê thượng hạng cùng mong muốn mang lại cho khách hàng những trải
            nghiệm giá trị nhất khi thưởng thức, Phúc Long liên tục là thương
            hiệu tiên phong với nhiều ý tưởng sáng tạo đi đầu trong ngành trà và
            cà phê.
          </p>
          <p className="mt-6 text-md">
            Chúng tôi tin rằng từng sản phẩm trà và cà phê sẽ càng thêm hảo hạng
            khi được tạo ra từ sự phấn đấu không ngừng cùng niềm đam mê. Và
            chính kết nối dựa trên niềm tin, sự trung thực và tin yêu sẽ góp
            phần mang đến những nét đẹp trong văn hóa thưởng trà và cà phê ngày
            càng bay cao, vươn xa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
