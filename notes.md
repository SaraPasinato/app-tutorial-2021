# Comandi 

1. Per creare un progetto : `ng new _nomeProgetto`
2. Per lanciare il localhost server : `ng serve`
3. Per creare un nuovo componente : `ng g(generate) c(component) _nomeDelComponente`
4. importare angular-fontawsome ![https://github.com/FortAwesome/angular-fontawesome]

5. creare i sevizi : `ng g s(serices) _nomeDelSevizio`

6. usiamo json-server per api : per installare `npm i json-server`
7. per il server andare in package.json ed inserire negli script `"server":"json-server --watch db.json --port 5000"`
8. crea db.json con i valori accordati nella root dir
9. lancia `npm run server`
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

## come creare un servizio fake(tramite dati accordati)
1. genera il servizio con il comando 
2. sevizio.ts si importano le classi:
   ```ts
   import{Observable,of} from 'rxjs';
   import { Task } from '../Task'
   import { TASKS } from '../mock-tasks';
   ```
3. il metodo che accede ai dati accordati
    ```ts
     getTasks(): Observable<Task[]>{
        const tasks=of( TASKS);
        return tasks;
          }
    ```
4. task.components.ts si elimina il mock tasks e si importa il taskSErvice
5. nel costruttore si crea una istanza privata  ` constructor(private taskService: TaskService) { }`
6. si inizializza ngOnInit
  ```ts
   this.taskService.getTasks().subscribe((tasks)=>this.tasks=tasks);
  ```
## come creare un servizio da api
1. inserire service HttpClient,HttpHeaders from @angular/common/http
2. inserire in app.moduler HttpClientModule e in import HttpClientModule
3. inserire proprietà in service `private apiUrl='http://localhost:5000/tasks'`
4. inserire nel costurttore la connessione http ` constructor(private http:HttpClient) { }`
5. metodo getTask(): 
  ```ts
  getTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(this.apiUrl);
  }
  ```
