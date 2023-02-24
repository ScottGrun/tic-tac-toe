"use client"
import Logo from '@/assets/logo.svg'
import ResetIcon from '@/assets/reset.svg'
import { Button } from '@/components/Button'
import { CurrentTurn } from '@/components/CurrentTurn'
import { Board } from '@/components/Gameboard/Board'
import { Modal } from '@/components/Modal'
import { Scorecard } from '@/components/Scorecard'
import { IsPlayerXNextContext } from '@/context/IsPlayerXNext'
import { calculateWinner } from '@/util/calculateWinner'
import { useState } from 'react'
import PlayerX from '@/assets/x.svg'
import PlayerO from '@/assets/o.svg'

import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import clsx from 'clsx'


export default function Game() {
    const [isPlayerXIsNext, setIsPlayerXIsNext] = useState(true)
    const [score, setScore] = useState({ X: 0, O: 0, Tie: 0 })
    const [squares, setSquares] = useState<(null | 'X' | 'O')[]>(Array(9).fill(null));
    const [currentWinner, setCurrentWinner] = useState<'X' | 'O' | 'Tie' | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSquareClick = (idx: number) => {
        const squaresCopy = squares.slice();

        // Return early if squares already placed or the game is over
        if (squaresCopy[idx] || currentWinner) {
            return;
        }

        // Update gameboard with player's move
        squaresCopy[idx] = isPlayerXIsNext ? 'X' : 'O';
        setSquares(squaresCopy);

        // Check for winner
        const winner = calculateWinner(squaresCopy);
        if (winner) {
            setScore(prev => ({ ...prev, [winner]: prev[winner] + 1 }))
            setCurrentWinner(winner);
            setIsModalOpen(true)
        }

        setIsPlayerXIsNext(!isPlayerXIsNext);
    }

    // Reset gameboard   
    const handleNextRound = () => {
        setCurrentWinner(null);
        setIsModalOpen(false);
        setSquares(prev => prev.map(cell => null))
    }



    return <div className="grid grid-cols-3 gap-5 pt-6 md:w-[460px] mx-auto">
        <header className="col-span-3 grid-cols-3 gap-5 grid items-center">
            <Logo />
            <CurrentTurn currentPlayer="X" />
            <Button variant="tertiary" size='sm' styles='ml-auto' onClick={() => setIsModalOpen(true)} >
                <ResetIcon className="w-4" />
            </Button>
        </header>
        <main className="col-span-3">
            <IsPlayerXNextContext.Provider value={isPlayerXIsNext}>
                <Board squares={squares} handleSquareClick={handleSquareClick} />
            </IsPlayerXNextContext.Provider>

            {/* Round Over Modal */}
            <Modal isOpen={isModalOpen}>
                {currentWinner !== 'Tie' && <h2 className='mb-4 font-bold text-tertiary text-center text-sm leading-[17.64px] tracking-[0.88 px]'>You Won!</h2>}
                <div className='flex gap-[9px] items-center'>
                    {currentWinner === 'X' ? <PlayerX className="w-6 text-primary fill-current text-center mx-auto" /> : currentWinner === 'O' ? <PlayerO className="w-6 text-secondary fill-current text-center mx-auto" /> : null}
                    <p className={clsx('heading-m mx-auto', currentWinner === 'X' ? 'text-primary' : currentWinner === 'O' ? 'text-secondary' : 'text-tertiary')}> {currentWinner !== 'Tie' && <VisuallyHidden>Player {currentWinner}</VisuallyHidden>}{currentWinner === 'Tie' ? 'ROUND TIED' : 'TAKES THE ROUND'}</p>
                </div>
                <div className='flex gap-4 mt-6 mx-auto w-fit'>
                    <Button variant='tertiary' size='sm' onClick={() => setIsModalOpen(false)}>Quit</Button>
                    <Button variant='secondary' size='sm' onClick={handleNextRound}>Next Round</Button>
                </div>
            </Modal>

            {/* Restart Modal */}
        </main>
        <footer className='grid col-span-3 grid-cols-3 gap-5'>
            <Scorecard label="X (You)" value={score.X} className="bg-primary col-span-1" />
            <Scorecard label="Ties" value={score.Tie} className="bg-tertiary col-span-1" />
            <Scorecard label="O (CPU)" value={score.O} className="bg-secondary col-span-1" />
        </footer>
    </div >
}