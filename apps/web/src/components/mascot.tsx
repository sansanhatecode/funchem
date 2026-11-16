import { useId } from 'react'
import { cn } from '@/lib/cn'

export type MascotMood = 'happy' | 'wave' | 'cheer' | 'oops' | 'think'

const BRAND = '#12b886'
const BRAND_DEEP = '#0b8f68'
const INK = '#1f2a37'

/**
 * Bình: linh vật của FunChem, một chiếc bình tam giác thí nghiệm có dung dịch xanh sủi bọt.
 * Xuất hiện để chào, cổ vũ khi đúng, an ủi khi sai và chúc mừng khi xong bài.
 */
export function Mascot({
  mood = 'happy',
  size = 96,
  className,
  title,
}: {
  mood?: MascotMood
  size?: number
  className?: string
  /** mô tả cho trình đọc màn hình; bỏ trống thì linh vật được coi là trang trí */
  title?: string
}) {
  const clip = useId()
  const armsUp = mood === 'cheer'
  const bodyAnim =
    mood === 'cheer'
      ? 'mascot-cheer 0.9s ease-in-out infinite'
      : mood === 'oops'
        ? undefined
        : 'mascot-bob 3.2s ease-in-out infinite'

  return (
    <svg
      viewBox="0 0 120 140"
      width={size}
      height={(size * 140) / 120}
      className={cn('shrink-0 overflow-visible', className)}
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <ellipse cx="60" cy="134" rx="34" ry="5" fill="rgb(31 42 55 / 0.14)" />
      <g style={{ animation: bodyAnim, transformBox: 'fill-box', transformOrigin: '50% 100%' }}>
        {/* tay */}
        {armsUp ? (
          <>
            <path
              d="M30 86 Q12 70 14 50"
              fill="none"
              stroke={BRAND_DEEP}
              strokeWidth="6"
              strokeLinecap="round"
            />
            <path
              d="M90 86 Q108 70 106 50"
              fill="none"
              stroke={BRAND_DEEP}
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle cx="14" cy="48" r="6" fill={BRAND_DEEP} />
            <circle cx="106" cy="48" r="6" fill={BRAND_DEEP} />
          </>
        ) : (
          <>
            <path
              d="M28 92 Q14 100 14 112"
              fill="none"
              stroke={BRAND_DEEP}
              strokeWidth="6"
              strokeLinecap="round"
            />
            <circle cx="14" cy="114" r="6" fill={BRAND_DEEP} />
            {mood === 'wave' ? (
              <g
                style={{
                  animation: 'mascot-wave 0.6s ease-in-out infinite alternate',
                  transformBox: 'fill-box',
                  transformOrigin: '0% 100%',
                }}
              >
                <path
                  d="M92 90 Q108 78 108 60"
                  fill="none"
                  stroke={BRAND_DEEP}
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <circle cx="108" cy="58" r="6" fill={BRAND_DEEP} />
              </g>
            ) : mood === 'think' ? (
              <>
                <path
                  d="M92 96 Q102 104 84 110"
                  fill="none"
                  stroke={BRAND_DEEP}
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <circle cx="82" cy="110" r="6" fill={BRAND_DEEP} />
              </>
            ) : (
              <>
                <path
                  d="M92 92 Q106 100 106 112"
                  fill="none"
                  stroke={BRAND_DEEP}
                  strokeWidth="6"
                  strokeLinecap="round"
                />
                <circle cx="106" cy="114" r="6" fill={BRAND_DEEP} />
              </>
            )}
          </>
        )}

        {/* thân bình */}
        <clipPath id={clip}>
          <path d="M47 40 L20 108 Q13 127 32 127 H88 Q107 127 100 108 L73 40 Z" />
        </clipPath>
        <path d="M47 40 L20 108 Q13 127 32 127 H88 Q107 127 100 108 L73 40 Z" fill="#F2FBFF" />
        <g clipPath={`url(#${clip})`}>
          <path d="M0 78 Q20 72 40 78 T80 78 T120 78 V140 H0 Z" fill={BRAND} />
          <path d="M60 78 H120 V140 H60 Z" fill={BRAND_DEEP} opacity="0.25" />
          <circle cx="40" cy="116" r="3" fill="#fff" opacity="0.8" className="sc sc-rise" />
          <circle
            cx="78"
            cy="120"
            r="4"
            fill="#fff"
            opacity="0.8"
            className="sc sc-rise"
            style={{ animationDelay: '-1.4s' }}
          />
          <circle
            cx="58"
            cy="122"
            r="2.4"
            fill="#fff"
            opacity="0.8"
            className="sc sc-rise"
            style={{ animationDelay: '-2.3s' }}
          />
        </g>
        <path
          d="M47 40 L20 108 Q13 127 32 127 H88 Q107 127 100 108 L73 40"
          fill="none"
          stroke={BRAND_DEEP}
          strokeWidth="4"
          strokeLinejoin="round"
        />
        {/* cổ và miệng bình */}
        <rect x="47" y="16" width="26" height="26" fill="#F2FBFF" />
        <path d="M47 18 V40 M73 18 V40" stroke={BRAND_DEEP} strokeWidth="4" />
        <rect
          x="40"
          y="8"
          width="40"
          height="11"
          rx="5.5"
          fill="#F2FBFF"
          stroke={BRAND_DEEP}
          strokeWidth="4"
        />
        <path d="M34 70 L27 90" stroke="#fff" strokeWidth="5" strokeLinecap="round" opacity="0.9" />

        {/* mặt */}
        <g>
          {mood === 'cheer' ? (
            <>
              <path
                d="M40 94 Q46 86 52 94"
                fill="none"
                stroke={INK}
                strokeWidth="4"
                strokeLinecap="round"
              />
              <path
                d="M68 94 Q74 86 80 94"
                fill="none"
                stroke={INK}
                strokeWidth="4"
                strokeLinecap="round"
              />
            </>
          ) : (
            <g
              style={{
                animation: 'mascot-blink 4.5s infinite',
                transformBox: 'fill-box',
                transformOrigin: 'center',
              }}
            >
              <circle cx="46" cy="92" r="9" fill="#fff" />
              <circle cx="74" cy="92" r="9" fill="#fff" />
              <circle
                cx={mood === 'think' ? 48 : 47}
                cy={mood === 'think' ? 89 : 93}
                r="4.5"
                fill={INK}
              />
              <circle
                cx={mood === 'think' ? 76 : 75}
                cy={mood === 'think' ? 89 : 93}
                r="4.5"
                fill={INK}
              />
              <circle
                cx={mood === 'think' ? 49.5 : 48.5}
                cy={mood === 'think' ? 87.5 : 91.5}
                r="1.5"
                fill="#fff"
              />
              <circle
                cx={mood === 'think' ? 77.5 : 76.5}
                cy={mood === 'think' ? 87.5 : 91.5}
                r="1.5"
                fill="#fff"
              />
            </g>
          )}
          {mood === 'oops' && (
            <>
              <path
                d="M37 83 L51 79 M83 83 L69 79"
                stroke={INK}
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M54 112 Q60 106 66 112"
                fill="none"
                stroke={INK}
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <path d="M92 70 q4 8 0 12 q-4 -4 0 -12" fill="#7CCBF2" />
            </>
          )}
          {(mood === 'happy' || mood === 'wave') && (
            <path
              d="M52 106 Q60 114 68 106"
              fill="none"
              stroke={INK}
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          )}
          {mood === 'cheer' && <path d="M50 104 Q60 120 70 104 Z" fill={INK} />}
          {mood === 'think' && (
            <path d="M54 109 H66" stroke={INK} strokeWidth="3.5" strokeLinecap="round" />
          )}
          <circle cx="36" cy="104" r="5" fill="#FF8FB1" opacity="0.7" />
          <circle cx="84" cy="104" r="5" fill="#FF8FB1" opacity="0.7" />
        </g>
      </g>
      {mood === 'think' && (
        <g fill={BRAND_DEEP}>
          <circle cx="98" cy="40" r="3" className="sc sc-pulse" />
          <circle
            cx="106"
            cy="28"
            r="4.5"
            className="sc sc-pulse"
            style={{ animationDelay: '-0.4s' }}
          />
          <circle
            cx="110"
            cy="12"
            r="6.5"
            className="sc sc-pulse"
            style={{ animationDelay: '-0.8s' }}
          />
        </g>
      )}
    </svg>
  )
}
