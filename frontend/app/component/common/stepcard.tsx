import { ReactNode } from "react";

type StepCardProps = {
  icon: ReactNode;
  title: string;
  desc: string;
};

export default function StepCard({
  icon,
  title,
  desc,
}: StepCardProps) {
  return (
    <div className="w-80 rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <div className="mb-5 flex justify-center text-blue-800">
        {icon}
      </div>

      <h3 className="mb-3 text-2xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="leading-7 text-gray-500">
        {desc}
      </p>

    </div>
  );
}