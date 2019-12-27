// example-03.js
import wrapper from './wrapper';

// async function testMyPromiseSequence(
//   asyncThing1: () => Promise<string>,
//   asyncThing2: () => Promise<string>,
//   asyncRecovery1: () => void,
//   asyncRecovery2: () => void,
// ): Promise<void> {
//   try {
//     try {
//       await asyncThing1();
//     } catch (e) {
//       asyncRecovery1();
//     }
//     await asyncThing2();
//   } catch (e) {
//     return asyncRecovery2();
//   }
// }

type PromiseParameterType = {
  asyncThing1: () => Promise<string>;
  asyncThing2: () => Promise<string>;
  asyncRecovery1: () => void;
  asyncRecovery2: () => void;
}

const testMyPromiseSequence = async (promiseParameter: PromiseParameterType): Promise<void> => {
  const {asyncThing1, asyncThing2, asyncRecovery1, asyncRecovery2} = promiseParameter;
  try {
    try {
      await asyncThing1();
    } catch (e) {
      asyncRecovery1();
    }
    await asyncThing2();
  } catch (e) {
    return asyncRecovery2();
  }
}

  // const {error: async1Error} = await wrapper(asyncThing1());
  // if (async1Error) return asyncRecovery1();
  // const {error: async2Error} = await wrapper(asyncThing2());
  // if (async2Error) return asyncRecovery2();

function getSuccess(): Promise<string> {
  return new Promise<string>(function(resolve, reject) {
    resolve('success');
  });
}
function getFail(): Promise<string> {
  return new Promise<string>(function(resolve, reject) {
    reject('fail');
  });
}
function asyncRecovery1() { console.log('recovery1'); }
function asyncRecovery2() { console.log('recovery2'); }

// testMyPromiseSequence(getSuccess, getSuccess, asyncRecovery1, asyncRecovery2);
testMyPromiseSequence({asyncThing1: getSuccess, asyncThing2: getFail, asyncRecovery1, asyncRecovery2});
// testMyPromiseSequence(getFail, getSuccess, asyncRecovery1, asyncRecovery2);
// testMyPromiseSequence(getFail, getFail, asyncRecovery1, asyncRecovery2);

export default testMyPromiseSequence;