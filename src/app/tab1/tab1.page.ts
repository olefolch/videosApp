import { IFilme } from '../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Filmes';

  listaVideos: IFilme[] = [
    {
      nome: 'Top Gun: Maverick (2022)',
      lancamento: '26/05/2022',
      duracao: '2h 11m',
      classificacao: 84,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jTrXwK56EoLHHxfBkpwGdfmy2uh.jpg',
      generos: ['Ação', 'Drama']
    },
    {
      nome: 'Sorte (2022)',
      lancamento: '05/08/2022',
      duracao: '1h 37m',
      classificacao: 80,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aeJHkkrDvbXPB25NghNbv5kUBVi.jpg',
      generos: ['Animação', 'Aventura', 'Comédia', 'Fantasia']
    }
  ];

  constructor(private alertController: AlertController, private toastController: ToastController) { }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'SIM, favoritar!',
          handler: () => {
            this.apresentarToast();
        }
      }
    ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 1500,
      color: 'success'
    });

    await toast.present();
  }

}
