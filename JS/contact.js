

//recuperation des balises
let horaire = document.getElementById('horaire')
let input = document.getElementById('input')
let reserver = document.getElementById('reserver')
let inputnum = document.getElementById('inputnum')
let save = document.getElementById('save')
let annuler = document.getElementById('annuler')

//rendre invisible la variable annuler
annuler.style.display = 'none'

//regex pour verifier si le numero est valide
let regex = /^[0-9]+$/

//evenement pour le bouton reserver
reserver.addEventListener('click', () => {
    //verifier si les champs sont valide
    if (inputnum.value.length !== 10 
        || !regex.test(inputnum.value) 
        || inputnum.value.charAt(0) !== '0' 
        || input.value === ''){

        alert('Veuillez renseigner des champs valide')
        return
    } else {
        

        

        //rendre visible la variable annuler
        annuler.style.display = 'block'
        //rendre invisible les balises
        horaire.style.display = 'none'
        input.style.display = 'none'
        reserver.style.display = 'none'
        inputnum.style.display = 'none'

        //ajout d'un espace tout les 2 chiffres
        let spaceinput = inputnum.value.replace(/(.{2})/g, "$1 ")
        
        //text pour dire a l'utilisateur que sa reservation est enregistrer
        save.innerText = "Réservation enregistrée\nau nom : " + input.value 
                        + "\npour : " + horaire.value 
                        + "\nau numéro : " + spaceinput
    }
})

//evenement pour le bouton annuler
annuler.addEventListener('click', () => {
    annuler.style.display = 'none'
    save.innerText = ""
    horaire.style.display = 'block'
    input.style.display = 'block'
    reserver.style.display = 'block'
    inputnum.style.display = 'block'

})



