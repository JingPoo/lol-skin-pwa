if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/lol-skin-pwa/sw.js', { scope: '/lol-skin-pwa/' })})}