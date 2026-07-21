import Image from "next/image";

export default function Banner() {
  return (
    <section className="bg-[#082A63]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-8 py-16 lg:grid-cols-2">

        <div>
          <h1 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
            สั่งพิมพ์งานออนไลน์
            <br />
            ครบจบในที่เดียว
          </h1>

          <p className="mt-6 max-w-lg leading-8 text-gray-300">
            ค้นหาร้านปริ้นที่ดีที่สุด
            บริการ อัปโหลดไฟล์ และรับงานได้ทันที
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <button className="rounded-full bg-sky-500 px-8 py-4 text-white transition hover:bg-sky-600">
              ค้นหาร้านปริ้นใกล้ฉัน
            </button>

            <button className="rounded-full border-2 border-white px-8 py-4 text-white transition hover:bg-white hover:text-[#082A63]">
              สมัครร้านค้า
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/hero.jpg"
            alt="PrintHub Hero"
            width={700}
            height={500}
            className="rounded-[40px] object-cover shadow-2xl"
            priority
          />
        </div>

      </div>
    </section>
  );
}