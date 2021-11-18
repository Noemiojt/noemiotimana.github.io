import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  permiteNewsLetter = true;
  textoNewsLetter = "Aqui tem os melhores descontos"
  email = "timananoemio@gmail.com";
  emailEnviado = false;

  constructor() { }

  ngOnInit() { 
  setTimeout((): void => { 
    this.permiteNewsLetter=false;
  
}, 5000);

}

onSubmitNewsLetter(){
  this.textoNewsLetter = "Email-Enviado";
  this.emailEnviado = true;
}

onEmailEnter(event: Event){

  this.email = (<HTMLInputElement>event.target).value;
}

}
