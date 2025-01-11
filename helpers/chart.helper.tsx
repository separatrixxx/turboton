import axios from "axios";


export async function getChart() {
    try {
        const { data: chartData } = await axios.get(
            'https://api.coingecko.com/api/v3/coins/bitcoin/market_chart',
            {
                params: {
                    vs_currency: 'usd',
                    days: 60,
                    interval: 'daily'
                }
            }
        );

        console.log('График цен:', chartData.prices);
        
        const { data: currentData } = await axios.get(
            'https://api.coingecko.com/api/v3/coins/list'
        );

        console.log('Текущая цена:', currentData.market_data.current_price.usd);
        console.log('Изменение за 24ч:', currentData.market_data.price_change_percentage_24h + '%');
    } catch (err) {
        console.error('Get chart error: ' + err);
    }
}
