import { FC } from "react"
import PlayerX from '@/assets/x.svg'
import PlayerO from '@/assets/o.svg'

type CurrentTurnProps = {
    currentPlayer: 'X' | 'O'
}

export const CurrentTurn: FC<CurrentTurnProps> = ({ currentPlayer }) => {
    return (
        <div className="px-[15px] pt-[9px] pb-[13px] shadow-[inset_0px_-4px_0px_#10212A] flex gap-[9px] items-center bg-dark-light rounded-[5px] w-full justify-center">
            {currentPlayer === 'X' ? <PlayerX className="text-tertiary fill-current w-4 h-4" /> : <PlayerO className="text-tertiary fill-current w-4 h-4" />}
            <span className="font-bold text-tertiary uppercase text-sm leading-[18px] tracking-[0.875px]">Turn</span>
        </div>
    )
}