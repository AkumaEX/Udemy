import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviesProvider } from '../../providers/movies/movies';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvider: MoviesProvider
  ) {
  }

  public lista_filmes = new Array<any>();


  ionViewDidLoad() {
    this.movieProvider.getPopular().subscribe(
      data => {
        const response = (data as any);
        this.lista_filmes = response.results;
        console.log(response);
      }, error => {
        console.log(error);
      }
    )
  }

}
