// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'skydiving'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение используя Object.keys() и for...of

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mod = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
  for (let value of Object.keys(user)){
    console.log(`${value}: ${user[value]}`);
  };
