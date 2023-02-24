'use client'
import * as Dialog from '@radix-ui/react-dialog';
import { FC, ReactNode } from 'react';

type ModalProps = {
    children: ReactNode,
    isOpen: boolean
}

export const Modal: FC<ModalProps> = ({ children, isOpen = false }) => {
    return (
        <Dialog.Root open={isOpen}>
            <Dialog.Portal className='border border-red-400'>
                <Dialog.Overlay className='bg-black opacity-50 fixed inset-0 h-screen' />
                <Dialog.Content className='bg-dark-light p-10 flex items-center justify-center fixed w-full top-1/2 translate-y-[-50%]'>
                    <div>
                        {children}
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
}