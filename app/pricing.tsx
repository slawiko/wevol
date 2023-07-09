  export default function PricingSection({ className, animate }: { className?: string, animate?: boolean }) {
  return (
    <div className={`bg-aurora flex flex-col items-center overflow-hidden ${className ?? ""}`}>
      <div className={`text-2xl md:text-3xl lg:text-4xl text-white mt-10 lg:mt-40 ${animate && "animate-fade-in"}`}>
        Week program
      </div>
      <div className={`text-4xl md:text-6xl lg:text-8xl text-white mt-5 ${animate && "animate-fade-in"}`}>
        7 Nights / 8 Days
      </div>
      <div
        className="mt-10 md:mt-15 lg:mt-20 flex flex-wrap flex-row justify-center items-stretch gap-3 md:gap-5 lg:gap-7">
        <div
          className={`bg-white rounded-2xl shadow-xl shrink-0 flex flex-col items-center py-4 px-10 gap-2 md:gap-4 group ${animate && "transition-all animate-fly-in-l hover:scl-105"}`}>
          <span className="text-dark-blue text-lg md:text-xl">Option 1</span>
          <span className={`bg-clip-text text-transparent bg-shine bg-300% text-3xl md:text-4xl lg:text-5xl font-semibold ${animate && "group-hover:animate-rotate-background-shine"}`}>$450</span>
          <ul className="self-start text-dark-blue list-disc">
            <li>Volunteer</li>
          </ul>
        </div>

        <div
          className={`bg-white rounded-2xl shadow-xl shrink-0 flex flex-col items-center py-4 px-10 gap-2 md:gap-4 group ${animate && "transition-all animate-fly-in-tl hover:scl-105"}`}>
          <span className="text-dark-blue text-lg md:text-xl">Option 3</span>
          <span className={`bg-clip-text text-transparent bg-shine bg-300% text-3xl md:text-4xl lg:text-5xl font-semibold ${animate && "group-hover:animate-rotate-background-shine"}`}>$650</span>
          <ul className="self-start text-dark-blue list-disc">
            <li>Volunteer</li>
            <li>Surf</li>
          </ul>
        </div>

        <div
          className={`bg-white rounded-2xl shadow-xl shrink-0 flex flex-col items-center py-4 px-10 gap-2 md:gap-4 group ${animate && "transition-all animate-fly-in-r hover:scl-105"}`}>
          <span className="text-dark-blue text-lg md:text-xl">Option 3</span>
          <span className={`bg-clip-text text-transparent bg-shine bg-300% text-3xl md:text-4xl lg:text-5xl font-semibold ${animate && "group-hover:animate-rotate-background-shine"}`}>$800</span>
          <ul className="self-start text-dark-blue list-disc">
            <li>Volunteer</li>
            <li>Surf</li>
            <li>Spanish</li>
          </ul>
        </div>
      </div>
      <div className={`mt-10 bg-white rounded-2xl shadow-xl py-6 px-12 ${animate && "animate-fly-in-b"}`}>
        <ul className="self-start text-dark-blue list-disc list-image-checkmark leading-loose">
          <li>Arrival transportation</li>
          <li>Shared-room accommodation</li>
          <li>Breakfast, lunch & dinner daily</li>
          <li>Orientation</li>
          <li>Transportation to volunteering locations</li>
          <li>Spanish coursebook (with Spanish programs)</li>
          <li>Surfboards (with surf school programs)</li>
          <li>24/7 On-site program support</li>
        </ul>
      </div>
    </div>
  );
}