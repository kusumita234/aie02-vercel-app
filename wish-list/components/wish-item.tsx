"use client"

import { useEffect, useState } from "react"

interface WishItemProps {
  wish: {
    text: string
    rating: "nice" | "naughty" | null
    isWriting: boolean
  }
  index: number
}

export function WishItem({ wish, index }: WishItemProps) {
  const [displayText, setDisplayText] = useState("")
  const [showRating, setShowRating] = useState(false)

  useEffect(() => {
    if (wish.isWriting) {
      let currentIndex = 0
      const interval = setInterval(() => {
        if (currentIndex <= wish.text.length) {
          setDisplayText(wish.text.slice(0, currentIndex))
          currentIndex++
        } else {
          clearInterval(interval)
        }
      }, 50)
      return () => clearInterval(interval)
    } else {
      setDisplayText(wish.text)
      setTimeout(() => setShowRating(true), 300)
    }
  }, [wish.isWriting, wish.text])

  return (
    <div className="flex items-start gap-3 group animate-fade-in">
      <span className="text-[#8b0000] font-bold text-lg font-serif mt-1">{index + 1}.</span>
      <div className="flex-1">
        <p className="text-[#2c1810] text-lg font-serif leading-relaxed">
          {displayText}
          {wish.isWriting && <span className="inline-block w-1 h-5 bg-[#2c1810] ml-1 animate-pulse" />}
        </p>
        {showRating && wish.rating && (
          <div className="mt-2 animate-slide-up">
            {wish.rating === "nice" ? (
              <span className="inline-flex items-center gap-1 bg-[#165b33] text-white px-3 py-1 rounded-full text-sm font-semibold">
                ⭐ Nice List! ⭐
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 bg-[#8b0000] text-white px-3 py-1 rounded-full text-sm font-semibold">
                😈 Naughty List! 😈
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
