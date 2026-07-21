import StepCard from "./stepcard";
import { Search, FileText, Store } from "lucide-react";

export default function Steps() {
  return (
    <section className="bg-white py-16">
      <h2 className="mb-14 text-center text-4xl font-bold">
        สั่งพิมพ์งานง่ายๆ ใน 3 ขั้นตอน
      </h2>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-6 px-8 lg:flex-row">

        <StepCard
          icon={<Search size={45} />}
          title="ค้นหาร้านปริ้นใกล้ฉัน"
          desc="เลือกร้าน บริการ และรีวิว"
        />

        <span className="hidden text-5xl text-sky-500 lg:block">→</span>

        <StepCard
          icon={<FileText size={45} />}
          title="แนบไฟล์ & ชำระเงิน"
          desc="อัปโหลด PDF หรือรูปภาพ"
        />

        <span className="hidden text-5xl text-sky-500 lg:block">→</span>

        <StepCard
          icon={<Store size={45} />}
          title="รับงานที่หน้าร้าน"
          desc="เลือกเวลามารับได้ทันที"
        />

      </div>
    </section>
  );
}