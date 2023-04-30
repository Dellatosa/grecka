export default class GreckaActor extends Actor {

    prepareData() {
        super.prepareData();
        let data = this.system;

        /*----------------------------
        ---- Calcul des capacités ----
        ----------------------------*/

        if(data.physique.value < 0) {data.physique.value = 0; }
        if(data.physique.max < 0) {data.physique.max = 0; }
        if(data.physique.value > data.physique.max) {data.physique.value = data.physique.max; }

        if(data.mental.value < 0) {data.mental.value = 0; }
        if(data.mental.max < 0) {data.mental.max = 0; }
        if(data.mental.value > data.mental.max) {data.mental.value = data.mental.max; }

        if(data.conscience.value < 0) {data.conscience.value = 0; }
        if(data.conscience.max < 0) {data.conscience.max = 0; }
        if(data.conscience.value > data.conscience.max) {data.conscience.value = data.conscience.max; }

        /*-------------------------
        ---- Calcul des points ----
        -------------------------*/

        /* Santé */
        if(data.sante.value < 0) {data.sante.value = 0; }
        if(data.sante.max < 0) {data.sante.max = 0; }
        if(data.sante.value > data.sante.max) {data.sante.value = data.sante.max; }

        /* Héros */
        if(data.heros.value < 0) {data.heros.value = 0; }
        if(data.heros.max < 0) {data.heros.max = 0; }
        if(data.heros.value > data.heros.max) {data.heros.value = data.heros.max; }

        /* Preuve */
        if(data.preuve.value < 0) {data.preuve.value = 0; }
        if(data.preuve.max < 0) {data.preuve.max = 0; }
        if(data.preuve.value > data.preuve.max) {data.preuve.value = data.preuve.max; }

        /* Equipe */
        if(data.equipe.value < 0) {data.equipe.value = 0; }
        if(data.equipe.max < 0) {data.equipe.max = 0; }
        if(data.equipe.value > data.equipe.max) {data.equipe.value = data.equipe.max; }

        /* Drame */
        if(data.drame.value < 0) {data.drame.value = 0; }
        if(data.drame.max < 0) {data.drame.max = 0; }
        if(data.drame.value > data.drame.max) {data.drame.value = data.drame.max; }
    }

    /*
    reinitPointDrame() {
        this.update({"system.pointsDrame": 0});
    }

    utiliserPointDrame() {
        this.update({"system.pointsDrame": this.system.pointsDrame + 1});
    }

    restituerPointDrame() {
        this.update({"system.pointsDrame": this.system.pointsDrame - 1});
    }
    */
}

/*
Hooks.on("updateActor", (actor, data, diff, id) => onUpdateActor());

function onUpdateActor() {
    game.Grecka.drameTracker.refresh();
}
*/