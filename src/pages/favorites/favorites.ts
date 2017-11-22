import { SettingsService } from './../../services/settings';
import { QuotePage } from './../quote/quote';
import { iQuote } from './../../data/quote.interface';
import { QuotesService } from './../../services/quotes';
import { Component } from '@angular/core';
import { ModalController, MenuController } from 'ionic-angular';

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  
  quotes: iQuote [];
  constructor(
    private quoteService: QuotesService,
    private modalCtrl: ModalController,
    private settingsService: SettingsService) {
  }

  ionViewWillEnter () {
    this.quotes = this.quoteService.getFavoritesQuote();

  }

  onViewQuote(quote) {
     const modal = this.modalCtrl.create(QuotePage, quote);
     modal.present();
     modal.onDidDismiss((remove:boolean)=>{ 
       if (remove) {
        this.onRemoveFromFavorite(quote);
       } 
          
      });
  }

  onRemoveFromFavorite(quote) {
    this.quoteService.removeQuoteFromFavorites(quote);  
    this.quotes = this.quoteService.getFavoritesQuote(); 
  }

  getBackground () {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'quoteBackground';
  }
}
