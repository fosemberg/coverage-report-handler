function unused() {
  console.log('unused1');console.log('unused2');
  console.log('unused3');
}

function used() {
  console.log('used1');console.log('used2');
  console.log('used3');
}

used();

function unused2() {
  console.log('unused1');console.log('unused2');
  console.log('unused3');
}

function used2() {
  console.log('used1');console.log('used2');
  console.log('used3');
}

used2();

if (true) {
  console.log('used4');
} else {
  console.log('unused4');
}

if (false) {
  console.log('unused5');
} else {
  console.log('used5');
}

true ? console.log('used6') : console.log('unused6');
false ? console.log('unused7') : console.log('used7');
