import transfer from './transfer';

export default {
    install(app) {
        app.component('transfer', transfer)
    }
};
