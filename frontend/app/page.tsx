import Navbar from "@/app/component/common/ืnavbar";
import Banner from "@/app/component/common/banner";
import Steps from "@/app/component/common/step";

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />
      <Banner />
      <Steps />
    </main>
  );
}