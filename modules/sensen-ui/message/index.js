import types from './type';
import MessageComponent from './Message';
import { createApp } from 'vue';
const Message = (options) => {
    const messageApp = createApp(MessageComponent, options)
    showMessage(messageApp, options.duration)
}
Object.values(types).forEach(type => {
    Message[type] = (options) => {
        options.type = type
        return Message(options)
    }
})
function showMessage(app, duration) {
    const oFrag = document.createDocumentFragment()
    app.mount(oFrag)
    document.body.appendChild(oFrag)
    hideMessage(app, duration)
}
function hideMessage(app, duration) {
    setTimeout(() => app.unmount(), duration || 3000)
}
export { types }
export default Message