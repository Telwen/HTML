var pos = 0;

var gameList = {
    0: {
        url: 'IT1',
        img: 'tw3.jpg',
        name: 'The Witcher 3'
    },
    1: {
        url: 'IT2',
        img: 'p2.jpg',
        name: 'Prototype 2'
    },
    2: {
        url: 'IT3',
        img: 'baa.jpg',
        name: 'Batman: Arkham'
    },
    3: {
        url: 'IT4',
        img: 'sm.jpg',
        name: 'Surviving Mars'
    },
    4: {
        url: 'IT5',
        img: 'sa.jpg',
        name: 'Sword Art Online: Fatal Bullet'
    },
    5: {
        url: 'IT6',
        img: 'kk.jpg',
        name: 'Kingdom Come: Deliverance'
    },
    6: {
        url: 'IT7',
        img: 'm2033.jpg',
        name: 'Metro 2033 '
    },
    7: {
        url: 'IT8',
        img: 'ds.jpg',
        name: 'Dark Souls 3'
    }
};

// setInterval(function () {
//     document.getElementsByClassName('btn-next')[pos].click();
//     pos++;
//     if (pos == 5) {
//         pos = 0;
//     }
// }, 3000);

setInterval(function () {
    var elem = $('#active label');
    for (i =0; i < elem.length; i++) {
        if (elem.eq(i).css('background-color') == 'rgb(128, 0, 128)') {
            if (i==4) {
                $('#controls label').eq(0).click();
                return;
            } else {
                $('#controls label').eq(i+1).click();
                return;
            }
        }
    }
}, 5000);

function findInGameList(msg) {
    var counter = 0;
    if (msg.length  > 0) {
        $('#find-result').children('ul').empty();
        for (key in gameList) {
            if (gameList[key].name.toUpperCase().indexOf(msg.toUpperCase()) >= 0) {
                // $('#find-result').children('ul').append('<li onclick="this.lastChild.click()"><img src="IMG/'+gameList[key].img+'"><a href="'+gameList[key].url+'.html">'+gameList[key].name+'</a></li>');
                $('#find-result').children('ul').append('<li><img src="IMG/'+gameList[key].img+'"><a href="'+gameList[key].url+'.html">'+gameList[key].name+'</a></li>');
                counter++;
                if (counter >= 4) {
                    break;
                }
            }
        }
        if ($('#find-result').find('li').length > 0) {
            $('#find-result').show();
        } else {
            $('#find-result').hide();
        }
    } else {
        $('#find-result').hide();
    }
}

function btn_signin() {
    var dialog = bootbox.dialog({
        className: 'cls_b',
        title: '<p style="font-size: 25px"> <b>Вход</b></p> <br> Для авторизации введите следующие данные: ',
        message: "<p class='enter_menu'><input type=\"text\" size=\"30\" placeholder=\"Почта\"> <br><br>\n" +
        "                    <input type=\"password\" size=\"30\" placeholder=\"Пароль\"><br><br> <input style='margin-right: 15px' type=\"checkbox\"> Запомнить пароль </p>",
        buttons: {
            ok: {
                label: "Вход",
                className: 'btn-btn',
                callback: function(){
                    ;
                }
            }
        }
    });
}

function btn_registration() {
    bootbox.confirm({
        className: 'cls_c',
        title: "Для регистрации введите следующие данные:",
        message: "<p class='reg_menu'><input type=\"text\" size=\"30\" placeholder=\"Почта\"><br><br>\n" +
        "<input type=\"password\" size=\"30\" placeholder=\"Пароль\"> <br><br>\n" +
        "<input type=\"password\" size=\"30\" placeholder=\"Подтверждение пароля\"><br><br> " +
        "<input style='margin-right: 15px' type=\"checkbox\">Я ознакомлен с <a href='' style='color: #005cbf; font-size: 15px'>пользовательским соглашением</a> </p>",
        buttons: {
            cancel: {
                className: 'reg_cnl_btn',
                label: '<i class="fa fa-times"></i> Cancel'
            },
            confirm: {
                className: 'btn-btn',
                label: '<i class="fa fa-check"></i> Регистрация'
            }
        },
        callback: function (result) {
            console.log('This was logged in the callback: ' + result);
        }
    });
}

function btn_basket() {
    var dialog = bootbox.dialog({
        title: 'Корзина',
        message: '<p><i class="fa fa-spin fa-spinner"></i> Loading...</p>'
    });
    dialog.init(function(){
        setTimeout(function(){
            dialog.find('.bootbox-body').html('В данный момент корзина недоступна');
        }, 3000);
    });
}

