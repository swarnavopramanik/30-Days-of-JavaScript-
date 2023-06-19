/**
 * @param {number} millis
 */


async function sleep(millis) {
    await new Promise(resolve => setTimeout(resolve, millis));
}


/* async function sleep(millis) {
      let T=Date.now();
      while(Date.now()-T+1<millis)
      {   
            //do nothing
      }
      return Promise.resolve({});
} */


/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
