import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [NgFor],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetApiComponent {
userData :any[] =[];
  constructor(private http:HttpClient){}
getData(){
   this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any)=>{
    this.userData=data;
   })
}

}
