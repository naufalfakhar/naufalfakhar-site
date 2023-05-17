type Props = { random: number }

export default function MeteorCol({ random }: Props) {
  return (
    <div className='absolute inset-0 -z-20 hidden select-none grid-cols-12 place-items-center lg:grid'>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
        <div
          key={i}
          className='relative h-full w-px bg-gradient-to-b from-transparent from-0% via-zinc-800 to-transparent to-100%'
        >
          <div
            className={`absolute inset-0 h-20 w-full ${
              random === i || random + 1 === i || random / 2 === i
                ? 'animate-movey'
                : ''
            }  bg-gradient-to-t from-primary opacity-0 shadow-[0px_0_18px_4px_var(--tw-shadow-color)] shadow-primary`}
          ></div>
        </div>
      ))}
    </div>
  )
}
