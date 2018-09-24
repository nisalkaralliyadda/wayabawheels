webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\r\n  padding-top: 15px;\r\n  background-color: whitesmoke;\r\n  min-height: calc(100vh - 52px);\r\n  overflow: hidden;\r\n  padding-bottom: 15px;\r\n}\r\n\r\n.back {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/assets/images/spare.jpg")) + ");\r\n  background-position: center;\r\n  background-size: cover;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<section class=\"main\" [ngClass]=\"{'back':isHome}\">\r\n  <div class=\"container\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n  <ng2-toasty position=\"top-right\"></ng2-toasty>\r\n</section>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(productsService, router) {
        var _this = this;
        this.productsService = productsService;
        this.router = router;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (event) {
            _this.isHome = event.url == '/';
        });
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__products_products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__products_product_card_product_card_component__ = __webpack_require__("../../../../../src/app/products/product-card/product-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__cart_cartmini_cartmini_component__ = __webpack_require__("../../../../../src/app/cart/cartmini/cartmini.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__products_product_product_component__ = __webpack_require__("../../../../../src/app/products/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_number_input_number_input_component__ = __webpack_require__("../../../../../src/app/shared/number-input/number-input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_truncate_pipe__ = __webpack_require__("../../../../../src/app/pipes/truncate.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__products_filters_filters_component__ = __webpack_require__("../../../../../src/app/products/filters/filters.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_search_pipe__ = __webpack_require__("../../../../../src/app/pipes/search.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__products_product_list_item_product_list_item_component__ = __webpack_require__("../../../../../src/app/products/product-list-item/product-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_toasty_notifications_service__ = __webpack_require__("../../../../../src/app/services/toasty-notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__registered_vehicles_registered_vehicles_component__ = __webpack_require__("../../../../../src/app/registered-vehicles/registered-vehicles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__un_registered_vehicles_un_registered_vehicles_component__ = __webpack_require__("../../../../../src/app/un-registered-vehicles/un-registered-vehicles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__body_parts_body_parts_component__ = __webpack_require__("../../../../../src/app/body-parts/body-parts.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */] },
    { path: 'registered', component: __WEBPACK_IMPORTED_MODULE_25__registered_vehicles_registered_vehicles_component__["a" /* RegisteredVehiclesComponent */] },
    { path: 'unregistered', component: __WEBPACK_IMPORTED_MODULE_26__un_registered_vehicles_un_registered_vehicles_component__["a" /* UnRegisteredVehiclesComponent */] },
    { path: 'bodyparts', component: __WEBPACK_IMPORTED_MODULE_27__body_parts_body_parts_component__["a" /* BodyPartsComponent */] },
    { path: 'products/:id', component: __WEBPACK_IMPORTED_MODULE_13__products_product_product_component__["a" /* ProductComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_23__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_24__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_15__cart_cart_component__["a" /* CartComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__products_product_card_product_card_component__["a" /* ProductCardComponent */],
                __WEBPACK_IMPORTED_MODULE_10__cart_cartmini_cartmini_component__["a" /* CartminiComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_23__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_13__products_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_15__cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_number_input_number_input_component__["a" /* NumberInputComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_truncate_pipe__["a" /* TruncatePipe */],
                __WEBPACK_IMPORTED_MODULE_18__products_filters_filters_component__["a" /* FiltersComponent */],
                __WEBPACK_IMPORTED_MODULE_19__pipes_filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_search_pipe__["a" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_21__products_product_list_item_product_list_item_component__["a" /* ProductListItemComponent */],
                __WEBPACK_IMPORTED_MODULE_24__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_25__registered_vehicles_registered_vehicles_component__["a" /* RegisteredVehiclesComponent */],
                __WEBPACK_IMPORTED_MODULE_26__un_registered_vehicles_un_registered_vehicles_component__["a" /* UnRegisteredVehiclesComponent */],
                __WEBPACK_IMPORTED_MODULE_27__body_parts_body_parts_component__["a" /* BodyPartsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["d" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5_ng2_toasty__["a" /* ToastyModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__services_products_service__["a" /* ProductsService */],
                __WEBPACK_IMPORTED_MODULE_22__services_toasty_notifications_service__["a" /* ToastyNotificationsService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/body-parts/body-parts.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".products-wrapper {\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  .tr {\r\n    display: table-row;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  .table.is-striped tbody .tr:not(.is-selected):nth-child(even) {\r\n    background-color: #fafafa;\r\n  }\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  h2 {\r\n    font-size: 32px;\r\n    color: crimson;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body-parts/body-parts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-head\">\r\n  Body Parts\r\n</div>\r\n<div class=\"columns products-wrapper\">\r\n  <aside class=\"aside column is-one-quarter\">\r\n    <app-filters></app-filters>\r\n  </aside>\r\n  <div class=\"column is-three-quarter\">\r\n    <div *ngIf=\"isLoading\" class=\"loaderOverlay\">\r\n      <div class=\"loader\">Loading...</div>\r\n    </div>\r\n\r\n\r\n\r\n   <!--  <ng-template [ngIf]=\"((products | filter:filterBy) | search: searchText).length > 0\"> -->\r\n    <ng-template [ngIf]=\"parts.length > 0\">\r\n      <!-- grid layout -->\r\n      <div class=\"columns is-multiline\" *ngIf=\"layoutMode\">\r\n        <app-product-card class=\"column is-half-tablet is-one-third-fullhd\" *ngFor=\"let product of parts\"\r\n          [product]=\"product\"></app-product-card>\r\n      </div>\r\n      <!-- columns -->\r\n\r\n      <!-- list layout -->\r\n      <table *ngIf=\"!layoutMode\" class=\"table is-fullwidth is-striped\">\r\n        <thead>\r\n          <tr>\r\n            <th colspan=\"1\"></th>\r\n            <th colspan=\"1\">Name / Desc.</th>\r\n            <th colspan=\"1\">Price</th>\r\n            <th colspan=\"1\">View / To Cart</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <!-- <app-product-list-item class=\"tr\" *ngFor=\"let product of (parts | filter:filterBy) | search: searchText\"\r\n            [product]=\"product\"></app-product-list-item> -->\r\n          <app-product-list-item class=\"tr\" *ngFor=\"let product of parts\"\r\n            [product]=\"product\"></app-product-list-item>\r\n        </tbody>\r\n      </table>\r\n    </ng-template>\r\n\r\n\r\n  <!--   <h2 *ngIf=\"((parts | filter:filterBy) | search: searchText).length <= 0 && !isLoading\">No results for your\r\n      search, try resetting your filters</h2> -->\r\n    <h2 *ngIf=\"parts?.length <= 0 && !isLoading\">No results for your\r\n      search, try resetting your filters</h2>\r\n\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/body-parts/body-parts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyPartsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BodyPartsComponent = /** @class */ (function () {
    function BodyPartsComponent(prodService, http) {
        this.prodService = prodService;
        this.http = http;
        this.parts = [];
        this.isLoading = true;
    }
    BodyPartsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('api/v1/parts/all').subscribe(function (p) {
            _this.isLoading = false;
            if (p) {
                _this.parts = p.map(function (t) {
                    t.price = t.price ? t.price : 0;
                    t.qty = 1;
                    return t;
                });
            }
        });
        /* this.prodService.fetchProductsFromDB().subscribe(
          products => {
            this.prodService.setAllProducts(products);
            this.products = this.prodService.getAllProducts();
          },
          err => console.log(err),
          () => this.isLoading = false
        );
     */
        this.filterBy = this.prodService.getFilter();
        this.searchText = this.prodService.getSearchFilter();
        this.layoutMode = this.prodService.getLayout();
        this.prodService.filterTypeEmitter.subscribe(function (filterValue) {
            _this.filterBy = filterValue;
        });
        this.prodService.searchEmitter.subscribe(function (searchValue) {
            _this.searchText = searchValue;
        });
        this.prodService.layoutModeEmitter.subscribe(function (layoutVal) {
            _this.layoutMode = layoutVal;
        });
    };
    BodyPartsComponent.prototype.ngOnDestroy = function () {
        this.products = [];
    };
    BodyPartsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body-parts',
            template: __webpack_require__("../../../../../src/app/body-parts/body-parts.component.html"),
            styles: [__webpack_require__("../../../../../src/app/body-parts/body-parts.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], BodyPartsComponent);
    return BodyPartsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 44px;\r\n  margin-bottom: 50px;\r\n  padding-top: 50px;\r\n}\r\n\r\n.cart-img {\r\n  width: 200px;\r\n}\r\n\r\n.cart-desc {\r\n  width: 25%;\r\n}\r\n\r\n.cart-desc p {\r\n  font-size: 13px;\r\n}\r\n\r\n.icon {\r\n  cursor: pointer;\r\n}\r\n\r\n.icon:hover i {\r\n  color: #222;\r\n}\r\n\r\ntr td {\r\n  position: relative;\r\n}\r\n\r\ntr td div {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  position: absolute;\r\n  width:  100%;\r\n  height: 100%;\r\n  left: 0;\r\n  top:  0;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n}\r\n\r\n.panel-heading,\r\n.panel-block {\r\n  background-color: #fff;\r\n}\r\n\r\n.panel-footer {\r\n  border-radius: 0 0 4px 4px;\r\n}\r\n\r\n.has-text-centered {\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.emptyCartBtn {\r\n  margin-left: 15px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"has-text-centered\">Your Cart</h1>\r\n\r\n<div class=\"columns\">\r\n  <ng-container *ngIf=\"cartProducts.length\">\r\n    <div class=\"column is-three-thirds\">\r\n      <table class=\"table is-fullwidth\">\r\n        <thead>\r\n          <tr>\r\n            <th colspan=\"5\">Items total: {{ cartProducts.length }}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let product of cartProducts; let i = index\">\r\n            <td class=\"cart-img\">\r\n              <img src=\"assets/images/car4.jpg\" />\r\n            </td>\r\n            <td class=\"cart-desc\">\r\n              <h2>\r\n                <strong>{{ product.brand }}</strong>\r\n              </h2>\r\n              <p>{{ product.model | truncate:200 }}</p>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                <app-number-input\r\n                  [val]=\"product.qty\"\r\n                  (valAdd)=\"onValAdd(product)\"\r\n                  (valSub)=\"onValSub(product)\"\r\n                  [minDisabled]=\"product.qty === 1\"\r\n                ></app-number-input>\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                 {{ product.price | currency }}\r\n              </div>\r\n            </td>\r\n            <td>\r\n              <div>\r\n                <span class=\"icon has-text-danger\" (click)=\"removeCartProduct(i)\">\r\n                  <i class=\"fas fa-trash-alt\"></i>\r\n                </span>\r\n              </div>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"column is-one-third\">\r\n      <div class=\"panel\">\r\n        <p class=\"panel-heading has-text-centered\">\r\n          <b>Total price: {{ cartTotal | currency }}</b>\r\n        </p>\r\n        <div class=\"panel-block has-text-centered\">\r\n          <a class=\"button is-warning\" style=\"cursor: pointer;\" routerLink=\"/bodyparts\">\r\n            <span class=\"icon\">\r\n              <i class=\"fas fa-cart-plus\"></i>\r\n            </span>&nbsp;\r\n            Add more items\r\n          </a>\r\n\r\n          <a class=\"button is-danger emptyCartBtn\" style=\"cursor: pointer;\" (click)=\"emptyCart()\">\r\n            <span class=\"icon\">\r\n              <i class=\"fas fa-trash-alt\"></i>\r\n            </span>&nbsp; Empty Cart\r\n          </a>\r\n        </div>\r\n        <div class=\"panel-block has-text-centered\">\r\n          <a class=\"button is-success\" style=\"cursor: pointer;\" (click)=\"onCheckout()\">\r\n            <span class=\"icon\">\r\n              <i class=\"fas fa-check\"></i>\r\n            </span>&nbsp;\r\n            Checkout\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"column\" *ngIf=\"!cartProducts.length\">\r\n    <h2 class=\"has-text-centered\">You Cart is Empty</h2>\r\n\r\n    <p class=\"has-text-centered\">Buy some <a class=\"has-text-danger\" routerLink=\"/bodyparts\" style=\"cursor: pointer\">products</a></p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartComponent = /** @class */ (function () {
    function CartComponent(prodService) {
        this.prodService = prodService;
    }
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartProducts = this.prodService.getCartAddedProducts();
        this.cartAdditionSubscription = this.prodService.cartAdditionEmitter.subscribe(function (products) {
            _this.cartProducts = products;
        });
        this.cartTotal = this.prodService.getCartTotal();
        this.cartTotalSubscription = this.prodService.cartTotalEmitter.subscribe(function (cTotal) {
            _this.cartTotal = cTotal;
        });
    };
    CartComponent.prototype.onValAdd = function (product) {
        this.prodService.cartProductManipulate(product, true);
    };
    CartComponent.prototype.onValSub = function (product) {
        this.prodService.cartProductManipulate(product);
    };
    CartComponent.prototype.removeCartProduct = function (itemIndex) {
        this.prodService.removeCartSingleItem(itemIndex);
    };
    CartComponent.prototype.emptyCart = function () {
        this.prodService.emptyCart();
    };
    CartComponent.prototype.onCheckout = function () {
        alert(JSON.stringify(this.cartProducts) + '\n\n\n' + 'Total: ' + this.cartTotal);
    };
    CartComponent.prototype.ngOnDestroy = function () {
        this.cartAdditionSubscription.unsubscribe();
        this.cartTotalSubscription.unsubscribe();
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cart/cartmini/cartmini.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mini-cart {\r\n  left: auto;\r\n  right: 0;\r\n  width: 300px;\r\n}\r\n\r\n.mini-cart__empty,\r\n.mini-cart__go-to-cart,\r\n.mini-cart-total {\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.mini-cart-single-trash,\r\n.mini-cart-all-trash {\r\n  cursor: pointer;\r\n}\r\n\r\n.mini-cart-single-trash:hover,\r\n.mini-cart-all-trash:hover {\r\n  color: #222 !important;\r\n}\r\n\r\n.navbar-item img {\r\n  max-height: none;\r\n}\r\n\r\n.media-content p {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n      -ms-flex-pack: justify;\r\n          justify-content: space-between;\r\n  -webkit-box-align: center;\r\n      -ms-flex-align: center;\r\n          align-items: center;\r\n\r\n}\r\n\r\n.navbar-dropdown a.navbar-item {\r\n  padding-right: 15px;\r\n}\r\n\r\n.media {\r\n  width: 100%;\r\n}\r\n\r\n.media .icon {\r\n  float: right;\r\n}\r\n\r\n.navbar-link.is-active {\r\n  color: #000;\r\n}\r\n\r\n.prodName {\r\n  max-width: calc(100% - 70px);\r\n  overflow: hidden;\r\n  color: #222;\r\n}\r\n\r\n.prodName i {\r\n  color: #a1a1a1;\r\n}\r\n\r\n.prodName:hover {\r\n  color: #ffdd57;\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cartmini/cartmini.component.html":
/***/ (function(module, exports) {

module.exports = "  <div class=\"navbar-item has-dropdown is-hoverable\">\r\n    <a class=\"navbar-link\" routerLink=\"/cart\">\r\n      <span class=\"icon\">\r\n        <i class=\"fas fa-shopping-cart\"></i>\r\n      </span>\r\n      Cart &nbsp; <span class=\"tag is-light\">\r\n        {{ cartminiProducts.length }}\r\n      </span>\r\n    </a>\r\n    <div class=\"navbar-dropdown is-boxed mini-cart\">\r\n\r\n\r\n\r\n      <ng-container *ngIf=\"cartminiProducts.length\">\r\n\r\n        <div class=\"navbar-item\" *ngFor=\"let cmProduct of cartminiProducts; let i = index\">\r\n          <div class=\"media\">\r\n            <div class=\"media-left\">\r\n              <figure class=\"image is-48x48\">\r\n                <a href=\"#\">\r\n                  <img src=\"assets/images/car4.jpg\" >\r\n                </a>\r\n              </figure>\r\n            </div>\r\n            <div class=\"media-content\">\r\n              <p class=\"subtitle is-6\">\r\n                <a class=\"prodName\" [routerLink]=\"['/products', cmProduct.id]\">\r\n                  <b>{{ cmProduct.brand }} {{ cmProduct.model }}</b>\r\n                  <br />\r\n                  <small><i>{{ cmProduct.price | currency }}</i></small>\r\n                </a>\r\n\r\n                <span>\r\n                  <span class=\"tag is-dark\">{{ cmProduct.qty }}</span>\r\n                  <span class=\"icon mini-cart-single-trash has-text-danger\" (click)=\"removeCartProduct(i)\">\r\n                    <i class=\"fas fa-trash-alt\"></i>\r\n                  </span>\r\n                </span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <hr class=\"navbar-divider\">\r\n\r\n        <p class=\"navbar-item mini-cart-total\">\r\n          <b>Total: </b>&nbsp; {{ cartminiTotal | currency }} &nbsp; - &nbsp;\r\n\r\n          <span class=\"icon mini-cart-all-trash has-text-danger\" (click)=\"emptyCart()\">\r\n            <i class=\"fas fa-trash-alt\"></i>\r\n          </span>\r\n        </p>\r\n\r\n        <p class=\"navbar-item mini-cart__go-to-cart\" routerLink=\"/cart\">\r\n          <a class=\"button is-success\">\r\n            <span class=\"icon\">\r\n              <i class=\"fas fa-shopping-cart\"></i>\r\n            </span>&nbsp; Go to Cart\r\n          </a>\r\n        </p>\r\n      </ng-container>\r\n\r\n\r\n      <p class=\"navbar-item mini-cart__empty\" *ngIf=\"!cartminiProducts.length\">No items in cart</p>\r\n\r\n\r\n    </div>\r\n  </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/cart/cartmini/cartmini.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartminiComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CartminiComponent = /** @class */ (function () {
    function CartminiComponent(prodService) {
        this.prodService = prodService;
    }
    CartminiComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartminiProducts = this.prodService.getCartAddedProducts();
        this.cartAdditionSubscription = this.prodService.cartAdditionEmitter.subscribe(function (products) {
            _this.cartminiProducts = products;
        });
        this.cartminiTotal = this.prodService.getCartTotal();
        this.cartTotalSubscription = this.prodService.cartTotalEmitter.subscribe(function (cTotal) {
            _this.cartminiTotal = cTotal;
        });
    };
    CartminiComponent.prototype.removeCartProduct = function (itemIndex) {
        this.prodService.removeCartSingleItem(itemIndex);
    };
    CartminiComponent.prototype.emptyCart = function () {
        this.prodService.emptyCart();
    };
    CartminiComponent.prototype.ngOnDestroy = function () {
        this.cartAdditionSubscription.unsubscribe();
        this.cartTotalSubscription.unsubscribe();
    };
    CartminiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cartmini',
            template: __webpack_require__("../../../../../src/app/cart/cartmini/cartmini.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cart/cartmini/cartmini.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]])
    ], CartminiComponent);
    return CartminiComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\r\n  font-size: 24px;\r\n}\r\n\r\n.navbar {\r\n  -webkit-box-shadow: 1px 1px 3px rgba(0,0,0, .27);\r\n          box-shadow: 1px 1px 3px rgba(0,0,0, .27);\r\n}\r\n\r\n.logo b {\r\n  font-weight: 600;\r\n  color: #ffdd57;\r\n}\r\n\r\na.navbar-item:hover,\r\na.navbar-item.is-active,\r\na.navbar-link:hover,\r\na.navbar-link.is-active,\r\na.navbar-item.is-active:not(:hover),\r\na.navbar-link.is-active:not(:hover) {\r\n  background-color: whitesmoke;\r\n  color: #333;\r\n}\r\n\r\n.github {\r\n  background-color: #333 !important;\r\n  color: whitesmoke !important;\r\n}\r\n\r\n.github:hover {\r\n  opacity: 0.9;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar is-fixed-top\">\r\n  <div class=\"container\">\r\n      <div class=\"navbar-brand\">\r\n        <a class=\"navbar-item logo\" routerLink=\"/\">\r\n          Wayaba<b>WHEELS</b>\r\n        </a>\r\n        <div class=\"navbar-burger burger\" [ngClass]=\"{'is-active': menuToggle}\" data-target=\"navbarExampleTransparentExample\" (click)=\"menuToggle = !menuToggle\">\r\n          <span></span>\r\n          <span></span>\r\n          <span></span>\r\n        </div>\r\n      </div>\r\n\r\n      <div id=\"navbarExampleTransparentExample\" class=\"navbar-menu\" [ngClass]=\"{'is-active': menuToggle}\">\r\n        <div class=\"navbar-start\">\r\n          <a\r\n            class=\"navbar-item\"\r\n            routerLink=\"/\"\r\n            routerLinkActive=\"is-active\"\r\n            [routerLinkActiveOptions]=\"{exact: true}\">\r\n            <span class=\"icon\">\r\n              <i class=\"fas fa-home\"></i>\r\n            </span>\r\n            Home\r\n          </a>\r\n          <a class=\"navbar-item\" routerLink=\"/registered\" routerLinkActive=\"is-active\">\r\n            <span class=\"icon\">\r\n              <i class=\"fas fa-car-alt\"></i>\r\n            </span>\r\n            Registered\r\n          </a>\r\n          <a class=\"navbar-item\" routerLink=\"/unregistered\" routerLinkActive=\"is-active\">\r\n            <span class=\"icon\">\r\n              <i class=\"fas fa-bus\"></i>\r\n            </span>\r\n            Unregistered\r\n          </a>\r\n          <a class=\"navbar-item\" routerLink=\"/bodyparts\" routerLinkActive=\"is-active\">\r\n            <span class=\"icon\">\r\n              <i class=\"fas fa-wrench\"></i>\r\n            </span>\r\n            Body Parts\r\n          </a>\r\n          \r\n         \r\n        </div>\r\n\r\n        <app-cartmini class=\"navbar-end mini-cart-wrap\"></app-cartmini>\r\n        <a class=\"navbar-item\" *ngIf=\"!isLoggedIn\"  routerLink=\"/login\" routerLinkActive=\"is-active\">\r\n          <span class=\"icon\">\r\n            <i class=\"fas fa-user-lock\"></i>\r\n          </span>\r\n          Login\r\n        </a>\r\n        <a class=\"navbar-item\" *ngIf=\"isLoggedIn\"  routerLinkActive=\"is-active\">\r\n          <span class=\"icon\">\r\n            <i class=\"fas fa-user-lock\"></i>\r\n          </span>\r\n          Logout\r\n        </a>\r\n        <a class=\"navbar-item\" routerLink=\"/signup\" routerLinkActive=\"is-active\">\r\n          <span class=\"icon\">\r\n            <i class=\"fas fa-user-plus\"></i>\r\n          </span>\r\n        Signup\r\n        </a>\r\n      </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(ps) {
        this.ps = ps;
        this.menuToggle = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ps.loggedInCustomer.subscribe(function (f) {
            debugger;
            _this.isLoggedIn = !!f;
        });
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\r\n  font-size: 72px;\r\n  margin-top: 100px;\r\n  color: #FFC107;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\r\n    <h1 class=\"has-text-centered\">Welcome to Wayaba Wheels</h1>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http, Response } from '@angular/http';
var HomeComponent = /** @class */ (function () {
    // constructor(private http: Http) {}
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card--contact-form {\r\n  max-width: 700px;\r\n  margin-left:  auto;\r\n  margin-right: auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--contact-form\">\r\n  <header class=\"card-header\">\r\n    <p class=\"card-header-title\">\r\n      Login\r\n    </p>\r\n    <span class=\"card-header-icon has-text-grey-light\">\r\n      <span class=\"icon\">\r\n        <i class=\"fas fa-envelope-open\" aria-hidden=\"true\"></i>\r\n      </span>\r\n    </span>\r\n  </header>\r\n  <div class=\"card-content\">\r\n    <div class=\"content\">\r\n      <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n        <div class=\"field\">\r\n          <label class=\"label\">User Name</label>\r\n          <div class=\"control\">\r\n            <input\r\n              class=\"input\"\r\n              [ngClass]=\"{'is-danger': !name.valid && name.touched}\"\r\n              type=\"text\"\r\n              placeholder=\"User Name\"\r\n              [(ngModel)]=\"model.username\"\r\n              name=\"name\"\r\n              required\r\n              #name=\"ngModel\" />\r\n          </div>\r\n          <p *ngIf=\"!name.valid && name.touched\" class=\"help is-danger\">Required field</p>\r\n        </div>\r\n\r\n        <div class=\"field\">\r\n          <label class=\"label\">Password</label>\r\n          <div class=\"control\">\r\n            <input\r\n              class=\"input\"\r\n              type=\"password\"\r\n              placeholder=\"password\"\r\n              [(ngModel)]=\"model.password\"\r\n              name=\"password\"\r\n              required\r\n              #password=\"ngModel\" />\r\n          </div>\r\n          <p *ngIf=\"!password.valid && password.touched\" class=\"help is-danger\">Required field</p>\r\n        </div>\r\n\r\n        <div class=\"field\">\r\n          <div class=\"control\">\r\n            <button\r\n              class=\"button is-dark is-fullwidth\"\r\n              type=\"submit\"\r\n              [disabled]=\"!f.valid\">Login</button>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products_product_model__ = __webpack_require__("../../../../../src/app/products/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_toasty_notifications_service__ = __webpack_require__("../../../../../src/app/services/toasty-notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, s, router, ps) {
        this.http = http;
        this.s = s;
        this.router = router;
        this.ps = ps;
        // to show data after submit
        this.submitted = false;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__products_product_model__["b" /* LoginParam */]();
    }
    LoginComponent.prototype.onSubmit = function (form) {
        var _this = this;
        this.http.post('/api/v1/customer/login', this.model).subscribe(function (r) {
            _this.s.success('Successfully logged in');
            _this.ps.setCustomer(r);
            _this.router.navigate(['/']);
        }, function (e) { return _this.s.error('Invalid Username or Password'); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('f'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], LoginComponent.prototype, "contactForm", void 0);
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__services_toasty_notifications_service__["a" /* ToastyNotificationsService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_6__services_products_service__["a" /* ProductsService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (products, type) {
        if (type === 'all') {
            return products;
        }
        else {
            return products.filter(function (product) {
                return product.type === type;
            });
        }
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/search.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (products, searchText) {
        if (!products) {
            return [];
        }
        if (!searchText) {
            return products;
        }
        searchText = searchText.toLowerCase();
        return products.filter(function (it) {
            // searches based on name || description
            return it.name.toLowerCase().includes(searchText) || it.description.toLowerCase().includes(searchText);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "../../../../../src/app/pipes/truncate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TruncatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TruncatePipe = /** @class */ (function () {
    function TruncatePipe() {
    }
    TruncatePipe.prototype.transform = function (value, limit) {
        return value.length > limit ? value.substr(0, limit) + '...' : value;
    };
    TruncatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'truncate'
        })
    ], TruncatePipe);
    return TruncatePipe;
}());



/***/ }),

/***/ "../../../../../src/app/products/filters/filters.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a.panel-block.is-active {\r\n  background-color: whitesmoke;\r\n}\r\n\r\n\r\n@media (min-width: 769px) {\r\n  .card--filters { position: fixed; }\r\n}\r\n\r\n\r\n@media (min-width: 769px) and (max-width: 1023px) {\r\n  .card--filters { width: 174.25px; }\r\n}\r\n\r\n\r\n@media (min-width: 1024px) and (max-width: 1215px) {\r\n  .card--filters { width: 222px; }\r\n}\r\n\r\n\r\n@media (min-width: 1216px) and (max-width: 1407px) {\r\n  .card--filters { width: 270px; }\r\n}\r\n\r\n\r\n@media (min-width: 1408px) {\r\n  .card--filters { width: 318px; }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/filters/filters.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--filters\">\r\n  <header class=\"card-header\">\r\n    <p class=\"card-header-title\">\r\n      Filters\r\n    </p>\r\n\r\n    <span class=\"card--filters__layout-option\">\r\n      <a\r\n        class=\"card-header-icon\"\r\n        [ngClass]=\"{'has-text-dark': layoutMode, 'has-text-grey-light': !layoutMode}\" (click)=\"setLayout(true)\">\r\n        <span class=\"icon\">\r\n          <i class=\"fas fa-th\" aria-hidden=\"true \"></i>\r\n        </span>\r\n      </a>\r\n    </span>\r\n\r\n    <span class=\"card--filters__layout-option\">\r\n      <a\r\n        class=\"card-header-icon\"\r\n        [ngClass]=\"{'has-text-dark': !layoutMode, 'has-text-grey-light': layoutMode}\" (click)=\"setLayout(false)\">\r\n        <span class=\"icon\">\r\n          <i class=\"fas fa-list\" aria-hidden=\"true \"></i>\r\n        </span>\r\n      </a>\r\n    </span>\r\n\r\n    <a\r\n      class=\"card-header-icon\"\r\n      [ngClass]=\"{'has-text-dark': filterToggle, 'has-text-grey-light': !filterToggle}\"\r\n      (click)=\"filterToggle = !filterToggle\"\r\n    >\r\n      <span class=\"icon\">\r\n        <i class=\"fas fa-filter\" aria-hidden=\"true \"></i>\r\n      </span>\r\n    </a>\r\n  </header>\r\n  <div class=\"card-content\" [ngClass]=\"{'dn': !filterToggle}\">\r\n    <div class=\"content has-text-centered\">\r\n      <nav class=\"panel\">\r\n        <div class=\"panel-block\">\r\n          <p class=\"control has-icons-left\">\r\n            <input class=\"input is-small\" type=\"text\" placeholder=\"search\" (keyup)=\"searchFilter()\" #searchInput />\r\n            <span class=\"icon is-small is-left\">\r\n              <i class=\"fas fa-search\"></i>\r\n            </span>\r\n          </p>\r\n        </div>\r\n        <a class=\"panel-block\" [ngClass]=\"{'is-active': filterBy==='all'}\" (click)=\"setFilter('all')\">\r\n          All\r\n        </a>\r\n        <a class=\"panel-block\" [class.is-active]=\"filterBy==='brand'\" (click)=\"setFilter('brand')\">\r\n          Brand\r\n        </a>\r\n        <a class=\"panel-block\" [class.is-active]=\"filterBy==='model'\" (click)=\"setFilter('model')\">\r\n          Model\r\n        </a>\r\n        <a class=\"panel-block\" [class.is-active]=\"filterBy==='price'\" (click)=\"setFilter('price')\">\r\n          Price\r\n        </a>\r\n        <div class=\"panel-block\">\r\n          <button class=\"button is-outlined is-fullwidth\" (click)=\"resetFilters()\">\r\n            reset all filters\r\n          </button>\r\n        </div>\r\n\r\n      \r\n      </nav>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/products/filters/filters.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FiltersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FiltersComponent = /** @class */ (function () {
    function FiltersComponent(prodService) {
        this.prodService = prodService;
    }
    FiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setFilterToggle();
        this.filterBy = this.prodService.getFilter();
        this.prodService.filterTypeEmitter.subscribe(function (filverValue) {
            _this.filterBy = filverValue;
        });
        this.layoutMode = this.prodService.getLayout();
        this.prodService.layoutModeEmitter.subscribe(function (layoutVal) {
            _this.layoutMode = layoutVal;
        });
    };
    FiltersComponent.prototype.setLayout = function (layoutVal) {
        this.prodService.setLayout(layoutVal);
    };
    FiltersComponent.prototype.setFilterToggle = function () {
        this.filterToggle = window.outerWidth > 768 ? true : false;
    };
    FiltersComponent.prototype.searchFilter = function () {
        this.prodService.searchFilter(this.searchText.nativeElement.value);
    };
    FiltersComponent.prototype.setFilter = function (filterValue) {
        this.prodService.setFilter(filterValue);
    };
    FiltersComponent.prototype.resetFilters = function () {
        this.prodService.setFilter('all');
        this.searchText.nativeElement.value = '';
        this.prodService.searchFilter('');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('searchInput'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], FiltersComponent.prototype, "searchText", void 0);
    FiltersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-filters',
            template: __webpack_require__("../../../../../src/app/products/filters/filters.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/filters/filters.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/product-card/product-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-header.is-white {\r\n  color: #333;\r\n}\r\n\r\nfigure {\r\n  min-height: 270px;\r\n}\r\n\r\n.card-image {\r\n  padding-top: 13px;\r\n}\r\n\r\nfigure img {\r\n  max-width:  290px;\r\n  max-height: 290px;\r\n  width:  100%;\r\n  height: auto;\r\n  margin: 0 auto;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-card/product-card.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- grid layout -->\r\n<div class=\"card\">\r\n  <header class=\"card-header\">\r\n    <p class=\"card-header-title\">\r\n      {{ product.string }}\r\n    </p>\r\n    <span class=\"card-header-icon has-text-grey-light\">\r\n      <small>{{ product.price | currency }}&nbsp;</small>\r\n    </span>\r\n  </header>\r\n  <div class=\"card-image\">\r\n    <figure class=\"image is-4by3\">\r\n      <img src=\"assets/images/car4.jpg\">\r\n    </figure>\r\n  </div>\r\n  <div class=\"card-content\">\r\n    <div class=\"content has-text-centered\">\r\n       {{ product.model | truncate:60 }}\r\n       {{product.modelNumber}}\r\n    </div>\r\n  </div>\r\n  <footer class=\"card-footer\">\r\n    <a class=\"card-footer-item has-text-dark\" (click)=\"viewProduct()\">\r\n      <span class=\"icon\">\r\n        <i class=\"fas fa-search-plus\"></i>\r\n      </span>\r\n      View\r\n    </a>\r\n    <a class=\"card-footer-item has-text-dark\" [routerLink]=\"['/products', product.id]\">\r\n      <span class=\"icon\">\r\n        <i class=\"fas fa-search-plus\"></i>\r\n      </span>\r\n      Add to Wishlist\r\n    </a>\r\n    <a class=\"card-footer-item has-text-dark\" style=\"cursor: pointer;\" (click)=\"onAddToCart(product)\">\r\n      <span class=\"icon\">\r\n        <i class=\"fas fa-cart-plus\"></i>\r\n      </span>\r\n      Add to Cart\r\n    </a>\r\n  </footer>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/products/product-card/product-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_model__ = __webpack_require__("../../../../../src/app/products/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductCardComponent = /** @class */ (function () {
    function ProductCardComponent(prodService, router) {
        this.prodService = prodService;
        this.router = router;
    }
    ProductCardComponent.prototype.ngOnInit = function () {
    };
    ProductCardComponent.prototype.onAddToCart = function (product) {
        this.prodService.addToCart(product);
    };
    ProductCardComponent.prototype.viewProduct = function () {
        this.prodService.setSelectedProduct(this.product);
        this.router.navigate(['products/1']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__product_model__["c" /* Product */])
    ], ProductCardComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ProductCardComponent.prototype, "layoutMode", void 0);
    ProductCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-card',
            template: __webpack_require__("../../../../../src/app/products/product-card/product-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/product-card/product-card.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]])
    ], ProductCardComponent);
    return ProductCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/product-list-item/product-list-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* list layout */\r\n\r\n.card--list__img {\r\n  width: 150px;\r\n}\r\n\r\n.card--list__ctas {\r\n  width: 130px;\r\n}\r\n\r\n.card--list__ctas div {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n      -ms-flex-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n.card--list__price,\r\n.card--list__ctas {\r\n  padding-top: 35px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product-list-item/product-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- list layout -->\r\n  <td class=\"card--list__img\">\r\n    <img src=\"http://via.placeholder.com/500x500\" />\r\n  </td>\r\n  <td class=\"card--list__name\">\r\n    <h2>\r\n      <strong>{{ product.model }}</strong>\r\n    </h2>\r\n    <p>{{ product.brand | truncate:200 }}</p>\r\n  </td>\r\n  <td class=\"card--list__price\">\r\n    <div>\r\n      {{ product.price | currency }} &nbsp;\r\n    </div>\r\n  </td>\r\n  <td class=\"card--list__ctas\">\r\n    <div class=\"buttons has-addons\">\r\n      <a class=\"button\" [routerLink]=\"['/products', product.id]\">\r\n        <span class=\"icon is-small\">\r\n          <i class=\"fas fa-search-plus\"></i>\r\n        </span>\r\n      </a>\r\n      <a class=\"button\" (click)=\"onAddToCart(product)\">\r\n        <span class=\"icon is-small\">\r\n          <i class=\"fas fa-cart-plus\"></i>\r\n        </span>\r\n      </a>\r\n    </div>\r\n  </td>\r\n"

/***/ }),

/***/ "../../../../../src/app/products/product-list-item/product-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListItemComponent = /** @class */ (function () {
    function ProductListItemComponent(prodService) {
        this.prodService = prodService;
    }
    ProductListItemComponent.prototype.ngOnInit = function () {
    };
    ProductListItemComponent.prototype.onAddToCart = function (product) {
        this.prodService.addToCart(product);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ProductListItemComponent.prototype, "product", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ProductListItemComponent.prototype, "layoutMode", void 0);
    ProductListItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list-item',
            template: __webpack_require__("../../../../../src/app/products/product-list-item/product-list-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/product-list-item/product-list-item.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]])
    ], ProductListItemComponent);
    return ProductListItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/product.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Product; });
/* unused harmony export Part */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Customer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginParam; });
var Product = /** @class */ (function () {
    function Product(type, name, description, imagePath, imagePathSm, price, qty, id) {
        if (qty === void 0) { qty = 1; }
        this.type = type;
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.imagePathSm = imagePathSm;
        this.price = price;
        this.qty = qty;
        this.id = id;
    }
    return Product;
}());

var Part = /** @class */ (function () {
    function Part() {
        this.price = 0;
        this.qty = 1;
    }
    return Part;
}());

var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());

var LoginParam = /** @class */ (function () {
    function LoginParam() {
    }
    return LoginParam;
}());



/***/ }),

/***/ "../../../../../src/app/products/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "figure img {\r\n  max-width: 500px;\r\n  height: auto;\r\n  margin: 0 auto;\r\n  top: 50%;\r\n  -webkit-transform: translateY(-50%);\r\n          transform: translateY(-50%)\r\n}\r\n\r\n\r\n\r\n.similar-items-title {\r\n  font-size: 24px;\r\n  font-weight: 600;\r\n  margin-bottom: 25px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoading\" class=\"loaderOverlay\">\r\n  <div class=\"loader\">Loading...</div>\r\n</div>\r\n\r\n\r\n<div class=\"columns\">\r\n  <div class=\"column is-two-thirds\">\r\n    <div class=\"card\">\r\n      <header class=\"card-header\">\r\n        <p class=\"card-header-title\">\r\n          {{ product?.model }}\r\n        </p>\r\n        <span class=\"card-header-icon\">\r\n          <small>{{ product?.price | currency}}</small>\r\n        </span>\r\n      </header>\r\n      <div class=\"card-image\">\r\n        <figure class=\"image is-4by3\">\r\n          <img src=\"http://via.placeholder.com/500x500\"  />\r\n        </figure>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"column is-one-third\">\r\n    <a class=\"button is-light\" routerLink=\"/bodyparts\">\r\n      <span class=\"icon\">\r\n        <i class=\"fas fa-arrow-left\"></i>\r\n      </span>&nbsp; Back to Products\r\n    </a>\r\n\r\n    <hr>\r\n\r\n    <a class=\"button is-success\" (click)=\"addToCart(product)\">\r\n      <span class=\"icon\">\r\n        <i class=\"fas fa-cart-plus\"></i>\r\n      </span>&nbsp; Add to Cart\r\n    </a>\r\n\r\n    <hr>\r\n\r\n    <div class=\"card-content\">\r\n      <div class=\"content\">\r\n        {{  product?.brand  }}  {{  product?.modelNumber  }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<hr>\r\n\r\n<!-- <h3 class=\"similar-items-title\">You may also be interested in these</h3> -->\r\n<!-- <div class=\"columns is-multiline\">\r\n  <app-product-card\r\n    class=\"column is-one-third-desktop\"\r\n    *ngFor=\"let product of similarProducts\"\r\n    [product]=\"product\"></app-product-card>\r\n</div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/products/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Component, OnInit, DoCheck } from '@angular/core';



var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, prodService) {
        this.route = route;
        this.prodService = prodService;
        this.isLoading = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        /* this.initProductSingleView(); */
        this.product = this.prodService.getSelectedProduct();
    };
    // ngDoCheck() {
    //   this.initProductSingleView();
    // }
    // helper fn to save repeating same code in init and doCheck hooks
    /*  initProductSingleView() {
       this.id = this.route.snapshot.params['id'];
       this.prodService.fetchSingleProductFromDB(this.id).subscribe(
         product => {
           this.product = product;
           // this.getSimilarProducts(this.product.type, this.product.id);
         },
         err => console.error(err),
         () => this.isLoading = false
       );
     }
    */
    ProductComponent.prototype.addToCart = function (product) {
        this.prodService.addToCart(product);
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/products/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/product/product.component.css")]
        })
        // export class ProductComponent implements OnInit, DoCheck {
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_products_service__["a" /* ProductsService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/products/products.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".products-wrapper {\r\n  -webkit-box-align: start;\r\n      -ms-flex-align: start;\r\n          align-items: flex-start;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.tr {\r\n  display: table-row;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.table.is-striped tbody .tr:not(.is-selected):nth-child(even) {\r\n  background-color: #fafafa;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nh2 {\r\n  font-size: 32px;\r\n  color: crimson;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns products-wrapper\">\r\n  <aside class=\"aside column is-one-quarter\">\r\n    <app-filters></app-filters>\r\n  </aside>\r\n  <div class=\"column is-three-quarter\">\r\n    <div *ngIf=\"isLoading\" class=\"loaderOverlay\">\r\n      <div class=\"loader\">Loading...</div>\r\n    </div>\r\n\r\n\r\n\r\n      <ng-template [ngIf]=\"((products | filter:filterBy) | search: searchText).length > 0\">\r\n        <!-- grid layout -->\r\n        <div class=\"columns is-multiline\" *ngIf=\"layoutMode\">\r\n          <app-product-card class=\"column is-half-tablet is-one-third-fullhd\" *ngFor=\"let product of (products | filter:filterBy) | search: searchText\"\r\n            [product]=\"product\"></app-product-card>\r\n        </div>\r\n        <!-- columns -->\r\n\r\n        <!-- list layout -->\r\n        <table *ngIf=\"!layoutMode\" class=\"table is-fullwidth is-striped\">\r\n          <thead>\r\n            <tr>\r\n              <th colspan=\"1\"></th>\r\n              <th colspan=\"1\">Name / Desc.</th>\r\n              <th colspan=\"1\">Price</th>\r\n              <th colspan=\"1\">View / To Cart</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <app-product-list-item class=\"tr\" *ngFor=\"let product of (products | filter:filterBy) | search: searchText\" [product]=\"product\"></app-product-list-item>\r\n          </tbody>\r\n        </table>\r\n      </ng-template>\r\n\r\n\r\n      <h2 *ngIf=\"((products | filter:filterBy) | search: searchText).length <= 0 && !isLoading\">No results for your search, try resetting your filters</h2>\r\n\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(prodService) {
        this.prodService = prodService;
        this.isLoading = true;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prodService.fetchProductsFromDB().subscribe(function (products) {
            _this.prodService.setAllProducts(products);
            _this.products = _this.prodService.getAllProducts();
        }, function (err) { return console.log(err); }, function () { return _this.isLoading = false; });
        this.filterBy = this.prodService.getFilter();
        this.searchText = this.prodService.getSearchFilter();
        this.layoutMode = this.prodService.getLayout();
        this.prodService.filterTypeEmitter.subscribe(function (filterValue) {
            _this.filterBy = filterValue;
        });
        this.prodService.searchEmitter.subscribe(function (searchValue) {
            _this.searchText = searchValue;
        });
        this.prodService.layoutModeEmitter.subscribe(function (layoutVal) {
            _this.layoutMode = layoutVal;
        });
    };
    ProductsComponent.prototype.ngOnDestroy = function () {
        this.products = [];
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-products',
            template: __webpack_require__("../../../../../src/app/products/products.component.html"),
            styles: [__webpack_require__("../../../../../src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registered-vehicles/registered-vehicles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registered-vehicles/registered-vehicles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-head\">\r\n    Registered Vehicles\r\n  </div>\r\n<div class=\"columns products-wrapper\">\r\n    <aside class=\"aside column is-one-quarter\">\r\n      <app-filters></app-filters>\r\n    </aside>\r\n    <div class=\"column is-three-quarter\">\r\n      <div *ngIf=\"isLoading\" class=\"loaderOverlay\">\r\n        <div class=\"loader\">Loading...</div>\r\n      </div>\r\n  \r\n  \r\n  \r\n        <ng-template [ngIf]=\"((products | filter:filterBy) | search: searchText).length > 0\">\r\n          <!-- grid layout -->\r\n          <div class=\"columns is-multiline\" *ngIf=\"layoutMode\">\r\n            <app-product-card class=\"column is-half-tablet is-one-third-fullhd\" *ngFor=\"let product of (products | filter:filterBy) | search: searchText\"\r\n              [product]=\"product\"></app-product-card>\r\n          </div>\r\n          <!-- columns -->\r\n  \r\n          <!-- list layout -->\r\n          <table *ngIf=\"!layoutMode\" class=\"table is-fullwidth is-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th colspan=\"1\"></th>\r\n                <th colspan=\"1\">Name / Desc.</th>\r\n                <th colspan=\"1\">Price</th>\r\n                <th colspan=\"1\">View / To Cart</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <app-product-list-item class=\"tr\" *ngFor=\"let product of (products | filter:filterBy) | search: searchText\" [product]=\"product\"></app-product-list-item>\r\n            </tbody>\r\n          </table>\r\n        </ng-template>\r\n  \r\n  \r\n        <h2 *ngIf=\"((products | filter:filterBy) | search: searchText).length <= 0 && !isLoading\">No results for your search, try resetting your filters</h2>\r\n  \r\n  \r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/registered-vehicles/registered-vehicles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisteredVehiclesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisteredVehiclesComponent = /** @class */ (function () {
    function RegisteredVehiclesComponent(prodService) {
        this.prodService = prodService;
        this.isLoading = true;
    }
    RegisteredVehiclesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prodService.fetchProductsFromDB().subscribe(function (products) {
            _this.prodService.setAllProducts(products);
            _this.products = _this.prodService.getAllProducts();
        }, function (err) { return console.log(err); }, function () { return _this.isLoading = false; });
        this.filterBy = this.prodService.getFilter();
        this.searchText = this.prodService.getSearchFilter();
        this.layoutMode = this.prodService.getLayout();
        this.prodService.filterTypeEmitter.subscribe(function (filterValue) {
            _this.filterBy = filterValue;
        });
        this.prodService.searchEmitter.subscribe(function (searchValue) {
            _this.searchText = searchValue;
        });
        this.prodService.layoutModeEmitter.subscribe(function (layoutVal) {
            _this.layoutMode = layoutVal;
        });
    };
    RegisteredVehiclesComponent.prototype.ngOnDestroy = function () {
        this.products = [];
    };
    RegisteredVehiclesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registered-vehicles',
            template: __webpack_require__("../../../../../src/app/registered-vehicles/registered-vehicles.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registered-vehicles/registered-vehicles.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]])
    ], RegisteredVehiclesComponent);
    return RegisteredVehiclesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/products.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toasty_notifications_service__ = __webpack_require__("../../../../../src/app/services/toasty-notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsService = /** @class */ (function () {
    function ProductsService(router, httpClient, toastyNotifications) {
        this.router = router;
        this.httpClient = httpClient;
        this.toastyNotifications = toastyNotifications;
        this.cartAdditionEmitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */](); // emitted for card and single product, minicart listens to it
        this.cartTotalEmitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */](); // emitted for price total calculation on, addition, substraction, increase or removal
        this.filterTypeEmitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */](); // emittet when filtering through product categories
        this.searchEmitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.layoutModeEmitter = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.loggedInCustomer = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* EventEmitter */]();
        this.cartAddedProducts = [];
        this.cartTotal = 0;
        this.filterBy = '';
        this.search = '';
        this.layoutMode = window.localStorage.getItem('ngShopLayout') === 'list' ? false : true;
        var c = localStorage.getItem('user');
        if (c) {
            this.loggedInCustomer.emit(JSON.parse(c));
        }
        else {
            this.loggedInCustomer.emit(null);
        }
    }
    ProductsService.prototype.setCustomer = function (c) {
        if (c) {
            localStorage.setItem('user', JSON.stringify(c));
        }
        else {
            localStorage.setItem('user', null);
        }
        this.loggedInCustomer.emit(c);
    };
    ProductsService.prototype.setSelectedProduct = function (p) {
        this.selectedProduct = p;
    };
    ProductsService.prototype.getSelectedProduct = function () {
        return this.selectedProduct;
    };
    ProductsService.prototype.fetchProductsFromDB = function () {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiBase + "/products.json")
            .map(function (productSingle) {
            var adjustedFetchedProducts = [];
            for (var key in productSingle) {
                if (productSingle.hasOwnProperty(key)) {
                    var prodToAdd = productSingle[key];
                    prodToAdd.id = key;
                    adjustedFetchedProducts.push(prodToAdd);
                }
            }
            return adjustedFetchedProducts;
        });
    };
    ProductsService.prototype.fetchSingleProductFromDB = function (indexID) {
        var _this = this;
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiBase + "/products/" + indexID + ".json")
            .map(function (singleProduct) {
            if (singleProduct === null) {
                _this.router.navigate(['/products']);
                _this.toastyNotifications.addToast(false, '', false, true);
                throw new Error('Product not found');
            }
            var adjustedProduct = __assign({}, singleProduct, { id: indexID });
            return adjustedProduct;
        });
    };
    ProductsService.prototype.setFilter = function (filterValue) {
        this.filterBy = filterValue;
        this.filterTypeEmitter.emit(this.filterBy);
    };
    ProductsService.prototype.getFilter = function () {
        return this.filterBy;
    };
    ProductsService.prototype.searchFilter = function (searchValue) {
        this.search = searchValue;
        this.searchEmitter.emit(this.search);
    };
    ProductsService.prototype.getSearchFilter = function () {
        return this.search;
    };
    ProductsService.prototype.setAllProducts = function (fetchedProducts) {
        this.allProducts = fetchedProducts;
    };
    ProductsService.prototype.getAllProducts = function () {
        return this.allProducts.slice();
    };
    // get max 3 similar products sorted from high price > low
    ProductsService.prototype.getSimilarProducts = function (prodType, prodId) {
        var SIMILAR_PRODUCTS = this.getAllProducts().sort(function (a, b) { return b.price - a.price; });
        return SIMILAR_PRODUCTS.filter(function (p) {
            return p.id !== prodId && p.type === prodType;
        }).slice(0, 3); // get max 3 items
    };
    ProductsService.prototype.addToCart = function (product) {
        // if item is already in cart ++ its qty, don't readd it
        var added = this.cartAddedProducts.find(function (p) { return p === product; });
        added ? added.qty++ : this.cartAddedProducts.push(product);
        this.cartAdditionEmitter.emit(this.cartAddedProducts);
        this.calculateCartTotal();
        this.cartTotalEmitter.emit(this.cartTotal);
        this.toastyNotifications.addToast(false, product.name, true);
    };
    ProductsService.prototype.getCartAddedProducts = function () {
        return this.cartAddedProducts;
    };
    ProductsService.prototype.calculateCartTotal = function () {
        var _this = this;
        this.cartTotal = 0;
        this.cartAddedProducts.forEach(function (element) {
            _this.cartTotal += element.price * (element.qty || 1);
        });
    };
    ProductsService.prototype.getCartTotal = function () {
        return this.cartTotal;
    };
    ProductsService.prototype.cartProductManipulate = function (product, increase) {
        if (increase === void 0) { increase = false; }
        var manipulatedProduct = this.cartAddedProducts.find(function (mp) { return mp === product; });
        increase ? manipulatedProduct.qty++ : manipulatedProduct.qty--;
        this.calculateCartTotal();
        this.cartTotalEmitter.emit(this.cartTotal);
    };
    ProductsService.prototype.removeCartSingleItem = function (itemIndex) {
        // fixes a bug where multiple items are added to a cart if we cleared a cart when item had qty > 1
        this.cartAddedProducts[itemIndex].qty = 1;
        var removedProductName = this.cartAddedProducts[itemIndex].name;
        this.cartAddedProducts.splice(itemIndex, 1);
        this.cartAdditionEmitter.emit(this.cartAddedProducts);
        this.calculateCartTotal();
        this.cartTotalEmitter.emit(this.cartTotal);
        this.toastyNotifications.addToast(false, removedProductName, false);
    };
    ProductsService.prototype.emptyCart = function () {
        // fixes a bug where multiple items are added to a cart if we cleared a cart when item had qty > 1
        for (var _i = 0, _a = this.cartAddedProducts; _i < _a.length; _i++) {
            var cp = _a[_i];
            cp.qty = 1;
        }
        this.cartAddedProducts = [];
        this.cartAdditionEmitter.emit(this.cartAddedProducts);
        this.cartTotal = 0;
        this.cartTotalEmitter.emit(this.cartTotal);
        this.router.navigate(['/products']);
        this.toastyNotifications.addToast(true);
    };
    ProductsService.prototype.getLayout = function () {
        return this.layoutMode;
    };
    ProductsService.prototype.setLayout = function (layoutValue) {
        window.localStorage.setItem('ngShopLayout', layoutValue ? 'grid' : 'list');
        this.layoutMode = layoutValue;
        this.layoutModeEmitter.emit(this.layoutMode);
    };
    ProductsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__toasty_notifications_service__["a" /* ToastyNotificationsService */]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/toasty-notifications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastyNotificationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_toasty__ = __webpack_require__("../../../../ng2-toasty/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastyNotificationsService = /** @class */ (function () {
    function ToastyNotificationsService(toastyService) {
        this.toastyService = toastyService;
    }
    ToastyNotificationsService.prototype.addToast = function (cartEmptied, prodName, alertType, noSearchedProduct) {
        if (cartEmptied === void 0) { cartEmptied = false; }
        if (prodName === void 0) { prodName = ''; }
        if (alertType === void 0) { alertType = false; }
        if (noSearchedProduct === void 0) { noSearchedProduct = false; }
        var message;
        if (!noSearchedProduct) {
            message = cartEmptied ? 'Cart emptied' : prodName + ", " + (alertType ? 'added to' : 'removed from') + " cart";
        }
        else {
            message = 'Product you just searched for does not exist';
        }
        var toastOptions = {
            title: '',
            msg: message,
            showClose: true,
            timeout: 5000,
            theme: 'material',
        };
        alertType ? this.toastyService.success(toastOptions) : this.toastyService.error(toastOptions);
    };
    ToastyNotificationsService.prototype.success = function (msg) {
        var toastOptions = {
            title: '',
            msg: msg,
            showClose: true,
            timeout: 5000,
            theme: 'material',
        };
        this.toastyService.success(toastOptions);
    };
    ToastyNotificationsService.prototype.error = function (msg) {
        var toastOptions = {
            title: '',
            msg: msg,
            showClose: true,
            timeout: 5000,
            theme: 'material',
        };
        this.toastyService.error(toastOptions);
    };
    ToastyNotificationsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_toasty__["b" /* ToastyService */]])
    ], ToastyNotificationsService);
    return ToastyNotificationsService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/number-input/number-input.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input {\r\n  width: 50px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/number-input/number-input.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"field has-addons\">\r\n  <p class=\"control\">\r\n    <button type=\"button\" class=\"button\" (click)=\"onValSub()\" [disabled]=\"minDisabled\">\r\n      <span class=\"icon is-small\">\r\n        <i class=\"fas fa-minus\"></i>\r\n      </span>\r\n    </button>\r\n  </p>\r\n  <p class=\"control\">\r\n    <input class=\"input has-text-centered\" type=\"text\" [value]=\"val\" />\r\n  </p>\r\n  <p class=\"control\">\r\n    <button type=\"button\" class=\"button\" (click)=\"onValAdd()\">\r\n      <span class=\"icon is-small\">\r\n        <i class=\"fas fa-plus\"></i>\r\n      </span>\r\n    </button>\r\n  </p>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/number-input/number-input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberInputComponent = /** @class */ (function () {
    function NumberInputComponent() {
        this.valAdd = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.valSub = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    NumberInputComponent.prototype.ngOnInit = function () {
    };
    NumberInputComponent.prototype.onValAdd = function () {
        this.valAdd.emit();
    };
    NumberInputComponent.prototype.onValSub = function () {
        this.valSub.emit();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], NumberInputComponent.prototype, "val", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], NumberInputComponent.prototype, "minDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NumberInputComponent.prototype, "valAdd", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], NumberInputComponent.prototype, "valSub", void 0);
    NumberInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-number-input',
            template: __webpack_require__("../../../../../src/app/shared/number-input/number-input.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/number-input/number-input.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NumberInputComponent);
    return NumberInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card--contact-form {\r\n    max-width: 700px;\r\n    margin-left:  auto;\r\n    margin-right: auto;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card--contact-form\">\r\n    <header class=\"card-header\">\r\n      <p class=\"card-header-title\">\r\n       Sign Up\r\n      </p>\r\n      <span class=\"card-header-icon has-text-grey-light\">\r\n        <span class=\"icon\">\r\n          <i class=\"fas fa-envelope-open\" aria-hidden=\"true\"></i>\r\n        </span>\r\n      </span>\r\n    </header>\r\n    <div class=\"card-content\">\r\n      <div class=\"content\">\r\n        <form (ngSubmit)=\"onSubmit(f)\" #f=\"ngForm\">\r\n          <div class=\"field\">\r\n            <label class=\"label\">Full Name</label>\r\n            <div class=\"control\">\r\n              <input\r\n                class=\"input\"\r\n                [ngClass]=\"{'is-danger': !name.valid && name.touched}\"\r\n                type=\"text\"\r\n                placeholder=\"Full Name\"\r\n                name=\"name\"\r\n                ngModel\r\n                required\r\n                #name=\"ngModel\"/>\r\n            </div>\r\n            <p *ngIf=\"!name.valid && name.touched\" class=\"help is-danger\">Required field</p>\r\n          </div>\r\n  \r\n          <div class=\"field\">\r\n            <label class=\"label\">NIC</label>\r\n            <div class=\"control\">\r\n              <input\r\n                class=\"input\"\r\n                [ngClass]=\"{'is-danger': !nic.valid && nic.touched}\"\r\n                type=\"text\"\r\n                placeholder=\"NIC\"\r\n                [(ngModel)]=\"model.nic\"\r\n                name=\"nic\"\r\n                required\r\n                #nic=\"ngModel\"\r\n                />\r\n            </div>\r\n            <p *ngIf=\"!nic.valid && nic.touched\" class=\"help is-danger\">Required field</p>\r\n          </div>\r\n  \r\n          <div class=\"field\">\r\n            <label class=\"label\">Email</label>\r\n            <div class=\"control\">\r\n              <input\r\n                class=\"input\"\r\n                [ngClass]=\"{'is-danger': !email.valid && email.touched}\"\r\n                type=\"email\"\r\n                placeholder=\"email@email.com\"\r\n                [(ngModel)]=\"model.email\"\r\n                name=\"email\"\r\n                required\r\n                email\r\n                #email=\"ngModel\" />\r\n            </div>\r\n            <p *ngIf=\"!email.valid && email.touched\" class=\"help is-danger\">Please enter a valid email</p>\r\n          </div>\r\n         \r\n          <div class=\"field\">\r\n            <label class=\"label\">User Name</label>\r\n            <div class=\"control\">\r\n              <input\r\n                class=\"input\"\r\n                type=\"text\"\r\n                placeholder=\"User name\"\r\n                [(ngModel)]=\"model.username\"\r\n                name=\"userName\"\r\n                required\r\n                #userName=\"ngModel\" />\r\n            </div>\r\n            <p *ngIf=\"!userName.valid && userName.touched\" class=\"help is-danger\">User Name is Required</p>\r\n          </div>\r\n  \r\n  \r\n         \r\n          <div class=\"field\">\r\n            <label class=\"label\">Password</label>\r\n            <div class=\"control\">\r\n              <input\r\n                class=\"input\"\r\n                type=\"password\"\r\n                placeholder=\"Password\"\r\n                [(ngModel)]=\"model.password\"\r\n                name=\"password\"\r\n                required\r\n                #password=\"ngModel\" />\r\n            </div>\r\n            <p *ngIf=\"!password.valid && password.touched\" class=\"help is-danger\">Password is Required</p>\r\n          </div>\r\n  \r\n  \r\n         \r\n  \r\n          <div class=\"field\">\r\n            <div class=\"control\">\r\n              <button\r\n                class=\"button is-dark is-fullwidth\"\r\n                type=\"submit\"\r\n                [disabled]=\"!f.valid\">Sign up</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_product_model__ = __webpack_require__("../../../../../src/app/products/product.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_toasty_notifications_service__ = __webpack_require__("../../../../../src/app/services/toasty-notifications.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupComponent = /** @class */ (function () {
    function SignupComponent(http, s, router) {
        this.http = http;
        this.s = s;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__products_product_model__["a" /* Customer */]();
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.onSubmit = function (f) {
        var _this = this;
        if (f.valid) {
            this.http.post('api/v1/customer/signin', this.model).subscribe(function (p) {
                _this.s.success("User successfully signup");
                _this.router.navigate(['/login']);
            }, function (e) {
                _this.s.error("Signup Error");
            });
        }
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
            styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__services_toasty_notifications_service__["a" /* ToastyNotificationsService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/un-registered-vehicles/un-registered-vehicles.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/un-registered-vehicles/un-registered-vehicles.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-head\">\r\n  Unregistered Vehicles\r\n</div>\r\n<div class=\"columns products-wrapper\">\r\n    <aside class=\"aside column is-one-quarter\">\r\n      <app-filters></app-filters>\r\n    </aside>\r\n    <div class=\"column is-three-quarter\">\r\n      <div *ngIf=\"isLoading\" class=\"loaderOverlay\">\r\n        <div class=\"loader\">Loading...</div>\r\n      </div>\r\n  \r\n  \r\n  \r\n        <ng-template [ngIf]=\"((products | filter:filterBy) | search: searchText).length > 0\">\r\n          <!-- grid layout -->\r\n          <div class=\"columns is-multiline\" *ngIf=\"layoutMode\">\r\n            <app-product-card class=\"column is-half-tablet is-one-third-fullhd\" *ngFor=\"let product of (products | filter:filterBy) | search: searchText\"\r\n              [product]=\"product\"></app-product-card>\r\n          </div>\r\n          <!-- columns -->\r\n  \r\n          <!-- list layout -->\r\n          <table *ngIf=\"!layoutMode\" class=\"table is-fullwidth is-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th colspan=\"1\"></th>\r\n                <th colspan=\"1\">Name / Desc.</th>\r\n                <th colspan=\"1\">Price</th>\r\n                <th colspan=\"1\">View / To Cart</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <app-product-list-item class=\"tr\" *ngFor=\"let product of (products | filter:filterBy) | search: searchText\" [product]=\"product\"></app-product-list-item>\r\n            </tbody>\r\n          </table>\r\n        </ng-template>\r\n  \r\n  \r\n        <h2 *ngIf=\"((products | filter:filterBy) | search: searchText).length <= 0 && !isLoading\">No results for your search, try resetting your filters</h2>\r\n  \r\n  \r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/un-registered-vehicles/un-registered-vehicles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnRegisteredVehiclesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_products_service__ = __webpack_require__("../../../../../src/app/services/products.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UnRegisteredVehiclesComponent = /** @class */ (function () {
    function UnRegisteredVehiclesComponent(prodService) {
        this.prodService = prodService;
        this.isLoading = true;
    }
    UnRegisteredVehiclesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.prodService.fetchProductsFromDB().subscribe(function (products) {
            _this.prodService.setAllProducts(products);
            _this.products = _this.prodService.getAllProducts();
        }, function (err) { return console.log(err); }, function () { return _this.isLoading = false; });
        this.filterBy = this.prodService.getFilter();
        this.searchText = this.prodService.getSearchFilter();
        this.layoutMode = this.prodService.getLayout();
        this.prodService.filterTypeEmitter.subscribe(function (filterValue) {
            _this.filterBy = filterValue;
        });
        this.prodService.searchEmitter.subscribe(function (searchValue) {
            _this.searchText = searchValue;
        });
        this.prodService.layoutModeEmitter.subscribe(function (layoutVal) {
            _this.layoutMode = layoutVal;
        });
    };
    UnRegisteredVehiclesComponent.prototype.ngOnDestroy = function () {
        this.products = [];
    };
    UnRegisteredVehiclesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-un-registered-vehicles',
            template: __webpack_require__("../../../../../src/app/un-registered-vehicles/un-registered-vehicles.component.html"),
            styles: [__webpack_require__("../../../../../src/app/un-registered-vehicles/un-registered-vehicles.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_products_service__["a" /* ProductsService */]])
    ], UnRegisteredVehiclesComponent);
    return UnRegisteredVehiclesComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/images/spare.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "spare.e94ad6eea89f2744021e.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiBase: 'https://ngshop-27da4.firebaseio.com'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map