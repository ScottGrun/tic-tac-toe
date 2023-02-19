import { createContext, Dispatch, SetStateAction } from "react";

export type PlayerOneMark = 'x' | 'o'

export const PlayerOneMarkContext = createContext<[PlayerOneMark, Dispatch<SetStateAction<PlayerOneMark>>]>(['x', () => { }]);
