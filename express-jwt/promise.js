function testAwait() {
  return new Promise(resolve => {
    setTimeout(function () {
      console.log('testAwait');
      resolve('aaaa');
    }, 1000);
  });
}

async function helloAsync() {
  return await Promise.resolve('dddd');
}

helloAsync().then(data => {
  console.log(data);
});
