"use client"

import { useId, useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

type StarPoint = [number, number, boolean?, boolean?]

const stars: StarPoint[] = [
  [4, 4, true, true],
  [4, 44, true],
  [36, 22],
  [50, 146, true, true],
  [64, 43, true, true],
  [76, 30, true],
  [101, 116],
  [140, 36, true],
  [149, 134],
  [162, 74, true],
  [171, 96, true, true],
  [210, 56, true, true],
  [235, 90],
  [275, 82, true, true],
  [306, 6],
  [307, 64, true, true],
  [380, 68, true],
  [380, 108, true, true],
  [391, 148, true, true],
  [405, 18, true],
  [412, 86, true, true],
  [426, 210, true, true],
  [427, 56, true, true],
  [538, 138],
  [563, 88, true, true],
  [611, 154, true, true],
  [637, 150],
  [651, 146, true],
  [682, 70, true, true],
  [683, 128],
  [781, 82, true, true],
  [785, 158, true],
  [832, 146, true, true],
  [852, 89],
]

const constellations: [number, number][][] = [
  [
    [247, 103],
    [261, 86],
    [307, 104],
    [357, 36],
  ],
  [
    [586, 120],
    [516, 100],
    [491, 62],
    [440, 107],
    [477, 180],
    [516, 100],
  ],
  [
    [733, 100],
    [803, 120],
    [879, 113],
    [823, 164],
    [803, 120],
  ],
]

function Star({
  blurId,
  point: [cx, cy, isDim, hasBlur],
}: {
  blurId: string
  point: StarPoint
}) {
  const gRef = useRef<SVGGElement>(null)
  const circleRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    if (!gRef.current || !circleRef.current) return
    const delay = 2 * Math.random()

    const animFade = gRef.current.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 4000,
      delay: delay * 1000,
      fill: "forwards",
    })

    const animTwinkle = circleRef.current.animate(
      [
        { opacity: isDim ? 0.2 : 1, transform: `scale(${isDim ? 1 : 1.2})` },
        { opacity: isDim ? 0.5 : 0.6, transform: `scale(${isDim ? 1.2 : 1})` },
      ],
      {
        delay: delay * 1000,
        duration: (2 * Math.random() + 2) * 1000,
        direction: "alternate",
        iterations: Infinity,
      }
    )

    return () => {
      animFade.cancel()
      animTwinkle.cancel()
    }
  }, [isDim])

  return (
    <g ref={gRef} className="opacity-0">
      <circle
        ref={circleRef}
        cx={cx}
        cy={cy}
        r={1}
        style={{
          transformOrigin: `${cx / 16}rem ${cy / 16}rem`,
          opacity: isDim ? 0.2 : 1,
          transform: `scale(${isDim ? 1 : 1.2})`,
        }}
        filter={hasBlur ? `url(#${blurId})` : undefined}
      />
    </g>
  )
}

function Constellation({
  points,
  blurId,
}: {
  points: [number, number][]
  blurId: string
}) {
  const pathRef = useRef<SVGPathElement>(null)
  const uniquePoints = points.filter(
    (p, idx) => points.findIndex((other) => String(other) === String(p)) === idx
  )
  const isClosed = uniquePoints.length !== points.length

  useEffect(() => {
    if (!pathRef.current) return
    const delay = (3 * Math.random() + 2) * 1000

    const anim = pathRef.current.animate(
      [
        { strokeDashoffset: 1, visibility: "visible" },
        { strokeDashoffset: 0, visibility: "visible" },
      ],
      {
        duration: 5000,
        delay,
        fill: "forwards",
        easing: "ease-in-out",
      }
    )

    let fillAnim: Animation | null = null
    if (isClosed) {
      fillAnim = pathRef.current.animate(
        [
          { fill: "rgba(255, 255, 255, 0)" },
          { fill: "rgba(255, 255, 255, 0.02)" },
        ],
        {
          duration: 1000,
          delay: delay + 4000,
          fill: "forwards",
        }
      )
    }

    return () => {
      anim.cancel()
      fillAnim?.cancel()
    }
  }, [isClosed])

  return (
    <>
      <path
        ref={pathRef}
        stroke="white"
        strokeOpacity="0.2"
        strokeDasharray="1"
        strokeDashoffset="1"
        pathLength="1"
        fill="transparent"
        d={`M ${points.map(([x, y]) => `${x},${y}`).join("L")}`}
        className="invisible"
      />
      {uniquePoints.map((p, i) => (
        <Star key={i} point={[p[0], p[1], false, false]} blurId={blurId} />
      ))}
    </>
  )
}

export function StarField({ className }: { className?: string }) {
  const id = useId()

  return (
    <svg
      viewBox="0 0 881 211"
      fill="white"
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute top-14 -right-44 w-[55.0625rem] origin-top-right rotate-[30deg] overflow-visible opacity-70",
        className
      )}
    >
      <defs>
        <filter id={id}>
          <feGaussianBlur in="SourceGraphic" stdDeviation=".5" />
        </filter>
      </defs>
      {constellations.map((points, i) => (
        <Constellation key={i} points={points} blurId={id} />
      ))}
      {stars.map((p, i) => (
        <Star key={i} point={p} blurId={id} />
      ))}
    </svg>
  )
}
