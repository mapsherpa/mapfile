var url = require('url');

module.exports = MapFile;

function MapFile(uri, callback) {
  if (typeof uri === 'string') {
    uri = url.parse(uri, true);
  } else if (typeof uri.query === 'string') {
    uri.query = qs.parse(uri.query);
  }

  this._isWriting = 0;
  this.contentType = 'image/jpeg';

  if (uri.hash) {
    this.contentType = uri.hash.split('#')[1];
  }

  callback(null, this);
}

MapFile.registerProtocols = function(tilelive) {
  tilelive.protocols['mapfile:'] = MapFile;
};

MapFile.prototype.getTile = function(z, x, y, callback) {
  if (typeof callback !== 'function') throw new Error('Callback needed');
  callback(new Error('MapFile::getTile not implemented'));
}

MapFile.prototype.getGrid = function(z, x, y, callback) {
  if (typeof callback !== 'function') throw new Error('Callback needed');
  callback(new Error('MapFile::getTile not implemented'));
}

MapFile.prototype.getInfo = function(callback) {
  callback(new Error('MapFile::getTile not implemented'));
}

MapFile.prototype.startWriting = function(callback) {
  if (typeof callback !== 'function') throw new Error('Callback needed');
  this._isWriting ++;
  callback(null);
}

MapFile.prototype.stopWriting = function(callback) {
  if (typeof callback !== 'function') throw new Error('Callback needed');
  this._isWriting --;
  callback(null);
}

MapFile.prototype.putInfo = function(info, callback) {
  if (typeof callback !== 'function') throw new Error('Callback needed');
  callback(null);
}

MapFile.prototype.putTile = function(z, x, y, tile, callback) {
  if (typeof callback !== 'function') throw new Error('Callback needed');
  callback(new Error('MapFile::putTile not implemented'));
}

MapFile.prototype.putGrid = function(z, x, y, grid, callback) {
  if (typeof callback !== 'function') throw new Error('Callback needed');
  callback(null);
}

MapFile.prototype.close = function(callback) {
  callback(null);
}

MapFile.prototype.getMimeType =  function(data) {
  return this.contentType;
};

