import React from 'react'
import CyberConnect, {
  Env
} from '@cyberlab/cyberconnect-v2';

const cyberConnect = new CyberConnect({
  namespace: 'CyberConnect',
  env: Env.Production,
  provider: provider,
  signingMessageEntity: 'CyberConnect' || your entity,
});
const follow() = () => {
  cyberConnect.follow(handle);
}
const Videos = () => {
  return (
    <div>Videos
      <button onClick={follow}>follow</button>
    </div>
  )
}

export default Videos