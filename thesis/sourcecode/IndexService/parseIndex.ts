...
const body = msgpack.decode(msg.body)
const searchIndex = msgpack.decode(lz4.decompress(body[0].body));
const freqIndex = msgpack.decode(lz4.decompress(body[1].body));

index.elasticIndex = elasticlunr.Index.load(elasticIndex)
index.freqIndex = freqIndex
...