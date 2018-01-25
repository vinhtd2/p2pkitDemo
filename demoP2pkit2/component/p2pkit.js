import p2pkit from 'react-native-p2pkit';

export const p2pkitCallback = {

  onException: function(exceptionMessage) {
    console.log(exceptionMessage.message)
  },

  onEnabled: function() {
    console.log('p2pkit is enabled')
    p2pkit.enableProximityRanging()
    p2pkit.startDiscovery('', p2pkit.HIGH_PERFORMANCE) //base64 encoded Data (bytes)
  },

  onDisabled: function() {
    console.log('p2pkit is disabled')
  },

  // Refer to platform specific API for error codes
  onError: function(errorObject) {
    console.log('p2pkit failed to enable on platform ' + errorObject.platform + ' with error code ' + errorObject.errorCode)
  },

  onDiscoveryStateChanged: function(discoveryStateObject) {
    console.log('discovery state updated on platform ' + discoveryStateObject.platform + ' with error code ' + discoveryStateObject.state)
  },

  onPeerDiscovered: function(peer) {
    console.log('peer discovered ' + peer.peerID)
  },

  onPeerLost: function(peer) {
    console.log('peer lost ' + peer.peerID)
  },

  onPeerUpdatedDiscoveryInfo: function(peer) {
    console.log('discovery info updated for peer ' + peer.peerID + ' info ' + peer.discoveryInfo)
  },

  onProximityStrengthChanged: function(peer) {
    console.log('proximity strength changed for peer ' + peer.peerID + ' proximity strength ' + peer.proximityStrength)
  },

  onGetMyPeerId: function(reply) {
    console.log(reply.myPeerId)
  },

  onGetDiscoveryPowerMode: function(reply) {
    console.log(reply.discoveryPowerMode)
  }
}

