export interface GoodsPropsSlice {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    goods: any[],
    status: Status
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}