/*

Descrizione:
Rifare l'esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
- text, una stringa che indica il testo del todo
- done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 1
Stampare all'interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item ha una "x": cliccando su di essa, 
il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante "aggiungi": 
cliccando sul pulsante, il testo digitato viene letto e utilizzato 
per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell'item, invertire il valore della proprietà 
done del todo corrispondente (se done era uguale a false, impostare true e viceversa)

*/


// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mondare in pagina
createApp({
    data() {
        return {
            newToDo : '',
            todos : [
            {
                text : 'Fare i compiti',
                done : false
            },
            {
                text : 'Fare pranzo',
                done : true
            },
            {
                text : 'Fare un pisolino',
                done : false
            },
            {
                text : 'Essere rilassato',
                done : false
            }
            ]
        };
    },
    methods: {
        addToDo() {
            if (this.newToDo.trim().length > 0){
                let task = {
                    text : this.newToDo.trim(),
                    done : false,
                }
                this.todos.push(task);
                this.newToDo = ''
            }
            
        },
        removeToDo(i){
            console.log(i);
            console.log(this.todos[i]);
            this.todos.splice(i, 1)
        },
        check(i){
            console.log('check', i)
            this.todos[i].done = !this.todos[i].done;
        },
    }
  // Monto l'istanza di Vue in pagina
}).mount('#app');

