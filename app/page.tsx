import PricingSection from "@/app/pricing";
import { Metadata, ResolvingMetadata } from "next";

export default function Home() {
  return (
    <main className="min-h-screen">
      <video className="fixed inset-0 w-full h-full object-cover contrast-50 -z-10"
             width="100%"
             height="100%"
             loop
             autoPlay
             muted
             playsInline
             poster="/poster.png"
             preload="metadata"
      >
        <source src="/background-video.mp4" type="video/mp4" />
      </video>

      <div className="min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold animate-upscale">
            <span className="bg-clip-text text-transparent bg-wevol bg-300% animate-rotate-background">WeVOL</span>
          </h1>
          <p className="text-3xl md:text-4xl lg:text-5xl text-white mt-1 tracking-widest animate-fade-in">Travel like
            you care</p>
        </div>
      </div>

      <PricingSection className="min-h-screen" animate />
    </main>
  );
}

export function generateMetadata(params: unknown, parent: ResolvingMetadata): Metadata {
  return {
    title: "WeVOL",
    description: "WeVOL",
  };
}
