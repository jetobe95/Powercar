export default  function(number, index, total_sec) {
    return [
      ['justo ahora', 'en un rato'],
      ['Hace %s seg', 'en %s seg'],
      ['Hace 1 minuto', 'en 1 minuto'],
      ['Hace %s minutos', 'en %s minutos'],
      ['Hace 1 hora', 'en 1 hora'],
      ['Hace %s h', 'en %s h'],
      ['Hace 1 día', 'en 1 día'],
      ['Hace %s días', 'en %s días'],
      ['Hace 1 semana', 'en 1 semana'],
      ['Hace %s semanas', 'en %s semanas'],
      ['Hace 1 mes', 'en 1 mes'],
      ['Hace %s meses', 'en %s meses'],
      ['Hace 1 año', 'en 1 año'],
      ['Hace %s años', 'en %s años']
    ][index];
  };