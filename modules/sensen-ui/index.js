import MyTable from './myTable/MyTable'
import Stars from './Stars/Stars'

//注意引用和使用时组件的大小写
const components = {
    MyTable,
    Stars
}

export default {
    install(app) {
        for (let comp in components) {
            app.component(comp, components[comp])
        }
    }
};