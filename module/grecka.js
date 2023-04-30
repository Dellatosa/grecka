import { Grecka } from "./config.js";
//import { registerSystemSettings } from "./settings.js";
import GreckaActorSheet from "./sheets/GreckaActorSheet.js";
import GreckaActor from "./GreckaActor.js";
import GreckaItemSheet from "./sheets/GreckaItemSheet.js";
import GreckaItem from "./GreckaItem.js";
//import * as Chat from "./chat.js";
//import { DrameTracker } from "./drame-tracker.js";

/*
async function preloadHandlebarsTemplates() {
    const templatePaths = [
        "systems/grecka/templates/partials/actors/bloc-infos-personnage.hbs",
        "systems/grecka/templates/partials/actors/bloc-caracteristiques-personnage.hbs",
        "systems/grecka/templates/partials/actors/bloc-caracSecondaires-personnage.hbs"
    ];

    return loadTemplates(templatePaths);
}
*/

Hooks.once("init", function(){
    console.log("Grecka | Initialisation du système Grecka JDR");

    game.Grecka = {
        GreckaActor,
        GreckaItem//,
        //DrameTracker
    };

    /*
    game.Grecka.drameTracker = new DrameTracker({
        popOut: false,
        minimizable: false,
        resizable: false
    });
    */

    //CONFIG.debug.hooks = true;

    CONFIG.Grecka = Grecka;
    CONFIG.Actor.documentClass = GreckaActor;
    CONFIG.Item.documentClass = GreckaItem;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("grecka", GreckaActorSheet, {makeDefault: true});

    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("grecka", GreckaItemSheet, {makeDefault: true});

    //registerSystemSettings();
    
    //preloadHandlebarsTemplates();

    /*
    Handlebars.registerHelper("configVal", function(liste, val) {
        return Grecka[liste][val];
    });
    */
});

//Hooks.on("renderChatLog", (app, html, data) => Chat.addChatListeners(html));

/*
Hooks.once("ready", async function() {
    // Tracker Handling
    // Identify if User already has ageTrackerPos flag set
    const userTrackerFlag = await game.user.getFlag("grecka", "drameTrackerPos");
    const useTracker = true;
    if (!userTrackerFlag) await game.user.setFlag("grecka", "drameTrackerPos", WallowWide.drameTrackerPos);
    if (useTracker) game.WallowWide.drameTracker.refresh();
});
*/