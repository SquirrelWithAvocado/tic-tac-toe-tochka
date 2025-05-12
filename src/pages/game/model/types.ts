export type Mark = 'O' | 'X' | '_';

export type GameField = Array<Array<Mark>>;

export type GameStatus = 'X' | 'O' | 'Draw' | 'In Progress';