import { createContext, Dispatch, SetStateAction } from "react";

export type PlayerOneMark = 'X' | 'O'

export const PlayerOneMarkContext = createContext<[PlayerOneMark, Dispatch<SetStateAction<PlayerOneMark>>]>(['X', () => { }]);
