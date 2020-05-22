# TS-Toaster
![Example](https://psv4.userapi.com/c856424/u2351807/docs/d10/f8d0225af238/toaster-example.gif?extra=R-_8WvH2TmvqlcQs7IU0bERPM8ophjNUkSHQGBB8Nhi-JZM8mxAXXd9zSjejDpm1JmuHm9zBzdXTg0nOskpHy2zYkugYCLvTc4wNJhBqdB8vYFWZGdJeVWg26jJmfPhjTI5J994loQ8fI6Mq_U8uap0 "Example")

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