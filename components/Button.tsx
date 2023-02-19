import clsx from "clsx"
import { FC, HTMLAttributes, ReactNode } from "react"
import Link, { LinkProps } from 'next/link'
// This component uses CSS Modules because the styling is fairly complex
// and using Tailwind CSS would it make it kinda hard to read / edit.


type CondtionalProps = HTMLAttributes<HTMLButtonElement> & { isLink?: false } | LinkProps & { isLink: true }

type ButtonProps = CondtionalProps & {
  children: React.ReactNode
  variant: "primary" | "secondary" | "tertiary",
  size: "sm" | "lg"
  isFullWidth?: boolean
  isLink?: boolean
}

const variants = {
  primary: {
    edge: 'bg-primary-dark',
    front: 'bg-primary',
  },
  secondary: {
    edge: 'bg-secondary-dark',
    front: 'bg-secondary',
  },
  tertiary: {
    edge: 'bg-tertiary-dark',
    front: 'bg-tertiary',
  },
}

const sizes = {
  sm: {
    edge: 'rounded-[10px]',
    front: 'text-base font-bold leading-[20px] p-4 rounded-[10px] translate-y-[-4px] group-hover:translate-y-[-2px]',
  },
  lg: {
    edge: 'rounded-[15px]',
    front: 'text-xl font-bold leading-[28px] py-4 px-[42px] rounded-[15px] translate-y-[-8px] group-hover:translate-y-[-6px]',
  }
}

const InnerWrapper: FC<{ children: ReactNode } & Pick<ButtonProps, 'size' | 'variant'>> = ({ children, size, variant }) => (
  <>
    <span className={clsx('absolute top-0 left-0 w-full h-full rounded-[15px]', variants[variant].edge, sizes[size].edge)}></span>
    <span className={clsx('text-center block relative uppercase text-dark transition-transform ease-[cubic-bezier(0.3,0.7,0.4,1)] group-active:translate-y-[-1px] group-active:duration-[100ms] group-hover:transition-transform group-hover:ease-[cubic-bezier(0.3,0.7,0.4,1.5)]', variants[variant].front, sizes[size].front)}>
      {children}
    </span>
  </>
)

export const Button: FC<ButtonProps> = (props) => {


  if (props?.isLink) {
    return (<Link className={clsx('group relative border-none bg-transparent p-0 cursor-pointer outline-offset-4', props.isFullWidth && 'w-full')} {...props}>
      <InnerWrapper size={props.size} variant={props.variant}>
        {props.children}
      </InnerWrapper>
    </Link>)

  } else {
    return (
      <button className={clsx('group relative border-none bg-transparent p-0 cursor-pointer outline-offset-4', props.isFullWidth && 'w-full')} {...props}>
        {/* Acts as the edge of the button */}
        <InnerWrapper size={props.size} variant={props.variant}>
          {props.children}
        </InnerWrapper>
      </button>
    )
  }
}