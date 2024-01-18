import transfer from './transfer/transfer'

const components = {
    transfer
}

export default {
    install(app) {
        for (let comp in components) {
            app.component(comp, components[comp])
        }
    }
};