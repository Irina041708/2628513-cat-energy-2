// Не обязательно указывать эти теги в HTML, генерируйте по мере необходимости для нужных ресурсов:

/* eslint-disable no-unused-vars */
/* отработка карты */
// eslint-disable-next-line camelcase
function add_hint(type, url) {
  if (!type || !url) {
    return;
  }
  const el = document.createElement('link');
  el.setAttribute('rel', type);
  el.setAttribute('href', url);
  document.getElementsByTagName('head')[0].appendChild(el);
}
// eslint-disable-next-line no-undef
add_hind('prefetch', 'http://ya.ru');


// На этом сайте я использую prefetch для подготовке к загрузке файла, который подсвечивает код, если такой блок находится на странице. Dns-prefetch для ускорения загрузки яндекс метрики. И скрипт, для ускорения переходов между страницами

document.addEventListener('mousemove', (e) => {
  if (!e.target.href ||
        // eslint-disable-next-line eqeqeq
        e.target.href.indexOf(location.host) == -1 ||
        e.target.hintAdded) {
    return;
  }
  // функция описана выше
  add_hint('prerender', e.target.href);
  e.target.hintAdded = true;
});
