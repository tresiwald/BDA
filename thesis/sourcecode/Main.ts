...
let node = this.nodeModel.getNodeElementById(GlobalConfig.
getInstance().getRequestedNodeId());
if (node) {
    return node
} else {
    return ElementCache.getNode(GlobalConfig.getInstance().
    getRequestedNodeId())
}
...