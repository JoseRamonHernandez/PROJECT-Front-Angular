import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  URL = "http://localhost:7575/personas/";

  getPersonas()
  {
    return this.http.get<Persona[]>(this.URL+'listar')
  }

   createPersona(persona:Persona)
   {
     return this.http.post<Persona>(this.URL, persona)
   }

   getPersonaId(id:number)
   {
     return this.http.get<Persona>(this.URL+id)
   }

   editPersona(persona:Persona)
   {
     return this.http.put<Persona>(this.URL + persona.id, persona)
   }

  deletePersona(persona:Persona)
  {
    return this.http.delete<Persona>(this.URL + persona.id)
  }


}
