import { iQuote } from './../data/quote.interface';
export class QuotesService {
    private favoriteQuotes: iQuote [] = [];
    addQuoteToFavorites (quote: iQuote) {
        
        this.favoriteQuotes.push(quote);
    }
    removeQuoteFromFavorites(quote: iQuote) {
        
        const position = this.favoriteQuotes.findIndex
        ( (quoteEl:iQuote)=>quoteEl.id ==quote.id);
        this.favoriteQuotes.splice(position, 1);
    }
    getFavoritesQuote () {
        return this.favoriteQuotes.slice();
    }

    isFavorite (quote: iQuote) {
        return this.favoriteQuotes.find((quoteEl:iQuote)=>quoteEl.id==quote.id);
      }
}