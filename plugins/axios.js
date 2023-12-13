export default ({ $axios, store }, inject) => {
  const commonAxios = $axios.create({})
  commonAxios.defaults.headers.common['Content-Type'] = 'application/json'

  const authAxios = $axios.create({})
  authAxios.defaults.headers.common['Content-Type'] = 'application/json'
  // authAxios.interceptors.request.use((config) => {
  //   config.headers['Authorization'] = store.getters.ci
  //   return config
  // })

  const callAxios = (obj) => {
    const res = {}
    res.method = obj.method
    res.url = obj.url
    if (obj.params) {
      if (obj.method === 'POST' || obj.method === 'PUT' || obj.method === 'DELETE') {
        res.data = obj.params
      } else {
        res.params = obj.params
      }
    }

    // return store.getters.isLogin ? authAxios(res) : commonAxios(res)
    return commonAxios(res)
  }

  // GET
  inject('getAxios', (obj) => {
    return new Promise((resolve, reject) => {
      obj.method = 'GET'
      callAxios(obj).then((res) => { resolve(res.data) }).catch((err) => { reject(err) })
    })
  })

  // POST
  inject('postAxios', (obj) => {
    return new Promise((resolve, reject) => {
      obj.method = 'POST'
      callAxios(obj).then((res) => { resolve(res.data) }).catch((err) => { reject(err) })
    })
  })

  // PUT
  inject('putAxios', (obj) => {
    return new Promise((resolve, reject) => {
      obj.method = 'PUT'
      callAxios(obj).then((res) => { resolve(res.data) }).catch((err) => { reject(err) })
    })
  })

  // DELETE
  inject('deleteAxios', (obj) => {
    return new Promise((resolve, reject) => {
      obj.method = 'DELETE'
      callAxios(obj).then((res) => { resolve(res.data) }).catch((err) => { reject(err) })
    })
  })
}