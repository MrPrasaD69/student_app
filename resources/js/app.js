import './bootstrap';

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


//show the realtime UI Updates
document.addEventListener("DOMContentLoaded",()=>{
    console.log('Echo ready?', !!window.Echo);

    if (!window.Echo) {
        console.error('Echo is NOT available');
        return;
    }
    const ch = window.Echo.channel('admin.dashboard');

    ch.listen('.profile.updated', (e) => {
        const el = document.getElementById('realtime_div');
        if (!el) return;
    
        el.innerHTML = 'Profile Updated!';
    });

});