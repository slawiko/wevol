export default function Home() {
  return (
    <main className="min-h-screen p-24">
      <video className="absolute inset-0 w-full h-full object-cover contrast-50 -z-10"
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

      <div className="flex flex-col justify-center items-center">
        <h1 className="text-9xl font-bold animate-upscale">
          <span className="text-light-blue">We</span><span className="text-blue">VOL</span>
        </h1>
        <p className="text-5xl text-white tracking-wide animate-fade-in">Travel like you care</p>
      </div>

    </main>
  );
}
