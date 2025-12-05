"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpIcon, SparklesIcon } from "lucide-react"
import { WishItem } from "./wish-item"
import { WaxSeal } from "./wax-seal"

interface Wish {
  id: string
  text: string
  rating: "nice" | "naughty" | null
  isWriting: boolean
}

export function WishListGenerator() {
  const [currentWish, setCurrentWish] = useState("")
  const [wishes, setWishes] = useState<Wish[]>([])
  const [isComplete, setIsComplete] = useState(false)

  const addWish = () => {
    if (currentWish.trim()) {
      const newWish: Wish = {
        id: Date.now().toString(),
        text: currentWish,
        rating: null,
        isWriting: true,
      }
      setWishes([...wishes, newWish])
      setCurrentWish("")

      // Simulate Santa's response after writing animation
      setTimeout(
        () => {
          setWishes((prev) =>
            prev.map((w) =>
              w.id === newWish.id
                ? {
                    ...w,
                    isWriting: false,
                    rating: Math.random() > 0.3 ? "nice" : "naughty",
                  }
                : w,
            ),
          )
          // Play Ho Ho Ho sound
          playHoHoSound()
        },
        currentWish.length * 50 + 500,
      )
    }
  }

  const playHoHoSound = () => {
    // Simulate sound with console log (in production, use actual audio)
    console.log("🎅 Ho Ho Ho!")
  }

  const completeList = () => {
    setIsComplete(true)
  }

  return (
    <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-3xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-[#f4e4c1] mb-4 drop-shadow-lg font-serif">
            🎄 Santa's Magical Wish List 🎄
          </h1>
          <p className="text-[#e6d5b8] text-lg">
            Write your wishes and let Santa decide if you've been naughty or nice...
          </p>
        </div>

        {/* Parchment scroll */}
        <div className="relative">
          {/* Scroll edges */}
          <div className="parchment-container bg-[#f4e4c1] rounded-lg shadow-2xl p-8 md:p-12 border-8 border-[#8b7355] relative overflow-hidden">
            {/* Aged paper texture overlay */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 pointer-events-none" />

            {/* Candle glow effect */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ff6b35] rounded-full blur-3xl opacity-20 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#ffa500] rounded-full blur-3xl opacity-20 animate-pulse" />

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-[#8b0000] mb-6 text-center font-serif border-b-2 border-[#8b7355] pb-4">
                ✨ My Wishes for Christmas ✨
              </h2>

              {/* Wishes list */}
              <div className="space-y-4 mb-8 min-h-[200px]">
                {wishes.length === 0 && (
                  <p className="text-center text-[#8b7355] italic py-12">Start writing your wishes below...</p>
                )}
                {wishes.map((wish, index) => (
                  <WishItem key={wish.id} wish={wish} index={index} />
                ))}
              </div>

              {/* Input area */}
              {!isComplete && (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={currentWish}
                      onChange={(e) => setCurrentWish(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && addWish()}
                      placeholder="Type your wish here..."
                      className="flex-1 bg-white/80 border-2 border-[#8b7355] text-[#2c1810] placeholder:text-[#8b7355]/50 text-lg font-serif"
                    />
                    <Button
                      onClick={addWish}
                      size="icon"
                      className="bg-[#c41e3a] hover:bg-[#a01729] text-white"
                      aria-label="Add wish"
                    >
                      <ArrowUpIcon className="h-5 w-5" />
                    </Button>
                  </div>

                  {wishes.length > 0 && (
                    <Button
                      onClick={completeList}
                      className="w-full bg-[#165b33] hover:bg-[#0f4027] text-white font-semibold text-lg"
                    >
                      <SparklesIcon className="mr-2 h-5 w-5" />
                      Complete My List & Seal It!
                    </Button>
                  )}
                </div>
              )}

              {/* Wax seal */}
              {isComplete && <WaxSeal />}
            </div>
          </div>
        </div>

        {/* Footer message */}
        {isComplete && (
          <div className="text-center mt-8 animate-fade-in">
            <p className="text-[#f4e4c1] text-xl font-serif">
              🎅 Your wish list has been sealed and sent to the North Pole! 🎅
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
