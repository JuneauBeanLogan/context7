import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] dark:from-[#18181b] dark:to-[#27272a] transition-colors duration-500">
      <main className="flex flex-col items-center gap-8 px-4 py-24">
        <Image
          src="/logo.png"
          alt="Optima Health Logo"
          width={120}
          height={120}
          className="rounded-2xl shadow-lg mb-4"
          priority
        />
        <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2 text-center">
          Optima Health
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-xl text-center mb-6">
          Optimize your body. Track your health, nutrition, and progress with seamless integration of your phone and wearables.
        </p>
        <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition-transform">
          Get Started
        </button>
      </main>
      <footer className="w-full flex justify-center py-6 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Optima Health. All rights reserved.
      </footer>
    </div>
  );
}
