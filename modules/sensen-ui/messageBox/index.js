import { createApp } from 'vue';
import MessageBoxComponent from './MessageBox.vue';

export const fields = ['confirm', 'prompt']
const MessageBox = (options) => {
    const messageBoxApp = createApp(MessageBoxComponent, options)
    return new Promise((resolve, reject) => {
        showMessageBox(messageBoxApp, { resolve, reject })
    })
}
fields.forEach(field => {
    MessageBox[field] = options => {
        options.field = field
        return messageBox(options)
    }
});
const showMessageBox = (app, { resolve, reject }) => {
    const oFrag = document.createDocumentFragment()
    const vm = app.mount(oFrag)
    document.body.appendChild(oFrag)
    vm.setVisible(true)
}
export default MessageBox
