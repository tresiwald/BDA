...
const searchIndex = index.searchIndex.toJSON();

const searchIndexBuffer = lz4.compress(msgpack.encode(searchIndex));
...
const freqIndexBuffer = lz4.compress(msgpack.encode(index.freqIndex));

const buffer = msgpack.encode(
{[
    body: searchIndexBuffer,
    body: freqIndexBuffer
]});
...