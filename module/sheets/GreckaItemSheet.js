export default class GreckaItemSheet extends ItemSheet {
     
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            width: 650,
            height: 370,
            classes: ["grecka", "sheet", "item"],
            //tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description" }]
        });
    }

    get template() {

        console.log(`Grecka | Chargement du template systems/grecka/templates/sheets/items/${this.item.type.toLowerCase()}-sheet.html`);
        return `systems/grecka/templates/sheets/items/${this.item.type.toLowerCase()}-sheet.html`
    }

    getData() {
        const data = super.getData();
        data.config = CONFIG.Grecka;

        return data;
    }
}