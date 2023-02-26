import { useEffect } from 'react';

const SecretHook = (title) => {
    useEffect(()=>{
           
        document.title = `${title} - Travel`

    },[title])
};

export default SecretHook;