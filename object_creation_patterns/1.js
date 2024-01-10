function createInvoice(services) {
  services = services || {};
  let invoice = {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],
  };

  invoice.total = function() {
    return invoice.phone + invoice.internet;
  };

  invoice.addPayment = function(payment) {
    invoice.payments.push(payment);
  };

  invoice.addPayments = function(payments) {
    let i;

    for(i = 0; i < payments.length; i += 1) {
      invoice.addPayment(payments[i]);
    }
  };

  invoice.paymentTotal = function() {
    let totalPaid = 0;
    let i;

    for (i = 0; i < invoice.payments.length; i += 1) {
      totalPaid += invoice.payments[i].total();
    }

    return totalPaid;
  };

  invoice.amountDue = function() {
    return this.total() - this.paymentTotal();
  };

  return invoice;
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({
  internet: 6500,
}));

invoices.push(createInvoice({
  phone: 2000,
}));

invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices));             // => 31000

function createPayment(services = {}) {
  let payment = {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
  };

  payment.total = function() {
    return this.amount || (this.phone + this.internet);
  };

  return payment;
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0