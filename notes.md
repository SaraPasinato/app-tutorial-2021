# Comandi 

1. Per creare un progetto : `ng new _nomeProgetto`
2. Per lanciare il localhost server : `ng serve`
3. Per creare un nuovo componente : `ng g(generate) c(component) _nomeDelComponente`
4. importare angular-fontawsome ![https://github.com/FortAwesome/angular-fontawesome]

5. creare i sevizi : `ng g s(serices) _nomeDelSevizio`
---

## Come passare i dati ad un component
1. Componente si inserisce il nome della variabile colore e testo 
ex:
```html
  <app-button color="green" text="Add"></app-button>
```
2. si inizializza Input nel componente.ts e si inseriscono le variabili 
```ts
import { Component, OnInit, Input} from '@angular/core';
//....[dichiarazione Prototype Component]
export class ButtonComponent implements OnInit {
   @Input() text: string ="";
   @Input() color: string= "";
  constructor() { }

  ngOnInit(): void {
  }

}
```
3. button.component.html si inseriscono le direttive :
  - Text: con mustache syntax
  - style value con : 
    ```html
    <button class="btn" [ngStyle]="{'backgroung-color': color}">{{text}}</button>
    ```

4. *add event* on click
  - `(click)="onClick()` in html component 
  - ```ts                in component .ts
      onClick(){
            console.log("Add");
      }
    ```
5. *add event with output dinamico* on click
  - import ts  Output, Event emitter import
  - definisco btnClick() event 
    `@Output() btnClick=new EventEmitter();`
  - `(click)="onClick()` in html component 
  - ```ts                in component .ts
      onClick(){
         this.btnClick.emit();
      }
    ```
  - in header component html
  ```ts
    <app-button color="green" text="Add" (btnClick)="toggleAddTask()"></app-button>
  ```
  - in header component ts
  ```ts
   toggleAddTask(){
    console.log("Toggle");
  }
  ```
