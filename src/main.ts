import Toaster from './Toaster';
import './scss/index.scss';

const appToaster = new Toaster({
    maxToasts: 5,
    lifeTime: 5000
});

appToaster.showToast({
    type: 'default',
    text: 'Test default toast'
});

setTimeout(() => {
    appToaster.showToast({
        type: 'warning',
        text: 'Warning Toast text Lorem ipsum dolor sit amet, ' +
            'consectetur adipisicing elit.' +
            ' Atque aut dignissimos est eveniet, explicabo harum' +
            ' itaque minus molestias necessitatibus nobis,' +
            ' rem soluta voluptatem voluptates!' +
            ' A architecto illum quaerat quis similique?'
    });
}, 1000);

setTimeout(() => {
    appToaster.showToast({
        type: 'danger',
        text: 'Danger Toast text'
    });
}, 2000);

setTimeout(() => {
    appToaster.showToast({
        type: 'Warning',
        text: 'Warning Toast text 2'
    });
}, 3000);

setTimeout(() => {
    appToaster.showToast({
        type: 'danger',
        text: 'Danger Toast text 3'
    });
}, 4000);
