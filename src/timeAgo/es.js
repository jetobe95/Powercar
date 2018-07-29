export default  function(number, index, total_sec) {
    return [
      ['justo ahora', 'en un rato'],
      [' %s seg', 'en %s seg'],
      [' 1 min', 'en 1 min'],
      [' %s min', 'en %s min'],
      [' 1 h', 'en 1 h'],
      [' %s h', 'en %s h'],
      [' 1 d', 'en 1 d'],
      [' %s d', 'en %s d'],
      [' 1 sem', 'en 1 sem'],
      [' %s sem', 'en %s sem'],
      [' 1 mes', 'en 1 mes'],
      [' %s meses', 'en %s meses'],
      [' 1 año', 'en 1 año'],
      [' %s años', 'en %s años']
    ][index];
  };