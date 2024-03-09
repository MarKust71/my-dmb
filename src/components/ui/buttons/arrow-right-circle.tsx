export const ArrowRightCircle = (props: React.SVGProps<SVGSVGElement>) => {
  const { width, height, fill = '#fff' } = props

  return (
    <svg
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(-308 -1087)" fill={fill}>
          <path d="m324 1117c-7.732 0-14-6.27-14-14s6.268-14 14-14 14 6.27 14 14-6.268 14-14 14zm0-30c-8.837 0-16 7.16-16 16s7.163 16 16 16 16-7.16 16-16-7.163-16-16-16zm6.535 15.12-5.656-5.66c-0.391-0.39-1.024-0.39-1.414 0-0.391 0.4-0.391 1.03 0 1.42l4.121 4.12h-10.586c-0.553 0-1 0.45-1 1s0.447 1 1 1h10.586l-4.121 4.12c-0.391 0.39-0.391 1.03 0 1.42 0.39 0.39 1.023 0.39 1.414 0l5.656-5.66c0.24-0.24 0.315-0.57 0.26-0.88 0.055-0.31-0.02-0.64-0.26-0.88z"></path>
        </g>
      </g>
    </svg>
  )
}
