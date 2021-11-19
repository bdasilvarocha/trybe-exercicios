function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
};
  
    createDaysOfTheWeek();
    
    // Escreva seu código abaixo.
    // 1.
    function diasDoCalendario() {
        const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
        const days = document.getElementById('days'); 
        for (let i = 0; i < dezDaysList.length; i += 1) {
            const listaDias = document.createElement('li');
            listaDias.innerText = dezDaysList[i];
            listaDias.className = 'days';
            days.appendChild(listaDias);
            if (dezDaysList[i] == 24 || dezDaysList[i] == 25 || dezDaysList[i] == 31) {
            listaDias.classList.add('holiday');
            }
            if (dezDaysList[i] == 4 || dezDaysList[i] == 11 || dezDaysList[i] == 18 || dezDaysList[i] == 25) {
            listaDias.classList.add('friday');
            }
        };
    };   
    diasDoCalendario();

// 2.
    const str = 'Feriados';
    function btnFeriados(str) {
        const butoes = document.getElementsByClassName('buttons-container')[0];
        const feriadoButao = document.createElement('button');
        feriadoButao.innerText = str;
        feriadoButao.id = 'btn-holiday';
        butoes.appendChild(feriadoButao);
    };
    btnFeriados(str);

// 3.
    
    function mudaCorDiaFeriado() {
        const butaoFeriado = document.querySelector('#btn-holiday');
        const diaHoliday = document.querySelectorAll('.holiday');
        let newColor = 'orange';
        let oldColor = 'rgb(238,238,238)';

        butaoFeriado.addEventListener('click', function () {
            for (let i = 0; i < diaHoliday.length; i += 1) {    
                if (diaHoliday[i].style.backgroundColor === newColor) {
                diaHoliday[i].style.backgroundColor = oldColor;
                } else {
                diaHoliday[i].style.backgroundColor = newColor;
                }
            }
        });
    }
    mudaCorDiaFeriado();

// 4.
    const str2 = 'Sexta-feira';
    function btnFriday(str2) {
        const butoes = document.getElementsByClassName('buttons-container')[0];
        const fridayButao = document.createElement('button');
        fridayButao.innerText = str2;
        fridayButao.id = 'btn-friday';
        butoes.appendChild(fridayButao);
    }
btnFriday(str2);

// 5.
    function mudaTextoFriday(arrFriday) {
        let butaoFriday = document.querySelector('#btn-friday');
        let diaFriday = document.querySelectorAll('.friday');
        let newText = "Its friday day!"

        butaoFriday.addEventListener('click', function () {
            for (let i = 0; i < diaFriday.length; i += 1) {    
                if (diaFriday[i].innerText !== newText) {
                    diaFriday[i].innerText = newText;
                } else {
                    diaFriday[i].innerText = arrFriday[i];
                }
            }
        });
    }
    let dezArray = [4, 11, 18, 25];
    mudaTextoFriday(dezArray);

    // 6.
    function zoom() {
        days.addEventListener('mouseover', function (event) {
            event.target.style.fontSize = '35px'
        });
    }
    zoom ();

    function removeZoom () {
        days.addEventListener('mouseout', function (event) {
            event.target.style.fontSize = '20px';
        });
        
    }
    removeZoom();

    // 7.
    const tarefas = document.createElement('span');
    const myTasks = document.querySelector('.my-tasks');
    function addTarefa (str3) {
        myTasks.appendChild(tarefas);
        tarefas.innerText = str3;
    }
    let str3 = 'Cozinhar'
    addTarefa(str3);

    // 8.
    const criaDiv = document.createElement('div');
    function corDeFundoTarefa (cor){
        myTasks.appendChild(criaDiv);
        criaDiv.className = 'task';
        criaDiv.style.backgroundColor = cor;
    }
    let cor = 'red';
    corDeFundoTarefa (cor);

    //9. 
    function taskSelecionada () {
        const selecionaTask = document.querySelector('.task');
        selecionaTask.addEventListener('click', function() {
            if (selecionaTask.classList == 'task'){
                selecionaTask.className = 'task selected';
            } else {
                selecionaTask.className = 'task';
            }
        });

    }
    taskSelecionada ();