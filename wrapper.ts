// wrapper.js
interface WrapperType {
  data: Promise<any> | null;
  error: Promise<any> | null;
}

const wrapper = (promise: Promise<any>): Promise<WrapperType> => { 
  return promise
    .then(data => ({ data, error: null }))
    .catch(error => ({ data: null, error }));
};

export default wrapper;