import { cn } from '@/lib/utils'
import { buttonStyles } from '@gear-js/ui'
import { gameNavData } from '@/components/sections/game/game-nav.data'
import { GameNavBackground } from '@/components/sections/game/game-nav-background'
import { GameNavItem } from '@/components/sections/game/game-nav-item'

const data = gameNavData

type GameNavProps = BaseComponentProps & {}

export function GameNav({}: GameNavProps) {
  return (
    <div className="relative font-kanit">
      <GameNavBackground />

      <div className="flex items-center justify-between py-10 px-7.5">
        <div className="flex space-x-10">
          <button className={cn('btn px-6', buttonStyles.lightGreen)}>
            Show champions
          </button>

          <div className="flex space-x-8">
            <GameNavItem icon={data[0].icon} className={data[0].color}>
              3
            </GameNavItem>
            <GameNavItem icon={data[1].icon} className={data[1].color}>
              9:59
            </GameNavItem>
          </div>
        </div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 grid gap-4 text-center">
          <img
            width={92}
            height={92}
            src="/images/game/stats-hero.svg"
            alt="Avatar"
          />

          <span className="text-test">Vara - Man</span>
        </div>

        <div className="flex space-x-10">
          <div className="flex space-x-8">
            <GameNavItem icon={data[2].icon} className={data[2].color}>
              18
            </GameNavItem>
            <GameNavItem icon={data[3].icon} className={data[3].color}>
              28
            </GameNavItem>
          </div>

          <div className="btn bg-white/[1%] shadow-white shadow-[inset_0_0_4px] px-6 flex-col items-start pt-1 pb-1.5 cursor-auto">
            <small className="text-white/60 opacity-80 font-normal text-[10px] leading-[14px]">
              Substrate address
            </small>
            <span className="leading-4">0xt9g21kgi98...fa92</span>
          </div>
        </div>
      </div>
    </div>
  )
}
