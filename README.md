# UGC user action tracking demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server
Run `npm install` to install all dependencied of this sample.

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Configration
You may change the default settings in
`src/environments/environment.ts`

Valid accessKey, secretKey, and campaignId are required.
Also remember to change to the same campaignId in the javascript snippet of root index.html.
You can change the api address in proxy.conf.json after `"target": `.

## Place to find examples of api call
* action: 'campaign_page_enter'
> src/app/modules/browse/image-page/image-page.component.ts `line 32-35`
```javascript
(window as any).ugc_client.send({
    action: 'campaign_page_enter',
    reqid: this.reqId
});
```

* action: 'ugc_image_click', 'product_click', 'add_to_cart', 'product_click', and 'add_to_wishlist'
> src/app/modules/browse/image-card/image-card.component.ts `line 35-91`
```javascript
(window as any).ugc_client.send({
    action: 'ugc_image_click',
    reqid: this.reqId,
    ugc_image_id: this.imageObject.id
});
...
(window as any).ugc_client.send({
    action: 'product_click',
    reqid: this.reqId,
    ugc_image_id: this.imageObject.id,
    im_name: product.im_name
});
...
(window as any).ugc_client.send({
    action: 'purchase',
    reqid: this.reqId,
    ugc_image_id: this.imageObject.id,
    im_name: product.im_name
});
...
(window as any).ugc_client.send({
    action: 'add_to_cart',
    reqid: this.reqId,
    ugc_image_id: this.imageObject.id,
    im_name: product.im_name
});
(window as any).ugc_client.send({
    action: 'add_to_wishlist',
    reqid: this.reqId,
    ugc_image_id: this.imageObject.id,
    im_name: product.im_name
});
```

* action: 'detail_page_enter'
> src/app/modules/browse/product-detail/product-detail.component.ts `line 34-38`

```javascript
(window as any).ugc_client.send({
    action: 'detail_page_enter',
    reqid: this.reqId,
    im_name: imName
});
```