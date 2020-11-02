"use strict";

module.exports = function() {

  function Client() {
  }

  Client.prototype.write = function mockWrite(notification, device) {
    return { device };
  };

  Client.prototype.shutdown = function mockShutdown() {};

  return Client;
};
