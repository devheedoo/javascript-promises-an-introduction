// example-03.js
// import wrapper from './wrapper';

async function testMyPromiseSequence(
  asyncThing1: () => Promise<string>,
  asyncThing2: () => Promise<string>,
  asyncRecovery1: () => void,
  asyncRecovery2: () => void,
) {
  // const {error: async1Error} = await wrapper(asyncThing1());
  // if (async1Error) return asyncRecovery1();
  // const {error: async2Error} = await wrapper(asyncThing2());
  // if (async2Error) return asyncRecovery2();
  try {
    try {
      await asyncThing1();
    } catch (e) {
      asyncRecovery1();
    }
    return asyncThing2();
  } catch (e) {
    return asyncRecovery2();
  }
}

export default testMyPromiseSequence;

// testMyPromiseSequence(getSuccess, getSuccess, asyncRecovery1, asyncRecovery2);
// testMyPromiseSequence(getSuccess, getFail, asyncRecovery1, asyncRecovery2);
// testMyPromiseSequence(getFail, getSuccess, asyncRecovery1, asyncRecovery2);
// testMyPromiseSequence(getFail, getFail, asyncRecovery1, asyncRecovery2);