export default {
  createSetter: (type, key) => state => ({
    type: type,
    key: key,
    payload: state
  })
}