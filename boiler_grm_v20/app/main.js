window.addEventListener('load', () => {
    unitFormEvents();
    modalFormEvents();
    renderTweets();
    initTweetEvents();
    renderAllTweets();
    initModalEvents();
    renderMenu();
});






//INFORMACION DEL TW DINAMICA

const nameUser = "MARIONA";
const cuentaUser = "@marionasl";
const photoUser = "https://pbs.twimg.com/media/Er30pstXIAEbmDy?format=jpg&name=small"





//variable global

const tweets = [
    {
        text: 'hola',
        likes: 0,
        dateCreation: new Date()


    }
];



//iniciar los elemtos del formulario

const unitFormEvents = () => {
    const form = document.forms.new;
    const textArea = form.elements.tweet;


    ///formulario enviandose
    form.addEventListener('submit', (ev) => {

        ev.preventDefault();
        if (textArea.value != "") {


            tweets.push({
                text: textArea.value,
                likes: 0,
                dateCreation: new Date()
            });

        };
        //
        form.reset();
        console.log(tweets);

        //
        renderTweets();
        initTweetEvents();
    });
};


/*
*
*
*
*/
//REDERIZAR LOS TWEETS


const renderTweets = () => {
    const twIndividual = document.querySelector('.grupoTexto');
    let HTMLString = "";


    tweets.forEach(grupoTexto => {
        //const tweetInfo = tweetData.infoUsuario[i];


        HTMLString +=
            `
                
                        <div class="grupoTexto">
                            <div class="photo_tw">
                            <img class="imagenUser" src="${photoUser}" alt="">
                            </div>
                            <div class="texto_tw">
                                <div class="info_usuario">
                                    <div class="nombre_usuario item_usuario">
                                       <p class="nombre"> ${nameUser}</p>
                                    </div>
                                    <div class="nomnre_cuenta item_usuario">
                                        ${cuentaUser}
                                    </div>
                                    <div class="circle item_usuario">
                                       <p> ·</p>
                                    </div>
                                    <div class="timepo_publicacion item_usuario">
                                        <p class=""> 15h</p>
                                    </div>
                                    <div class="item_usuario trash">
                                    <span class="fa fa-trash"></span>
                                    </div>
                                </div>
                                <div class="cuerpo_tw">
                                    <p>${grupoTexto.text}</p>
                                </div>
                                <div class="interaciones_tw">

                                    <div class="items_interacciones comment">
                                    <span class="fa fa-comment-o"></span>
                                    <div class="item_interacciones label">1</div>
                                    </div>

                                    <div class="items_interacciones rt">
                                        <span class="fa fa-retweet"></span>
                                        <div class="item_interacciones label">
                                        0
                                        </div>
                                    </div>

                                    <div class="items_interacciones like">

                                        <span class="fa fa-heart-o "></span>

                                        <div class="item_interacciones  label">
                                        ${grupoTexto.likes}
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    
                `

    });
    document.querySelector('.twIndividual').innerHTML = HTMLString;
    // initTweetEvents();
    renderTweetsAmount();

};








/***MENU DINAMICO DE DATOS  */
const renderMenu = () => {
    let menuDinamicoHTML = "";
    for (let i = 0; i < twitterInfo.menuInfo.length; i++){
        const itemMenu  = twitterInfo.menuInfo[i];
        menuDinamicoHTML +=
        `


                <div class="item_menu">
                    <span class="${itemMenu.icon}"></span>
                    <span class="label">${itemMenu.item}</span>
                </div>


        `
    };
    document.querySelector('.menu_dinamico').innerHTML = menuDinamicoHTML;
};











/***SABER EL NUMERO DE TW QUE HAY EN LA BANDEJA */
const renderTweetsAmount = () => {
    const amount = tweets.length;
    const amountDom = document.querySelector('.grupo_derech .amount');
    const HTMLString = `Hay ${amount} tweets de el tablero`;
    amountDom.innerHTML = HTMLString;
};


const renderAllTweets = () => {
    const amountDom = document.querySelector('.grupo_derech .amountReset');
    amountDom.addEventListener('click', () => {
        tweets.splice(0);
        renderTweets();
    });
};






/****
 * 
 */

//FUNCION PARA LOS FAVS

const initTweetEvents = () => {
    const tweetsDom = document.querySelectorAll('.twIndividual .grupoTexto ');


    //
    tweetsDom.forEach((tweetDom, i) => {


        /**BASURA**/
        //Seleccion de la basura 
        const trash = tweetDom.querySelector('.trash');

        trash.addEventListener('click', () => {
            console.log(i);


            //operacion contra un array
            tweets.splice(i, 1);
            renderTweets();
            initTweetEvents();
        });


        /**LIKE**/
        const like = tweetDom.querySelector('.like');
        like.addEventListener('click', () => {


            //
            tweets[i].likes++;
            renderTweets();
            initTweetEvents();

        });



    });
};










const modalFormEvents = () => {
    const modalTweet = document.querySelector('.modal_tweet');
    const form = document.forms.new_modal;
    const textArea = form.elements.tweet;


    ///formulario enviandose
    form.addEventListener('submit', (ev) => {

        ev.preventDefault();
        if (textArea.value != "") {


            tweets.push({
                text: textArea.value,
                likes: 0,
                dateCreation: new Date()
            });

        };
        //
        form.reset();

        closeModal(modalTweet);
        renderTweets();
        initTweetEvents();
    });

};



//ABRIR Y CERRARSE

const openModal = (modalTweet) => {

    modalTweet.classList.add('opened');
    document.body.style.overflow = 'hidden';
};

const closeModal = (modalTweet) => {

    modalTweet.classList.remove('opened');
    document.body.style.overflow = '';
};




const initModalEvents = () => {

    const toggle = document.querySelector('.create_tweets');
    const modalTweet = document.querySelector('.modal_tweet');
    const closeButton = document.querySelector('.close_buttom');
    const overlay = document.querySelector('.modal_overlay');

    //para que se abrá la perstaña y 'ev' para q a no funcione
    // vomo un enlace
    toggle.addEventListener('click', (ev) => {
        openModal(modalTweet);
        ev.preventDefault();
    });
    closeButton.addEventListener('click', () => {
        closeModal(modalTweet);
        ev.preventDefault();
    });
    overlay.addEventListener('click', () => {
        closeModal(modalTweet);
        ev.preventDefault();
    });
};



