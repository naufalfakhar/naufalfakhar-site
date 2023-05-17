type Props = { random: number }

export default function MeteorRow({ random }: Props) {
  return (
    <div className='absolute inset-0 -z-20 hidden select-none flex-col justify-around md:flex'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <div
          key={i}
          className='relative h-px w-full bg-gradient-to-r from-transparent from-0% via-zinc-800 to-transparent to-100%'
        >
          <div
            className={`absolute inset-0 h-full w-20 ${
              random === i || random + 1 === i || random / 2 === i
                ? 'animate-movex'
                : ''
            } bg-gradient-to-l from-primary opacity-0 shadow-[0_0_18px_4px_var(--tw-shadow-color)] shadow-white`}
          ></div>
        </div>
      ))}
    </div>
  )
}
