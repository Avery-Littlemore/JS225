function makeBank() {
  let accounts = [];
  
  function makeAccount(number) {
    let balance = 0;
    let transactions = [];

    return {
      deposit(amount) {
        balance += amount;
        transactions.push({type: "deposit", amount: amount});
        return amount;
      },

      withdraw(amount) {
        if (amount > balance) {
          amount = balance;
        }

        transactions.push({type: "withdraw", amount: amount});
        balance -= amount;
        return amount;
      },

      balance() {
        return balance;
      },

      number() {
        return number;
      },

      transactions() {
        return transactions;
      },
    };
  }

  return {
    
    openAccount() {
      let number = accounts.length + 101;
      let account = makeAccount(number);
      accounts.push(account);
      return account;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}

// console.log(account.balance);
// // 0
// console.log(account.deposit(12));
// // 12
// console.log(account.balance);
// // 12
// console.log(account.deposit(10));
// // 10
// console.log(account.balance);
// // 22

// account.balance = 81;

// console.log(account.balance);
// // 81
// console.log(account.withdraw(91));
// // 81
// console.log(account.balance);
// // 0

// console.log(account.transactions);
// console.log(account.transactions[0]);

// let account = makeAccount();
// console.log(account.deposit(15));
// // 15
// console.log(account.balance);
// // 15
// let otherAccount = makeAccount();
// console.log(otherAccount.balance);
// // 0

// let bank = makeBank();
// console.log(bank.accounts);
// // []

// let bank = makeBank();
// let account = bank.openAccount();
// console.log(account.number);
// // 101
// console.log(bank.accounts);
// // [{...}]
// console.log(bank.accounts[0]);
// // {
// //  number: 101,
// //  balance: 0,
// //  transactions: [],
// //  deposit: [Function: deposit],
// //  withdraw: [Function: withdraw]
// // }
// let secondAccount = bank.openAccount();
// console.log(secondAccount.number);
// // 102


// let bank = makeBank();
// let source = bank.openAccount();
// console.log(source.deposit(10));
// // 10
// let destination = bank.openAccount();
// console.log(bank.transfer(source, destination, 7));
// // 7
// console.log(source.balance());
// // 3
// console.log(destination.balance);
// // 7

let bank = makeBank();
console.log(bank.accounts);
// undefined