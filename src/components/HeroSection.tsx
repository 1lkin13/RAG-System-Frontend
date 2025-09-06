export default function HeroSection() {
  return (
    <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-2 sm:px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 leading-tight">
        <span className="italic font-light block" style={{ fontFamily: "'Dancing Script', cursive" }}>
          Bir Latte, bir fikir
        </span>
        <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent block mt-2 sm:mt-4 font-semibold" style={{ fontFamily: "'Dancing Script', cursive" }}>
          bir AI
        </span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-slate-300 max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16 font-light leading-relaxed">
        7.50 manat ilə yarandı — <span className="font-semibold">PS</span>, <span className="font-semibold">Vector</span>, <span className="font-semibold">Docker</span>, <span className="font-semibold">Gemini</span>, <span className="font-semibold">React</span>, <span className="font-semibold">Node.js</span> 
      </p>
    </div>
  )
}
