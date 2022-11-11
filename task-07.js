// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом и историей транзакций.


//  Типов транзацкий всего два.
//   Можно положить либо снять деньги со счета.

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {

    return this.transactions.push({

      id: this.transactions.length,
      type: type,
      amount: amount
    })

  },
  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {

    this.balance += amount,
    this.createTransaction(amount, Transaction.DEPOSIT)
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {

    if (this.balance < amount){
      alert('Не достаточно средств на счету!')
    } else {
      this.createTransaction(amount, Transaction.WITHDRAW)
      this.balance -= amount
      console.log('-',amount,' осаток на счету ', this.balance)
    }
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    alert(this.balance);
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
   if(this.transactions[id]){
    console.log(this.transactions[id])
   } else {
    console.log('Неверный ID')
   }
  
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    for (let key of this.transactions) {
      if (key.type == type) {
        console.log(`операция ${key.type} на сумму - ${key.amount}`)
      }
    }
  }
};

account.deposit(1300);
account.withdraw(100);
account.withdraw(200);
account.withdraw(150);
console.table(account.transactions);
console.log(account.balance);
account.getTransactionDetails(1);
account.getTransactionTotal(Transaction.WITHDRAW);
account.getTransactionTotal(Transaction.DEPOSIT);
account.getBalance();