import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

import { FilmeService } from './../services/filme.service';
import { GeneroService } from './../services/genero.service';
import { DadosService } from './../services/dados.service';

import { IGenero } from './../models/IGenero.model';
import { IFilme } from '../models/IFilme.model';
import { IFilmeAPI, IListaFilmes } from './../models/IFilmeAPI.model';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  titulo = 'Filmes';

  listaVideos: IFilme[] = [
    {
      nome: 'Top Gun: Maverick (2022)',
      lancamento: '26/05/2022',
      duracao: '2h 11m',
      classificacao: 84,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jTrXwK56EoLHHxfBkpwGdfmy2uh.jpg',
      generos: ['Ação', 'Drama'],
      pagina: '/top-gun'
    },
    {
      nome: 'Sorte (2022)',
      lancamento: '05/08/2022',
      duracao: '1h 37m',
      classificacao: 80,
      cartaz: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aeJHkkrDvbXPB25NghNbv5kUBVi.jpg',
      generos: ['Animação', 'Aventura', 'Comédia', 'Fantasia'],
      pagina: '/sorte'
    }
  ];

  listaFilmes: IListaFilmes;

  generos: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public filmeService: FilmeService,
    public generoService: GeneroService,
    public route: Router) { }

  buscarFilmes(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() !== '') {
      this.filmeService.buscarFilmes(busca).subscribe(dados => {
        console.log(dados);
        this.listaFilmes = dados;
      });
    }
  }

  exibirFilme(filme: IFilmeAPI) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Atenção!',
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

  ngOnInit(){
    this.generoService.buscarGenero().subscribe(dados => {
      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero => {
        this.generos[genero.id] = genero.name;
      });

      this.dadosService.guardarDados('generos', this.generos);
    });
  }

}
