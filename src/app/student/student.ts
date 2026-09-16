import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-student',
  styleUrl: './student.css',
  templateUrl: './student.html',
})
export class Student {
  //Questo è per creare un singolo studente, ma non è utile per la gestione di una lista di studenti 
  // student: any ={ 
  //   name: "Pippo", 
  //   city: "Topolinia", 
  //   gender: "M", 
  //   presente: true
  // };

  students: any[] =[
    {name: "Pippo", city: "Topolinia", gender: "M", presente: true},
    {name: "Pluto", city: "Topolinia", gender: "M", presente: true},
    {name: "Paperino", city: "Paperopoli", gender: "M", presente: true},
    {name: "Paperina", city: "Paperopoli", gender: "F", presente: true}
  ];
}
