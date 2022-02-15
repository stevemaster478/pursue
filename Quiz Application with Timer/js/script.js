//Selezione di tutti gli elementi richiesti
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// se startQuiz il tasto è stato premuto
start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo"); //show info box
}

// se exitQuiz il tasto è stato premuto
exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //Nascondi info scatola
}

// se continueQuiz il tasto è stato premuto
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //Nascondi info scatola
    quiz_box.classList.add("activeQuiz"); //Mostra la casella Quiz.
    showQuetions(0); //Calling showQuestions Function.
    queCounter(1); //Passando 1 parametro al QueCounter
    startTimer(15); //Chiamare la funzione StartTimer
    startTimerLine(0); //Chiamare la funzione StartTimerline
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// Se il pulsante di riavvio è stato cliccato
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); //Mostra la casella Quiz.
    result_box.classList.remove("activeResult"); //Nascondi la casella dei risultati
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); //Calling Showqestions Function.
    queCounter(que_numb); //Passando il valore Que_Numb su QueCounter
    clearInterval(counter); //pulisci counter
    clearInterval(counterLine); //pulisci counterLine
    startTimer(timeValue); //Chiamare la funzione StartTimer
    startTimerLine(widthValue); //Chiamare la funzione StartTimerline
    timeText.textContent = "Time Left"; //cambiare il testo di timeText in Time Left
    next_btn.classList.remove("show"); //Nascondi il pulsante avanti
}

//Se il pulsante Quitquiz ha fatto clic
quit_quiz.onclick = ()=>{
    window.location.reload(); //Ricarica la finestra corrente
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// Se il pulsante NEXT Que Queso ha fatto clic
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //Se il conteggio delle domande è inferiore alla durata totale delle domande
        que_count++; //incrementa il valore que_count
        que_numb++; //incrementa il valore que_numb
        showQuetions(que_count); //Calling showQuestions Function.
        queCounter(que_numb); //Passando il valore Que_Numb su QueCounter
        clearInterval(counter); //pulisci counter
        clearInterval(counterLine); //pulisci counterLine
        startTimer(timeValue); //Chiamare la funzione StartTimer
        startTimerLine(widthValue); //Chiamare la funzione StartTimerline
        timeText.textContent = "Time Left"; //cambiare the timeText in Time Left
        next_btn.classList.remove("show"); //Nascondi il pulsante successivo
    }else{
        clearInterval(counter); //pulisci counter
        clearInterval(counterLine); //pulisci counterLine
        showResult(); //Calling ShowResult Function.
    }
}

// Ottenere domande e opzioni da array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //Creazione di un nuovo tag span e div per domande e opzioni e passando il valore utilizzando l'indice di array
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; //Aggiunta di nuovo tag span all'interno di que_tag
    option_list.innerHTML = option_tag; //Aggiunta di nuovo tag div all'interno di opzione_tag
    
    const option = option_list.querySelectorAll(".option");

    // Imposta AtClick Attributo a tutte le opzioni disponibili
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creando i nuovi tag div che per le icone
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//Se l'utente ha fatto clic sull'opzione
function optionSelected(answer){
    clearInterval(counter); //pulisci counter
    clearInterval(counterLine); //pulisci counterLine
    let userAns = answer.textContent; //Ottenere l'opzione selezionata dall'utente
    let correcAns = questions[que_count].answer; //ottenere una risposta corretta da array
    const allOptions = option_list.children.length; //Ottenere tutte le opzioni
    
    if(userAns == correcAns){ //Se l'opzione selezionata dell'utente è uguale alla risposta corretta di array
        userScore += 1; //Aggiornamento del punteggio del punteggio con 1
        answer.classList.add("correct"); //Aggiunta di colore verde per correggere l'opzione selezionata
        answer.insertAdjacentHTML("beforeend", tickIconTag); //Aggiunta dell'icona TICK per correggere l'opzione selezionata
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //Aggiunta di colore rosso per correggere l'opzione selezionata
        answer.insertAdjacentHTML("beforeend", crossIconTag); //Aggiunta dell'icona incrociata per correggere l'opzione selezionata
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //Se c'è un'opzione che è abbinata a una risposta di array
                option_list.children[i].setAttribute("class", "option correct"); //Aggiunta di colore verde all'opzione abbinata
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //Aggiunta dell'icona di spunta all'opzione abbinata
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //Una volta che l'utente seleziona un'opzione, quindi disabilitato tutte le opzioni
    }
    next_btn.classList.add("show"); //Mostra il pulsante successivo se l'utente ha selezionato qualsiasi opzione
}

function showResult(){
    info_box.classList.remove("activeInfo"); //Nascondi info scatola
    quiz_box.classList.remove("activeQuiz"); //Nascondi la casella del quiz
    result_box.classList.add("activeResult"); //Mostra risultati dei risultati
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ //Se l'utente ha segnato più di 3
        //Creazione di un nuovo tag Span e passando il numero del punteggio utente e il numero di domanda totale
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //Aggiunta di nuovo tag span all'interno del punteggio_text
    }
    else if(userScore > 1){ //Se l'utente ha segnato più di 1
        let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ //Se l'utente ha segnato meno di 1
        let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time; //Modifica del valore del TimeCount con il valore del tempo
        time--; //Decremento il valore temporale
        if(time < 9){ //Se il timer è inferiore a 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //Aggiungi un 0 prima del valore del tempo
        }
        if(time < 0){ //Se il timer è inferiore a 0
            clearInterval(counter); //Chiaro contatore
            timeText.textContent = "Time Off"; //Cambia il tempo del testo per superare
            const allOptions = option_list.children.length; //Ottenere tutte le opzioni
            let correcAns = questions[que_count].answer; //ottenere una risposta corretta da array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //Se c'è un'opzione che è abbinata a una risposta di array
                    option_list.children[i].setAttribute("class", "option correct"); //Aggiunta di colore verde all'opzione abbinata
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //Aggiunta dell'icona di spunta all'opzione abbinata
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //Una volta che l'utente seleziona un'opzione, quindi disabilitato tutte le opzioni
            }
            next_btn.classList.add("show"); //Mostra il pulsante successivo se l'utente ha selezionato qualsiasi opzione
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //Aggiornamento del valore del tempo con 1
        time_line.style.width = time + "px"; //Aumento della larghezza del time_line con PX per valore temporale
        if(time > 549){ //Se il valore del tempo è maggiore di 549
            clearInterval(counterLine); //Cancella contrina
        }
    }
}

function queCounter(index){
    //creando un nuovo tag span e passando il numero di domande e la domanda totale
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //Aggiunta di nuovo tag span all'interno del fondo_ques_counter
}
