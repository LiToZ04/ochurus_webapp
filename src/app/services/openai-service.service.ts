import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CohereService {
  private apiUrl = 'https://api.cohere.ai/v1/generate'; 
  private apiKey = 'eQoQMkJBpTi29lKOO5D3XuGPiKFCWivrkxs4jrOF';

  constructor(private http: HttpClient) { }

  getChatbotResponse(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: 'command', 
      prompt: prompt,
      max_tokens: 100 
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}

/*
  import { Injectable } from '@angular/core';
  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';  // URL para la API de OpenAI
  private apiKey = 'tu_api_key_aqui';  // Tu clave API de OpenAI

  constructor(private http: HttpClient) { }

  getChatbotResponse(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      model: 'gpt-3.5-turbo',  // O 'gpt-4' si tienes acceso
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 100  // Ajusta según tus necesidades
    };

    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}

*/