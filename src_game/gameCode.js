var event, ok;
var arrAnswers = [];
do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
        if (ok) {
            switch (event) {
                case 1:
                    arrAnswers.push(works.a00+works.a1);
                    break;
                case 2: 
                    arrAnswers.push(works.a00+works.a2);
                    break;
            }
        }
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
                if (ok) {
                    switch (event) {
                        case 1:
                            arrAnswers.push(works.b00+works.b1);
                            break;
                        case 2: 
                            arrAnswers.push(works.b00+works.b2);
                            break;
                    }
                }
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok) {
                            switch (event) {
                                case 1:
                                    arrAnswers.push(works.d0+works.d1);
                                    break;
                                case 2: 
                                    arrAnswers.push(works.d00+works.d2);
                                    break;
                            }
                        }
                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok) {
                            switch (event) {
                                case 1:
                                    arrAnswers.push(works.d0+works.d1);
                                    break;
                                case 2: 
                                    arrAnswers.push(works.d00+works.d2);
                                    break;
                            }
                        }
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
                if (ok) {
                    switch (event) {
                        case 1:
                            arrAnswers.push(works.c00+works.c1);
                            break;
                        case 2: 
                            arrAnswers.push(works.c00+works.c2);
                            break;
                    }
                }
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok) {
                            switch (event) {
                                case 1:
                                    arrAnswers.push(works.d0+works.d1);
                                    break;
                                case 2: 
                                    arrAnswers.push(works.d00+works.d2);
                                    break;
                            }
                        }
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        if (ok) {
                            switch (event) {
                                case 1:
                                    arrAnswers.push(works.d0+works.d1);
                                    break;
                                case 2: 
                                    arrAnswers.push(works.d00+works.d2);
                                    break;
                            }
                        }
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
console.log(arrAnswers);
userAnswers(confirm('хотите посмотреть резултаты?'));
//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}

function userAnswers(a) {
    while (a) {
        var stepNumber = +prompt('Введите номер шага для вывода результата:');
        alert(arrAnswers[stepNumber - 1]);
        a = confirm('Будете продолжать смотреть резултаты?');
    }
}

