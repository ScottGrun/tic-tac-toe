"use client"
import * as Switch from '@radix-ui/react-switch'
import React, { useContext } from 'react'
import PlayerX from '@/assets/x.svg'
import PlayerO from '@/assets/o.svg';
import clsx from 'clsx';
import { PlayerOneMarkContext } from '@/context/PlayerOneMark';
type Props = {}

export const PlayerSwitcher = (props: Props) => {
    const [playerOneMark, setPlayerOneMark] = useContext(PlayerOneMarkContext)

    return (
        <div className='pt-6 px-6 pb-[30px] bg-dark-light rounded-[15px] shadow-[inset_0px_-8px_0px_#10212A;]'>
            <h2 className='text-tertiary heading-xs mx-auto w-fit'>PICK PLAYER 1’S MARK {playerOneMark}</h2>
            <Switch.Root defaultChecked={true} onCheckedChange={checked => setPlayerOneMark(checked ? 'x' : 'o')} className="bg-dark w-full px-[8px] py-[9px] rounded-[10px] relative flex items-center mt-6">
                <PlayerX className={clsx("absolute left-[60px] fill-current text-tertiary z-10", playerOneMark === 'x' && '!text-dark')} />
                <PlayerO className={clsx("absolute right-[60px] fill-current text-tertiary z-10", playerOneMark === 'o' && '!text-dark')} />
                <Switch.Thumb className="grid place-content-center will-change-transform transition-transform duration-300 bg-tertiary rounded-[10px] w-[131px] h-[54px]  data-[state='unchecked']:translate-x-[132px] ">
                </Switch.Thumb>
            </Switch.Root>
            <p className='mt-[17px] mx-auto w-fit body text-tertiary opacity-50'>REMEMBER : X GOES FIRST</p>
        </div>
    )
}