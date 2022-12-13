import React, { useEffect } from 'react'

const Careers = () => {
  useEffect(() => {
    var d=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if(d.querySelector('script[src="'+w+'"]'))v();else{var s=d.createElement("script");s.src=w,s.onload=v,s.onerror=v,d.body.appendChild(s);}
  }, [])
  return (
    <div>
    <iframe data-tally-src="https://tally.so/embed/nPR8J0" loading="lazy" width="100%" height="2356" frameBorder="0" marginHeight="0" marginWidth="0" title="Write for us"></iframe>
    </div>
  )
}

export default Careers