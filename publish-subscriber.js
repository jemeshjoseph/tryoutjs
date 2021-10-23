/**
 * Publish Subscriber Pattern Example
 */

function PublishSubscriber() {
  let subscriberList = [];

  function subscribe(fn) {
    subscriberList.push(fn);
  }

  function publish(data) {
    subscriberList.forEach((subscriber) => subscriber(data));
  }

  return {
    subscribe,
    publish,
  };
}

let pubSubObj = PublishSubscriber();

pubSubObj.subscribe((data) => {
  console.log('First: ', data);
});

pubSubObj.subscribe((data) => {
  console.log('Second: ', data);
});

pubSubObj.publish('I am data.');
