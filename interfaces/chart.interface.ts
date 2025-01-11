export interface ChartInterface {
    currentPrice: number,
    coords: ChartItem[],
}

export interface ChartItem {
    price: number,
    day: number,
}
