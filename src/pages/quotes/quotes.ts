import { QuotesService } from './../../services/quotes';
import { NavParams, AlertController } from 'ionic-angular';
import { iQuote } from './../../data/quote.interface';

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit{
 
 
  quoteGroup: {category: string, quotes: iQuote[], icon:string};
  
  
  constructor(private navParams: NavParams,
    private alertCtrl: AlertController,
  private quotesService: QuotesService) {
   
  }

  ngOnInit () {
    this.quoteGroup = this.navParams.data;

    
  }

  onAddToFavorite(selectedQuote: iQuote) {
    const alert = this.alertCtrl.create ({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote?',
      buttons: [
        {
          text: 'No, go ahead',
          role: 'cancel'
         
        },
        {
          text: 'Yes, go ahead',
          handler: ()=> this.quotesService.addQuoteToFavorites(selectedQuote)        
        }
        
      ]
    });
    alert.present();
  }

  onRemoveFromFavorite(quote) {
    this.quotesService.removeQuoteFromFavorites(quote) ;
  }

  isFavorite (quote) {
    return this.quotesService.isFavorite(quote);
  }

 

}
