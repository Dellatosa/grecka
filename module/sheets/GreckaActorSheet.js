//import * as Dice from "../dice.js";

export default class GreckaActorSheet extends ActorSheet {
     
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 700,
            height: 900,
            classes: ["grecka", "sheet", "actor"],
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "carateristiques" }]
        });
    }

    get template() {
        if(this.actor.type == "personnage") {
            console.log(`Grecka | type : ${this.actor.type} | chargement du template systems/grecka/templates/sheets/actors/personnage-sheet.html`);
            return `systems/grecka/templates/sheets/actors/personnage-sheet.html`
        } 
        else {
            console.log(`Grecka | chargement du template systems/grecka/templates/sheets/actors/${this.actor.type}-sheet.html`);
            return `systems/grecka/templates/sheets/actors/${this.actor.type}-sheet.html`
        }
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.Grecka;
        const actorData = data.system;

        data.archetypes = data.items.filter(function (item) { return item.type == "archetype"});
        data.expertises = data.items.filter(function (item) { return item.type == "expertise"});

        return data;
    }

    activateListeners(html) {
        super.activateListeners(html);

        const actorData = this.object.system;

        /*
        const SanteClass = ".sante-" + actorData.sante.value;
        html.find(SanteClass).addClass("sante-cur");

        const StressClass = ".stress-" + actorData.stress.value;
        html.find(StressClass).addClass("stress-cur");
        */

        //<i class="fa-solid fa-thumbtack"></i>

        if (this.actor.isOwner) {
            new ContextMenu(html, ".archetype-options", this.editContextMenu);
            new ContextMenu(html, ".expertise-options", this.editContextMenu);

            // Jet de caractéristique
            //html.find('.roll-carac').click(this._onJetCaracteristique.bind(this));

            //html.find('.roll-trait').click(this._onJetCaracAvecTrait.bind(this));

            //html.find('.roll-metier').click(this._onJetCaracAvecMetier.bind(this));

            //html.find('.roll-hobby').click(this._onJetCaracAvecHobby.bind(this));
        }
    }

    
    editContextMenu = [
        {
            name: "Editer",
            icon: '<i class="fas fa-edit"></i>',
            callback: e => {
                const data = e[0].dataset;
                const item = this.actor.items.get(data.itemId);
                item.sheet.render(true);
            }
        },
        {
            name: "Supprimer",
            icon: '<i class="fas fa-trash"></i>',
            callback: e => {
                const data = e[0].dataset;
                const item = this.actor.items.get(data.itemId);

                let content = `<p>${item.type} : ${item.name}<br>Etes-vous certain de vouloir supprimer cet objet ?<p>`
                let dlg = Dialog.confirm({
                title: "Confirmation de suppression",
                content: content,
                yes: () => item.delete(),
                //no: () =>, On ne fait rien sur le 'Non'
                defaultYes: false
                });
            }
        }
    ];
    

    /*
    _onJetCaracteristique(event) {
        event.preventDefault();
        const dataset = event.currentTarget.dataset;

        Dice.jetCaracteristique({
            actor: this.actor,
            caracteristique: dataset.carac
        });
    }

    _onJetCaracAvecTrait(event) {
        event.preventDefault();
        const dataset = event.currentTarget.closest(".trait-item").dataset;

        let traitId = dataset.itemId;
        const trait = this.actor.items.get(traitId);
        let reserveDrame = game.WallowWide.drameTracker.getNbPointsReserve();
        
        if(reserveDrame < 1) {
            ui.notifications.warn("Il n'y a plus de points de Drame dans la réserve !");    
            return;
        }

        if(this.actor.system.pointsDrame == 2) {
            ui.notifications.warn("Vous avez déjà utilisé vos deux points de Drame !");    
            return;
        }

        Dice.jetCaracteristique({
            actor: this.actor,
            caracteristique: dataset.carac,
            trait : trait
        });
    }

    _onJetCaracAvecMetier(event) {
        event.preventDefault();
        const dataset = event.currentTarget.dataset;

        let metierId = dataset.itemId;
        const metier = this.actor.items.get(metierId);
        let reserveDrame = game.WallowWide.drameTracker.getNbPointsReserve();
        
        if(reserveDrame < 1 && metier.system.niveau != "maitre") {
            ui.notifications.warn("Il n'y a plus de points de Drame dans la réserve !");    
            return;
        }

        if(this.actor.system.pointsDrame == 2 && metier.system.niveau != "maitre") {
            ui.notifications.warn("Vous avez déjà utilisé vos deux points de Drame !");    
            return;
        }

        Dice.jetCaracteristique({
            actor: this.actor,
            caracteristique: dataset.carac,
            metier : metier,
            afficherDialog: true
        });
    }

    _onJetCaracAvecHobby(event) {
        event.preventDefault();
        const dataset = event.currentTarget.dataset;

        let hobbyId = dataset.itemId;
        const hobby = this.actor.items.get(hobbyId);
        let reserveDrame = game.WallowWide.drameTracker.getNbPointsReserve();
        
        if(reserveDrame < 1 && hobby.system.niveau != "maitre") {
            ui.notifications.warn("Il n'y a plus de points de Drame dans la réserve !");    
            return;
        }

        if(this.actor.system.pointsDrame == 2 && hobby.system.niveau != "maitre") {
            ui.notifications.warn("Vous avez déjà utilisé vos deux points de Drame !");    
            return;
        }

        Dice.jetCaracteristique({
            actor: this.actor,
            caracteristique: dataset.carac,
            hobby : hobby,
            afficherDialog: true
        });
    }
    */
}