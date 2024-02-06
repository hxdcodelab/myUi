import types from './type';
const Message = (options) => {
}
Object.values(types).forEach(type => {
    Message[type] = (options) => {
        options.type = type
        return Message(options)
    }
})

export { types }
export default Message