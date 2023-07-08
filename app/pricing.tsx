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
        className="mt-10 md:mt-15 lg:mt-20 flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-5 lg:gap-6">
        <div
          className={`bg-white rounded-2xl shadow-xl shrink-0 flex flex-col items-center py-8 px-12 gap-5 ${animate && "animate-fly-in-l"}`}>
          <span className="text-light-blue text-5xl font-semibold">$450</span>
          <ul className="self-start text-dark-blue list-disc">
            <li>Volunteer</li>
          </ul>
        </div>

        <div
          className={`bg-white rounded-2xl shadow-xl shrink-0 flex flex-col items-center py-8 px-12 gap-5 ${animate && "animate-fly-in-tl"}`}>
          <span className="text-light-blue text-5xl font-semibold">$650</span>
          <ul className="self-start text-dark-blue list-disc">
            <li>Volunteer</li>
            <li>Surf</li>
          </ul>
        </div>

        <div
          className={`bg-white rounded-2xl shadow-xl shrink-0 flex flex-col items-center py-8 px-12 gap-5 ${animate && "animate-fly-in-r"}`}>
          <span className="text-light-blue text-5xl font-semibold">$800</span>
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