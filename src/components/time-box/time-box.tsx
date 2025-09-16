export function TimeBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid min-w-16 grid-rows-2 place-items-center rounded-xl px-2 py-1 md:min-w-20 md:px-3 md:py-2">
      <div className="text-2xl font-bold leading-none text-yellow-300 md:text-4xl">
        {value}
      </div>

      <div className="text-[10px] tracking-wide text-yellow-200/90 md:text-xs">
        {label}
      </div>
    </div>
  )
}
