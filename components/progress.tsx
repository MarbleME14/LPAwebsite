"use client"

interface ProgressProps {
  value: number
  className?: string
  indicatorClassName?: string
}

export default function Progress({ value, className, indicatorClassName }: ProgressProps) {
  const progressWidth = `${value}%`

  return (
    <div className={`relative w-full h-4 ${className}`}>
      <div
        className={`absolute top-0 left-0 h-full bg-gray-200 rounded-full ${indicatorClassName}`}
        style={{ width: progressWidth }}
      />
    </div>
  )
}

