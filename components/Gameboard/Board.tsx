import { FC } from 'react'
import { Cell } from './Cell'

type BoardProps = {
    squares: (null | 'X' | 'O')[]
    handleSquareClick: (idx: number) => void
}

export const Board: FC<BoardProps> = ({ squares, handleSquareClick }) => {
    return (
        <table className='table-fixed' >
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <Cell value={squares[0]} onClick={() => handleSquareClick(0)} />
                    <Cell value={squares[1]} onClick={() => handleSquareClick(1)} />
                    <Cell value={squares[2]} onClick={() => handleSquareClick(2)} />
                </tr>
                <tr>
                    <Cell value={squares[3]} onClick={() => handleSquareClick(3)} />
                    <Cell value={squares[4]} onClick={() => handleSquareClick(4)} />
                    <Cell value={squares[5]} onClick={() => handleSquareClick(5)} />
                </tr>
                <tr>
                    <Cell value={squares[6]} onClick={() => handleSquareClick(6)} className="pb-0" />
                    <Cell value={squares[7]} onClick={() => handleSquareClick(7)} className="pb-0" />
                    <Cell value={squares[8]} onClick={() => handleSquareClick(8)} className="pb-0" />
                </tr>
            </tbody>
        </table>
    )
}