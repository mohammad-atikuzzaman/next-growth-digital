import React from "react";
import { FiArrowDownRight } from "react-icons/fi";
import Service from "./Service";
import Link from "next/link";

const Services = () => {
  return (
    <section className="bg-[#F7E6FF] py-28 space-y-8">
      <div className="container mx-auto flex items-center justify-between">
        <section className="w-1/2 space-y-4">
          <h2 className="text-5xl font-semibold capitalize">
            Our best{" "}
            <span className="bg-gradient-to-r from-[#5936FF] to-[#BA2BFD] inline-block text-transparent bg-clip-text">
              services
            </span>{" "}
            provide
          </h2>
          <p className="text-lg text-[#676767] ">
            At NexGrowth Digital, we deliver tailored digital marketing
            solutions to elevate your business. Our data-driven strategies and
            creative approach ensure your brand reaches the right audience for
            impactful results.
          </p>
        </section>
        <button className="flex items-center gap-2 text-lg font-medium text-[#5A36FF] px-8 py-4 border border-[#5A36FF] rounded-lg hover:bg-gradient-to-r from-[#5936FF] to-[#BA2BFD] hover:text-white transition-all duration-500">
          All Service
          <FiArrowDownRight />
        </button>
      </div>
      <div className="container mx-auto grid grid-cols-9 gap-8">
        <Link href={"/link"} className="col-span-5">
          <Service
            icon={"/icons/google-ads.svg"}
            title={"Google Ads Management"}
            detail={
              "Our Google Ads Management services focus on optimizing ad performance, targeting the right audience, and maximizing ROI. From campaign setup to ongoing analysis."
            }
          />
        </Link>
        <Link href={"/link"} className="col-span-4">
          <Service
            icon={"/icons/ux-product-design.svg"}
            title={"UI/UX Product Design"}
            detail={
              "Our UI/UX & Product Design services focus on creating intuitive, user-friendly experiences that drive engagement and satisfaction "
            }
          />
        </Link>
        <Link href={"/link"} className="col-span-4">
          <Service
            icon={"/icons/performance-marketing.svg"}
            title={"Performance Marketing"}
            detail={
              "Maximize impact with data-driven campaigns focused on real results. Every dollar fuels growth in leads, conversions, and sales."
            }
          />
        </Link>
        <Link href={"/link"} className="col-span-5">
          <Service
            icon={"/icons/conversion-rate.svg"}
            title={"Conversion Rate Optimization "}
            detail={
              "Our Google Ads Management services focus on optimizing ad performance, targeting the right audience, and maximizing ROI. From campaign setup to ongoing analysis."
            }
          />
        </Link>
      </div>
    </section>
  );
};

export default Services;
