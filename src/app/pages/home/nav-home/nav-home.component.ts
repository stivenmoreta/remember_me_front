import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  toIniciarSesion():void{
    this.router.navigate(['/login'])
  }
  toCrearCuenta():void{
    this.router.navigate(['/register'])
  }
}
