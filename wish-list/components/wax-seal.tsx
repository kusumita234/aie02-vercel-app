"use client"

export function WaxSeal() {
  return (
    <div className="flex justify-center mt-12 animate-stamp">
      <div className="relative">
        {/* Wax seal */}
        <div className="w-32 h-32 bg-gradient-to-br from-[#c41e3a] to-[#8b0000] rounded-full shadow-xl flex items-center justify-center border-4 border-[#a01729]">
          <div className="text-center">
            <div className="text-4xl mb-1">🎅</div>
            <div className="text-[#f4e4c1] text-xs font-bold font-serif">SEALED</div>
          </div>
        </div>
        {/* Wax drips */}
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#8b0000] rounded-b-full blur-sm opacity-50" />
      </div>
    </div>
  )
}
