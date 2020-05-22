import {IToasterParams} from './models/toaster';
import {IToastParams, ToasterTypes} from './models/toast';

// General Toaster class
export default class Toaster {
    isInstanceExists: boolean;
    toastCounter: number;
    maxToasts: number;
    lifeTime: number;
    toasterContainer: HTMLElement;
    toastersWrapper: HTMLElement;
    readonly toastsArray: Array<Object> = [];

    // Default properties
    readonly defaultMaxToasts: number = 5;
    readonly defaultLifeTime: number = 5000;

    constructor(params: IToasterParams) {
        if (this.isInstanceExists) {
            return this;
        }
        // Initialization
        this.isInstanceExists = true;
        this.maxToasts = params.maxToasts || this.defaultMaxToasts;
        this.lifeTime = params.lifeTime || this.defaultLifeTime;
        this.toastCounter = 0;

        // some DOM manipulations poluchaetsa
            // Make Main container
        this.toasterContainer = document.createElement('div');
        this.toasterContainer.classList.add('toaster');
            // Make Wrapper for toasts
        this.toastersWrapper = document.createElement('div');
        this.toastersWrapper.classList.add('toaster-wrapper');
            // Append toaster wrapper into toaster container
        this.toasterContainer.appendChild(this.toastersWrapper);
            // Append toaster container with toaster wrapper into body
        document.body.append(this.toasterContainer);
    }

    showToast(params: IToastParams) {
        // Create instance of Toast class
        const toast = new Toast({
            type: params.type,
            text: params.text,
        });
        // Push toast instance in toastArray
        if (this.toastCounter < this.maxToasts) {
            this.toastsArray.push(toast);
            this.toastCounter ++;

            this.renderToasts();
        } else {
            this.toastsArray.splice(0, 1);
            this.toastCounter --;
            this.toastsArray.push(toast);
            this.renderToasts();
        }
        // Remove first toast in timeout
        setTimeout(() => {
            this.toastsArray.splice(0, 1);
            this.renderToasts();
        }, this.lifeTime);
    }

    renderToasts() {
        this.toastersWrapper.innerHTML = this.toastsArray.map(toast => this.makeHtmlToast(toast)).join('');
    }

    makeHtmlToast(toast: any) {
        const getToastClass = (toastType: string) => {
            switch (toastType.toLowerCase()) {
                case ToasterTypes.DEFAULT:
                    return 'toaster-toast toast_default';
                case ToasterTypes.WARNING:
                    return 'toaster-toast toast_warning';
                case ToasterTypes.DANGER:
                    return 'toaster-toast toast_danger';
                default:
                    throw new Error(`Expected one of these toast types = "${ToasterTypes.DEFAULT}", "${ToasterTypes.WARNING}", "${ToasterTypes.DANGER}".`);
            }
        };
        return `
            <div class="${getToastClass(toast.type)}">${toast.text}</div>
        `;
    }
}

// Toast class
class Toast {
    type: string;
    text: string;

    constructor(params: IToastParams) {
        this.type = params.type;
        this.text = params.text;
    }
}