import { FC, useContext, useState } from "react"
import PlayerX from '@/assets/x.svg'
import PlayerXOutline from '@/assets/x-outline.svg'
import PlayerO from '@/assets/o.svg';
import PlayerOOutline from '@/assets/o-outline.svg';
import { IsPlayerXNextContext } from "@/context/IsPlayerXNext";

type PlayerMarkerProps = {
    value: null | 'X' | 'O'
}
export const PlayerMarker: FC<PlayerMarkerProps> = ({ value }) => {
    const isPlayerXIsNext = useContext(IsPlayerXNextContext)

    if (value) {
        return value === 'X' ? <PlayerX className="w-10 mx-auto fill-current text-primary md:w-[63px]" id="x-tile" /> : <PlayerO className="w-10 mx-auto md:w-[63px]  fill-current text-secondary" id="x-tile" />
    } else {
        return isPlayerXIsNext ? <PlayerXOutline className="w-5 opacity-0 mx-auto  fill-current text-primary group-hover:w-10 transition-all group-hover:opacity-100 md:group-hover:w-[63px]" id="x-tile" /> : <PlayerOOutline className="w-5 opacity-0 mx-auto  md:group-hover:w-[63px fill-current text-secondary group-hover:w-10 transition-all group-hover:opacity-100  md:group-hover:w-[63px]" id="x-tile" />
    }
}

