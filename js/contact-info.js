const vng_phone = '+917892104993';
const vng_direction = '';
const vng_whatsapp_number = '919164636350';

const vng_whatsapp_msg = {
    enquiry: encodeURIComponent('Hi, I was checking your website and I would like to know more about the Gymnastics Training Program.'),
    enquiry_adult: encodeURIComponent('Hi, I was checking your website and I would like to know more about the Adult Gymnastics Training Program.'),
    enquiry_recreational: encodeURIComponent('Hi, I was checking your website and I would like to know more about the Recreational Gymnastics Training Program.'),
    enquiry_precompetitive: encodeURIComponent('Hi, I was checking your website and I would like to know more about the Precompetitive Gymnastics Training Program.'),
    enquiry_competitive: encodeURIComponent('Hi, I was checking your website and I would like to know more about the Competitive Gymnastics Training Program.'),
    enquiry_toddlers: encodeURIComponent('Hi, I was checking your website and I would like to know more about the Toddlers Gymnastics Training Program.'),
    enquiry_adhd: encodeURIComponent('Hi, I was checking your website and I would like to know more about the ADHD Gymnastics Training Program.')
};

document.getElementById('callUsBtn').setAttribute('href', `tel:${vng_phone}`);
document.getElementById('whatsappBtn').setAttribute('href', `https://wa.me/${vng_whatsapp_number}/?text=${vng_whatsapp_msg}`);