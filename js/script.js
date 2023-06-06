const btn = document.querySelector('.main__btn');
let id = document.querySelector('.main__id');
let img = document.querySelector('.main__img img');
let desc = document.querySelector('.main__desc');


btn.addEventListener('click', ()=> {
    next();
})

function next() {  

    let nextId = rand(33, 1);

    arr.forEach(item => {
        if(nextId == item.id){
            id.innerHTML = item.id;
            desc.innerHTML = item.text;
            img.setAttribute('src', item.imgSrc);
        }
        
    });

}

function rand(max, min) {  
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const arr = [
    {id: 1, imgSrc: './images/1.png', text: ''},
    {id: 2, imgSrc: './images/2.png', text: 'Здравствуйте, меня зовут Рафаэль, я преподаватель учебного центра PROWEB по курсу веб программирования. Работаю в центре более 1 года, раньше работал с проектами разных компаний, также брал заказы на фрилансе.'},
    {id: 3, imgSrc: './images/3.png', text: 'Если будет интересно, то мои работы можете найти по этой ссылке.'},
    {id: 4, imgSrc: './images/4.png', text: 'Наш урок будет состоять из двух частей: теоретическая и если останется времени, то немного практической. Сначала я расскажу немного о нашем курсе, что он в себя включает и после перейдем к практической части.'},
    {id: 5, imgSrc: './images/5.png', text: 'Для начала рассмотрим, чем занимается веб-программирование. Наверное, многие уже пользовались сайтами. Так вот если рассказать простыми словами мы рассматриваем ту часть программирования которая занимается созданием сайтов.'},
    {id: 6, imgSrc: './images/6.png', text: 'А люди которые создают эти сайты называются веб-программистами. Они как раз и создают интернет магазины, социальные сети и другие сервисы.'},
    {id: 7, imgSrc: './images/7.png', text: 'Веб-программирование делится на два направления фронтенд и бэкенд. Первые создают красивое оформление сайта и его анимацию, а вторые за хранение этой информации на сервере, защиту и предоставление при необходимости.'},
    {id: 8, imgSrc: './images/8.png', text: 'Фронтенд программисту необходимо знать две технологии HTML и CSS, владеть системой контроля версий Git, работать на языке программирования JavaScript, а также использовать один из препроцессоров и фреймворков.'},
    {id: 9, imgSrc: './images/9.png', text: 'Фреймворк позволит вам быстрее создавать сложные веб-приложения, за счет использования уже готовых решений и возможности разделения на более мелкие задачи.'},
    {id: 10, imgSrc: './images/10.png', text: 'Если рассмотреть фреймворк Vue - то этот инструмент можно добавлять в уже готовый проект, так и писать на нем приложение с нуля. Поддерживается независимым разработчиком Эваном Ю'},
    {id: 11, imgSrc: './images/11.png', text: 'По аналогии с vue есть очень популярная библиотека React, которая поддерживается компанией facebook. С его помощью также можно делить проект на компоненты.'},
    {id: 12, imgSrc: './images/12.png', text: 'Но если сравнить с фреймворком Angular, который поддерживает компания Google - то тут для изучения понадобится не только TypeScript и RxJS (библиотека, реализующая принципы реактивного программирования для JavaScript), но также нужно подробно рассмотреть жесткую структуру, которая диктуется самим фреймворком. Также в нем присутствует очень много своих решений которые идут в комплекте с ним, не нужно устанавливать дополнительных модулей как например для роутинга axios. Это же сказывается на его загрузке, в отличии от Vue и React. Но очень популярен для средних и крупных проектов.'},
    {id: 13, imgSrc: './images/13.png', text: 'Применить полученные знания вы можете как в начинающих проектах, так и в уже давно работающих компаниях.'},
    {id: 14, imgSrc: './images/14.png', text: 'При выборе дальнейшей работы мы выделяем несколько направлений: офис, фриланс, предпринимательство и медиа-агентство.'},
    {id: 15, imgSrc: './images/15.png', text: 'Работая в офисе у вас стабильный доход, выполняете определенный этап работы и скорее всего у вас будет наставник, который может проконсультировать в некоторых вопросах. Но по большей части тут не будет разнообразия в задачах.'},
    {id: 16, imgSrc: './images/16.png', text: 'На фрилансе у вас нет жесткого графика, вы вправе выбирать с какими заказчиками хотите работать, стоимость вашей работы определяете сами и каким способом ее выполнять тоже. При этом вы можете жить и работать там, где вам удобно, главное чтобы был доступ к интернету. Но при этом нет стабильного заработка.'},
    {id: 17, imgSrc: './images/17.png', text: 'Предпринимательство - это более ответственная задача, так как вам придется не только подобрать команду чтобы выполнять полный спектр услуг, но и искать заказчиков на рынке.'},
    {id: 18, imgSrc: './images/18.png', text: 'Медиа-агентство - почти тоже самое что работа в офисе, только тут вам нужно быть гораздо опытным сотрудником и наставника у вас не будет. Тут объем работы может быть очень большой, но и проекты могут быть интересные.'},
    {id: 19, imgSrc: './images/19.png', text: 'Зарплата веб-программиста зависит от его знаний и опыта работы.'},
    {id: 20, imgSrc: './images/20.png', text: 'К примеру зарплата начинающего специалист квалификации Junior стартует от $300'},
    {id: 21, imgSrc: './images/21.png', text: 'В то время как зарплата веб-программиста квалификации Middle стартует от $600. При этом задачи они могут выполнять одинаковые, все зависит от опыта работы.'},
    {id: 22, imgSrc: './images/22.png', text: 'Но специалисты уровня Senior получают от $1000 и выше. Это человек отвечающий не только за свою часть работы и выполнение всего проекта, но также является наставником при решении сложных задач.'},
    {id: 23, imgSrc: './images/23.png', text: 'На нашем курсе вы изучите работу «Фронтенд-разработчика».'},
    {id: 24, imgSrc: './images/24.png', text: 'В нее входит верстка сайта, где вы изучите две технологии HTML и CSS, а также познакомитесь с приложением Figma. В ней дизайнер будет предоставлять вам макет.'},
    {id: 25, imgSrc: './images/25.png', text: 'Также рассмотрите инструменты, позволяющие контролировать версии вашего проекта, увеличить скорость написания стилей и давать правильное именование классам.'},
    {id: 26, imgSrc: './images/26.png', text: 'И конечно изучите язык программирования JavaScript и подробно рассмотрите фреймворк Vue с его инструментами, при работе над проектами.'},
    {id: 27, imgSrc: './images/27.png', text: 'Во время курса мы сделаем несколько проектов, которые вы добавите в свое портфолио.'},
    {id: 28, imgSrc: './images/28.png', text: 'Сам курс рассчитан на 10 месяцев обучения. В одном месяце 8 занятий. В неделю будет проходить два занятия. Каждое занятие длится по 1,5 часа.'},
    {id: 29, imgSrc: './images/29.png', text: 'Работа веб-программистом всегда является актуальной потому что она затрагивает разные сферы деятельности.'},
    {id: 30, imgSrc: './images/30.png', text: 'Поэтому этот курс подойдет всем, кто хочет обрести новую профессию или получить дополнительный опыт.'},
    {id: 31, imgSrc: './images/31.png', text: 'Проходя наши курсы вы получите современную профессию, которая уже долгое время является востребованной на рынке труда.'},
    {id: 32, imgSrc: './images/32.png', text: 'Проходя наши курсы вы получите современную профессию, которая уже долгое время является востребованной на рынке труда.'},
    {id: 33, imgSrc: './images/33.png', text: 'Также если у вас возникнут проблемы с выполнением домашних заданий у нас есть бесплатный Co-working. В нем вы можете получить дополнительную консультацию у преподавателя коворкинга. Для этого вам нужно сообщить время и дату вашего посещения в администрацию коворкинга по телефону или телеграмму, чтобы не ждать когда освободится компьютер.\na. Если у вас возникнут проблемы с установкой программ, то у нас есть технический отдел, который может бесплатно помочь установить программы необходимые для учебы или проконсультировать по возникшим вопросам.\nb. У нас есть отдел трудоустройства, который следит за успеваемостью студентов и по окончанию курса некоторых из них подключают к телеграмм каналу где выкладываются вакансии.'},
]