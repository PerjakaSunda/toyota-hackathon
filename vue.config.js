module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pwa: {
    name: 'My Toyota',
    short_name: 'MyToyota',
    theme_color: '#c80724',
    background_color: '#c80724',
    display: 'standalone',
    orientation: 'portrait',
    Scope: '/',
    start_url: '/',
    splash_pages: null,
    icons: [
      {
        'src': '/icons/icon-144x144.png',
        'sizes': '144x144',
        'type': 'image/png',
      },
      {
        'src': '/icons/icon-72x72.png',
        'sizes': '72x72',
        'type': 'image/png',
      },
      {
        'src': '/icons/icon-192x192.png',
        'sizes': '192x192',
        'type': 'image/png',
      },
      {
        'src': '/icons/icon-512x512.png',
        'sizes': '512x512',
        'type': 'image/png',
      }
    ],
    iconPaths: {
      favicon32: '/icons/icon-32x32.png',
      favicon16: '/icons/icon-16x16.png',
      appleTouchIcon: '/icons/icon-192x192.png',
      msTileImage: '/icons/icon-144x144.png',
    }
  }
}
