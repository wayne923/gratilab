import { useEffect } from 'react';

declare global {
   interface Window {
     hbspt: any;
   }
 }

export default function HubSpotForm() {
    useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://js.hsforms.net/forms/v2.js';
      document.body.appendChild(script);
 
      script.addEventListener('load', () => {
         if(window.hbspt) {
            window.hbspt.forms.create({
               region: 'na1',
               portalId: '44996716',
               formId: 'fd1de6c1-7470-4fca-8ca8-d71746f2c745',
               target: '#hubspotForm'
            });
         }
      });
    }, []);
 
    return (
      <div id="hubspotForm"></div>
    );
}

export { HubSpotForm }