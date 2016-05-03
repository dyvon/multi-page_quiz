var select= document.getElementById("select_answer");
var progress= 0;
var score = 0;
var confirm_text= document.getElementById("confirm_text");


sessionStorage.getItem("points");
var progress_made = sessionStorage.getItem("howfar");
var endscore = document.getElementById("test");

function wrong_color(){
    confirm_text.style.backgroundColor = "#ff0000";
}

function myFunction() {
    if(select.value == 2 && progress_made == null ){
        score++;
        progress++;
        sessionStorage.setItem("points", score);
        sessionStorage.setItem("howfar",progress);
        window.location.href = "question2.html";
        return
    }else{
        if(progress_made == null){
            confirm_text.textContent = "Sorry try again";
            wrong_color();
        }
    }
    if(select.value == 3 && progress_made == 1 ){
        score++;
        progress++;
        sessionStorage.setItem("points", score+1);
        sessionStorage.setItem("howfar",progress+1);
        window.location.href = "question3.html";
        return
    }
    else{
        if(progress_made == 1){
            confirm_text.textContent = "Sorry try again";
            wrong_color();
        }
    }
    if(select.value == 2 && progress_made == 2 ){
        score++;
        progress++;
        sessionStorage.setItem("points", score+2);
        sessionStorage.setItem("howfar",progress+2);
        window.location.href = "question4.html";
        return
    }
    else{
        if(progress_made == 2){
            confirm_text.textContent = "Sorry try again";
            wrong_color();
        }
    }
    if(select.value == 1 && progress_made == 3 ){
        score++;
        progress++;
        sessionStorage.setItem("points", score+3);
        sessionStorage.setItem("howfar",progress+3);
        window.location.href = "question5.html";
        return
    }
    else{
        if(progress_made == 3){
            confirm_text.textContent = "Sorry try again";
            wrong_color();
        }
    }
    if(select.value == 3 && progress_made == 4 ){
        score++;
        progress++;
        sessionStorage.setItem("points", score+4);
        sessionStorage.setItem("howfar",progress+4);
        window.location.href = "scorepage.html";
        return
    }
    else{
        if(progress_made == 4){
            confirm_text.textContent = "Sorry try again";
            wrong_color();
        }
    }
}

function myscore(){
    
    endscore.textContent= "You Passed All Questions! Total Answered = "+sessionStorage.getItem("points")+"/5" ;
}