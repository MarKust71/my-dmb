export const IconCopy = (props: React.SVGProps<SVGSVGElement>) => {
  const { width, height, fill = '#fff', stroke = '#292d32' } = props

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 21.5 21.5"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.75 11.65v4.2c0 3.5-1.4 4.9-4.9 4.9h-4.2c-3.5 0-4.9-1.4-4.9-4.9v-4.2c0-3.5 1.4-4.9 4.9-4.9h4.2c3.5 0 4.9 1.4 4.9 4.9z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.75 5.65v4.2c0 3.5-1.4 4.9-4.9 4.9h-1.1v-3.1c0-3.5-1.4-4.9-4.9-4.9h-3.1v-1.1c0-3.5 1.4-4.9 4.9-4.9h4.2c3.5 0 4.9 1.4 4.9 4.9z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
