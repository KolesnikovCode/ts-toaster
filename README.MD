# TS-Toaster
![Example](https://psv4.userapi.com/c856424/u2351807/docs/d10/81b481ac051f/toaster-example.gif?extra=rnQVSGBkaMLNQK4SUWhaFsQwgDLYzqiSnm6U2GKMWT39TQRg0iHCbI3Fq2-WQUTis8WePyuCdU0DQfjEszQ01I_AEP6ZCTty3_tBh2Ll5RGSWXgulUW5KiXa4Yt9mOOLAI48RA2iTaa4WnJscnHTDg "Example")

### Run project

```bash
npm i && npm run dev
```

### Basic usage

```js
// Create instance of Toaster
const appToaster = new Toaster({
    maxToasts: 4, // Maximum toasts (default 5)
    lifeTime: 4000 // Life time for one toast in ms (default 5000)
});

// Call method 'showToast' with two required params
appToaster.showToast({
    type: 'default', // Toast can be of three types: 'default' || 'danger' || 'warning'
    text: 'Test default toast'
});
```
