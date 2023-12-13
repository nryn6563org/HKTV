export const state = () => ({
  // 로그인 상태 및 회원 아이디 정보
  member: {
    login: false,
    userId: undefined
  }
})

export const getters = {
  /**
   * [로그인 여부 확인]
   * store 로그인 상태만 판단.
   * 실제 로그인 상태는 서버와의 통신 필요.
   */
  isLogin: (state) => {
    return state.member.login
  }
}

export const mutations = {
  /**
   * [회원 로그인 정보 설정]
   * 서버와의 통신 후 최신 로그인 상태 설정
   */
  setMember: (state, payLoad) => {
    state.member = payLoad
  }
}

export const actions = {
  nuxtServerInit ({ commit }) {
    const login = true // this.$cookies.get('THINK')
    const userId = 'ianabba' // this.$cookies.get('userId')
    if (!login || !userId) {
      return
    }
    commit('setMember', {
      login,
      userId
    })
    console.log('nuxtServerInit...!')
  },
  nuxtClientInit ({ commit }, context) {
    console.log('nuxtClientInit...!')
  },
}
