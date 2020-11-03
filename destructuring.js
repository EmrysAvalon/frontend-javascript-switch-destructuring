// Opdracht 1: destructure price en refreshRate, en log ze in de console

const product = {
  price: 379,
  refreshRate: 50,
  screenType: 'LED',
}

const { price, refreshRate } = product;
console.log(price, refreshRate);

// Opdracht 2: destructure type en brand en log ze in de console

const productInformation = {
  general: {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
  },
  screenQuality: 'Ultra HD/4K',
  smartTv: true,
}

const { type, brand } = productInformation.general;
console.log(type, brand);

// Opdracht 3: destructure wifi en bluetooth en log ze in de console

const tvOptions = {
  options: {
    colors: [
      'black',
      'silver',
      'gold',
      'sand',
    ],
    connectivity: {
      popular: {
        wifi: true,
        bluetooth: false,
      },
      infrared: false,
    }
  },
};

const { wifi, bluetooth } = tvOptions.options.connectivity.popular;
console.log(wifi, bluetooth);

// opdracht 4: destructure name en adress uit de return value van deze functie en log ze in de console

function getDetails() {
  return {
    name: 'Novi Hogeschool',
    adress: 'Zonnebaan 9, Utrecht',
  }
}

const { name , adress } = getDetails()
console.log(name, adress);

// opdracht 5: destructure beide zinnetjes uit de return value van deze functie en log ze in de console

function getDetailsTwo(name, age) {
  return [`Your name is ${name}`, `You are ${age} years old`];
}

const [nameTwo , age] = getDetailsTwo("Tanja", 22);
console.log(nameTwo, age);