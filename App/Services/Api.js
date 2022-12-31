
/* ------------- A library to wrap and simplify api calls ------------- */
import apisauce from 'apisauce';

/* ------------- constructor  ------------- */
const create = (baseURL = 'https://newsapi.org/v2/') => {

  /* ------------- STEP 1  ------------- */


  /**
   * Create and configure an apisauce-based api object. 
   * Base URL is read from the constructor
   * Here are some default headers
   * 10 second timeout...
  **/
  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  });


  /* -------------  STEP 2 ------------- */


  /**
   * Define some functions that call the api.
   * I generally don't like wrapping the output at this level because
   * sometimes specific actions need to be take on `403` or `401`, etc.
   **/

  const getNews = () => api.get('everything?q=bitcoin&apiKey=842a9a1d226c40939231a5e9eb65a21e');


  /* -------------  STEP 3 ------------- */

  /**
   * Return back a collection of functions that we would consider our interface.
   * Notice we're not returning back the `api` created in step 1?  That's
   * because it is scoped privately.  This is one way to create truly
   * private scoped goodies in JavaScript.
   **/

  return {
    /* --- A list of the API functions from step 2 --- */
    getNews
  };
};

/* --- let's return back our create method as the default. --- */
export default {
  create
};
