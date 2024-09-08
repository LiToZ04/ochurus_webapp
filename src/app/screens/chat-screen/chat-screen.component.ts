import { Component } from '@angular/core';
import { CohereService } from 'src/app/services/openai-service.service';

@Component({
  selector: 'app-chat-screen',
  templateUrl: './chat-screen.component.html',
  styleUrls: ['./chat-screen.component.scss']
})
export class ChatScreenComponent {
  msj: { sender: string, text: string }[] = [];
  userInput: string = '';

  constructor(private cohereService: CohereService) { }

  mandarMSJ() {
    if (this.userInput.trim()) {
      this.msj.push({ sender: 'user', text: this.userInput });

      this.cohereService.getChatbotResponse(this.userInput).subscribe(
        botReply => {
          
          this.msj.push({ sender: 'bot', text: botReply.generations[0].text });
          this.userInput = '';
        },
        error => {
          console.error('Error al obtener la respuesta:', error);
          this.msj.push({ sender: 'bot', text: 'Error al obtener la respuesta.' }); 
        }
      );
    }
    this.userInput = '';
  }

  limpiar() {
    this.msj = []; 
  }
}
