import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  idPerfil!: number;
  constructor(private activateRoute : ActivatedRoute) 
  {
    this.idPerfil = activateRoute.snapshot.params['id'];
    console.log("llego el idPerfil a home: "+this.idPerfil);
  }

  ngOnInit(): void {
    
  }

}
