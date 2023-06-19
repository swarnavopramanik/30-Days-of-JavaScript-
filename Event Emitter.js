/*  Approach 1 */

class EventEmitter {
  constructor() {
    this.subscriptions = {};
  }

  subscribe(event, cb) {
    if (!(event in this.subscriptions)) {
      this.subscriptions[event] = [];
    }

    const callbackList = this.subscriptions[event];
    callbackList.push(cb);

    return {
      unsubscribe: () => {
        const index = callbackList.indexOf(cb);
        if (index !== -1) {
          callbackList.splice(index, 1);
        }
      }
    };
  }

  emit(event, args = []) {
    if (!(event in this.subscriptions)) {
      return [];
    }

    const callbackList = this.subscriptions[event];
    const results = [];

    for (const cb of callbackList) {
      results.push(cb(...args));
    }

    return results;
  }
}


/*  Approach 2 */


/* class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(event, cb) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }

    const listeners = this.events.get(event);
    listeners.push(cb);

    return {
      unsubscribe: () => {
        const index = listeners.indexOf(cb);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      }
    };
  }

  emit(event, args = []) {
    if (!this.events.has(event)) {
      return [];
    }

    const listeners = this.events.get(event);
    const results = [];

    for (const listener of listeners) {
      results.push(listener(...args));
    }

    return results;
  }
}

 */

 
 
 
