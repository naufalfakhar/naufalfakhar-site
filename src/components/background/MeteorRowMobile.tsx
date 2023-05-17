type Props = { random: number }

export default function MeteorRowMobile({ random }: Props) {
  return (
    <div className='absolute inset-0 -z-20 flex select-none flex-col justify-around md:hidden'>
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div
          key={i}
          className='relative h-px w-full bg-gradient-to-r from-transparent from-0% via-zinc-800 to-transparent to-100%'
        >
          <div
            className={`absolute inset-0 h-full w-20 ${
              random === i || random + 1 === i || random / 2 === i
                ? 'animate-movex'
                : ''
            } bg-gradient-to-l from-white opacity-0 shadow-[0_0_18px_4px_var(--tw-shadow-color)] shadow-white`}
          ></div>
        </div>
      ))}
    </div>
  )
}
