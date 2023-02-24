import clsx from 'clsx'
import React, { FC } from 'react'

type ScorecardProps = {
    label: string
    value: number
    className?: string
}

export const Scorecard: FC<ScorecardProps> = ({ label, value, className }) => {
    return (
        <dl className={clsx('w-full min-h-[64px] p-3 text-dark rounded-[10px] uppercase', className)}>
            <dt className='text-sm font-medium text-center leading-[17.64px] tracking-[0.88 px]'>{label}</dt>
            <dd className='heading-sm text-center'>{value}</dd>
        </dl>
    )
}