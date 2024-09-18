
//importer les boutons du menu et les pages du menu
const Menu = Array.from(document.querySelectorAll('#menu button'))
let Entrée = document.getElementById('Entrée')
let Plat = document.getElementById('Plat')
let acc = document.getElementById('acc')
let boisson = document.getElementById('boisson')
let dessert = document.getElementById('dessert')

//importer les boutons Ramen et autreplat ainsi que leurs page respective
const Ramen = document.getElementById('choix')
const autreplat = document.getElementById('composition')
let pageRamen = document.getElementById('choixg')
let pageAutrePlat = document.getElementById('Platcomposition')

//rendre invisible les pages du menu sauf entrée
Plat.style.display = "none"
acc.style.display = "none"
boisson.style.display = "none"
dessert.style.display = "none"


//fonction pour changer la classe des boutons du menu
function classmenu(bouton) {
    Menu.forEach(bouton => {
        bouton.classList.remove('choixmenuselect')
        bouton.classList.add('choixmenu')
    })
    bouton.classList.remove('choixmenu')
    bouton.classList.add('choixmenuselect')
}

//evenement pour les boutons du menu
Menu.forEach(bouton => {
    bouton.addEventListener('click', () => {
        //changer la page en fonction du bouton
        if (bouton === Menu[0]) {
            Plat.style.display = "none"
            acc.style.display = "none"
            Entrée.style.display = "block"
            boisson.style.display = "none"
            dessert.style.display = "none"
            classmenu(bouton)

        }
        if (bouton === Menu[1]) {
            Plat.style.display = "block"
            pageRamen.style.display = "block"
            pageAutrePlat.style.display = "none"
            Entrée.style.display = "none"
            acc.style.display = "none"
            boisson.style.display = "none"
            dessert.style.display = "none"
            classmenu(bouton)
        }
        else if (bouton === Menu[2]) {
            Plat.style.display = "none"
            acc.style.display = "block"
            Entrée.style.display = "none"
            boisson.style.display = "none"
            dessert.style.display = "none"
            classmenu(bouton)
        }
        else if (bouton === Menu[3]) {
            Plat.style.display = "none"
            acc.style.display = "none"
            Entrée.style.display = "none"
            boisson.style.display = "block"
            dessert.style.display = "none"
            classmenu(bouton)
        }
        else if (bouton === Menu[4]) {
            Plat.style.display = "none"
            acc.style.display = "none"
            Entrée.style.display = "none"
            boisson.style.display = "none"
            dessert.style.display = "block"
            classmenu(bouton)
        }
    })
})


//evenement pour les boutons Ramen et autreplat
Ramen.addEventListener('click', () => {
    //changer la page en fonction du bouton
    pageRamen.style.display = "block"
    pageAutrePlat.style.display = "none"

    //changer la classe des boutons
    Ramen.classList.remove('choixplat')
    Ramen.classList.add('choixplatselect')
    autreplat.classList.remove('choixplatselect')
    autreplat.classList.add('choixplat')

})
autreplat.addEventListener('click', () => {
    pageAutrePlat.style.display = "block"
    pageRamen.style.display = "none"
    Ramen.classList.remove('choixplatselect')
    Ramen.classList.add('choixplat')
    autreplat.classList.remove('choixplat')
    autreplat.classList.add('choixplatselect')
})

