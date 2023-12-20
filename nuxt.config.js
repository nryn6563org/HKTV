const config = {
  ssr: true, // true: universal mode, false: spa mode
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "stockwin-thinkpool",
    htmlAttrs: {
      lang: "ko",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=360px,user-scalable=no" },
      { hid: "description", name: "description", content: "한경TV" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/tailwind.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // { src: '~/plugins/nuxtClientInit' },
    { src: "~/plugins/axios" },
    { src: "~/plugins/number", mode: "client" },
    { src: "~/plugins/eventBus", mode: "client" },
    { src: "~/plugins/nuxtClientInit", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios", "cookie-universal-nuxt", "@nuxtjs/moment"],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseUrl: "https://api.thinkpool.com",
    retry: {
      retries: 1, // 최대 재전송 횟수 1회
      shouldResetTimeout: true, // 재전송 간 타임아웃 리셋
      retryDelay: (retry) => {
        return retry * 100; // 재전송 횟수 * 0.1초만큼 재전송 시작 시간을 지연
      },
      retryCondition: (err) => err.response.status === 429, // 서버 혼잡이 일어났을 경우에만 재전송
    },
  },

  router: {
    mode: "history",
    // middleware: ['auth/authSync'],
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ x: 0, y: savedPosition.y });
          }, 200);
        });
      } else {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({ x: 0, y: 0 });
          }, 200);
        });
      }
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  server: {
    host: "0.0.0.0",
    port: 3005,
  },
};

// if (process.env.NODE_ENV === 'development') {
//   const sslCertificate = require('./.sslCertificate')
//   config.server = sslCertificate
// }

export default config