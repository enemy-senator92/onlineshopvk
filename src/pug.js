const requireAll = r => r.keys().forEach(r);

// подключение pug-шаблонов
requireAll(require.context('./pug/', false, /\.pug$/));
