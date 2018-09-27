module.exports = function makeExchange(currency) {
    const coinsName = ['H', 'Q', 'D', 'N', 'P'];
    const coinsRating = [50, 25, 10, 5, 1];
    let exchange = {}; 
    if (currency > 0 && currency <= 10000) {
        let i = 0;
        while (currency != 0 && i < coinsRating.length) {
            let countSelCoins = currency / coinsRating[i];
            currency = currency - Math.floor(countSelCoins) * coinsRating[i];
            if (Math.floor(countSelCoins) != 0) {
                exchange[coinsName[i]] = Math.floor(countSelCoins);
            }
            i++;        
        }
        return exchange;   
    } else {
        if (currency <= 0) {            
            return exchange;
        } else {
            return exchange = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        }
    }
}