import clsx from 'clsx'
import { FC, HTMLAttributes } from 'react'
import { PlayerMarker } from './PlayerMarker'

type CellProps = HTMLAttributes<HTMLButtonElement> & {
    onClick: () => void
    value: null | 'X' | 'O'
    className?: string
}

export const Cell: FC<CellProps> = ({ onClick, value, className }) => {
    return (
        <td className={clsx('p-0 pb-[20px] not-last:pr-[20px] h-fit overflow-hidden', className)}>
            <button disabled={value ? true : false} onClick={onClick} className='rounded-[10px] bg-dark-light shadow-[inset_0px_-8px_0px_#10212A] w-[96px] md:w-[140px] md:h-[140px] h-[96px] group'>
                <PlayerMarker value={value} />
            </button>
        </td>
    )
}