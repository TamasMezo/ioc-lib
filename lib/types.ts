export type Module = {} | [];

export interface IRating {
    rating: number;
    rate: (rating: number) => void
    getRating: () => number;
}

export interface IProduct {
    rate: IRating;
}