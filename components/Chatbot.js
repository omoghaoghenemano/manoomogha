import React,{useEffect} from 'react'
import kommunicate from '@kommunicate/kommunicate-chatbot-plugin'
import ReactWhatsapp from 'react-whatsapp';
export default function Chatbot() {
    /* useEffect(() => {
        (function(d, m){
            var kommunicateSettings = 
                {"appId":"2e60df6d9a7d1a73e2574abf6c7f09819","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
      
    }, [])
     */
  return (
    <div><ReactWhatsapp number="1-212-736-5000" message="Hello World!!!" /></div>
  )
}
