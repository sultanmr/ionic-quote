import { QuotesService } from './../../services/quotes';
import { iQuote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import {ViewController, NavParams} from  'ionic-angular';

@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {
   quote: iQuote;
  constructor (
    private viewCtrl: ViewController, 
    private navParams: NavParams) {}
  
  ionViewDidLoad () {
    this.quote = this.navParams.data;
    
  }
  onClose(remove=false) {
    this.viewCtrl.dismiss(remove); 
    }
}
