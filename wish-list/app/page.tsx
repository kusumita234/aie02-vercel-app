"use client"
import { WishListGenerator } from "@/components/wish-list-generator"

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#0a1f2e] via-[#1a3a4a] to-[#2a1810]">
      {/* Snowfall background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="snowflake absolute text-white opacity-80"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 10 + 10}px`,
              animationDuration: `${Math.random() * 3 + 5}s`,
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Santa sleigh image */}
      <div className="absolute top-10 right-10 w-64 h-40 opacity-30 pointer-events-none hidden md:block">
        <img src="/santa.jpg" alt="Santa's sleigh" className="w-full h-full object-cover rounded-lg" />
      </div>

      <WishListGenerator />
    </main>
  )
}
