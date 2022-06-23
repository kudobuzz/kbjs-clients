# Quick start

Install the Kudobuzz Client library

```bash
npm i @kudobuzz/kbclient --save-exact
```

## Initialize

To start using the client wrapper intitalize with a valid Token or client id [Access your token here](https://dashboard.kudobuzz.com/settings)

```javascript
import makeClient from '@kudobuzz/kbclient'
const client = makeClient({
    accessToken: 'Your access token here',
    clientId: 'Your client ID here'
})
```

## Usage

```javascript
const customer = await businessClient.customers.createOrUpdate()
```
