export default class  GreckaItem extends Item {

    prepareData() {
        super.prepareData();
        this.system.config = CONFIG.Grecka;
        let data = this.system;
    }
}