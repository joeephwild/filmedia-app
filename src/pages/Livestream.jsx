import React from 'react'
import { getHuddleClient, HuddleClientProvider } from '@huddle01/huddle01-client';
import Stream from '../components/Stream';
 
const huddleClient = getHuddleClient('4cc3283d63a85b6b9fcd6bbceb8dbfef39bb281c9e37417b7659f080112f3630');

const Livestream = () => {
    return (
      <HuddleClientProvider client = {huddleClient} >
        <Stream/>
      </HuddleClientProvider>
    );
}

export default Livestream