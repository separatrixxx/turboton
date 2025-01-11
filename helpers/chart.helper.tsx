import axios from "axios";
import { ChartInterface } from "../interfaces/chart.interface";


export async function getChart(setChart: (e: ChartInterface) => void) {
    try {
        // const { data: chartData } = await axios.get(
        //     'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart',
        //     {
        //         params: {
        //             vs_currency: 'usd',
        //             days: 60,
        //             interval: 'daily'
        //         }
        //     }
        // );

        const chart = {
            currentPrice: 0.004413,
            coords: [
                { price: 0.00362, day: 0 },
                { price: 0.004057, day: 1 },
                { price: 0.004216, day: 2 },
                { price: 0.004077, day: 3 },
                { price: 0.003562, day: 4 },
                { price: 0.00433, day: 5 },
                { price: 0.004227, day: 6 },
                { price: 0.005823, day: 7 },
                { price: 0.006374, day: 8 },
                { price: 0.007161, day: 9 },
                { price: 0.006678, day: 10 },
                { price: 0.005876, day: 11 },
                { price: 0.0046, day: 12 },
                { price: 0.003986, day: 13 },
                { price: 0.004428, day: 14 },
                { price: 0.003818, day: 15 },
                { price: 0.004207, day: 16 },
                { price: 0.003609, day: 17 },
                { price: 0.003773, day: 18 },
                { price: 0.00355, day: 19 },
                { price: 0.003837, day: 20 },
                { price: 0.003776, day: 21 },
                { price: 0.004164, day: 22 },
                { price: 0.004085, day: 23 },
                { price: 0.004346, day: 24 },
                { price: 0.004228, day: 25 },
                { price: 0.003967, day: 26 },
                { price: 0.003819, day: 27 },
                { price: 0.003694, day: 28 },
                { price: 0.004394, day: 29 }
            ]
        };        

        setChart(chart);
    } catch (err) {
        console.error('Get chart error: ' + err);
    }
}
