(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/client-list/client-list.component */ "./src/app/components/client-list/client-list.component.ts");
/* harmony import */ var _components_planks_mentoring_mentoring_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/planks/mentoring/mentoring.component */ "./src/app/components/planks/mentoring/mentoring.component.ts");
/* harmony import */ var _components_planks_international_international_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/planks/international/international.component */ "./src/app/components/planks/international/international.component.ts");
/* harmony import */ var _components_planks_metrics_metrics_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/planks/metrics/metrics.component */ "./src/app/components/planks/metrics/metrics.component.ts");
/* harmony import */ var _components_planks_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/planks/strategy/strategy.component */ "./src/app/components/planks/strategy/strategy.component.ts");
/* harmony import */ var _components_planks_railway_railway_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/planks/railway/railway.component */ "./src/app/components/planks/railway/railway.component.ts");
/* harmony import */ var _components_planks_plank_home_plank_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/planks/plank-home/plank-home.component */ "./src/app/components/planks/plank-home/plank-home.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'about',
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
    },
    {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]
    },
    {
        path: 'clients',
        component: _components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_5__["ClientListComponent"]
    },
    {
        path: 'expertise',
        component: _components_planks_plank_home_plank_home_component__WEBPACK_IMPORTED_MODULE_11__["PlankHomeComponent"],
        children: [
            {
                path: 'mentoring',
                component: _components_planks_mentoring_mentoring_component__WEBPACK_IMPORTED_MODULE_6__["MentoringComponent"]
            },
            {
                path: 'international',
                component: _components_planks_international_international_component__WEBPACK_IMPORTED_MODULE_7__["InternationalComponent"]
            },
            {
                path: 'metrics',
                component: _components_planks_metrics_metrics_component__WEBPACK_IMPORTED_MODULE_8__["MetricsComponent"]
            },
            {
                path: 'strategy',
                component: _components_planks_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_9__["StrategyComponent"]
            },
            {
                path: 'railway',
                component: _components_planks_railway_railway_component__WEBPACK_IMPORTED_MODULE_10__["RailwayComponent"]
            },
        ]
    },
    {
        path: 'profile',
        component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_12__["ProfileComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes),
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--SIDENAV CONTAINER-->\n<mat-sidenav-container class=\"all-wrap\">\n\n\n  <!--SIDENAV PANEL-->\n  <mat-sidenav #sidenav mode=\"over\">\n    <mat-list fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center start\">\n      <mat-list-item><span class=\"spacer\"></span><button mat-icon-button (click)=\"sidenav.close()\"><mat-icon class=\"whitecon\">clear</mat-icon></button></mat-list-item>\n      <mat-list-item routerLink=\"home\" (click)=\"sidenav.close()\"> Home</mat-list-item>\n      <mat-list-item routerLink=\"about\" (click)=\"sidenav.close()\">Background</mat-list-item>\n      <mat-list-item routerLink=\"expertise\" (click)=\"sidenav.close()\"> Expertise </mat-list-item>\n      <mat-list-item routerLink=\"contact\" (click)=\"sidenav.close()\"> Contact Us </mat-list-item>\n      <mat-list-item routerLink=\"clients\" *ngIf=\"authService?.loggedIn()\" (click)=\"sidenav.close()\">\n        <mat-icon style=\"color: #17664b; cursor: pointer;margin-right: 16px\">supervised_user_circle</mat-icon>\n        Client List\n      </mat-list-item>\n\n\n    </mat-list>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <!--APP BEGINS-->\n    <div class=\"app\" id=\"app\">\n      <!--NAV BAR-->\n      <header>\n        <mat-menu #usermenu=\"matMenu\" class=\"menu\" [overlapTrigger]=\"false\" yPosition=\"below\" style=\"background-color: #2b2b2b;\">\n          <div mat-menu-item=\"\">{{username}}</div>\n          <button mat-menu-item routerLink=\"profile\"><mat-icon class=\"fa fa-user\"></mat-icon> Profile</button>\n          <button mat-menu-item (click)=\"onLogoutClick()\"><mat-icon><i class=\"fa fa-sign-out-alt\"></i></mat-icon>Sign Out</button>\n        </mat-menu>\n\n        <mat-toolbar class=\"nav-bar mat-elevation-z6\" color=\"primary\" fxLayoutAlign=\"space-evenly center\">\n          <mat-toolbar-row fxLayout=\"row\" fxLayoutAlign=\"space-evenly center\" fxLayoutGap=\"5px\">\n            <!--MENU BURGER APPEARS ON MOBILE-->\n            <div class=\"sidenav-icon\" fxShow.lt-md=\"true\" fxHide fxLayoutAlign=\"center center\">\n              <button mat-icon-button (click)=\"sidenav.open()\"><mat-icon style=\"color:#2b2b2b;\">menu</mat-icon></button>\n            </div>\n            <span class=\"spacer\" fxShow.lt-md=\"true\" fxHide></span>\n            <!--LOGO-->\n            <div class=\"logo\" fxLayoutAlign=\"center center\" fxLayout=\"row\" fxLayoutGap=\"16px\" routerLink=\"home\">\n              <div fxHide.lt-md>\n                <img height=\"40px\" width=\"auto\" src=\"../assets/logos/blogo2.png\">\n              </div>\n              <div>\n                <img height=\"auto\" width=\"200px\" width.lt-md=\"100px\" src=\"../assets/logos/bbs-words.png\">\n            </div>\n          </div>\n\n        <div class=\"spacer\" fxFlex></div>\n\n\n\n\n\n        <!--NAV LINKS-->\n        <div class=\"nav-links\" fxLayout=\"row\" fxFlex fxHide.lt-md=\"true\" fxLayoutAlign=\"space-evenly center\" fxLayoutGap=\"20px\">\n          <a routerLink=\"clients\" *ngIf=\"authService?.loggedIn()\">\n            <div class=\"nav-item\" fxLayout=\"row\" fxLayoutGap=\"5px\">\n              Client List\n            </div>\n          </a>\n          <a routerLink=\"home\">\n            <div class=\"nav-item\">\n              Home\n            </div>\n          </a>\n          <a routerLink=\"about\">\n            <div class=\"nav-item\">\n              Background\n            </div>\n          </a>\n          <a routerLink=\"expertise\">\n            <div class=\"nav-item\" fxLayoutAlign=\"center center\">\n              Expertise\n              <!--<mat-icon [matMenuTriggerFor]=\"menu\">keyboard_arrow_down</mat-icon>-->\n            </div>\n        </a>\n          <a routerLink=\"contact\">\n            <div class=\"nav-contact\" fxLayoutAlign=\"center center\">\n              Contact\n            </div>\n          </a>\n        </div>\n\n        <!--IF LOGGED IN SHOWS ADMIN ICON-->\n        <div *ngIf=\"authService?.loggedIn()\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\" [matMenuTriggerFor]=\"usermenu\" class=\"admin\">\n          <mat-icon style=\"color: #17664b; cursor: pointer;\">supervised_user_circle</mat-icon>\n        </div>\n\n      </mat-toolbar-row>\n    </mat-toolbar>\n  </header>\n      <main class=\"content\" id=\"content\">\n      <router-outlet></router-outlet>\n    <flash-messages></flash-messages>\n  </main>\n      <footer>\n    <mat-toolbar class=\"footer mat-elevation-z4\" id=\"footer\">\n     <div fxLayout=\"row\" fxHide fxShow.lt-md style=\"width: 100%;\">\n      <div class=\"bbs-msg\">\n        &copy; 2018 Becker Business Strategies\n      </div>\n      <span class=\"spacer\"></span>\n       <div fxLayoutAlign=\"center center\">\n         <div class=\"bbs-msg\">{{username}}</div>\n         <button mat-icon-button (click)=\"logIn()\" style=\"color:#fff;\">\n           <mat-icon style=\"color: white;\">account_box</mat-icon>\n         </button>\n       </div>\n     </div>\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-evenly\" fxLayoutGap=\"30px\" style=\"width: 100%\" fxHide.lt-md>\n      <div class=\"nav-links\" id=\"client-list\" fxLayout=\"column\" fxLayoutGap=\"10px\" fxFlex=\"16\">\n        <div class=\"logo\"> <img (click)=\"logIn()\" height=\"40\" width=\"auto\" src=\"../assets/logos/blogo2.png\"> </div>\n      </div>\n      <div class=\"nav-links\" id=\"home\" fxLayout=\"column\" fxLayoutGap=\"10px\" fxFlex=\"16\">\n        <div><a routerLink=\"home\">Home</a></div>\n        <ul class=\"nav-item\" *ngIf=\"authService?.loggedIn()\">\n          <li><a routerLink=\"clients\"> Client List</a></li>\n        </ul>\n\n      </div>\n      <div class=\"nav-links\" id=\"about\" fxLayoutAlign=\"center\" fxLayout=\"column\" fxLayoutGap=\"10px\" fxFlex=\"16\">\n        <div><a routerLink=\"about\">About</a></div>\n          <div>\n            <ul class=\"nav-item\" *ngFor=\"let about of abouts\">\n              <li><a routerLink=\"{{about.link}}\">{{about.name}}</a></li>\n            </ul>\n          </div>\n        </div>\n      <div class=\"nav-links\" id=\"expertise\" fxLayoutAlign=\"center\" fxLayout=\"column\" fxLayoutGap=\"10px\" fxFlex=\"16\">\n        <div><a routerLink=\"expertise\">Expertise</a></div>\n        <div>\n          <ul class=\"nav-item\" *ngFor=\"let expertise of expertises\">\n            <li><a routerLink=\"{{expertise.link}}\">{{expertise.name}}</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"nav-links\" id=\"contact\" fxLayout=\"column\" fxLayoutGap=\"10px\" fxFlex=\"16\">\n        <div><a routerLink=\"contact\">Contact</a> </div>\n        <div class=\"nav-item\">\n          <ul class=\"nav-item\">\n            <li><a href=\"mailto:swbdesk@aol.com\" style=\"text-transform: lowercase\">swbdesk@aol.com</a> </li>\n          </ul>\n        </div>\n      </div>\n        <span class=\"spacer\"></span>\n      <div class=\"nav-links\" id=\"social\"  fxLayoutAlign=\"space-between end\" fxLayout=\"column\" fxLayoutGap=\"10px\" fxFlex=\"16\">\n        <div class=\"nav-item\"><a href=\"https://www.linkedin.com/in/stephenwbecker/\"> <i class=\"fab fa-linkedin fa-2x\"></i></a> </div>\n        <div class=\"spacer\"></div>\n        <div class=\"nav-item\">\n         &copy; 2018 Becker Business Strategies\n        </div>\n      </div>\n\n    </div>\n    </mat-toolbar>\n  </footer>\n\n</div>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}\n.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}\n.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}\n.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}\n.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}\n.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}\n.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}\n.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}\n.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}\n.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}\n.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}\n.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}\n.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}\n.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}\n.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}\n.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}\n.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}\n.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}\n.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}\n.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}\n.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}\n.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}\n.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}\n.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}\n.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}\n.mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-badge-small .mat-badge-content{font-size:6px}\n.mat-badge-large .mat-badge-content{font-size:24px}\n.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}\n.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}\n.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}\n.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}\n.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}\n.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}\n.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}\n.mat-bottom-sheet-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}\n.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-card-title{font-size:24px;font-weight:400}\n.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}\n.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-checkbox-layout .mat-checkbox-label{line-height:24px}\n.mat-chip{font-size:13px;line-height:18px}\n.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}\n.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-header-cell{font-size:12px;font-weight:500}\n.mat-cell,.mat-footer-cell{font-size:14px}\n.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-calendar-body{font-size:13px}\n.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}\n.mat-calendar-table-header th{font-size:11px;font-weight:400}\n.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}\n.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-form-field-wrapper{padding-bottom:1.34375em}\n.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}\n.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}\n.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}\n.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}\n.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}\n.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}\n.mat-form-field-label{top:1.34375em}\n.mat-form-field-underline{bottom:1.34375em}\n.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}\n.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}\n.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}\n.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}\n.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}\n.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}\n.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}\n.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}\n.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}\n.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}\n.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}\ninput.mat-input-element{margin-top:-.0625em}\n.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}\n.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}\n.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-select-trigger{height:1.125em}\n.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}\n.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-step-label{font-size:14px;font-weight:400}\n.mat-step-label-selected{font-size:14px;font-weight:500}\n.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}\n.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}\n.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}\n.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}\n.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}\n.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}\n.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}\n.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}\n.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}\n.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}\n.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}\n.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}\n.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}\n.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}\n.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}\n.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-tree-node{font-weight:400;font-size:14px}\n.mat-ripple{overflow:hidden}\n.mat-ripple.mat-ripple-unbounded{overflow:visible}\n.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}\n@media screen and (-ms-high-contrast:active){.mat-ripple-element{display:none}}\n.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}\n.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}\n.cdk-overlay-container{position:fixed;z-index:1000}\n.cdk-overlay-container:empty{display:none}\n.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}\n.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}\n.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}\n@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}\n.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}\n.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}\n.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}\n.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}\n@keyframes cdk-text-field-autofill-start{/*!*/}\n@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}\n@keyframes cdk-text-field-autofill-end{/*!*/}\n.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}\ntextarea.cdk-textarea-autosize{resize:none}\ntextarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}\n.mat-ripple-element{background-color:rgba(0,0,0,.1)}\n.mat-option{color:rgba(0,0,0,.87)}\n.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}\n.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}\n.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}\n.mat-optgroup-label{color:rgba(0,0,0,.54)}\n.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}\n.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}\n.mat-pseudo-checkbox::after{color:#fafafa}\n.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ff4081}\n.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}\n.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}\n.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}\n.mat-theme-loaded-marker{display:none}\n.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}\n.mat-badge-content{color:#fff;background:#3f51b5}\n.mat-badge-accent .mat-badge-content{background:#ff4081;color:#fff}\n.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}\n.mat-badge{position:relative}\n.mat-badge-hidden .mat-badge-content{display:none}\n.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}\n.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}\n.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}\n@media screen and (-ms-high-contrast:active){.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}\n.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}\n.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}\n.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}\n[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}\n.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}\n[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}\n[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}\n[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}\n.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}\n@media screen and (-ms-high-contrast:active){.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}}\n.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}\n.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}\n.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}\n[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}\n.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}\n[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}\n[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}\n[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}\n.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}\n@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content{outline:solid 1px;border-radius:0}}\n.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}\n.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}\n.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}\n[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}\n.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}\n[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}\n[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}\n[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}\n.mat-bottom-sheet-container{background:#fff;color:rgba(0,0,0,.87)}\n.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}\n.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#3f51b5}\n.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ff4081}\n.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}\n.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}\n.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(63,81,181,.12)}\n.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,64,129,.12)}\n.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}\n.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}\n.mat-button.mat-primary .mat-ripple-element,.mat-icon-button.mat-primary .mat-ripple-element,.mat-stroked-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.1)}\n.mat-button.mat-accent .mat-ripple-element,.mat-icon-button.mat-accent .mat-ripple-element,.mat-stroked-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.1)}\n.mat-button.mat-warn .mat-ripple-element,.mat-icon-button.mat-warn .mat-ripple-element,.mat-stroked-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}\n.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}\n.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}\n.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:#fff}\n.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}\n.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}\n.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#3f51b5}\n.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ff4081}\n.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}\n.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}\n.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}\n.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.1)}\n.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}\n.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.2)}\n.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.2)}\n.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}\n.mat-button-toggle{color:rgba(0,0,0,.38)}\n.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}\n.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}\n.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}\n.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}\n.mat-card{background:#fff;color:rgba(0,0,0,.87)}\n.mat-card-subtitle{color:rgba(0,0,0,.54)}\n.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}\n.mat-checkbox-checkmark{fill:#fafafa}\n.mat-checkbox-checkmark-path{stroke:#fafafa!important}\n@media screen and (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}\n.mat-checkbox-mixedmark{background-color:#fafafa}\n.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#3f51b5}\n.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ff4081}\n.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}\n.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}\n@media screen and (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}\n@media screen and (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(63,81,181,.26)}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,64,129,.26)}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}\n.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}\n.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}\n.mat-chip.mat-standard-chip .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ff4081;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}\n.mat-table{background:#fff}\n.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}\nmat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}\n.mat-header-cell{color:rgba(0,0,0,.54)}\n.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}\n.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}\n.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}\n.mat-calendar-table-header{color:rgba(0,0,0,.38)}\n.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}\n.mat-calendar-body-label{color:rgba(0,0,0,.54)}\n.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}\n.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}\n.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}\n.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}\n.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}\n.mat-calendar-body-selected{background-color:#3f51b5;color:#fff}\n.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(63,81,181,.4)}\n.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ff4081;color:#fff}\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,64,129,.4)}\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-toggle-active{color:#3f51b5}\n.mat-datepicker-toggle-active.mat-accent{color:#ff4081}\n.mat-datepicker-toggle-active.mat-warn{color:#f44336}\n.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}\n.mat-divider{border-top-color:rgba(0,0,0,.12)}\n.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}\n.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}\n.mat-action-row{border-top-color:rgba(0,0,0,.12)}\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}\n@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}\n.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}\n.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}\n.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}\n.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}\n.mat-form-field-label{color:rgba(0,0,0,.6)}\n.mat-hint{color:rgba(0,0,0,.6)}\n.mat-form-field.mat-focused .mat-form-field-label{color:#3f51b5}\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ff4081}\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}\n.mat-focused .mat-form-field-required-marker{color:#ff4081}\n.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}\n.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#3f51b5}\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ff4081}\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}\n.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}\n.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}\n.mat-error{color:#f44336}\n.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}\n.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}\n.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}\n.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}\n.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}\n.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}\n.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}\n.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#3f51b5}\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ff4081}\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}\n.mat-icon.mat-primary{color:#3f51b5}\n.mat-icon.mat-accent{color:#ff4081}\n.mat-icon.mat-warn{color:#f44336}\n.mat-input-element:disabled{color:rgba(0,0,0,.38)}\n.mat-input-element{caret-color:#3f51b5}\n.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-accent .mat-input-element{caret-color:#ff4081}\n.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}\n.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}\n.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}\n.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}\n.mat-list-item-disabled{background-color:#eee}\n.mat-list-option.mat-list-item-focus,.mat-list-option:hover,.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}\n.mat-menu-panel{background:#fff}\n.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}\n.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}\n.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}\n.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}\n.mat-paginator{background:#fff}\n.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}\n.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}\n.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}\n.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}\n.mat-progress-bar-background{fill:#c5cae9}\n.mat-progress-bar-buffer{background-color:#c5cae9}\n.mat-progress-bar-fill::after{background-color:#3f51b5}\n.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ff80ab}\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ff80ab}\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ff4081}\n.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}\n.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}\n.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}\n.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}\n.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}\n.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#3f51b5}\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(63,81,181,.26)}\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}\n.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ff4081}\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,64,129,.26)}\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}\n.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}\n.mat-select-content,.mat-select-panel-done-animating{background:#fff}\n.mat-select-value{color:rgba(0,0,0,.87)}\n.mat-select-placeholder{color:rgba(0,0,0,.42)}\n.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}\n.mat-select-arrow{color:rgba(0,0,0,.54)}\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}\n.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}\n.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}\n.mat-drawer.mat-drawer-push{background-color:#fff}\n.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#e91e63}\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(233,30,99,.5)}\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle .mat-ripple-element{background-color:rgba(233,30,99,.12)}\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#3f51b5}\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(63,81,181,.5)}\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.12)}\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}\n.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}\n.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}\n.mat-slide-toggle-thumb{background-color:#fafafa}\n.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}\n.mat-slider-track-background{background-color:rgba(0,0,0,.26)}\n.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#3f51b5}\n.mat-primary .mat-slider-thumb-label-text{color:#fff}\n.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ff4081}\n.mat-accent .mat-slider-thumb-label-text{color:#fff}\n.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}\n.mat-warn .mat-slider-thumb-label-text{color:#fff}\n.mat-slider-focus-ring{background-color:rgba(255,64,129,.2)}\n.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}\n.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}\n.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}\n.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}\n.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}\n.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}\n.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}\n.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}\n.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}\n.mat-step-header .mat-step-icon{background-color:#3f51b5;color:#fff}\n.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}\n.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}\n.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}\n.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}\n.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}\n.mat-sort-header-arrow{color:#757575}\n.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}\n.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}\n.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}\n.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}\n.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}\n.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}\n.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}\n.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:#fff}\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\n.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}\n.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#3f51b5}\n.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}\n.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ff4081}\n.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:#fff}\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:#fff}\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(255,255,255,.12)}\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\n.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}\n.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}\n.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}\n.mat-toolbar.mat-primary{background:#3f51b5;color:#fff}\n.mat-toolbar.mat-accent{background:#ff4081;color:#fff}\n.mat-toolbar.mat-warn{background:#f44336;color:#fff}\n.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}\n.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}\n.mat-toolbar .mat-input-element{caret-color:currentColor}\n.mat-tooltip{background:rgba(97,97,97,.9)}\n.mat-tree{background:#fff}\n.mat-tree-node{color:rgba(0,0,0,.87)}\n.mat-snack-bar-container{background:#323232;color:#fff}\n.mat-simple-snackbar-action{color:#ff4081}\n/* Coolors Exported Palette - coolors.co/17664b-2b2b2b-ffffff-aa8946-33658a */\n/* HSL */\n/* RGB */\nbody {\n  margin: 0;\n  text-decoration: none; }\n.full-height {\n  min-height: 100vh; }\n.header {\n  font-size: 44px;\n  line-height: 56px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  letter-spacing: -0.8px;\n  font-weight: 800;\n  margin-top: 40px;\n  padding-left: 24px;\n  border-left: 10px solid #17664b; }\n.bbs-title, h1 {\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  color: #2b2b2b;\n  font-size: 32px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin-left: 16px; }\n.bbs-subtitle, h2 {\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  color: #17664b;\n  font-size: 18px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin-left: 16px; }\n.bbs-line, h3 {\n  font-weight: 400;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  color: #2b2b2b;\n  font-size: 16px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin-left: 16px; }\n.bbs-msg, h5, h6 {\n  font-weight: lighter;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 16px;\n  line-height: 22px;\n  color: #4f5b66; }\n.container {\n  padding-top: 100px;\n  padding-bottom: 40px;\n  margin: auto;\n  width: 90%; }\n.spacer {\n  flex: 1 1 auto; }\na {\n  text-decoration: none !important; }\n.example-form {\n  min-width: 150px;\n  width: 100%; }\n.example-full-width {\n  width: 100%; }\n.example-half-width {\n  min-width: 150px;\n  width: 50%; }\n.bbs-actions {\n  width: 100%; }\n.bbs-actions .bbs-action-raised {\n    background-color: #17664b;\n    color: white;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    border: none; }\n.bbs-actions .bbs-action-stroked {\n    color: #17664b;\n    border-color: #17664b; }\n.alert-success, .alert-danger {\n  width: 90% !important;\n  margin: auto !important; }\n.nav-bar {\n  background-color: white !important;\n  height: 80px;\n  width: 100%;\n  position: fixed;\n  z-index: 1; }\n.nav-bar .nav-links {\n    font-size: 14px;\n    font-weight: 300;\n    color: white; }\n.nav-bar .nav-links .nav-item {\n      color: #2b2b2b;\n      font-family: sans-serif;\n      padding: 20px;\n      cursor: pointer; }\n.nav-bar .nav-links .nav-contact {\n      border: 3px solid #17664b;\n      border-radius: 25px;\n      padding: 5px 20px;\n      color: #2b2b2b;\n      width: 150px;\n      text-decoration: none; }\n.nav-bar .nav-links .nav-contact:hover, .nav-bar .nav-links .nav-contact:active {\n        background-color: #17664b;\n        color: #FFFFFF;\n        cursor: pointer; }\n.admin {\n  padding-left: 16px;\n  border-left: 1px solid rgba(1, 1, 1, 0.13); }\n.mat-sidenav {\n  background-color: white;\n  width: 50%; }\n.mat-sidenav .mat-list-item {\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    color: black;\n    font-weight: lighter;\n    width: 100%;\n    height: 50px; }\n.mat-sidenav .mat-list-item:hover {\n      color: #17664b;\n      cursor: pointer; }\n.mat-menu-content {\n  background-color: #2b2b2b !important;\n  padding: 0 !important; }\n.mat-menu-item {\n  background-color: #FFFFFF !important;\n  color: #2b2b2b !important;\n  font-size: 14px !important;\n  font-weight: 300 !important;\n  font-family: sans-serif !important; }\n.footer {\n  background-color: #2b2b2b;\n  height: auto;\n  color: white;\n  padding: 24px; }\n.footer .nav-links {\n    font-size: 14px;\n    font-weight: 900;\n    color: white;\n    padding: 24px;\n    text-transform: uppercase; }\n.footer .nav-links a {\n      text-decoration: underline;\n      color: white; }\n.footer .nav-links .nav-item {\n      padding: 0;\n      margin: 0;\n      list-style: none; }\n.footer .nav-links .nav-item li, .footer .nav-links .nav-item a {\n        text-transform: capitalize;\n        text-decoration: none;\n        font-weight: lighter;\n        color: white;\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n        font-size: 12px; }\n.footer .nav-links .nav-contact {\n      border: 3px solid #17664b;\n      border-radius: 25px;\n      padding: 5px 20px;\n      color: #2b2b2b;\n      width: 150px;\n      text-decoration: none; }\n.footer .nav-links .nav-contact:hover, .footer .nav-links .nav-contact:active {\n        background-color: #17664b;\n        color: #FFFFFF;\n        cursor: pointer; }\nmain {\n  display: flex;\n  flex-direction: column; }\nmain > *:not(router-outlet) {\n    flex: 1;\n    display: block; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialogs/login/login.component */ "./src/app/dialogs/login/login.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(dialog, authService, snackBar, router, as) {
        this.dialog = dialog;
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.as = as;
        this.abouts = [
            {
                name: 'History',
                link: 'about'
            },
            {
                name: 'Leadership & Executive',
                link: 'about'
            },
            {
                name: 'Professional',
                link: 'about'
            },
            {
                name: 'Education',
                link: 'about'
            },
            {
                name: 'Personal',
                link: 'about'
            },
        ];
        this.expertises = [
            {
                name: 'mentoring',
                link: 'expertise'
            },
            {
                name: 'international',
                link: 'expertise'
            },
            {
                name: 'metrics',
                link: 'expertise'
            },
            {
                name: 'strategy',
                link: 'expertise'
            },
            {
                name: 'railroad',
                link: 'expertise'
            },
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.as.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.username = _this.user.username;
            _this.password = _this.user.password;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    // POPS LOG IN DIALOG
    AppComponent.prototype.logIn = function () {
        var dialogRef = this.dialog.open(_dialogs_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"], { width: '500px' });
        // dialogRef.afterClosed().subscribe(result => {
        //
        // });
    };
    // LOGS ADMIN OUT
    AppComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.snackBar.open('YOU ARE NOW LOGGED OUT', 'OK', { duration: 3000 });
        this.router.navigate(['/home']);
        return false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _dialogs_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dialogs/login/login.component */ "./src/app/dialogs/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dialogs_register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialogs/register/register.component */ "./src/app/dialogs/register/register.component.ts");
/* harmony import */ var _components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/client-list/client-list.component */ "./src/app/components/client-list/client-list.component.ts");
/* harmony import */ var _components_planks_mentoring_mentoring_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/planks/mentoring/mentoring.component */ "./src/app/components/planks/mentoring/mentoring.component.ts");
/* harmony import */ var _components_planks_international_international_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/planks/international/international.component */ "./src/app/components/planks/international/international.component.ts");
/* harmony import */ var _components_planks_metrics_metrics_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/planks/metrics/metrics.component */ "./src/app/components/planks/metrics/metrics.component.ts");
/* harmony import */ var _components_planks_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/planks/strategy/strategy.component */ "./src/app/components/planks/strategy/strategy.component.ts");
/* harmony import */ var _components_planks_railway_railway_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/planks/railway/railway.component */ "./src/app/components/planks/railway/railway.component.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_planks_plank_home_plank_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/planks/plank-home/plank-home.component */ "./src/app/components/planks/plank-home/plank-home.component.ts");
/* harmony import */ var _dialogs_message_message_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dialogs/message/message.component */ "./src/app/dialogs/message/message.component.ts");
/* harmony import */ var src_app_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/dialogs/confirm/confirm.component */ "./src/app/dialogs/confirm/confirm.component.ts");
/* harmony import */ var _services_mailer_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./services/mailer.service */ "./src/app/services/mailer.service.ts");
/* harmony import */ var _dialogs_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dialogs/reset-pass/reset-pass.component */ "./src/app/dialogs/reset-pass/reset-pass.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_31__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
































var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"],
                _dialogs_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _dialogs_register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
                _components_client_list_client_list_component__WEBPACK_IMPORTED_MODULE_19__["ClientListComponent"],
                _components_planks_mentoring_mentoring_component__WEBPACK_IMPORTED_MODULE_20__["MentoringComponent"],
                _components_planks_international_international_component__WEBPACK_IMPORTED_MODULE_21__["InternationalComponent"],
                _components_planks_metrics_metrics_component__WEBPACK_IMPORTED_MODULE_22__["MetricsComponent"],
                _components_planks_strategy_strategy_component__WEBPACK_IMPORTED_MODULE_23__["StrategyComponent"],
                _components_planks_railway_railway_component__WEBPACK_IMPORTED_MODULE_24__["RailwayComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_25__["ProfileComponent"],
                _components_planks_plank_home_plank_home_component__WEBPACK_IMPORTED_MODULE_26__["PlankHomeComponent"],
                _dialogs_message_message_component__WEBPACK_IMPORTED_MODULE_27__["MessageComponent"],
                src_app_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmComponent"],
                _dialogs_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_30__["ResetPassComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_16__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBadgeModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_31__["FlashMessagesModule"].forRoot()
            ],
            providers: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"],
                _services_validate_service__WEBPACK_IMPORTED_MODULE_14__["ValidateService"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_13__["UserService"],
                angular2_jwt__WEBPACK_IMPORTED_MODULE_15__["JwtHelper"],
                _services_mailer_service__WEBPACK_IMPORTED_MODULE_29__["MailerService"],
                angular2_flash_messages__WEBPACK_IMPORTED_MODULE_31__["FlashMessagesService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            entryComponents: [
                _dialogs_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _dialogs_message_message_component__WEBPACK_IMPORTED_MODULE_27__["MessageComponent"],
                src_app_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_28__["ConfirmComponent"],
                _dialogs_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_30__["ResetPassComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"start\" fxLayoutGap=\"40px\">\n\n<div class=\"header\">\n  About Becker Business Strategies\n</div>\n  <mat-divider></mat-divider>\n<div class=\"plank\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"30px\" fxLayoutAlign=\"center center\">\n  <div class=\"plank-img\" fxFlex=\"40\" fxLayoutAlign=\"center center\">\n    <img src=\"../../../assets/steve.jpeg\" style=\"margin-top: 20px\">\n  </div>\n  <div class=\"plank-content\" fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start\" fxFlex=\"60\">\n    <div class=\"content-title\">HISTORY</div>\n    <div class=\"content-msg\">\n      <a target=\"_blank\" ref=\"https://www.linkedin.com/in/stephenwbecker\">Stephen Becker</a> is an accomplished senior executive with extensive\n      experience leading industrial companies in both the US and\n      international rail markets. He also has numerous Board roles in the\n      global markets. Steve particularly excels in his ability to formulate\n      strategies and implementation plans to enable North American firms to\n      secure profitable and prominent entry in foreign markets. He has\n      successfully demonstrated that capability in both high-growth, as well\n      as mature markets. It’s been said that “Steve is equally at home in the\n      Board room, as on the shop floor.” In 2003, Steve was recruited to run\n      and build the international business for <a target=\"_blank\" href=\"https://www.amstelrail.com/\">Amsted Rail</a>, where as\n      Managing Director, he was accountable for all business activities\n      outside of North America. In 2017, he was assigned a similar role as Executive Vice President\n      Transit to develop the Passenger Rail market for Amsted.\n    </div>\n  </div>\n</div>\n\n  <mat-divider id=\"leadership\"></mat-divider>\n\n  <div class=\"plank\" fxLayout=\"row\" fxLayoutGap=\"30px\">\n    <!--<div class=\"plank-img\">-->\n    <!--<img height=\"300\" width=\"auto\" src=\"../../../../assets/images/globe.jpg\">-->\n    <!--</div>-->\n    <div class=\"plank-content\" fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start\">\n      <div class=\"content-title\">LEADERSHIP &amp; EXECUTIVE</div>\n      <div class=\"content-msg\">\n        Widely acknowledged for his organizational development capabilities, including identification\n        and career tracking of high potential individuals, Steve takes a keen interest in mentoring\n        executives, and grooming his own successors.\n        Steve has had full accountability for the profitable growth of $700 million revenue businesses,\n        returning EBITDA margins above 20%. He has also configured successful Joint Venture\n        operations in Brazil, India, China, Russia/CIS, and South Africa.\n        Upon completion of his engineering studies, Steve began his career as a Project Engineer with\n        National Castings, where he quickly moved up through the Operations ranks. While\n        simultaneously completing his MBA, he was rewarded with Corporate Engineering, Technical\n        Director, and Plant Manager responsibilities. His subsequent appointments included both Vice\n        President and General Manager, Chief Technical Officer and finally Division President at ABC-\n        NACO. There, his major change processes reduced manufacturing costs by 30%. He is credited\n        for bringing Lean Manufacturing and Six Sigma techniques to the company.\n      </div>\n\n      <div class=\"content-msg\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center center\">\n        <!--REVENUE GROWTH-->\n        <div class=\"revenue\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n            <div style=\"font-size: 80px\">$</div>\n            <div class=\"odometer\" id=\"odometer\">000</div>\n          </div>\n          <div style=\"color: #17664b; text-transform: uppercase; margin-top: 20px\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <div style=\"color: #2b2b2b\">MILLION</div>\n            <div fxLayoutAlign=\"center center\">Revenue Growth</div>\n          </div>\n        </div>\n\n        <hr>\n\n        <!--EBITDA MARGINS-->\n        <div class=\"ebitda\" style=\"color: #17664b\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n            <div style=\"font-size: 80px\"><i class=\"fa fa-arrow-up\"></i> </div>\n            <div class=\"odometer\" id=\"odometer2\">000</div>\n            <div style=\"font-size: 80px\">%</div>\n\n          </div>\n          <div style=\"color: #17664b; text-transform: uppercase\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <div style=\"color: #2b2b2b\">returning</div>\n            <div fxLayoutAlign=\"center center\">EBITDA margins</div>\n          </div>\n        </div>\n\n        <hr>\n\n        <!--MANUFACTURING COSTS-->\n        <div class=\"manufacturing\" style=\"color: darkred\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n            <div style=\"font-size: 80px\"><i class=\"fa fa-arrow-down\"></i> </div>\n            <div class=\"odometer\" id=\"odometer3\">000</div>\n            <div style=\"font-size: 80px\">%</div>\n\n          </div>\n          <div style=\"color: #17664b; text-transform: uppercase\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <div style=\"color: #2b2b2b\">reduced</div>\n            <div fxLayoutAlign=\"center center\">manufacturing costs</div>\n          </div>\n        </div>\n\n\n      </div>\n    </div>\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <div class=\"plank\" fxLayout=\"row\" fxLayoutGap=\"30px\">\n    <!--<div class=\"plank-img\">-->\n    <!--<img height=\"300\" width=\"auto\" src=\"../../../../assets/images/globe.jpg\">-->\n    <!--</div>-->\n    <div class=\"plank-content\" fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start\">\n      <div class=\"content-title\">PROFESSIONAL</div>\n      <div class=\"content-msg\" fxHide fxShow.lt-md>\n        Becker is an Active member with The National Association of Corporate Directors, at both the\n        National level, and with the Florida Chapter. His Board roles include China based ZZABC\n        Castings Co. Ltd., as Vice-Chairman, and also China based Datong CRRC Amsted Castings\n        Company, also as Vice-Chairman. He also serves on the Boards of South African based Amsted\n        Rail Africa, and India based Amsted Aikon. His non-profit leadership Board work includes The\n        Steel Founders Society of America and Past-President of The Oak Brook Civic Association.\n      </div>\n      <div class=\"content-msg\" fxHide.lt-md>\n        Becker is an Active member with <a target=\"_blank\" href=\"https://www.nacdonline.org/\">The National Association of Corporate Directors</a>, at both the\n        National level, and with the Florida Chapter.\n        <div class=\"list\">\n        <mat-list class=\"board-roles\">\n          <h3 mat-subheader>His Board roles include:</h3>\n          <mat-list-item>\n            <span class=\"company\">ZZABC Castings Co. Ltd.</span>\n            <span class=\"role\">Vice-Chairman</span>\n            <span class=\"location\" style=\"font-weight: 300\"><i mat-list-icon class=\"fa fa-globe-asia\"></i>CHINA</span>\n          </mat-list-item>\n          <!--<mat-divider></mat-divider>-->\n          <mat-list-item>\n            <span class=\"company\"><a target=\"_blank\" href=\"http://www.crrcgc.cc/abcen/g13616.aspx\">Datong CRRC Amsted Castings Company</a> </span>\n            <span class=\"role\">Vice-Chairman</span>\n            <span class=\"location\" style=\"font-weight: 300\"><i mat-list-icon class=\"fa fa-globe-asia\"></i>CHINA</span>\n          </mat-list-item>\n          <!--<mat-divider></mat-divider>-->\n          <mat-list-item>\n            <span class=\"company\"><a target=\"_blank\" href=\"https://www.amstedrail.com/news/201706/amsted-rail-africa-rail-2017\">Amsted Rail Africa</a></span>\n            <span class=\"role\">Board Member</span>\n            <span class=\"location\" style=\"font-weight: 300\"><i mat-list-icon class=\"fa fa-globe-africa\"></i>SOUTH AFRICA</span>\n          </mat-list-item>\n          <!--<mat-divider></mat-divider>-->\n          <mat-list-item>\n            <span class=\"company\">Amsted Aikon</span>\n            <span class=\"role\">Board Member</span>\n            <span class=\"location\" style=\"font-weight: 300\"><i mat-list-icon class=\"fa fa-globe-africa\"></i>INDIA</span>\n          </mat-list-item>\n          <!--<mat-divider></mat-divider>-->\n          <mat-list-item fxLayout.lt-md=\"column\">\n            <span class=\"company\">Steel founders society of america</span>\n            <span class=\"role\">Board Member</span>\n            <span class=\"location\" style=\"font-weight: 300\"><i mat-list-icon class=\"fa fa-globe-americas\"></i>USA</span>\n            <span class=\"nonprofit\" style=\"font-weight: 300\"><sup>NON-PROFIT</sup></span>\n          </mat-list-item>\n          <mat-list-item>\n            <span class=\"company\">Oak brook civic association</span>\n            <span class=\"role\">Board Member</span>\n            <span class=\"location\" style=\"font-weight: 300\"><i mat-list-icon class=\"fa fa-globe-americas\"></i>USA</span>\n            <span class=\"nonprofit\" style=\"font-weight: 300\"><sup>NON-PROFIT</sup></span>\n          </mat-list-item>\n        </mat-list>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <div class=\"plank\" fxLayout=\"row\" fxLayoutGap=\"30px\">\n    <!--<div class=\"plank-img\">-->\n    <!--<img height=\"300\" width=\"auto\" src=\"../../../../assets/images/globe.jpg\">-->\n    <!--</div>-->\n    <div class=\"plank-content\" fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start\">\n      <div class=\"content-title\">EDUCATION</div>\n      <div class=\"content-msg\">\n        Steve completed his MBA in Corporate Finance at DePaul University - Charles H. Kellstadt\n        Graduate School of Business, with a concentration in International Business. He holds a BSIE in\n        Industrial and Systems Engineering from Illinois Institute of Technology.\n      </div>\n    </div>\n  </div>\n\n  <mat-divider></mat-divider>\n\n  <div class=\"plank\" fxLayout=\"row\" fxLayoutGap=\"30px\">\n    <!--<div class=\"plank-img\">-->\n    <!--<img height=\"300\" width=\"auto\" src=\"../../../../assets/images/globe.jpg\">-->\n    <!--</div>-->\n    <div class=\"plank-content\" fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start\">\n      <div class=\"content-title\">PERSONAL</div>\n      <div class=\"content-msg\">\n        He resides in Coral Gables, Florida with his wife, where they enjoy searching for antiques,\n        fishing, and their dogs.\n      </div>\n    </div>\n  </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/about/about.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  font-size: 44px;\n  line-height: 56px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  letter-spacing: -0.8px;\n  font-weight: 800;\n  margin-top: 40px; }\n\n.plank {\n  margin-bottom: 72px; }\n\n.plank-img {\n  width: 100%;\n  height: auto;\n  margin: auto; }\n\n.plank-img img {\n    border-radius: 7px;\n    width: inherit;\n    max-width: 400px; }\n\n.content-title {\n  font-weight: 800;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  color: #2b2b2b;\n  font-size: 24px;\n  padding-top: 2px;\n  padding-bottom: 2px; }\n\n.content-msg {\n  font-weight: lighter;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 16px;\n  line-height: 25px;\n  color: #4f5b66;\n  padding: 32px; }\n\n.odometer {\n  font-size: 99px;\n  margin-bottom: 16px; }\n\na {\n  color: #17664b !important;\n  font-weight: 800;\n  cursor: pointer !important; }\n\n.board-roles {\n  font-weight: lighter;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 16px;\n  line-height: 25px;\n  color: #4f5b66;\n  text-transform: uppercase;\n  z-index: -1; }\n\n.board-roles .company {\n    color: #17664b;\n    margin-right: 8px;\n    padding: 0 8px;\n    border-right: 1px solid #4f5b66;\n    font-weight: bold; }\n\n.board-roles .role {\n    margin-right: 8px;\n    padding: 0 8px;\n    border-right: 1px solid #4f5b66; }\n\n.board-roles .location {\n    font-weight: 600;\n    color: #4f5b66;\n    margin-right: 8px;\n    padding: 0 8px; }\n\n.board-roles .location i {\n      color: #4f5b66;\n      font-size: 14px;\n      padding: 0 !important;\n      width: 20px; }\n\n.board-roles .nonprofit {\n    color: darkred;\n    font-size: 14px; }\n"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
        var odometer = document.getElementById('odometer');
        var odometer2 = document.getElementById('odometer2');
        var odometer3 = document.getElementById('odometer3');
        setTimeout(function () {
            odometer.innerHTML = '700';
            odometer2.innerHTML = '20';
            odometer3.innerHTML = '30';
        }, 1000);
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/client-list/client-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/client-list/client-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div style=\"padding-top: 80px\" fxShow=\"true\" class=\"full-height\">\n\n  <mat-toolbar>\n    <mat-toolbar-row class=\"nav-bar\" fxLayoutAlign=\"center center\" style=\"background-color: #17664b;\">\n      <div class=\"nav-links\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n        <span class=\"nav-item\" style=\"font-size: 14px; color: #FFFFFF\"> Client List for Becker Business Strategies</span>\n      </div>\n    </mat-toolbar-row>\n  </mat-toolbar>\n\n  <div class=\"example-header\" fxLayout=\"row\">\n    <mat-form-field appearance=\"outline\">\n      <mat-icon matPrefix>search</mat-icon>\n      <input matInput (keyup)=\"applyFilter($event.target.value)\" label=\"Filter\">\n    </mat-form-field>\n    <!--<div>-->\n      <!--<button mat-mini-fab (click)=\"openDialog()\"><mat-icon>add</mat-icon></button>-->\n    <!--</div>-->\n  </div>\n  <div class=\"example-container\">\n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!--<ng-container matColumnDef=\"id\">-->\n      <!--<mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>-->\n      <!--<mat-cell *matCellDef=\"let user\">{{user._id}}</mat-cell>-->\n      <!--</ng-container>-->\n\n      <!--[Name Column]-->\n      <ng-container matColumnDef=\"name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let user\">{{user.name}}</mat-cell>\n      </ng-container>\n\n      <!--[Last Name Column]-->\n      <ng-container matColumnDef=\"last\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Last </mat-header-cell>\n        <mat-cell *matCellDef=\"let user\">{{user.last}}</mat-cell>\n      </ng-container>\n\n      <!--[Username Column]-->\n      <ng-container matColumnDef=\"email\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxHide.lt-md> Email </mat-header-cell>\n        <mat-cell *matCellDef=\"let user\" fxHide.lt-md>{{user.email}}</mat-cell>\n      </ng-container>\n\n      <!--[Email Column]-->\n      <ng-container matColumnDef=\"phone\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header fxHide.lt-md> Phone </mat-header-cell>\n        <mat-cell *matCellDef=\"let user\" fxHide.lt-md>{{user.phone}}</mat-cell>\n      </ng-container>\n\n      <!--[Password Column]-->\n      <!--<ng-container matColumnDef=\"password\">-->\n      <!--<mat-header-cell *matHeaderCellDef> Password </mat-header-cell>-->\n      <!--<mat-cell *matCellDef=\"let user\">{{user.password}}</mat-cell>-->\n      <!--</ng-container>-->\n\n      [Actions]\n      <ng-container matColumnDef=\"actions\">\n        <mat-header-cell *matHeaderCellDef>Actions</mat-header-cell>\n        <mat-cell *matCellDef=\"let user\">\n          <div fxLayout=\"row\">\n            <button mat-icon-button color=\"primary\" (click)=\"openMessage(user)\">\n              <i class=\"fa fa-envelope\"></i>\n            </button>\n            <button mat-icon-button color=\"warn\" (click)=\"deleteUser(user._id)\">\n              <i class=\"fa fa-trash-alt\"></i>\n            </button>\n          </div>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns\" (click)=\"onRowClicked(row)\"></mat-row>\n\n    </mat-table>\n    <mat-paginator [pageSizeOptions]=\"[10, 25, 100]\"></mat-paginator>\n    <!--<button mat-icon-button (click)=\"exportUsers()\"><mat-icon>file_download</mat-icon></button>-->\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/client-list/client-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/client-list/client-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  padding: 8px 24px 0; }\n\n.mat-form-field {\n  font-size: 14px;\n  width: 100%; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 100vh; }\n\n.mat-table .mat-column-action {\n    flex: 0 0 100px !important;\n    white-space: unset !important; }\n\n.mat-card {\n  width: 90%; }\n\n.mat-mini-fab {\n  background-color: #0BA5DB;\n  color: white; }\n\n.phone-responsive {\n  width: 100%; }\n\n.header {\n  font-weight: bold; }\n\n.nav-bar {\n  background-color: white;\n  height: 70px;\n  width: 100%; }\n\n.nav-bar .nav-links {\n    font-size: 14px;\n    font-weight: 300;\n    color: #2b2b2b; }\n\n.nav-bar .nav-links .nav-item {\n      color: #2b2b2b;\n      font-family: sans-serif;\n      padding: 20px; }\n\n.nav-bar .nav-links .nav-contact {\n      border: 3px solid #17664b;\n      border-radius: 25px;\n      padding: 5px 20px;\n      color: #2b2b2b;\n      width: 150px;\n      text-decoration: none; }\n\n.nav-bar .nav-links .nav-contact:hover, .nav-bar .nav-links .nav-contact:active {\n        background-color: #17664b;\n        color: #FFFFFF;\n        cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/client-list/client-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/client-list/client-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClientListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientListComponent", function() { return ClientListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_add_observable_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/add/observable/of */ "./node_modules/rxjs-compat/_esm5/add/observable/of.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _dialogs_message_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialogs/message/message.component */ "./src/app/dialogs/message/message.component.ts");
/* harmony import */ var src_app_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialogs/confirm/confirm.component */ "./src/app/dialogs/confirm/confirm.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { ConfirmDialogComponent} from '../../dialogs/delete-dialog/confirm-dialog.component';





var ClientListComponent = /** @class */ (function () {
    function ClientListComponent(dialog, us, as, snackBar, router) {
        this.dialog = dialog;
        this.us = us;
        this.as = as;
        this.snackBar = snackBar;
        this.router = router;
        this.displayedColumns = ['name', 'last', 'email', 'phone', 'actions'];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        this.users = [];
    }
    ClientListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.us.getUser().subscribe(function (data) {
            _this.dataSource.data = data;
            // console.log(data);
            for (var i = 0; i < data.length; i++) {
                // console.log(data[i]);
                _this.users.push(data[i]);
            }
        });
    };
    ClientListComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    };
    ClientListComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ClientListComponent.prototype.onRowClicked = function (row) {
        console.log('Row clicked: ', row);
        this.ngOnInit();
    };
    ClientListComponent.prototype.openMessage = function (row) {
        console.log(row.message);
        // console.log(user, user.name, user.last);
        var dialogRef = this.dialog.open(_dialogs_message_message_component__WEBPACK_IMPORTED_MODULE_6__["MessageComponent"], {
            width: '85%',
            height: 'auto',
            data: {
                name: row.name,
                last: row.last,
                email: row.email,
                phone: row.phone,
                message: row.message
            }
        });
    };
    ClientListComponent.prototype.deleteUser = function (_id) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_dialogs_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmComponent"], {
            width: 'auto',
            height: 'auto',
            data: {
                id: _id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.ngOnInit();
            //   this.as.deleteUser(_id)
            //     .subscribe(data => {
            //       if (data.success) {
            //         this.ngOnInit();
            //         this.snackBar.open('User has been deleted', '', {duration: 3000});
            //       } else{
            //         this.snackBar.open('ERROR', '',{duration:2000} )
            //       }
            //     });
            //
        });
        // this.router.navigate(['./admin']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], ClientListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], ClientListComponent.prototype, "sort", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuTrigger"])
    ], ClientListComponent.prototype, "trigger", void 0);
    ClientListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-list',
            template: __webpack_require__(/*! ./client-list.component.html */ "./src/app/components/client-list/client-list.component.html"),
            styles: [__webpack_require__(/*! ./client-list.component.scss */ "./src/app/components/client-list/client-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ClientListComponent);
    return ClientListComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"start\" fxLayoutGap=\"40px\">\n  <div class=\"header\">\n    Let's Connect.\n  </div>\n  <mat-divider></mat-divider>\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"start\" fxLayoutGap=\"40px\">\n    <div class=\"contact-msg\" fxFlex=\"50\" fxLayoutGap=\"24px\" *ngIf=\"messageSent == false\">\n      <div class=\"bbs-title\">\n        How may I help you?\n      </div>\n      <div class=\"bbs-subtitle\">\n        Send a message and let me know what I can do for you.\n      </div>\n      <div class=\"bbs-msg\" fxLayout=\"column\" fxLayoutGap=\"20px\" style=\"padding-left: 16px; text-decoration: none\" *ngFor=\"let b of bbs\">\n        <div>You can also reach me at: </div>\n        <a href=\"tel:{{b.phone}}\"> <div fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayoutAlign=\"start center\"><i class=\"fa fa-phone\"></i> <div>{{b.phone}}</div> </div></a>\n        <a href=\"mailto:{{b.email}}\"><div fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayoutAlign=\"start center\"><i class=\"fa fa-mail-bulk\"></i> <div>{{b.email}}</div> </div></a>\n        <a target=\"_blank\" href=\"https://linkedin.com/in/stephenwbecker/\"><div fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayoutAlign=\"start center\"><i class=\"fab fa-linkedin\"></i> <div>{{b.name}}</div></div></a>\n\n      </div>\n    </div>\n    <div class=\"contact-form\" fxFlex>\n      <ng-template [ngIf]=\"messageSent == false\" [ngIfElse]=\"ifMessageSent\">\n\n\n\n        <form #register (submit)=\"onRegisterSubmit(register)\" class=\"example-form example-full-width\">\n\n            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n              <mat-label>First Name</mat-label>\n              <input matInput type=\"text\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Name\" required=\"required\">\n              <mat-icon matPrefix class=\"form-icon\">account_box</mat-icon>\n            </mat-form-field>\n\n            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n              <mat-label>Last Name</mat-label>\n              <input matInput type=\"text\" [(ngModel)]=\"last\"  [ngModelOptions]=\"{standalone: true}\" placeholder=\"Last\" required=\"required\">\n              <mat-icon matPrefix class=\"form-icon\">perm_identity</mat-icon>\n            </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n            <mat-label>Email</mat-label>\n            <input matInput type=\"email\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"example@domain.com\" required=\"required\">\n            <mat-icon matPrefix class=\"form-icon\">alternate_email</mat-icon>\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n            <input matInput type=\"tel\" pattern=\"[\\+]\\d{2}[\\(]\\d{2}[\\)]\\d{4}[\\-]\\d{4}\" maxlength=\"10\" [(ngModel)]=\"phone\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"e.g. 3145869304\" required=\"required\">\n            <mat-label>Phone Number</mat-label>\n            <mat-icon matPrefix class=\"form-icon\">phone</mat-icon>\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n            <textarea matInput #input type=\"text\" maxlength=\"200\" [(ngModel)]=\"message\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"How can we help you?\" rows=\"10\" required=\"required\"></textarea>\n            <mat-hint align=\"end\">{{input.value?.length || 0}}/200</mat-hint>\n            <mat-icon matPrefix class=\"form-icon\">mail</mat-icon>\n          </mat-form-field>\n\n          <div fxLayoutAlign=\"center center\">\n            <button mat-raised-button type=\"submit\" color=\"primary\">Submit</button>\n          </div>\n\n        </form>\n\n      </ng-template>\n\n\n      <ng-template #ifMessageSent style=\"height: 100%\" class=\"example-full-width\">\n        <div fxLayoutAlign=\"center center\" class=\"example-full-width\" fxLayoutGap=\"20px\" fxLayout=\"column\">\n          <div class=\"bbs-title\" fxLayoutAlign=\"center center\"><i style=\"color: #17664b\" class=\"far fa-check-circle fa-2x\"></i> </div>\n          <div class=\"bbs-title\" fxLayoutAlign=\"center center\">Message Received!</div>\n          <div class=\"bbs-msg\" fxLayoutAlign=\"center center\">Thank you for reaching out! We will be in touch shortly.</div>\n        </div>\n\n      </ng-template>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  min-height: 100vh; }\n\n.example-form {\n  min-width: 150px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.mat-raised-button {\n  width: 100%;\n  color: white;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  border: none;\n  background-color: #17664b; }\n\n.form-icon {\n  margin-right: 8px; }\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_mailer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/mailer.service */ "./src/app/services/mailer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactComponent = /** @class */ (function () {
    function ContactComponent(as, vs, snackBar, mailer) {
        this.as = as;
        this.vs = vs;
        this.snackBar = snackBar;
        this.mailer = mailer;
        this.bbs = [
            {
                phone: '314-304-8880',
                name: 'Stephen W. Becker',
                email: 'swbdesk@aol.com'
            }
        ];
        this.messageSent = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.messageSent = false;
    };
    ContactComponent.prototype.onRegisterSubmit = function (register) {
        var _this = this;
        var client = {
            name: this.name,
            last: this.last,
            email: this.email,
            phone: this.phone,
            message: this.message
        };
        if (!this.vs.validateRegister(client)) {
            this.snackBar.open('Please fill all fields', 'close', { duration: 2000 });
            return false;
        }
        // Validate Email
        if (!this.vs.validateEmail(client.email)) {
            this.snackBar.open('Please enter a valid email', 'close', { duration: 2000 });
            return false;
        }
        // Register User
        this.as.registerUser(client).subscribe(function (data) {
            if (data.success) {
                _this.snackBar.open('Thank you for reaching out. We will be in touch shortly!', '', { duration: 3000 });
                console.log(client);
                _this.mailer.newClient(client).subscribe(function (mail) {
                    if (mail.success) {
                        console.log('Message sending...');
                    }
                });
            }
            else {
                _this.snackBar.open('Something went wrong', 'TRY AGAIN', { duration: 3000 });
                console.log('error: ');
            }
        });
        register.reset();
        this.messageSent = true;
    };
    ContactComponent.prototype.resetForm = function () {
        this.ngOnInit();
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services_mailer_service__WEBPACK_IMPORTED_MODULE_4__["MailerService"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home\" fxLayout=\"column\">\n\n  <!--SECTION 1: HERO-->\n  <section class=\"hero\" id=\"hero\" fxLayout=\"row\" fxLayout.lt-md=\"column\">\n\n    <!--SHOW IF WINDOW IS SMALLER THAN MEDIUM-->\n    <div class=\"hero-content\" fxFlex=\"70\" fxLayoutAlign=\"center center\" fxHide fxShow.lt-md>\n      <div class=\"hero-msg-container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n        <div class=\"hero-msg\" fxLayoutGap=\"30px\"  fxLayoutAlign=\"center center\" fxLayout=\"column\" style=\"margin-top: 24px; width: 80%\">\n          <div class=\"header\" fxLayoutAlign=\"center center\" style=\"color: white; font-weight: 300; border-left: 0 !important;\"> Providing Strategic Consulting.</div>\n          <div class=\"bbs-msg\" fxLayoutAlign=\"center center\" style=\"color: white;\"> Get your business to the next level.</div>\n\n          <div class=\"bbs-actions\" fxLayout=\"column\" fxLayoutGap=\"16px\">\n            <button mat-raised-button routerLink=\"../about\" class=\"bbs-action-raised\">LEARN MORE</button>\n            <button mat-button style=\"color: #17664b;\" routerLink=\"../contact\">CONTACT</button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <!--HIDE IF WINDOW IS SMALLER THAN MEDIUM-->\n    <div class=\"hero-img\" fxFlex=\"10\" fxShow fxHide.lt-md>\n      <img height=\"500px\" width=\"auto\" src=\"../../../assets/images/consulting-above.jpg\">\n    </div>\n    <!--SHOW IF WINDOW IS SMALLER THAN MEDIUM-->\n    <div class=\"parallax2\"  fxHide fxShow.lt-md fxLayoutAlign=\"center center\"></div>\n\n    <!--SHOW IF WINDOW IS LARGER THAN MEDIUM-->\n\n    <div class=\"hero-content\" fxFlex=\"90\" fxLayoutAlign=\"end center\" fxShow fxHide.lt-md>\n      <div class=\"hero-msg-container\" fxLayout=\"column\" fxLayoutAlign=\"center end\">\n        <div class=\"hero-msg\" fxLayoutGap=\"20px\" fxLayout=\"column\" fxLayoutAlign=\"center end\">\n        <div class=\"header\" style=\"color: white; font-weight: 300; border-left: 0;\">\n          Get your business to the next level.\n        </div>\n        <div class=\"hero-subtitle\" >\n          I can become an integral part of your business development initiative or an extension of your current work.\n          We will decide together the level of involvement you want and need.\n        </div>\n          <div class=\"spacer\"></div>\n        <div class=\"bbs-actions\" fxLayout=\"row\" fxLayoutAlign=\"end\" fxLayoutGap=\"16px\">\n          <button mat-button style=\"color: #17664b;\" routerLink=\"../contact\" fxHide.lt-sm>CONTACT</button>\n          <button mat-raised-button routerLink=\"../about\" class=\"bbs-action-raised\">LEARN MORE</button>\n\n        </div>\n      </div>\n\n      </div>\n    </div>\n  </section>\n  <!--SECTION 2: EXPERTISE-->\n  <section class=\"expertise\" id=\"expertise\" fxLayoutAlign=\"start\" fxLayout=\"column\" fxLayout.lt-md=\"column\">\n    <div class=\"container\" fxLayout=\"column\">\n\n      <div class=\"header\" fxLayoutAlign=\"center center\" style=\"margin-bottom: 40px; border-left: 0;font-weight: 300;\">Let me show you what I can do for your business</div>\n\n      <div class=\"expertise-msg\" fxLayout=\"column\" fxHide.lt-md style=\"margin-top: 20px;\">\n\n        <div class=\"expertise-planks\" fxFlex fxLayoutAlign=\"space-evenly center\" fxLayout=\"row\" fxLayoutGap=\"15px\">\n          <mat-card class=\"plank mat-elevation-z0\" fxLayout=\"row\" fxLayoutAlign=\"center center\" *ngFor=\"let plank of planks\" (click)=\"showMessage(plank)\">\n            {{plank.title}}\n          </mat-card>\n        </div>\n\n\n\n        <div class=\"expertise-description\" fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"30px\">\n          <div class=\"expertise-banner\">\n            <img height=\"300px\" width=\"auto\" src=\"{{plankimg}}\">\n          </div>\n          <div class=\"bbs-msg\">{{plankmsg}}</div>\n        </div>\n\n      </div>\n\n      <!--SHOW IN SMALL SCREENS-->\n      <div class=\"expertise-accordion\" fxHide fxShow.lt-md *ngFor=\"let plank of planks\" fxLayoutGap=\"2px\">\n        <div>\n          <mat-accordion class=\"example-headers-align\">\n            <mat-expansion-panel>\n              <mat-expansion-panel-header>\n                <mat-panel-description>\n                  {{plank.title}}\n                  <mat-icon>{{plank.icon}}</mat-icon>\n                </mat-panel-description>\n              </mat-expansion-panel-header>\n              {{plank.msg}}\n            </mat-expansion-panel>\n          </mat-accordion>\n        </div>\n      </div>\n      </div>\n\n  </section>\n\n\n<!--SECTION 3:contact-->\n<section class=\"contact\" id=\"contact\" fxLayout=\"column\" fxLayoutGap=\"36px\">\n\n  <div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"start\">\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"start\" fxLayoutGap=\"40px\">\n      <div class=\"contact-msg\" fxFlex=\"50\" fxLayoutGap=\"24px\" *ngIf=\"messageSent == false\">\n        <div class=\"bbs-title\" style=\"color: white;\">\n          How may I help you?\n        </div>\n        <div class=\"bbs-subtitle\" style=\"color:lightgray !important;\">\n          Fill out the form and let me know what I can do for you.\n        </div>\n        <div class=\"bbs-msg\" fxLayout=\"column\" fxLayoutGap=\"20px\" style=\"padding-left: 16px; color:lightgray; text-decoration: none\" *ngFor=\"let b of bbs\">\n          <div>You can also reach me at: </div>\n          <a href=\"tel:{{b.phone}}\"> <div fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayoutAlign=\"start center\"><i class=\"fa fa-phone\"></i> <div>{{b.phone}}</div> </div></a>\n          <a href=\"mailto:{{b.email}}\"><div fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayoutAlign=\"start center\"><i class=\"fa fa-mail-bulk\"></i> <div>{{b.email}}</div> </div></a>\n          <a target=\"_blank\" href=\"https://linkedin.com/in/stephenwbecker/\"><div fxLayoutGap=\"10px\" fxLayout=\"row\" fxLayoutAlign=\"start center\"><i class=\"fab fa-linkedin\"></i> <div>{{b.name}}</div></div></a>\n\n        </div>\n      </div>\n      <div class=\"contact-form\" fxFlex>\n        <ng-template [ngIf]=\"messageSent == false\" [ngIfElse]=\"ifMessageSent\">\n\n\n\n          <form #register (submit)=\"onRegisterSubmit(register)\" class=\"example-form example-full-width\">\n\n            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n              <mat-label>First Name</mat-label>\n              <input matInput type=\"text\" [(ngModel)]=\"name\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Name\" required=\"required\">\n              <mat-icon matPrefix class=\"form-icon\">account_box</mat-icon>\n            </mat-form-field>\n\n            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n              <mat-label>Last Name</mat-label>\n              <input matInput type=\"text\" [(ngModel)]=\"last\"  [ngModelOptions]=\"{standalone: true}\" placeholder=\"Last\" required=\"required\">\n              <mat-icon matPrefix class=\"form-icon\">perm_identity</mat-icon>\n            </mat-form-field>\n\n            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n              <mat-label>Email</mat-label>\n              <input matInput type=\"email\" [(ngModel)]=\"email\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"example@domain.com\" required=\"required\">\n              <mat-icon matPrefix class=\"form-icon\">alternate_email</mat-icon>\n            </mat-form-field>\n\n            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n              <input matInput type=\"tel\" pattern=\"[\\+]\\d{2}[\\(]\\d{2}[\\)]\\d{4}[\\-]\\d{4}\" maxlength=\"10\" [(ngModel)]=\"phone\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"e.g. 3145869304\" required=\"required\">\n              <mat-label>Phone Number</mat-label>\n              <mat-icon matPrefix class=\"form-icon\">phone</mat-icon>\n            </mat-form-field>\n\n            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n              <textarea matInput #input type=\"text\" maxlength=\"200\" [(ngModel)]=\"message\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"How can we help you?\" rows=\"10\" required=\"required\"></textarea>\n              <mat-hint align=\"end\">{{input.value?.length || 0}}/200</mat-hint>\n              <mat-icon matPrefix class=\"form-icon\">mail</mat-icon>\n            </mat-form-field>\n\n            <div fxLayoutAlign=\"center center\" class=\"bbs-actions\">\n              <button mat-raised-button  class=\"bbs-action-raised\" style=\"width: 100%;\" type=\"submit\" color=\"primary\">Submit</button>\n            </div>\n\n          </form>\n\n        </ng-template>\n\n\n        <ng-template #ifMessageSent style=\"height: 100%\" class=\"example-full-width\">\n          <div fxLayoutAlign=\"center center\" class=\"example-full-width\" fxLayoutGap=\"20px\" fxLayout=\"column\">\n            <div class=\"bbs-title\" fxLayoutAlign=\"center center\"><i style=\"color: white\" class=\"far fa-check-circle fa-2x\"></i> </div>\n            <div class=\"bbs-title\" fxLayoutAlign=\"center center\">Message Received!</div>\n            <div class=\"bbs-msg\" fxLayoutAlign=\"center center\">Thank you for reaching out! We will be in touch shortly.</div>\n          </div>\n\n        </ng-template>\n      </div>\n    </div>\n  </div>\n\n</section>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}\n.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}\n.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}\n.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}\n.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}\n.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}\n.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}\n.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}\n.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}\n.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}\n.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}\n.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}\n.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}\n.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}\n.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}\n.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}\n.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}\n.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}\n.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}\n.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}\n.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}\n.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}\n.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}\n.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}\n.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}\n.mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-badge-small .mat-badge-content{font-size:6px}\n.mat-badge-large .mat-badge-content{font-size:24px}\n.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}\n.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}\n.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}\n.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}\n.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}\n.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}\n.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}\n.mat-bottom-sheet-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}\n.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-card-title{font-size:24px;font-weight:400}\n.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}\n.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-checkbox-layout .mat-checkbox-label{line-height:24px}\n.mat-chip{font-size:13px;line-height:18px}\n.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}\n.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-header-cell{font-size:12px;font-weight:500}\n.mat-cell,.mat-footer-cell{font-size:14px}\n.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-calendar-body{font-size:13px}\n.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}\n.mat-calendar-table-header th{font-size:11px;font-weight:400}\n.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}\n.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-form-field-wrapper{padding-bottom:1.34375em}\n.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}\n.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}\n.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}\n.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}\n.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}\n.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}\n.mat-form-field-label{top:1.34375em}\n.mat-form-field-underline{bottom:1.34375em}\n.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}\n.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}\n.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}\n.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}\n.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}\n.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}\n.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}\n.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}\n.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}\n.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}\n.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}\ninput.mat-input-element{margin-top:-.0625em}\n.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}\n.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}\n.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-select-trigger{height:1.125em}\n.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}\n.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-step-label{font-size:14px;font-weight:400}\n.mat-step-label-selected{font-size:14px;font-weight:500}\n.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}\n.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}\n.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}\n.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}\n.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}\n.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}\n.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}\n.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}\n.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}\n.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}\n.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}\n.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}\n.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}\n.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}\n.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}\n.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-tree-node{font-weight:400;font-size:14px}\n.mat-ripple{overflow:hidden}\n.mat-ripple.mat-ripple-unbounded{overflow:visible}\n.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}\n@media screen and (-ms-high-contrast:active){.mat-ripple-element{display:none}}\n.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}\n.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}\n.cdk-overlay-container{position:fixed;z-index:1000}\n.cdk-overlay-container:empty{display:none}\n.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}\n.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}\n.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}\n@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}\n.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}\n.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}\n.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}\n.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}\n@keyframes cdk-text-field-autofill-start{/*!*/}\n@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}\n@keyframes cdk-text-field-autofill-end{/*!*/}\n.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}\ntextarea.cdk-textarea-autosize{resize:none}\ntextarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}\n.mat-ripple-element{background-color:rgba(0,0,0,.1)}\n.mat-option{color:rgba(0,0,0,.87)}\n.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}\n.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}\n.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}\n.mat-optgroup-label{color:rgba(0,0,0,.54)}\n.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}\n.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}\n.mat-pseudo-checkbox::after{color:#fafafa}\n.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ff4081}\n.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}\n.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}\n.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}\n.mat-theme-loaded-marker{display:none}\n.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}\n.mat-badge-content{color:#fff;background:#3f51b5}\n.mat-badge-accent .mat-badge-content{background:#ff4081;color:#fff}\n.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}\n.mat-badge{position:relative}\n.mat-badge-hidden .mat-badge-content{display:none}\n.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}\n.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}\n.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}\n@media screen and (-ms-high-contrast:active){.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}\n.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}\n.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}\n.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}\n[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}\n.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}\n[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}\n[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}\n[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}\n.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}\n@media screen and (-ms-high-contrast:active){.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}}\n.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}\n.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}\n.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}\n[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}\n.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}\n[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}\n[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}\n[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}\n.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}\n@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content{outline:solid 1px;border-radius:0}}\n.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}\n.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}\n.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}\n[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}\n.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}\n[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}\n[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}\n[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}\n.mat-bottom-sheet-container{background:#fff;color:rgba(0,0,0,.87)}\n.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}\n.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#3f51b5}\n.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ff4081}\n.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}\n.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}\n.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(63,81,181,.12)}\n.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,64,129,.12)}\n.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}\n.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}\n.mat-button.mat-primary .mat-ripple-element,.mat-icon-button.mat-primary .mat-ripple-element,.mat-stroked-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.1)}\n.mat-button.mat-accent .mat-ripple-element,.mat-icon-button.mat-accent .mat-ripple-element,.mat-stroked-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.1)}\n.mat-button.mat-warn .mat-ripple-element,.mat-icon-button.mat-warn .mat-ripple-element,.mat-stroked-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}\n.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}\n.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}\n.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:#fff}\n.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}\n.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}\n.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#3f51b5}\n.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ff4081}\n.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}\n.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}\n.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}\n.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.1)}\n.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}\n.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.2)}\n.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.2)}\n.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}\n.mat-button-toggle{color:rgba(0,0,0,.38)}\n.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}\n.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}\n.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}\n.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}\n.mat-card{background:#fff;color:rgba(0,0,0,.87)}\n.mat-card-subtitle{color:rgba(0,0,0,.54)}\n.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}\n.mat-checkbox-checkmark{fill:#fafafa}\n.mat-checkbox-checkmark-path{stroke:#fafafa!important}\n@media screen and (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}\n.mat-checkbox-mixedmark{background-color:#fafafa}\n.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#3f51b5}\n.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ff4081}\n.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}\n.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}\n@media screen and (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}\n@media screen and (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(63,81,181,.26)}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,64,129,.26)}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}\n.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}\n.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}\n.mat-chip.mat-standard-chip .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ff4081;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}\n.mat-table{background:#fff}\n.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}\nmat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}\n.mat-header-cell{color:rgba(0,0,0,.54)}\n.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}\n.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}\n.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}\n.mat-calendar-table-header{color:rgba(0,0,0,.38)}\n.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}\n.mat-calendar-body-label{color:rgba(0,0,0,.54)}\n.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}\n.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}\n.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}\n.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}\n.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}\n.mat-calendar-body-selected{background-color:#3f51b5;color:#fff}\n.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(63,81,181,.4)}\n.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ff4081;color:#fff}\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,64,129,.4)}\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-toggle-active{color:#3f51b5}\n.mat-datepicker-toggle-active.mat-accent{color:#ff4081}\n.mat-datepicker-toggle-active.mat-warn{color:#f44336}\n.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}\n.mat-divider{border-top-color:rgba(0,0,0,.12)}\n.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}\n.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}\n.mat-action-row{border-top-color:rgba(0,0,0,.12)}\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}\n@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}\n.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}\n.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}\n.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}\n.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}\n.mat-form-field-label{color:rgba(0,0,0,.6)}\n.mat-hint{color:rgba(0,0,0,.6)}\n.mat-form-field.mat-focused .mat-form-field-label{color:#3f51b5}\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ff4081}\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}\n.mat-focused .mat-form-field-required-marker{color:#ff4081}\n.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}\n.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#3f51b5}\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ff4081}\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}\n.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}\n.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}\n.mat-error{color:#f44336}\n.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}\n.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}\n.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}\n.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}\n.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}\n.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}\n.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}\n.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#3f51b5}\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ff4081}\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}\n.mat-icon.mat-primary{color:#3f51b5}\n.mat-icon.mat-accent{color:#ff4081}\n.mat-icon.mat-warn{color:#f44336}\n.mat-input-element:disabled{color:rgba(0,0,0,.38)}\n.mat-input-element{caret-color:#3f51b5}\n.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-accent .mat-input-element{caret-color:#ff4081}\n.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}\n.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}\n.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}\n.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}\n.mat-list-item-disabled{background-color:#eee}\n.mat-list-option.mat-list-item-focus,.mat-list-option:hover,.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}\n.mat-menu-panel{background:#fff}\n.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}\n.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}\n.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}\n.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}\n.mat-paginator{background:#fff}\n.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}\n.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}\n.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}\n.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}\n.mat-progress-bar-background{fill:#c5cae9}\n.mat-progress-bar-buffer{background-color:#c5cae9}\n.mat-progress-bar-fill::after{background-color:#3f51b5}\n.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ff80ab}\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ff80ab}\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ff4081}\n.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}\n.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}\n.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}\n.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}\n.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}\n.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#3f51b5}\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(63,81,181,.26)}\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}\n.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ff4081}\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,64,129,.26)}\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}\n.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}\n.mat-select-content,.mat-select-panel-done-animating{background:#fff}\n.mat-select-value{color:rgba(0,0,0,.87)}\n.mat-select-placeholder{color:rgba(0,0,0,.42)}\n.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}\n.mat-select-arrow{color:rgba(0,0,0,.54)}\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}\n.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}\n.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}\n.mat-drawer.mat-drawer-push{background-color:#fff}\n.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#e91e63}\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(233,30,99,.5)}\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle .mat-ripple-element{background-color:rgba(233,30,99,.12)}\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#3f51b5}\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(63,81,181,.5)}\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.12)}\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}\n.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}\n.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}\n.mat-slide-toggle-thumb{background-color:#fafafa}\n.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}\n.mat-slider-track-background{background-color:rgba(0,0,0,.26)}\n.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#3f51b5}\n.mat-primary .mat-slider-thumb-label-text{color:#fff}\n.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ff4081}\n.mat-accent .mat-slider-thumb-label-text{color:#fff}\n.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}\n.mat-warn .mat-slider-thumb-label-text{color:#fff}\n.mat-slider-focus-ring{background-color:rgba(255,64,129,.2)}\n.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}\n.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}\n.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}\n.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}\n.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}\n.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}\n.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}\n.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}\n.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}\n.mat-step-header .mat-step-icon{background-color:#3f51b5;color:#fff}\n.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}\n.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}\n.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}\n.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}\n.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}\n.mat-sort-header-arrow{color:#757575}\n.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}\n.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}\n.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}\n.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}\n.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}\n.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}\n.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}\n.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:#fff}\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\n.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}\n.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#3f51b5}\n.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}\n.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ff4081}\n.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:#fff}\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:#fff}\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(255,255,255,.12)}\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\n.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}\n.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}\n.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}\n.mat-toolbar.mat-primary{background:#3f51b5;color:#fff}\n.mat-toolbar.mat-accent{background:#ff4081;color:#fff}\n.mat-toolbar.mat-warn{background:#f44336;color:#fff}\n.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}\n.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}\n.mat-toolbar .mat-input-element{caret-color:currentColor}\n.mat-tooltip{background:rgba(97,97,97,.9)}\n.mat-tree{background:#fff}\n.mat-tree-node{color:rgba(0,0,0,.87)}\n.mat-snack-bar-container{background:#323232;color:#fff}\n.mat-simple-snackbar-action{color:#ff4081}\n/* Coolors Exported Palette - coolors.co/17664b-2b2b2b-ffffff-aa8946-33658a */\n/* HSL */\n/* RGB */\nbody {\n  margin: 0;\n  text-decoration: none; }\n.full-height {\n  min-height: 100vh; }\n.header {\n  font-size: 44px;\n  line-height: 56px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  letter-spacing: -0.8px;\n  font-weight: 800;\n  margin-top: 40px;\n  padding-left: 24px;\n  border-left: 10px solid #17664b; }\n.bbs-title, h1 {\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  color: #2b2b2b;\n  font-size: 32px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin-left: 16px; }\n.bbs-subtitle, h2 {\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  color: #17664b;\n  font-size: 18px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin-left: 16px; }\n.bbs-line, h3 {\n  font-weight: 400;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  color: #2b2b2b;\n  font-size: 16px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin-left: 16px; }\n.bbs-msg, h5, h6 {\n  font-weight: lighter;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 16px;\n  line-height: 22px;\n  color: #4f5b66; }\n.container {\n  padding-top: 100px;\n  padding-bottom: 40px;\n  margin: auto;\n  width: 90%; }\n.spacer {\n  flex: 1 1 auto; }\na {\n  text-decoration: none !important; }\n.example-form {\n  min-width: 150px;\n  width: 100%; }\n.example-full-width {\n  width: 100%; }\n.example-half-width {\n  min-width: 150px;\n  width: 50%; }\n.bbs-actions {\n  width: 100%; }\n.bbs-actions .bbs-action-raised {\n    background-color: #17664b;\n    color: white;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    border: none; }\n.bbs-actions .bbs-action-stroked {\n    color: #17664b;\n    border-color: #17664b; }\n.alert-success, .alert-danger {\n  width: 90% !important;\n  margin: auto !important; }\nform {\n  background-color: white;\n  padding: 36px; }\nform a {\n    text-decoration: none; }\n#contact {\n  height: auto;\n  padding: 60px 0 100px;\n  background-color: #2b2b2b; }\n#contact .contact-form .submit-button {\n    border-radius: 0 10px 10px 0;\n    background-color: #17664b;\n    width: auto;\n    height: 100%;\n    padding: 16px;\n    margin: 8px 0;\n    color: white;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif; }\n.hero {\n  background-color: #1e242e;\n  margin-top: 40px; }\n.hero .hero-content {\n    height: 500px;\n    padding: 20px 0;\n    background: linear-gradient(-65deg, rgba(30, 36, 46, 0.97) 65%, transparent 65%); }\n.hero .hero-content .hero-msg-container {\n      width: 80%;\n      height: auto;\n      padding: 20px 0; }\n.hero .hero-content .hero-msg-container .hero-msg {\n        width: 80%;\n        padding: 5rem 3rem;\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif; }\n.hero .hero-content .hero-msg-container .hero-msg .bbs-title {\n          margin-left: 0; }\n.hero .hero-content .hero-msg-container .hero-msg .hero-header {\n          color: white;\n          font-size: 36px;\n          text-transform: capitalize;\n          font-weight: 100; }\n.hero .hero-content .hero-msg-container .hero-msg .hero-title {\n          font: 36px 100 white; }\n.hero .hero-content .hero-msg-container .hero-msg .hero-subtitle {\n          font-weight: 400;\n          font-size: 16px;\n          color: white;\n          width: 80%; }\n#expertise {\n  width: auto;\n  height: auto;\n  color: #2b2b2b; }\n#expertise .expertise-accordion {\n    width: 100%;\n    margin: 0; }\n#expertise .expertise-accordion .example-headers-align .mat-expansion-panel-header-title,\n    #expertise .expertise-accordion .example-headers-align .mat-expansion-panel-header-description {\n      flex-basis: 0; }\n#expertise .expertise-accordion .example-headers-align .mat-expansion-panel-header-description {\n      justify-content: space-between;\n      align-items: center; }\n#expertise .expertise-msg {\n    width: 100%;\n    margin-left: 30px;\n    margin-bottom: 40px; }\n#expertise .expertise-msg .expertise-planks {\n      width: 100%;\n      margin-bottom: 20px; }\n#expertise .expertise-msg .expertise-planks .plank {\n        width: 100%;\n        height: 60px;\n        padding: 16px;\n        border-bottom: 1px solid gray;\n        color: #2b2b2b;\n        font-size: 16px;\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n        font-weight: 400;\n        text-transform: uppercase;\n        letter-spacing: 1px; }\n#expertise .expertise-msg .expertise-planks .plank:hover {\n          border-bottom: 3px solid #17664b; }\n#expertise .expertise-msg .expertise-planks .plank:focus {\n          color: white;\n          background-color: #17664b;\n          border-bottom: 1px solid #17664b; }\n#expertise .expertise-msg .expertise-description {\n      padding: 0 24px;\n      margin-top: 30px;\n      width: 90%; }\n#expertise .expertise-msg .expertise-description .bbs-msg {\n        border-top: 3px solid #17664b;\n        padding: 40px;\n        width: 80%;\n        font-size: 24px;\n        line-height: 28px;\n        font-weight: 400; }\n#expertise .expertise-banner {\n    z-index: -1;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    width: 100%;\n    margin-top: 30px;\n    max-width: 1600px;\n    height: 30%; }\n#expertise .expertise-banner img {\n      border-radius: 5px;\n      width: 80%; }\n.parallax2 {\n  background-image: url('consulting-above.jpg');\n  height: 350px;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover; }\nsection {\n  height: auto;\n  width: 100%;\n  scroll-behavior: smooth; }\nsection .section-header {\n    margin-top: 32px; }\nsection .small-header {\n    font-size: 24px;\n    font-weight: 800;\n    border: 3px solid #17664b;\n    padding: 30px; }\n#animation {\n  color: #17664b;\n  font-size: 18px;\n  margin: auto;\n  -webkit-animation: arrow 4s infinite;\n          animation: arrow 4s infinite; }\n@keyframes arrow {\n  0% {\n    top: 0; }\n  25% {\n    top: 10px; }\n  50% {\n    top: 0; }\n  75% {\n    top: 10px; }\n  100% {\n    top: 0; } }\n@-webkit-keyframes arrow {\n  0% {\n    top: 0; }\n  25% {\n    top: 10px; }\n  50% {\n    top: 0; }\n  75% {\n    top: 10px; }\n  100% {\n    top: 0; } }\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_mailer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/mailer.service */ "./src/app/services/mailer.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = /** @class */ (function () {
    function HomeComponent(as, vs, snackBar, mailer, router) {
        this.as = as;
        this.vs = vs;
        this.snackBar = snackBar;
        this.mailer = mailer;
        this.router = router;
        this.planks = [
            {
                number: 1,
                title: 'Mentoring',
                icon: 'chat_bubble',
                msg: ' As someone who has already “been there”, ' +
                    'I enjoy imparting my work experiences on others to help guide them along the way.' +
                    ' Acting as a sounding board as well as a role model helps me to enhance the value of developing talent and ' +
                    'gives them the opportunity to question and develop their own skill set.',
                button: 'Learn More',
                img: '../../assets/images/mentoring.jpg'
            },
            {
                number: 2,
                title: 'International',
                icon: 'airplanemode_active',
                msg: 'As an executive who has worked and developed businesses in countries around the world, ' +
                    'I am able to connect with cultures at various levels and understand their unique ways of doing business. ' +
                    'By creating an organizational climate that pays attention to cultural differences, yet understands and pursues ' +
                    'corporate objectives, a successful venture is created.',
                link: 'Learn More',
                img: '../../assets/images/globe.jpg'
            },
            {
                number: 3,
                title: 'Metrics',
                icon: 'bar_chart',
                msg: 'Utilizing a drive to manage by the numbers, I work to improve productivity and utilization of the business. ' +
                    'This includes eliminating waste, reducing costs through lean manufacturing techniques, and managing the supply chain.',
                link: 'Learn More',
                img: '../../assets/images/metrics-phone.jpg'
            },
            {
                number: 4,
                title: 'Strategy',
                icon: 'trending_up',
                msg: ' I develop courses of action that strengthen a company’s competitive position.' +
                    ' This includes market and industry leadership, as well as providing direction and motivation the organization.',
                link: 'Learn More',
                img: '../../assets/images/mentoring2.jpg'
            },
            {
                number: 5,
                title: 'Railway',
                icon: 'directions_railway',
                msg: 'As a seasoned executive who has worked and developed railway business in North America and countries around the world, ' +
                    'both on the Mechanical as well as the Infrastructure side, ' +
                    'I am able to connect with organizations at various levels and understand their unique ways of doing business.' +
                    ' The globalization of the supply base makes understanding the international players very important.',
                link: 'Learn More',
                img: '../../assets/images/trains-sunset.jpg'
            }
        ];
        this.bbs = [
            {
                phone: '314-304-8880',
                name: 'Stephen W. Becker',
                email: 'swbdesk@aol.com'
            }
        ];
        this.messageSent = false;
        this.clicked = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.messageSent = false;
        this.plankmsg = this.planks[0].msg;
        this.plankimg = this.planks[0].img;
    };
    HomeComponent.prototype.onRegisterSubmit = function (register) {
        var _this = this;
        var client = {
            name: this.name,
            last: this.last,
            email: this.email,
            phone: this.phone,
            message: this.message
        };
        if (!this.vs.validateRegister(client)) {
            this.snackBar.open('Please fill all fields', 'close', { duration: 2000 });
            return false;
        }
        // Validate Email
        if (!this.vs.validateEmail(client.email)) {
            this.snackBar.open('Please enter a valid email', 'close', { duration: 2000 });
            return false;
        }
        // Register User
        this.as.registerUser(client).subscribe(function (data) {
            if (data.success) {
                _this.snackBar.open('Thank you for reaching out. We will be in touch shortly!', '', { duration: 3000 });
                console.log(client);
                _this.mailer.newClient(client).subscribe(function (mail) {
                    if (mail.success) {
                        console.log('Message sending...');
                    }
                });
            }
            else {
                _this.snackBar.open('Something went wrong', 'TRY AGAIN', { duration: 3000 });
                console.log('error: ');
            }
        });
        register.reset();
        this.messageSent = true;
    };
    HomeComponent.prototype.resetForm = function () {
        this.ngOnInit();
    };
    HomeComponent.prototype.showMessage = function (plank) {
        console.log(plank);
        this.plankmsg = plank.msg;
        this.plankimg = plank.img;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _services_mailer_service__WEBPACK_IMPORTED_MODULE_4__["MailerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/planks/international/international.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/components/planks/international/international.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/components/planks/international/international.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/components/planks/international/international.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/planks/international/international.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/planks/international/international.component.ts ***!
  \****************************************************************************/
/*! exports provided: InternationalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InternationalComponent", function() { return InternationalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InternationalComponent = /** @class */ (function () {
    function InternationalComponent() {
    }
    InternationalComponent.prototype.ngOnInit = function () {
    };
    InternationalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-international',
            template: __webpack_require__(/*! ./international.component.html */ "./src/app/components/planks/international/international.component.html"),
            styles: [__webpack_require__(/*! ./international.component.scss */ "./src/app/components/planks/international/international.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InternationalComponent);
    return InternationalComponent;
}());



/***/ }),

/***/ "./src/app/components/planks/mentoring/mentoring.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/planks/mentoring/mentoring.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"plank\" id=\"mentoring\" fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"30px\">\n    <div class=\"plank-content\" fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start\">\n      <div class=\"content-title\">Mentoring</div>\n      <div class=\"content-msg\">\n        As someone who has already “been there”,<br>\n        I enjoy imparting my work experiences on others to help guide them along the way.\n        Acting as a sounding board as well as a role model helps me to enhance the value of developing\n        talent and gives them the opportunity to question and develop their own skill set.\n      </div>\n    </div>\n    <div class=\"plank-img\" fxHide.lt-md>\n      <img height=\"300\" width=\"auto\" src=\"../../../../assets/images/consulting-above.jpg\">\n    </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/planks/mentoring/mentoring.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/planks/mentoring/mentoring.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/planks/mentoring/mentoring.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/planks/mentoring/mentoring.component.ts ***!
  \********************************************************************/
/*! exports provided: MentoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MentoringComponent", function() { return MentoringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MentoringComponent = /** @class */ (function () {
    function MentoringComponent() {
    }
    MentoringComponent.prototype.ngOnInit = function () {
    };
    MentoringComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mentoring',
            template: __webpack_require__(/*! ./mentoring.component.html */ "./src/app/components/planks/mentoring/mentoring.component.html"),
            styles: [__webpack_require__(/*! ./mentoring.component.scss */ "./src/app/components/planks/mentoring/mentoring.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MentoringComponent);
    return MentoringComponent;
}());



/***/ }),

/***/ "./src/app/components/planks/metrics/metrics.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/planks/metrics/metrics.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"plank\" fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayout.lt-md=\"column\">\n\n    <div class=\"plank-content\" fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start\">\n      <div class=\"content-title\">Metrics</div>\n      <div class=\"content-msg\">\n        Utilizing a drive to manage by the numbers,\n        I work to improve productivity and utilization of the business.\n        This includes eliminating waste, reducing costs through lean manufacturing techniques,\n        and managing the supply chain.\n      </div>\n    </div>\n    <div class=\"plank-img\" fxHide.lt-md>\n      <img height=\"300\" width=\"auto\" src=\"../../../../assets/images/metrics-phone.jpg\">\n    </div>\n  </div>\n\n\n"

/***/ }),

/***/ "./src/app/components/planks/metrics/metrics.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/planks/metrics/metrics.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/planks/metrics/metrics.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/planks/metrics/metrics.component.ts ***!
  \****************************************************************/
/*! exports provided: MetricsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetricsComponent", function() { return MetricsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MetricsComponent = /** @class */ (function () {
    function MetricsComponent() {
    }
    MetricsComponent.prototype.ngOnInit = function () {
    };
    MetricsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-metrics',
            template: __webpack_require__(/*! ./metrics.component.html */ "./src/app/components/planks/metrics/metrics.component.html"),
            styles: [__webpack_require__(/*! ./metrics.component.scss */ "./src/app/components/planks/metrics/metrics.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MetricsComponent);
    return MetricsComponent;
}());



/***/ }),

/***/ "./src/app/components/planks/plank-home/plank-home.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/planks/plank-home/plank-home.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"start\" fxLayoutGap=\"40px\">\n\n  <div class=\"header\">\n    Why Steve Becker?\n  </div>\n\n  <mat-divider></mat-divider>\n\n\n  <div class=\"plank\" *ngFor=\"let plank of planks\"  fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"40px\">\n\n    <div class=\"plank-img\" fxFlex=\"50\" fxHide.lt-md *ngIf=\"plank.number == 1 || plank.number == 3 || plank.number == 5\">\n      <img height=\"300\" width=\"auto\" src=\"{{plank.img}}\">\n    </div>\n    <div class=\"plank-content\" fxLayout=\"column\" fxFlex=\"50\" fxFlex.lt-md=\"100\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start\" fxLayoutAlign.lt-md=\"center center\">\n      <div class=\"bbs-title\">{{plank.title}}</div>\n      <div class=\"plank-img\" fxFlex=\"50\" fxHide fxShow.lt-md>\n        <img height=\"auto\" width=\"100%\" src=\"{{plank.img}}\">\n      </div>\n      <div class=\"bbs-msg\">\n       {{plank.msg}}\n      </div>\n      <!--<div class=\"bbs-actions\" fxLayoutAlign.lt-md=\"center center\"><button mat-raised-button class=\"bbs-action-raised\" routerLink=\"{{plank.buttonLink}}\">Learn More</button> </div>-->\n    </div>\n    <div class=\"plank-img\" fxFlex=\"50\" fxHide.lt-md *ngIf=\"plank.number == 2 || plank.number == 4\">\n      <img height=\"300\" width=\"auto\" src=\"{{plank.img}}\">\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/planks/plank-home/plank-home.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/planks/plank-home/plank-home.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* You can add global styles to this file, and also import other style files */\n.mat-elevation-z0{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}\n.mat-elevation-z1{box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}\n.mat-elevation-z2{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}\n.mat-elevation-z3{box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}\n.mat-elevation-z4{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}\n.mat-elevation-z5{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}\n.mat-elevation-z6{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}\n.mat-elevation-z7{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}\n.mat-elevation-z8{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}\n.mat-elevation-z9{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}\n.mat-elevation-z10{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}\n.mat-elevation-z11{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}\n.mat-elevation-z12{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}\n.mat-elevation-z13{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}\n.mat-elevation-z14{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}\n.mat-elevation-z15{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}\n.mat-elevation-z16{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}\n.mat-elevation-z17{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}\n.mat-elevation-z18{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}\n.mat-elevation-z19{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}\n.mat-elevation-z20{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}\n.mat-elevation-z21{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}\n.mat-elevation-z22{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}\n.mat-elevation-z23{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}\n.mat-elevation-z24{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}\n.mat-badge-content{font-weight:600;font-size:12px;font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-badge-small .mat-badge-content{font-size:6px}\n.mat-badge-large .mat-badge-content{font-size:24px}\n.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 16px}\n.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}\n.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 12px}\n.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-body p,.mat-body-1 p,.mat-typography p{margin:0 0 12px}\n.mat-caption,.mat-small{font:400 12px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 56px;letter-spacing:-.05em}\n.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.02em}\n.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px;letter-spacing:-.005em}\n.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,\"Helvetica Neue\",sans-serif;margin:0 0 64px}\n.mat-bottom-sheet-container{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}\n.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-button-toggle{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-card{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-card-title{font-size:24px;font-weight:400}\n.mat-card-content,.mat-card-header .mat-card-title,.mat-card-subtitle{font-size:14px}\n.mat-checkbox{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-checkbox-layout .mat-checkbox-label{line-height:24px}\n.mat-chip{font-size:13px;line-height:18px}\n.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}\n.mat-table{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-header-cell{font-size:12px;font-weight:500}\n.mat-cell,.mat-footer-cell{font-size:14px}\n.mat-calendar{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-calendar-body{font-size:13px}\n.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}\n.mat-calendar-table-header th{font-size:11px;font-weight:400}\n.mat-dialog-title{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-expansion-panel-header{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:15px;font-weight:400}\n.mat-expansion-panel-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-form-field{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-form-field-wrapper{padding-bottom:1.34375em}\n.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}\n.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}\n.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}\n.mat-form-field-infix{padding:.5em 0;border-top:.84375em solid transparent}\n.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.34375em) scale(.75);transform:translateY(-1.34375em) scale(.75);width:133.33333%}\n.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.34374em) scale(.75);transform:translateY(-1.34374em) scale(.75);width:133.33334%}\n.mat-form-field-label-wrapper{top:-.84375em;padding-top:.84375em}\n.mat-form-field-label{top:1.34375em}\n.mat-form-field-underline{bottom:1.34375em}\n.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.66667em;top:calc(100% - 1.79167em)}\n.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}\n.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333%}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334%}\n.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335%}\n.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}\n.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}\n.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.54167em;top:calc(100% - 1.66667em)}\n.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em 0}\n.mat-form-field-appearance-fill .mat-form-field-label{top:1.09375em;margin-top:-.5em}\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-.59375em) scale(.75);transform:translateY(-.59375em) scale(.75);width:133.33333%}\n.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-.59374em) scale(.75);transform:translateY(-.59374em) scale(.75);width:133.33334%}\n.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0 1em 0}\n.mat-form-field-appearance-outline .mat-form-field-label{top:1.84375em;margin-top:-.25em}\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-1.59375em) scale(.75);transform:translateY(-1.59375em) scale(.75);width:133.33333%}\n.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-webkit-transform:translateY(-1.59374em) scale(.75);transform:translateY(-1.59374em) scale(.75);width:133.33334%}\n.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}\n.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}\ninput.mat-input-element{margin-top:-.0625em}\n.mat-menu-item{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px;font-weight:400}\n.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px}\n.mat-radio-button{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-select{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-select-trigger{height:1.125em}\n.mat-slide-toggle-content{font:400 14px/20px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-slider-thumb-label-text{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}\n.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-step-label{font-size:14px;font-weight:400}\n.mat-step-label-selected{font-size:14px;font-weight:500}\n.mat-tab-group{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-tab-label,.mat-tab-link{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,\"Helvetica Neue\",sans-serif;margin:0}\n.mat-tooltip{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}\n.mat-tooltip-handset{font-size:14px;padding-top:9px;padding-bottom:9px}\n.mat-list-item{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-list-option{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{font-size:16px}\n.mat-list .mat-list-item .mat-line,.mat-nav-list .mat-list-item .mat-line,.mat-selection-list .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list .mat-list-item .mat-line:nth-child(n+2){font-size:14px}\n.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{font-size:16px}\n.mat-list .mat-list-option .mat-line,.mat-nav-list .mat-list-option .mat-line,.mat-selection-list .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list .mat-list-option .mat-line:nth-child(n+2){font-size:14px}\n.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px;font-weight:500}\n.mat-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-item{font-size:12px}\n.mat-list[dense] .mat-list-item .mat-line,.mat-nav-list[dense] .mat-list-item .mat-line,.mat-selection-list[dense] .mat-list-item .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-item .mat-line:nth-child(n+2){font-size:12px}\n.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-option{font-size:12px}\n.mat-list[dense] .mat-list-option .mat-line,.mat-nav-list[dense] .mat-list-option .mat-line,.mat-selection-list[dense] .mat-list-option .mat-line{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}\n.mat-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-nav-list[dense] .mat-list-option .mat-line:nth-child(n+2),.mat-selection-list[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}\n.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:12px;font-weight:500}\n.mat-option{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:16px}\n.mat-optgroup-label{font:500 14px/24px Roboto,\"Helvetica Neue\",sans-serif}\n.mat-simple-snackbar{font-family:Roboto,\"Helvetica Neue\",sans-serif;font-size:14px}\n.mat-simple-snackbar-action{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}\n.mat-tree{font-family:Roboto,\"Helvetica Neue\",sans-serif}\n.mat-tree-node{font-weight:400;font-size:14px}\n.mat-ripple{overflow:hidden}\n.mat-ripple.mat-ripple-unbounded{overflow:visible}\n.mat-ripple-element{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,-webkit-transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1);transition:opacity,transform 0s cubic-bezier(0,0,.2,1),-webkit-transform 0s cubic-bezier(0,0,.2,1);-webkit-transform:scale(0);transform:scale(0)}\n@media screen and (-ms-high-contrast:active){.mat-ripple-element{display:none}}\n.cdk-visually-hidden{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}\n.cdk-global-overlay-wrapper,.cdk-overlay-container{pointer-events:none;top:0;left:0;height:100%;width:100%}\n.cdk-overlay-container{position:fixed;z-index:1000}\n.cdk-overlay-container:empty{display:none}\n.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}\n.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}\n.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}\n.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}\n@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}\n.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.288)}\n.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}\n.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}\n.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}\n@-webkit-keyframes cdk-text-field-autofill-start{/*!*/}\n@keyframes cdk-text-field-autofill-start{/*!*/}\n@-webkit-keyframes cdk-text-field-autofill-end{/*!*/}\n@keyframes cdk-text-field-autofill-end{/*!*/}\n.cdk-text-field-autofill-monitored:-webkit-autofill{-webkit-animation-name:cdk-text-field-autofill-start;animation-name:cdk-text-field-autofill-start}\n.cdk-text-field-autofill-monitored:not(:-webkit-autofill){-webkit-animation-name:cdk-text-field-autofill-end;animation-name:cdk-text-field-autofill-end}\ntextarea.cdk-textarea-autosize{resize:none}\ntextarea.cdk-textarea-autosize-measuring{height:auto!important;overflow:hidden!important;padding:2px 0!important;box-sizing:content-box!important}\n.mat-ripple-element{background-color:rgba(0,0,0,.1)}\n.mat-option{color:rgba(0,0,0,.87)}\n.mat-option:focus:not(.mat-option-disabled),.mat-option:hover:not(.mat-option-disabled){background:rgba(0,0,0,.04)}\n.mat-option.mat-selected:not(.mat-option-multiple):not(.mat-option-disabled){background:rgba(0,0,0,.04)}\n.mat-option.mat-active{background:rgba(0,0,0,.04);color:rgba(0,0,0,.87)}\n.mat-option.mat-option-disabled{color:rgba(0,0,0,.38)}\n.mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:#3f51b5}\n.mat-accent .mat-option.mat-selected:not(.mat-option-disabled){color:#ff4081}\n.mat-warn .mat-option.mat-selected:not(.mat-option-disabled){color:#f44336}\n.mat-optgroup-label{color:rgba(0,0,0,.54)}\n.mat-optgroup-disabled .mat-optgroup-label{color:rgba(0,0,0,.38)}\n.mat-pseudo-checkbox{color:rgba(0,0,0,.54)}\n.mat-pseudo-checkbox::after{color:#fafafa}\n.mat-accent .mat-pseudo-checkbox-checked,.mat-accent .mat-pseudo-checkbox-indeterminate,.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-indeterminate{background:#ff4081}\n.mat-primary .mat-pseudo-checkbox-checked,.mat-primary .mat-pseudo-checkbox-indeterminate{background:#3f51b5}\n.mat-warn .mat-pseudo-checkbox-checked,.mat-warn .mat-pseudo-checkbox-indeterminate{background:#f44336}\n.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled,.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled{background:#b0b0b0}\n.mat-app-background{background-color:#fafafa;color:rgba(0,0,0,.87)}\n.mat-theme-loaded-marker{display:none}\n.mat-autocomplete-panel{background:#fff;color:rgba(0,0,0,.87)}\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover){background:#fff}\n.mat-autocomplete-panel .mat-option.mat-selected:not(.mat-active):not(:hover):not(.mat-option-disabled){color:rgba(0,0,0,.87)}\n.mat-badge-content{color:#fff;background:#3f51b5}\n.mat-badge-accent .mat-badge-content{background:#ff4081;color:#fff}\n.mat-badge-warn .mat-badge-content{color:#fff;background:#f44336}\n.mat-badge{position:relative}\n.mat-badge-hidden .mat-badge-content{display:none}\n.mat-badge-content{position:absolute;text-align:center;display:inline-block;border-radius:50%;transition:-webkit-transform .2s ease-in-out;transition:transform .2s ease-in-out;transition:transform .2s ease-in-out, -webkit-transform .2s ease-in-out;-webkit-transform:scale(.6);transform:scale(.6);overflow:hidden;white-space:nowrap;text-overflow:ellipsis;pointer-events:none}\n.mat-badge-content.mat-badge-active{-webkit-transform:none;transform:none}\n.mat-badge-small .mat-badge-content{width:16px;height:16px;line-height:16px}\n@media screen and (-ms-high-contrast:active){.mat-badge-small .mat-badge-content{outline:solid 1px;border-radius:0}}\n.mat-badge-small.mat-badge-above .mat-badge-content{top:-8px}\n.mat-badge-small.mat-badge-below .mat-badge-content{bottom:-8px}\n.mat-badge-small.mat-badge-before .mat-badge-content{left:-16px}\n[dir=rtl] .mat-badge-small.mat-badge-before .mat-badge-content{left:auto;right:-16px}\n.mat-badge-small.mat-badge-after .mat-badge-content{right:-16px}\n[dir=rtl] .mat-badge-small.mat-badge-after .mat-badge-content{right:auto;left:-16px}\n.mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-8px}\n[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-8px}\n.mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-8px}\n[dir=rtl] .mat-badge-small.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-8px}\n.mat-badge-medium .mat-badge-content{width:22px;height:22px;line-height:22px}\n@media screen and (-ms-high-contrast:active){.mat-badge-medium .mat-badge-content{outline:solid 1px;border-radius:0}}\n.mat-badge-medium.mat-badge-above .mat-badge-content{top:-11px}\n.mat-badge-medium.mat-badge-below .mat-badge-content{bottom:-11px}\n.mat-badge-medium.mat-badge-before .mat-badge-content{left:-22px}\n[dir=rtl] .mat-badge-medium.mat-badge-before .mat-badge-content{left:auto;right:-22px}\n.mat-badge-medium.mat-badge-after .mat-badge-content{right:-22px}\n[dir=rtl] .mat-badge-medium.mat-badge-after .mat-badge-content{right:auto;left:-22px}\n.mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-11px}\n[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-11px}\n.mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-11px}\n[dir=rtl] .mat-badge-medium.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-11px}\n.mat-badge-large .mat-badge-content{width:28px;height:28px;line-height:28px}\n@media screen and (-ms-high-contrast:active){.mat-badge-large .mat-badge-content{outline:solid 1px;border-radius:0}}\n.mat-badge-large.mat-badge-above .mat-badge-content{top:-14px}\n.mat-badge-large.mat-badge-below .mat-badge-content{bottom:-14px}\n.mat-badge-large.mat-badge-before .mat-badge-content{left:-28px}\n[dir=rtl] .mat-badge-large.mat-badge-before .mat-badge-content{left:auto;right:-28px}\n.mat-badge-large.mat-badge-after .mat-badge-content{right:-28px}\n[dir=rtl] .mat-badge-large.mat-badge-after .mat-badge-content{right:auto;left:-28px}\n.mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:-14px}\n[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-before .mat-badge-content{left:auto;right:-14px}\n.mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:-14px}\n[dir=rtl] .mat-badge-large.mat-badge-overlap.mat-badge-after .mat-badge-content{right:auto;left:-14px}\n.mat-bottom-sheet-container{background:#fff;color:rgba(0,0,0,.87)}\n.mat-button,.mat-icon-button,.mat-stroked-button{color:inherit;background:0 0}\n.mat-button.mat-primary,.mat-icon-button.mat-primary,.mat-stroked-button.mat-primary{color:#3f51b5}\n.mat-button.mat-accent,.mat-icon-button.mat-accent,.mat-stroked-button.mat-accent{color:#ff4081}\n.mat-button.mat-warn,.mat-icon-button.mat-warn,.mat-stroked-button.mat-warn{color:#f44336}\n.mat-button.mat-accent[disabled],.mat-button.mat-primary[disabled],.mat-button.mat-warn[disabled],.mat-button[disabled][disabled],.mat-icon-button.mat-accent[disabled],.mat-icon-button.mat-primary[disabled],.mat-icon-button.mat-warn[disabled],.mat-icon-button[disabled][disabled],.mat-stroked-button.mat-accent[disabled],.mat-stroked-button.mat-primary[disabled],.mat-stroked-button.mat-warn[disabled],.mat-stroked-button[disabled][disabled]{color:rgba(0,0,0,.26)}\n.mat-button.mat-primary .mat-button-focus-overlay,.mat-icon-button.mat-primary .mat-button-focus-overlay,.mat-stroked-button.mat-primary .mat-button-focus-overlay{background-color:rgba(63,81,181,.12)}\n.mat-button.mat-accent .mat-button-focus-overlay,.mat-icon-button.mat-accent .mat-button-focus-overlay,.mat-stroked-button.mat-accent .mat-button-focus-overlay{background-color:rgba(255,64,129,.12)}\n.mat-button.mat-warn .mat-button-focus-overlay,.mat-icon-button.mat-warn .mat-button-focus-overlay,.mat-stroked-button.mat-warn .mat-button-focus-overlay{background-color:rgba(244,67,54,.12)}\n.mat-button[disabled] .mat-button-focus-overlay,.mat-icon-button[disabled] .mat-button-focus-overlay,.mat-stroked-button[disabled] .mat-button-focus-overlay{background-color:transparent}\n.mat-button.mat-primary .mat-ripple-element,.mat-icon-button.mat-primary .mat-ripple-element,.mat-stroked-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.1)}\n.mat-button.mat-accent .mat-ripple-element,.mat-icon-button.mat-accent .mat-ripple-element,.mat-stroked-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.1)}\n.mat-button.mat-warn .mat-ripple-element,.mat-icon-button.mat-warn .mat-ripple-element,.mat-stroked-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.1)}\n.mat-fab,.mat-flat-button,.mat-mini-fab,.mat-raised-button{color:rgba(0,0,0,.87);background-color:#fff}\n.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{color:#fff}\n.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{color:#fff}\n.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{color:#fff}\n.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{color:rgba(0,0,0,.26)}\n.mat-fab.mat-primary,.mat-flat-button.mat-primary,.mat-mini-fab.mat-primary,.mat-raised-button.mat-primary{background-color:#3f51b5}\n.mat-fab.mat-accent,.mat-flat-button.mat-accent,.mat-mini-fab.mat-accent,.mat-raised-button.mat-accent{background-color:#ff4081}\n.mat-fab.mat-warn,.mat-flat-button.mat-warn,.mat-mini-fab.mat-warn,.mat-raised-button.mat-warn{background-color:#f44336}\n.mat-fab.mat-accent[disabled],.mat-fab.mat-primary[disabled],.mat-fab.mat-warn[disabled],.mat-fab[disabled][disabled],.mat-flat-button.mat-accent[disabled],.mat-flat-button.mat-primary[disabled],.mat-flat-button.mat-warn[disabled],.mat-flat-button[disabled][disabled],.mat-mini-fab.mat-accent[disabled],.mat-mini-fab.mat-primary[disabled],.mat-mini-fab.mat-warn[disabled],.mat-mini-fab[disabled][disabled],.mat-raised-button.mat-accent[disabled],.mat-raised-button.mat-primary[disabled],.mat-raised-button.mat-warn[disabled],.mat-raised-button[disabled][disabled]{background-color:rgba(0,0,0,.12)}\n.mat-fab.mat-primary .mat-ripple-element,.mat-flat-button.mat-primary .mat-ripple-element,.mat-mini-fab.mat-primary .mat-ripple-element,.mat-raised-button.mat-primary .mat-ripple-element{background-color:rgba(255,255,255,.1)}\n.mat-fab.mat-accent .mat-ripple-element,.mat-flat-button.mat-accent .mat-ripple-element,.mat-mini-fab.mat-accent .mat-ripple-element,.mat-raised-button.mat-accent .mat-ripple-element{background-color:rgba(255,255,255,.1)}\n.mat-fab.mat-warn .mat-ripple-element,.mat-flat-button.mat-warn .mat-ripple-element,.mat-mini-fab.mat-warn .mat-ripple-element,.mat-raised-button.mat-warn .mat-ripple-element{background-color:rgba(255,255,255,.1)}\n.mat-icon-button.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.2)}\n.mat-icon-button.mat-accent .mat-ripple-element{background-color:rgba(255,64,129,.2)}\n.mat-icon-button.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.2)}\n.mat-button-toggle{color:rgba(0,0,0,.38)}\n.mat-button-toggle .mat-button-toggle-focus-overlay{background-color:rgba(0,0,0,.12)}\n.mat-button-toggle-checked{background-color:#e0e0e0;color:rgba(0,0,0,.54)}\n.mat-button-toggle-disabled{background-color:#eee;color:rgba(0,0,0,.26)}\n.mat-button-toggle-disabled.mat-button-toggle-checked{background-color:#bdbdbd}\n.mat-card{background:#fff;color:rgba(0,0,0,.87)}\n.mat-card-subtitle{color:rgba(0,0,0,.54)}\n.mat-checkbox-frame{border-color:rgba(0,0,0,.54)}\n.mat-checkbox-checkmark{fill:#fafafa}\n.mat-checkbox-checkmark-path{stroke:#fafafa!important}\n@media screen and (-ms-high-contrast:black-on-white){.mat-checkbox-checkmark-path{stroke:#000!important}}\n.mat-checkbox-mixedmark{background-color:#fafafa}\n.mat-checkbox-checked.mat-primary .mat-checkbox-background,.mat-checkbox-indeterminate.mat-primary .mat-checkbox-background{background-color:#3f51b5}\n.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#ff4081}\n.mat-checkbox-checked.mat-warn .mat-checkbox-background,.mat-checkbox-indeterminate.mat-warn .mat-checkbox-background{background-color:#f44336}\n.mat-checkbox-disabled.mat-checkbox-checked .mat-checkbox-background,.mat-checkbox-disabled.mat-checkbox-indeterminate .mat-checkbox-background{background-color:#b0b0b0}\n.mat-checkbox-disabled:not(.mat-checkbox-checked) .mat-checkbox-frame{border-color:#b0b0b0}\n.mat-checkbox-disabled .mat-checkbox-label{color:#b0b0b0}\n@media screen and (-ms-high-contrast:active){.mat-checkbox-disabled{opacity:.5}}\n@media screen and (-ms-high-contrast:active){.mat-checkbox-background{background:0 0}}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-primary .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(63,81,181,.26)}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-accent .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(255,64,129,.26)}\n.mat-checkbox:not(.mat-checkbox-disabled).mat-warn .mat-checkbox-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}\n.mat-chip.mat-standard-chip{background-color:#e0e0e0;color:rgba(0,0,0,.87)}\n.mat-chip.mat-standard-chip .mat-chip-remove{color:rgba(0,0,0,.87);opacity:.4}\n.mat-chip.mat-standard-chip .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary{background-color:#3f51b5;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-primary .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn{background-color:#f44336;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-warn .mat-chip-remove:hover{opacity:.54}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent{background-color:#ff4081;color:#fff}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove{color:#fff;opacity:.4}\n.mat-chip.mat-standard-chip.mat-chip-selected.mat-accent .mat-chip-remove:hover{opacity:.54}\n.mat-table{background:#fff}\n.mat-table tbody,.mat-table tfoot,.mat-table thead,.mat-table-sticky,[mat-footer-row],[mat-header-row],[mat-row],mat-footer-row,mat-header-row,mat-row{background:inherit}\nmat-footer-row,mat-header-row,mat-row,td.mat-cell,td.mat-footer-cell,th.mat-header-cell{border-bottom-color:rgba(0,0,0,.12)}\n.mat-header-cell{color:rgba(0,0,0,.54)}\n.mat-cell,.mat-footer-cell{color:rgba(0,0,0,.87)}\n.mat-calendar-arrow{border-top-color:rgba(0,0,0,.54)}\n.mat-datepicker-content .mat-calendar-next-button,.mat-datepicker-content .mat-calendar-previous-button,.mat-datepicker-toggle{color:rgba(0,0,0,.54)}\n.mat-calendar-table-header{color:rgba(0,0,0,.38)}\n.mat-calendar-table-header-divider::after{background:rgba(0,0,0,.12)}\n.mat-calendar-body-label{color:rgba(0,0,0,.54)}\n.mat-calendar-body-cell-content{color:rgba(0,0,0,.87);border-color:transparent}\n.mat-calendar-body-disabled>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){color:rgba(0,0,0,.38)}\n.cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:rgba(0,0,0,.04)}\n.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.38)}\n.mat-calendar-body-disabled>.mat-calendar-body-today:not(.mat-calendar-body-selected){border-color:rgba(0,0,0,.18)}\n.mat-calendar-body-selected{background-color:#3f51b5;color:#fff}\n.mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(63,81,181,.4)}\n.mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}\n.mat-datepicker-content.mat-accent .mat-calendar-body-selected{background-color:#ff4081;color:#fff}\n.mat-datepicker-content.mat-accent .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(255,64,129,.4)}\n.mat-datepicker-content.mat-accent .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-content.mat-warn .mat-calendar-body-selected{background-color:#f44336;color:#fff}\n.mat-datepicker-content.mat-warn .mat-calendar-body-disabled>.mat-calendar-body-selected{background-color:rgba(244,67,54,.4)}\n.mat-datepicker-content.mat-warn .mat-calendar-body-today.mat-calendar-body-selected{box-shadow:inset 0 0 0 1px #fff}\n.mat-datepicker-toggle-active{color:#3f51b5}\n.mat-datepicker-toggle-active.mat-accent{color:#ff4081}\n.mat-datepicker-toggle-active.mat-warn{color:#f44336}\n.mat-dialog-container{background:#fff;color:rgba(0,0,0,.87)}\n.mat-divider{border-top-color:rgba(0,0,0,.12)}\n.mat-divider-vertical{border-right-color:rgba(0,0,0,.12)}\n.mat-expansion-panel{background:#fff;color:rgba(0,0,0,.87)}\n.mat-action-row{border-top-color:rgba(0,0,0,.12)}\n.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused,.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:rgba(0,0,0,.04)}\n@media (hover:none){.mat-expansion-panel:not(.mat-expanded):not([aria-disabled=true]) .mat-expansion-panel-header:hover{background:#fff}}\n.mat-expansion-panel-header-title{color:rgba(0,0,0,.87)}\n.mat-expansion-indicator::after,.mat-expansion-panel-header-description{color:rgba(0,0,0,.54)}\n.mat-expansion-panel-header[aria-disabled=true]{color:rgba(0,0,0,.26)}\n.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title{color:inherit}\n.mat-form-field-label{color:rgba(0,0,0,.6)}\n.mat-hint{color:rgba(0,0,0,.6)}\n.mat-form-field.mat-focused .mat-form-field-label{color:#3f51b5}\n.mat-form-field.mat-focused .mat-form-field-label.mat-accent{color:#ff4081}\n.mat-form-field.mat-focused .mat-form-field-label.mat-warn{color:#f44336}\n.mat-focused .mat-form-field-required-marker{color:#ff4081}\n.mat-form-field-ripple{background-color:rgba(0,0,0,.87)}\n.mat-form-field.mat-focused .mat-form-field-ripple{background-color:#3f51b5}\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-accent{background-color:#ff4081}\n.mat-form-field.mat-focused .mat-form-field-ripple.mat-warn{background-color:#f44336}\n.mat-form-field.mat-form-field-invalid .mat-form-field-label{color:#f44336}\n.mat-form-field.mat-form-field-invalid .mat-form-field-label .mat-form-field-required-marker,.mat-form-field.mat-form-field-invalid .mat-form-field-label.mat-accent{color:#f44336}\n.mat-form-field.mat-form-field-invalid .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple.mat-accent{background-color:#f44336}\n.mat-error{color:#f44336}\n.mat-form-field-appearance-legacy .mat-form-field-label{color:rgba(0,0,0,.54)}\n.mat-form-field-appearance-legacy .mat-hint{color:rgba(0,0,0,.54)}\n.mat-form-field-appearance-legacy .mat-form-field-underline{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}\n.mat-form-field-appearance-standard .mat-form-field-underline{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-image:linear-gradient(to right,rgba(0,0,0,.42) 0,rgba(0,0,0,.42) 33%,transparent 0);background-size:4px 100%;background-repeat:repeat-x}\n.mat-form-field-appearance-fill .mat-form-field-flex{background-color:rgba(0,0,0,.04)}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-flex{background-color:rgba(0,0,0,.02)}\n.mat-form-field-appearance-fill .mat-form-field-underline::before{background-color:rgba(0,0,0,.42)}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}\n.mat-form-field-appearance-fill.mat-form-field-disabled .mat-form-field-underline::before{background-color:transparent}\n.mat-form-field-appearance-outline .mat-form-field-outline{color:rgba(0,0,0,.12)}\n.mat-form-field-appearance-outline .mat-form-field-outline-thick{color:rgba(0,0,0,.87)}\n.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:#3f51b5}\n.mat-form-field-appearance-outline.mat-focused.mat-accent .mat-form-field-outline-thick{color:#ff4081}\n.mat-form-field-appearance-outline.mat-focused.mat-warn .mat-form-field-outline-thick{color:#f44336}\n.mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:#f44336}\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-label{color:rgba(0,0,0,.38)}\n.mat-form-field-appearance-outline.mat-form-field-disabled .mat-form-field-outline{color:rgba(0,0,0,.06)}\n.mat-icon.mat-primary{color:#3f51b5}\n.mat-icon.mat-accent{color:#ff4081}\n.mat-icon.mat-warn{color:#f44336}\n.mat-input-element:disabled{color:rgba(0,0,0,.38)}\n.mat-input-element{caret-color:#3f51b5}\n.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::-ms-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::-moz-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element::-webkit-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-input-element:-ms-input-placeholder{color:rgba(0,0,0,.42)}\n.mat-accent .mat-input-element{caret-color:#ff4081}\n.mat-form-field-invalid .mat-input-element,.mat-warn .mat-input-element{caret-color:#f44336}\n.mat-list .mat-list-item,.mat-nav-list .mat-list-item,.mat-selection-list .mat-list-item{color:rgba(0,0,0,.87)}\n.mat-list .mat-list-option,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-option{color:rgba(0,0,0,.87)}\n.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{color:rgba(0,0,0,.54)}\n.mat-list-item-disabled{background-color:#eee}\n.mat-list-option.mat-list-item-focus,.mat-list-option:hover,.mat-nav-list .mat-list-item.mat-list-item-focus,.mat-nav-list .mat-list-item:hover{background:rgba(0,0,0,.04)}\n.mat-menu-panel{background:#fff}\n.mat-menu-item{background:0 0;color:rgba(0,0,0,.87)}\n.mat-menu-item[disabled],.mat-menu-item[disabled]::after{color:rgba(0,0,0,.38)}\n.mat-menu-item .mat-icon:not([color]),.mat-menu-item-submenu-trigger::after{color:rgba(0,0,0,.54)}\n.mat-menu-item-highlighted:not([disabled]),.mat-menu-item.cdk-keyboard-focused:not([disabled]),.mat-menu-item.cdk-program-focused:not([disabled]),.mat-menu-item:hover:not([disabled]){background:rgba(0,0,0,.04)}\n.mat-paginator{background:#fff}\n.mat-paginator,.mat-paginator-page-size .mat-select-trigger{color:rgba(0,0,0,.54)}\n.mat-paginator-decrement,.mat-paginator-increment{border-top:2px solid rgba(0,0,0,.54);border-right:2px solid rgba(0,0,0,.54)}\n.mat-paginator-first,.mat-paginator-last{border-top:2px solid rgba(0,0,0,.54)}\n.mat-icon-button[disabled] .mat-paginator-decrement,.mat-icon-button[disabled] .mat-paginator-first,.mat-icon-button[disabled] .mat-paginator-increment,.mat-icon-button[disabled] .mat-paginator-last{border-color:rgba(0,0,0,.38)}\n.mat-progress-bar-background{fill:#c5cae9}\n.mat-progress-bar-buffer{background-color:#c5cae9}\n.mat-progress-bar-fill::after{background-color:#3f51b5}\n.mat-progress-bar.mat-accent .mat-progress-bar-background{fill:#ff80ab}\n.mat-progress-bar.mat-accent .mat-progress-bar-buffer{background-color:#ff80ab}\n.mat-progress-bar.mat-accent .mat-progress-bar-fill::after{background-color:#ff4081}\n.mat-progress-bar.mat-warn .mat-progress-bar-background{fill:#ffcdd2}\n.mat-progress-bar.mat-warn .mat-progress-bar-buffer{background-color:#ffcdd2}\n.mat-progress-bar.mat-warn .mat-progress-bar-fill::after{background-color:#f44336}\n.mat-progress-spinner circle,.mat-spinner circle{stroke:#3f51b5}\n.mat-progress-spinner.mat-accent circle,.mat-spinner.mat-accent circle{stroke:#ff4081}\n.mat-progress-spinner.mat-warn circle,.mat-spinner.mat-warn circle{stroke:#f44336}\n.mat-radio-outer-circle{border-color:rgba(0,0,0,.54)}\n.mat-radio-button.mat-primary.mat-radio-checked .mat-radio-outer-circle{border-color:#3f51b5}\n.mat-radio-button.mat-primary .mat-radio-inner-circle{background-color:#3f51b5}\n.mat-radio-button.mat-primary .mat-radio-ripple .mat-ripple-element{background-color:rgba(63,81,181,.26)}\n.mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle{border-color:#ff4081}\n.mat-radio-button.mat-accent .mat-radio-inner-circle{background-color:#ff4081}\n.mat-radio-button.mat-accent .mat-radio-ripple .mat-ripple-element{background-color:rgba(255,64,129,.26)}\n.mat-radio-button.mat-warn.mat-radio-checked .mat-radio-outer-circle{border-color:#f44336}\n.mat-radio-button.mat-warn .mat-radio-inner-circle{background-color:#f44336}\n.mat-radio-button.mat-warn .mat-radio-ripple .mat-ripple-element{background-color:rgba(244,67,54,.26)}\n.mat-radio-button.mat-radio-disabled .mat-radio-outer-circle,.mat-radio-button.mat-radio-disabled.mat-radio-checked .mat-radio-outer-circle{border-color:rgba(0,0,0,.38)}\n.mat-radio-button.mat-radio-disabled .mat-radio-inner-circle,.mat-radio-button.mat-radio-disabled .mat-radio-ripple .mat-ripple-element{background-color:rgba(0,0,0,.38)}\n.mat-radio-button.mat-radio-disabled .mat-radio-label-content{color:rgba(0,0,0,.38)}\n.mat-select-content,.mat-select-panel-done-animating{background:#fff}\n.mat-select-value{color:rgba(0,0,0,.87)}\n.mat-select-placeholder{color:rgba(0,0,0,.42)}\n.mat-select-disabled .mat-select-value{color:rgba(0,0,0,.38)}\n.mat-select-arrow{color:rgba(0,0,0,.54)}\n.mat-select-panel .mat-option.mat-selected:not(.mat-option-multiple){background:rgba(0,0,0,.12)}\n.mat-form-field.mat-focused.mat-primary .mat-select-arrow{color:#3f51b5}\n.mat-form-field.mat-focused.mat-accent .mat-select-arrow{color:#ff4081}\n.mat-form-field.mat-focused.mat-warn .mat-select-arrow{color:#f44336}\n.mat-form-field .mat-select.mat-select-invalid .mat-select-arrow{color:#f44336}\n.mat-form-field .mat-select.mat-select-disabled .mat-select-arrow{color:rgba(0,0,0,.38)}\n.mat-drawer-container{background-color:#fafafa;color:rgba(0,0,0,.87)}\n.mat-drawer{background-color:#fff;color:rgba(0,0,0,.87)}\n.mat-drawer.mat-drawer-push{background-color:#fff}\n.mat-drawer-backdrop.mat-drawer-shown{background-color:rgba(0,0,0,.6)}\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#e91e63}\n.mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(233,30,99,.5)}\n.mat-slide-toggle:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle .mat-ripple-element{background-color:rgba(233,30,99,.12)}\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#3f51b5}\n.mat-slide-toggle.mat-primary.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(63,81,181,.5)}\n.mat-slide-toggle.mat-primary:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle.mat-primary .mat-ripple-element{background-color:rgba(63,81,181,.12)}\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb{background-color:#f44336}\n.mat-slide-toggle.mat-warn.mat-checked:not(.mat-disabled) .mat-slide-toggle-bar{background-color:rgba(244,67,54,.5)}\n.mat-slide-toggle.mat-warn:not(.mat-checked) .mat-ripple-element{background-color:rgba(0,0,0,.06)}\n.mat-slide-toggle.mat-warn .mat-ripple-element{background-color:rgba(244,67,54,.12)}\n.mat-disabled .mat-slide-toggle-thumb{background-color:#bdbdbd}\n.mat-disabled .mat-slide-toggle-bar{background-color:rgba(0,0,0,.1)}\n.mat-slide-toggle-thumb{background-color:#fafafa}\n.mat-slide-toggle-bar{background-color:rgba(0,0,0,.38)}\n.mat-slider-track-background{background-color:rgba(0,0,0,.26)}\n.mat-primary .mat-slider-thumb,.mat-primary .mat-slider-thumb-label,.mat-primary .mat-slider-track-fill{background-color:#3f51b5}\n.mat-primary .mat-slider-thumb-label-text{color:#fff}\n.mat-accent .mat-slider-thumb,.mat-accent .mat-slider-thumb-label,.mat-accent .mat-slider-track-fill{background-color:#ff4081}\n.mat-accent .mat-slider-thumb-label-text{color:#fff}\n.mat-warn .mat-slider-thumb,.mat-warn .mat-slider-thumb-label,.mat-warn .mat-slider-track-fill{background-color:#f44336}\n.mat-warn .mat-slider-thumb-label-text{color:#fff}\n.mat-slider-focus-ring{background-color:rgba(255,64,129,.2)}\n.cdk-focused .mat-slider-track-background,.mat-slider:hover .mat-slider-track-background{background-color:rgba(0,0,0,.38)}\n.mat-slider-disabled .mat-slider-thumb,.mat-slider-disabled .mat-slider-track-background,.mat-slider-disabled .mat-slider-track-fill{background-color:rgba(0,0,0,.26)}\n.mat-slider-disabled:hover .mat-slider-track-background{background-color:rgba(0,0,0,.26)}\n.mat-slider-min-value .mat-slider-focus-ring{background-color:rgba(0,0,0,.12)}\n.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing .mat-slider-thumb-label{background-color:rgba(0,0,0,.87)}\n.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb,.mat-slider-min-value.mat-slider-thumb-label-showing.cdk-focused .mat-slider-thumb-label{background-color:rgba(0,0,0,.26)}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing) .mat-slider-thumb{border-color:rgba(0,0,0,.26);background-color:transparent}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover .mat-slider-thumb{border-color:rgba(0,0,0,.38)}\n.mat-slider-min-value:not(.mat-slider-thumb-label-showing).cdk-focused.mat-slider-disabled .mat-slider-thumb,.mat-slider-min-value:not(.mat-slider-thumb-label-showing):hover.mat-slider-disabled .mat-slider-thumb{border-color:rgba(0,0,0,.26)}\n.mat-slider-has-ticks .mat-slider-wrapper::after{border-color:rgba(0,0,0,.7)}\n.mat-slider-horizontal .mat-slider-ticks{background-image:repeating-linear-gradient(to right,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent);background-image:-moz-repeating-linear-gradient(.0001deg,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}\n.mat-slider-vertical .mat-slider-ticks{background-image:repeating-linear-gradient(to bottom,rgba(0,0,0,.7),rgba(0,0,0,.7) 2px,transparent 0,transparent)}\n.mat-step-header.cdk-keyboard-focused,.mat-step-header.cdk-program-focused,.mat-step-header:hover{background-color:rgba(0,0,0,.04)}\n.mat-step-header .mat-step-label,.mat-step-header .mat-step-optional{color:rgba(0,0,0,.38)}\n.mat-step-header .mat-step-icon{background-color:#3f51b5;color:#fff}\n.mat-step-header .mat-step-icon-not-touched{background-color:rgba(0,0,0,.38);color:#fff}\n.mat-step-header .mat-step-label.mat-step-label-active{color:rgba(0,0,0,.87)}\n.mat-stepper-horizontal,.mat-stepper-vertical{background-color:#fff}\n.mat-stepper-vertical-line::before{border-left-color:rgba(0,0,0,.12)}\n.mat-stepper-horizontal-line{border-top-color:rgba(0,0,0,.12)}\n.mat-sort-header-arrow{color:#757575}\n.mat-tab-header,.mat-tab-nav-bar{border-bottom:1px solid rgba(0,0,0,.12)}\n.mat-tab-group-inverted-header .mat-tab-header,.mat-tab-group-inverted-header .mat-tab-nav-bar{border-top:1px solid rgba(0,0,0,.12);border-bottom:none}\n.mat-tab-label,.mat-tab-link{color:rgba(0,0,0,.87)}\n.mat-tab-label.mat-tab-disabled,.mat-tab-link.mat-tab-disabled{color:rgba(0,0,0,.38)}\n.mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.87)}\n.mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(0,0,0,.38)}\n.mat-tab-group[class*=mat-background-] .mat-tab-header,.mat-tab-nav-bar[class*=mat-background-]{border-bottom:none;border-top:none}\n.mat-tab-group.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}\n.mat-tab-group.mat-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary .mat-ink-bar{background-color:#3f51b5}\n.mat-tab-group.mat-primary.mat-background-primary .mat-ink-bar,.mat-tab-nav-bar.mat-primary.mat-background-primary .mat-ink-bar{background-color:#fff}\n.mat-tab-group.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}\n.mat-tab-group.mat-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent .mat-ink-bar{background-color:#ff4081}\n.mat-tab-group.mat-accent.mat-background-accent .mat-ink-bar,.mat-tab-nav-bar.mat-accent.mat-background-accent .mat-ink-bar{background-color:#fff}\n.mat-tab-group.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\n.mat-tab-group.mat-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn .mat-ink-bar{background-color:#f44336}\n.mat-tab-group.mat-warn.mat-background-warn .mat-ink-bar,.mat-tab-nav-bar.mat-warn.mat-background-warn .mat-ink-bar{background-color:#fff}\n.mat-tab-group.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-primary .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(197,202,233,.3)}\n.mat-tab-group.mat-background-primary .mat-tab-header,.mat-tab-group.mat-background-primary .mat-tab-links,.mat-tab-nav-bar.mat-background-primary .mat-tab-header,.mat-tab-nav-bar.mat-background-primary .mat-tab-links{background-color:#3f51b5}\n.mat-tab-group.mat-background-primary .mat-tab-label,.mat-tab-group.mat-background-primary .mat-tab-link,.mat-tab-nav-bar.mat-background-primary .mat-tab-label,.mat-tab-nav-bar.mat-background-primary .mat-tab-link{color:#fff}\n.mat-tab-group.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-primary .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-primary .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-chevron{border-color:#fff}\n.mat-tab-group.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-primary .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-primary .mat-ripple-element,.mat-tab-nav-bar.mat-background-primary .mat-ripple-element{background-color:rgba(255,255,255,.12)}\n.mat-tab-group.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-accent .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,128,171,.3)}\n.mat-tab-group.mat-background-accent .mat-tab-header,.mat-tab-group.mat-background-accent .mat-tab-links,.mat-tab-nav-bar.mat-background-accent .mat-tab-header,.mat-tab-nav-bar.mat-background-accent .mat-tab-links{background-color:#ff4081}\n.mat-tab-group.mat-background-accent .mat-tab-label,.mat-tab-group.mat-background-accent .mat-tab-link,.mat-tab-nav-bar.mat-background-accent .mat-tab-label,.mat-tab-nav-bar.mat-background-accent .mat-tab-link{color:#fff}\n.mat-tab-group.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-accent .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-accent .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-chevron{border-color:#fff}\n.mat-tab-group.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-accent .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-accent .mat-ripple-element,.mat-tab-nav-bar.mat-background-accent .mat-ripple-element{background-color:rgba(255,255,255,.12)}\n.mat-tab-group.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-group.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-label.cdk-program-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-keyboard-focused:not(.mat-tab-disabled),.mat-tab-nav-bar.mat-background-warn .mat-tab-link.cdk-program-focused:not(.mat-tab-disabled){background-color:rgba(255,205,210,.3)}\n.mat-tab-group.mat-background-warn .mat-tab-header,.mat-tab-group.mat-background-warn .mat-tab-links,.mat-tab-nav-bar.mat-background-warn .mat-tab-header,.mat-tab-nav-bar.mat-background-warn .mat-tab-links{background-color:#f44336}\n.mat-tab-group.mat-background-warn .mat-tab-label,.mat-tab-group.mat-background-warn .mat-tab-link,.mat-tab-nav-bar.mat-background-warn .mat-tab-label,.mat-tab-nav-bar.mat-background-warn .mat-tab-link{color:#fff}\n.mat-tab-group.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-group.mat-background-warn .mat-tab-link.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-label.mat-tab-disabled,.mat-tab-nav-bar.mat-background-warn .mat-tab-link.mat-tab-disabled{color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-chevron{border-color:#fff}\n.mat-tab-group.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron,.mat-tab-nav-bar.mat-background-warn .mat-tab-header-pagination-disabled .mat-tab-header-pagination-chevron{border-color:rgba(255,255,255,.4)}\n.mat-tab-group.mat-background-warn .mat-ripple-element,.mat-tab-nav-bar.mat-background-warn .mat-ripple-element{background-color:rgba(255,255,255,.12)}\n.mat-toolbar{background:#f5f5f5;color:rgba(0,0,0,.87)}\n.mat-toolbar.mat-primary{background:#3f51b5;color:#fff}\n.mat-toolbar.mat-accent{background:#ff4081;color:#fff}\n.mat-toolbar.mat-warn{background:#f44336;color:#fff}\n.mat-toolbar .mat-focused .mat-form-field-ripple,.mat-toolbar .mat-form-field-ripple,.mat-toolbar .mat-form-field-underline{background-color:currentColor}\n.mat-toolbar .mat-focused .mat-form-field-label,.mat-toolbar .mat-form-field-label,.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow,.mat-toolbar .mat-select-arrow,.mat-toolbar .mat-select-value{color:inherit}\n.mat-toolbar .mat-input-element{caret-color:currentColor}\n.mat-tooltip{background:rgba(97,97,97,.9)}\n.mat-tree{background:#fff}\n.mat-tree-node{color:rgba(0,0,0,.87)}\n.mat-snack-bar-container{background:#323232;color:#fff}\n.mat-simple-snackbar-action{color:#ff4081}\n/* Coolors Exported Palette - coolors.co/17664b-2b2b2b-ffffff-aa8946-33658a */\n/* HSL */\n/* RGB */\nbody {\n  margin: 0;\n  text-decoration: none; }\n.full-height {\n  min-height: 100vh; }\n.header {\n  font-size: 44px;\n  line-height: 56px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  letter-spacing: -0.8px;\n  font-weight: 800;\n  margin-top: 40px;\n  padding-left: 24px;\n  border-left: 10px solid #17664b; }\n.bbs-title, h1 {\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  color: #2b2b2b;\n  font-size: 32px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin-left: 16px; }\n.bbs-subtitle, h2 {\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  color: #17664b;\n  font-size: 18px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin-left: 16px; }\n.bbs-line, h3 {\n  font-weight: 400;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  color: #2b2b2b;\n  font-size: 16px;\n  padding-top: 2px;\n  padding-bottom: 2px;\n  margin-left: 16px; }\n.bbs-msg, h5, h6 {\n  font-weight: lighter;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  font-size: 16px;\n  line-height: 22px;\n  color: #4f5b66; }\n.container {\n  padding-top: 100px;\n  padding-bottom: 40px;\n  margin: auto;\n  width: 90%; }\n.spacer {\n  flex: 1 1 auto; }\na {\n  text-decoration: none !important; }\n.example-form {\n  min-width: 150px;\n  width: 100%; }\n.example-full-width {\n  width: 100%; }\n.example-half-width {\n  min-width: 150px;\n  width: 50%; }\n.bbs-actions {\n  width: 100%; }\n.bbs-actions .bbs-action-raised {\n    background-color: #17664b;\n    color: white;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n    border: none; }\n.bbs-actions .bbs-action-stroked {\n    color: #17664b;\n    border-color: #17664b; }\n.alert-success, .alert-danger {\n  width: 90% !important;\n  margin: auto !important; }\nmat-divider, .mat-divider {\n  padding-top: 50px; }\n.header {\n  font-size: 44px;\n  line-height: 56px;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  letter-spacing: -0.8px;\n  font-weight: 800;\n  margin-top: 40px; }\n.plank {\n  margin-bottom: 72px !important;\n  height: auto;\n  padding-bottom: 60px;\n  border-bottom: 1px solid lightgray; }\n.plank-img img {\n  border-radius: 7px; }\n.content-title {\n  font-weight: 800;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\n  color: #2b2b2b;\n  font-size: 24px;\n  padding-top: 2px;\n  padding-bottom: 2px; }\n"

/***/ }),

/***/ "./src/app/components/planks/plank-home/plank-home.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/planks/plank-home/plank-home.component.ts ***!
  \**********************************************************************/
/*! exports provided: PlankHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlankHomeComponent", function() { return PlankHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlankHomeComponent = /** @class */ (function () {
    function PlankHomeComponent() {
        this.planks = [
            {
                number: 1,
                title: 'Mentoring',
                img: '../../../../assets/images/consulting-above.jpg',
                msg: ' As someone who has already “been there”,' +
                    'I enjoy imparting my work experiences on others to help guide them along the way.' +
                    ' Acting as a sounding board as well as a role model helps me to enhance the value of developing talent and ' +
                    'gives them the opportunity to question and develop their own skill set.',
                buttonLink: ''
            },
            {
                number: 2,
                title: 'International',
                img: '../../../../assets/images/globe.jpg',
                msg: 'As an executive who has worked and developed businesses in countries around the world, ' +
                    'I am able to connect with cultures at various levels and understand their unique ways of doing business. ' +
                    'By creating an organizational climate that pays attention to cultural differences, yet understands and pursues ' +
                    'corporate objectives, a successful venture is created.',
                buttonLink: ''
            },
            {
                number: 3,
                title: 'Metrics',
                img: '../../../../assets/images/metrics-phone.jpg',
                msg: 'Utilizing a drive to manage by the numbers, I work to improve productivity and utilization of the business. ' +
                    'This includes eliminating waste, reducing costs through lean manufacturing techniques, and managing the supply chain.',
                buttonLink: ''
            },
            {
                number: 4,
                title: 'Strategy',
                img: '../../../../assets/images/mentoring.jpg',
                msg: ' I develop courses of action that strengthen a company’s competitive position.' +
                    ' This includes market and industry leadership, as well as providing direction and motivation the organization.',
                buttonLink: ''
            },
            {
                number: 5,
                title: 'Railway',
                img: '../../../../assets/images/trains-sunset.jpg',
                msg: 'As a seasoned executive who has worked and developed railway business in North America and countries around the world, ' +
                    'both on the Mechanical as well as the Infrastructure side, ' +
                    'I am able to connect with organizations at various levels and understand their unique ways of doing business.' +
                    ' The globalization of the supply base makes understanding the international players very important.',
                buttonLink: ''
            }
        ];
    }
    PlankHomeComponent.prototype.ngOnInit = function () { };
    PlankHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-plank-home',
            template: __webpack_require__(/*! ./plank-home.component.html */ "./src/app/components/planks/plank-home/plank-home.component.html"),
            styles: [__webpack_require__(/*! ./plank-home.component.scss */ "./src/app/components/planks/plank-home/plank-home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PlankHomeComponent);
    return PlankHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/planks/railway/railway.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/planks/railway/railway.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"plank\" fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayout.lt-md=\"column\">\n\n    <div class=\"plank-content\" fxLayout=\"column\"  fxLayoutGap=\"20px\" fxLayoutAlign=\"start\">\n      <div class=\"content-title\">Railway</div>\n      <div class=\"content-msg\">\n        As a seasoned executive who has worked and developed railway\n        business in North America and countries around the world,\n        both on the Mechanical as well as the Infrastructure side, I am able\n        to connect with organizations at various levels and understand their unique ways of doing business.\n        The globalization of the supply base makes understanding the international players very important.\n      </div>\n    </div>\n    <div class=\"plank-img\" fxHide.lt-md>\n      <img height=\"300\" width=\"auto\" src=\"../../../../assets/images/trains-sunset.jpg\">\n    </div>\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/components/planks/railway/railway.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/planks/railway/railway.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/planks/railway/railway.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/planks/railway/railway.component.ts ***!
  \****************************************************************/
/*! exports provided: RailwayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RailwayComponent", function() { return RailwayComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RailwayComponent = /** @class */ (function () {
    function RailwayComponent() {
    }
    RailwayComponent.prototype.ngOnInit = function () {
    };
    RailwayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-railway',
            template: __webpack_require__(/*! ./railway.component.html */ "./src/app/components/planks/railway/railway.component.html"),
            styles: [__webpack_require__(/*! ./railway.component.scss */ "./src/app/components/planks/railway/railway.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RailwayComponent);
    return RailwayComponent;
}());



/***/ }),

/***/ "./src/app/components/planks/strategy/strategy.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/planks/strategy/strategy.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"plank\" fxLayout=\"row\" fxLayoutGap=\"30px\" fxLayout.lt-md=\"column\">\n  <div class=\"plank-img\" fxHide.lt-sm>\n    <img height=\"300\" width=\"auto\" src=\"../../../../assets/images/mentoring.jpg\">\n  </div>\n  <div class=\"plank-content\" fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"start\">\n    <div class=\"content-title\">Strategy</div>\n    <div class=\"content-msg\">\n      I develop courses of action that strengthen a company’s competitive position.\n      This includes market and industry leadership, as well as providing direction and motivation the organization.\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/planks/strategy/strategy.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/planks/strategy/strategy.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/planks/strategy/strategy.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/planks/strategy/strategy.component.ts ***!
  \******************************************************************/
/*! exports provided: StrategyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrategyComponent", function() { return StrategyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StrategyComponent = /** @class */ (function () {
    function StrategyComponent() {
    }
    StrategyComponent.prototype.ngOnInit = function () {
    };
    StrategyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-strategy',
            template: __webpack_require__(/*! ./strategy.component.html */ "./src/app/components/planks/strategy/strategy.component.html"),
            styles: [__webpack_require__(/*! ./strategy.component.scss */ "./src/app/components/planks/strategy/strategy.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], StrategyComponent);
    return StrategyComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container full-height\" *ngIf=\"authService.loggedIn()\" fxLayout=\"column\" fxLayoutGap=\"32px\">\n\n  <div class=\"header\">\n    Profile\n  </div>\n  <mat-divider></mat-divider>\n  <div fxLayout=\"column\" fxLayoutGap=\"16px\">\n\n    <mat-card class=\"profile-action\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"16px\" routerLink=\"../clients\">\n      <i style=\"color: #17664b\" class=\"fas fa-3x fa-users\"></i>\n      <div class=\"bbs-subtitle\" style=\"color: #2b2b2b;\">CLIENT LIST </div>\n    </mat-card>\n\n      <mat-card class=\"profile-action\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"16px\" (click)=\"changeUsername()\">\n        <i style=\"color: #17664b\" class=\"far fa-3x fa-user\"></i>\n        <div class=\"bbs-subtitle\" style=\"color: #2b2b2b;\">CHANGE USERNAME</div>\n      </mat-card>\n\n      <div>\n        <form #username (submit)=\"updateUsername()\" class=\"example-form\" *ngIf=\"editUsername === true\">\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n            <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n              <mat-label>Enter New Username</mat-label>\n              <input matInput type=\"text\" [(ngModel)]=\"newUsername\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"{{user.username}}\" [disabled]=\"editUsername == false\">\n            <!--<mat-hint>New Username</mat-hint>-->\n            </mat-form-field>\n            <div class=\"bbs-actions\">\n              <button mat-raised-button class=\"bbs-action-raised\" type=\"submit\">Change Username</button>\n            </div>\n\n        </div>\n      </form>\n      </div>\n\n    <!--change password-->\n\n    <mat-card class=\"profile-action\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"16px\" (click)=\"changePassword()\">\n    <i style=\"color: #17664b\" class=\"fa fa-3x fa-lock\"></i>\n    <div class=\"bbs-subtitle\" style=\"color: #2b2b2b\">CHANGE PASSWORD</div>\n  </mat-card>\n\n    <div>\n      <form #password (submit)=\"updatePassword(password)\" fxLayout=\"column\" class=\"example-form\" *ngIf=\"editPassword === true\">\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\">\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n            <mat-label>Enter New Password</mat-label>\n            <input matInput type=\"password\" [(ngModel)]=\"newPassword\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"New Password\" [disabled]=\"editPassword == false\">\n          </mat-form-field>\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n            <mat-label>Confirm New Password</mat-label>\n            <input matInput type=\"password\" [(ngModel)]=\"verifyPassword\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"Confirm New Password\" [disabled]=\"editPassword == false\">\n          </mat-form-field>\n          <div class=\"bbs-actions\">\n          <button mat-raised-button class=\"bbs-action-raised\" type=\"submit\">Change Password</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-action {\n  color: #17664b;\n  border-radius: 6px; }\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialogs_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialogs/reset-pass/reset-pass.component */ "./src/app/dialogs/reset-pass/reset-pass.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app.component */ "./src/app/app.component.ts");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, flash, snackBar, dialog, app) {
        this.authService = authService;
        this.flash = flash;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.app = app;
        this.editPassword = false;
        this.editUsername = false;
        this.saveUsername = false;
        this.savePassword = false;
        this.show = false;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.app.ngOnInit();
        // GET PROFILE
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
            _this.username = _this.user.username;
            _this.password = _this.user.password;
            _this.id = profile.user._id;
            // console.log(this.id);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    ProfileComponent.prototype.updateUsername = function () {
        var _this = this;
        this.user.username = this.newUsername;
        this.authService.updateUser(this.id, this.user)
            .subscribe(function (data) {
            if (data.success) {
                _this.snackBar.open('Username has been updated!', 'OK', { duration: 3000 });
                _this.ngOnInit();
                _this.changeUsername();
            }
            else {
                _this.snackBar.open('SOMETHING WENT WRONG -- ' + data.msg, 'OK', { duration: 3000 });
            }
        });
    };
    ProfileComponent.prototype.sendEmail = function (user) {
        console.log(this.user);
        this.dialog.open(_dialogs_reset_pass_reset_pass_component__WEBPACK_IMPORTED_MODULE_3__["ResetPassComponent"], {
            width: 'auto',
            height: 'auto',
            data: { user: this.user }
        });
        this.changePassword();
    };
    ProfileComponent.prototype.updatePassword = function (password) {
        var _this = this;
        var id = this.user._id;
        if (this.newPassword !== this.verifyPassword) {
            this.snackBar.open('Passwords do not match', '', { duration: 3000 });
        }
        else {
            this.user.password = this.verifyPassword;
            var user = {
                username: this.username,
                password: this.user.password
            };
            // console.log(user);
            this.authService.updatePassword(id, user).subscribe(function (data) {
                if (data.success) {
                    _this.snackBar.open('Password has been updated!', 'LOG IN', { duration: 3000 });
                    _this.changePassword();
                }
                else {
                    _this.snackBar.open('Something went wrong: ' + data.msg, '', { duration: 3000 });
                }
            });
            password.reset();
        }
    };
    ProfileComponent.prototype.changeUsername = function () {
        this.editUsername = !this.editUsername;
        this.saveUsername = !this.saveUsername;
    };
    ProfileComponent.prototype.changePassword = function () {
        this.editPassword = !this.editPassword;
        this.savePassword = !this.savePassword;
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            angular2_flash_messages__WEBPACK_IMPORTED_MODULE_5__["FlashMessagesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/confirm/confirm.component.html":
/*!********************************************************!*\
  !*** ./src/app/dialogs/confirm/confirm.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-title class=\"bbs-line\" fxLayout=\"row\" style=\"margin-bottom: 16px\">\n  <div fxFlex=\"90\">Confirm</div>\n  <div fxFlex=\"10\" style=\"cursor:pointer;\">\n    <mat-icon (click)=\"close()\">clear</mat-icon>\n  </div>\n</div>\n\n<mat-dialog-content class=\"bbs-msg\" style=\"margin: 24px\">\n  <div class=\"bbs-msg\">Are you sure you want to delete? {{data._id}}</div>\n</mat-dialog-content>\n\n<div mat-dialog-actions align=\"end\" >\n  <button mat-button mat-dialog-close>Cancel</button>\n  <button mat-button color=\"warn\" (click)=\"confirmDelete()\">DELETE</button>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/confirm/confirm.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dialogs/confirm/confirm.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/confirm/confirm.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dialogs/confirm/confirm.component.ts ***!
  \******************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(as, snackBar, dialog, dialogRef, data) {
        this.as = as;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmComponent.prototype.ngOnInit = function () {
    };
    ConfirmComponent.prototype.confirmDelete = function () {
        var _this = this;
        this.as.deleteUser(this.data.id)
            .subscribe(function (data) {
            if (data.success) {
                _this.ngOnInit();
                _this.dialog.closeAll();
                _this.snackBar.open('User has been deleted', '', { duration: 3000 });
            }
            else {
                _this.snackBar.open('ERROR' + data.msg, '', { duration: 2000 });
            }
        });
    };
    ConfirmComponent.prototype.close = function () {
        this.dialog.closeAll();
    };
    ConfirmComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/app/dialogs/confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.scss */ "./src/app/dialogs/confirm/confirm.component.scss")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/login/login.component.html":
/*!****************************************************!*\
  !*** ./src/app/dialogs/login/login.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group mat-stretch-tabs>\n  <mat-tab label=\"LOGIN\">\n    <div class=\"login\" fxLayout=\"column\" fxLayoutAlign=\"center center\" *ngIf=\"!authService.loggedIn()\">\n      <form class=\"example-form\" (submit)=\"onLoginSubmit()\">\n\n        <div fxLayout=\"column\"  fxLayoutAlign=\"center center\">\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\" fxLayoutGap=\"20px\">\n            <input matInput type=\"text\" [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\"  placeholder=\"Username\" required=\"required\">\n            <mat-icon matPrefix>account_box</mat-icon>\n          </mat-form-field>\n\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n            <input matInput [type]=\"typeChange\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\"placeholder=\"Password\" required=\"required\">\n            <mat-icon matPrefix>lock</mat-icon>\n            <button matSuffix\n                        mat-icon-button\n                        (click)=\"showPassword()\">\n              <i *ngIf=\"show === false\" class=\"fa fa-eye\"></i>\n              <i *ngIf=\"show === true\" class=\"fa fa-eye-slash\"></i>\n            </button>\n          </mat-form-field>\n        </div>\n        <div fxLayoutAlign=\"center center\">\n          <button color=\"primary\" type=\"submit\" mat-stroked-button>Log In</button>\n        </div>\n      </form>\n    </div>\n    <div *ngIf=\"authService.loggedIn()\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"20px\">\n      <div style=\"padding: 10px\">You are now logged in.</div>\n      <button class=\"example-full-width\" mat-stroked-button mat-dialog-close>CLOSE</button>\n    </div>\n  </mat-tab>\n  <!--<mat-tab label=\"REGISTER\">-->\n    <!--<app-register></app-register>-->\n  <!--</mat-tab>-->\n</mat-tab-group>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/dialogs/login/login.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dialogs/login/login.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-form {\n  min-width: 150px;\n  width: 100%; }\n\n.example-full-width {\n  width: 100%; }\n\n.mat-raised-button {\n  width: 100%;\n  color: white;\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  border: none; }\n\n.mat-stroked-button {\n  width: 100%;\n  color: #17664b;\n  border-color: #17664b; }\n"

/***/ }),

/***/ "./src/app/dialogs/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dialogs/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, snackBar, router) {
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.show = false;
        this.typeChange = 'password';
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        console.log(this.username);
        console.log(this.password);
        var user = {
            username: this.username,
            password: this.password,
        };
        this.authService.authenticateUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data.token, data.user);
                _this.snackBar.open('You are now logged in', 'close', { duration: 5000 });
                _this.router.navigate(['../../../profile']);
            }
            else {
                _this.snackBar.open(data.msg, 'close', { duration: 5000 });
            }
            console.log(data);
        });
    };
    LoginComponent.prototype.showPassword = function () {
        console.log(this.show, this.typeChange);
        this.show = !this.show;
        console.log(this.show);
        if (this.show === false) {
            this.typeChange = 'password';
        }
        else {
            this.typeChange = 'text';
        }
        console.log(this.typeChange);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/dialogs/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/dialogs/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/message/message.component.html":
/*!********************************************************!*\
  !*** ./src/app/dialogs/message/message.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayoutGap=\"10px\" fxLayout=\"column\">\n  <div class=\"bbs-title\">Message</div>\n  <mat-divider></mat-divider>\n  <div class=\"info\">From: {{data.name}} {{data.last}}</div>\n  <mat-divider></mat-divider>\n  <div class=\"info\" fxLayout=\"column\" fxLayoutGap=\"10px\">\n    <div fxLayoutGap=\"16px\">Email: <a href=\"mailto:{{data.email}}\">{{data.email}}</a></div>\n    <mat-divider></mat-divider>\n    <div fxLayoutGap=\"16px\">Phone: <a href=\"tel:{{data.phone}}\"> {{data.phone}}</a></div>\n  </div>\n  <mat-divider></mat-divider>\n  <div class=\"info\">Message: </div>\n  <div class=\"bbs-msg\" style=\"margin-bottom: 15px; overflow: scroll; width: 100%; max-width: 500px; word-wrap: break-word;\" fxLayout=\"column\">\n    {{data.message}}\n  </div>\n<mat-divider></mat-divider>\n  <div class=\"bbs-actions\" fxLayoutGap=\"24px\" style=\"padding: 16px; margin: 0 !important;\">\n    <a href=\"mailto:{{data.email}}\"><button mat-stroked-button=\"bbs-action-stroked\">Reply</button></a>\n    <button mat-raised-button class=\"bbs-action-raised\" mat-dialog-close>Close</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/message/message.component.scss":
/*!********************************************************!*\
  !*** ./src/app/dialogs/message/message.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".info {\n  font-size: 16px;\n  font-weight: normal;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif; }\n"

/***/ }),

/***/ "./src/app/dialogs/message/message.component.ts":
/*!******************************************************!*\
  !*** ./src/app/dialogs/message/message.component.ts ***!
  \******************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var MessageComponent = /** @class */ (function () {
    function MessageComponent(as, snackBar, dialog, dialogRef, data) {
        this.as = as;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.open = false;
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/dialogs/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/dialogs/message/message.component.scss")]
        }),
        __param(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/register/register.component.html":
/*!**********************************************************!*\
  !*** ./src/app/dialogs/register/register.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\n  <form #registerform class=\"example-form\" (submit)=\"onRegisterSubmit(registerform)\">\n\n    <div fxLayout=\"column\"  fxLayoutAlign=\"center center\">\n      <mat-form-field class=\"example-full-width\" appearance=\"outline\" fxLayoutGap=\"20px\">\n        <input matInput type=\"text\" [(ngModel)]=\"username\" [ngModelOptions]=\"{standalone: true}\"  placeholder=\"Username\" required=\"required\">\n        <mat-icon matPrefix>account_box</mat-icon>\n      </mat-form-field>\n\n      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n        <input matInput type=\"password\" [(ngModel)]=\"password\" [ngModelOptions]=\"{standalone: true}\"placeholder=\"Password\" required=\"required\">\n        <mat-icon matPrefix>lock</mat-icon>\n      </mat-form-field>\n    </div>\n    <div fxLayoutAlign=\"center center\">\n      <button color=\"primary\" type=\"submit\" mat-stroked-button>Register</button>\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "./src/app/dialogs/register/register.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/dialogs/register/register.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/register/register.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dialogs/register/register.component.ts ***!
  \********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular2-flash-messages */ "./node_modules/angular2-flash-messages/module/index.js");
/* harmony import */ var angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, snackBar, router, flash) {
        this.authService = authService;
        this.snackBar = snackBar;
        this.router = router;
        this.flash = flash;
        this.newPassword = '';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function (registerform) {
        var _this = this;
        var admin = {
            username: this.username,
            password: this.password,
            unhashedPassword: this.password,
            newPassword: this.newPassword,
        };
        this.authService.registerAdmin(admin).subscribe(function (data) {
            if (data.success) {
                _this.flash.show('You are now registered and can log in!', { cssClass: 'alert-success' });
                console.log(admin);
                _this.router.navigate(['./home']);
            }
            else {
                _this.flash.show(data.msg, { cssClass: 'alert-danger' });
            }
        });
        registerform.reset();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/dialogs/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/dialogs/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], angular2_flash_messages__WEBPACK_IMPORTED_MODULE_4__["FlashMessagesService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/dialogs/reset-pass/reset-pass.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/reset-pass/reset-pass.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div mat-dialog-title class=\"bbs-line\" fxLayout=\"row\" style=\"margin-bottom: 16px\">\n  <div fxFlex=\"90\">Password Reset</div>\n  <div fxFlex=\"10\" style=\"cursor:pointer;\">\n    <mat-icon (click)=\"close()\">clear</mat-icon>\n  </div>\n</div>\n\n<!--PASSWORD RESET-->\n<ng-template [ngIf]=\"sendReset == false\" [ngIfElse]=\"ifResetSent\">\n  <mat-dialog-content class=\"bbs-msg\" style=\"margin: 24px\">\n    <div>Enter email below to send password reset link:</div>\n    <form (submit)=\"sendEmail()\">\n      <mat-form-field class=\"example-full-width\" appearance=\"outline\">\n        <input matInput type=\"email\" fxLayoutAlign=\"center\"\n               style=\"padding-left: 8px\"\n               [(ngModel)]=\"mail\"\n               name=\"email\"\n               [formControl]=\"emailFormControl\"\n               [errorStateMatcher]=\"matcher\">\n        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n          Please enter a valid email address\n        </mat-error>\n        <mat-error *ngIf=\"emailFormControl.hasError('required')\">\n          Email is <strong>required</strong>\n        </mat-error>\n        <mat-icon matPrefix class=\"form-icon\">email</mat-icon>\n      </mat-form-field>\n    </form>\n  </mat-dialog-content>\n  <div mat-dialog-actions align=\"end\" >\n    <button mat-button mat-dialog-close>Cancel</button>\n    <button mat-button color=\"primary\" type=\"submit\" (click)=\"sendEmail()\">SEND <mat-icon>send</mat-icon></button>\n  </div>\n</ng-template>\n\n\n<!--PASSWORD RESET CONFIRMATION-->\n<ng-template #ifResetSent>\n  <mat-dialog-content class=\"bbs-msg\" style=\"margin-bottom: 16px\">\n    Check your inbox for instructions.\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button mat-dialog-close>OK!</button>\n  </mat-dialog-actions>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/dialogs/reset-pass/reset-pass.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/dialogs/reset-pass/reset-pass.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dialogs/reset-pass/reset-pass.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dialogs/reset-pass/reset-pass.component.ts ***!
  \************************************************************/
/*! exports provided: MyErrorStateMatcher, ResetPassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPassComponent", function() { return ResetPassComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_validate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/validate.service */ "./src/app/services/validate.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var ResetPassComponent = /** @class */ (function () {
    function ResetPassComponent(as, snackBar, dialog, vs, dialogRef, data) {
        this.as = as;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.vs = vs;
        this.dialogRef = dialogRef;
        this.data = data;
        this.sendReset = false;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    ResetPassComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    ResetPassComponent.prototype.close = function () {
        this.dialog.closeAll();
    };
    ResetPassComponent.prototype.sendEmail = function () {
        var _this = this;
        var userData = this.data.user;
        var id = userData._id;
        var user = {
            username: userData.username,
            email: this.mail,
        };
        this.as.updatePassword(id, user).subscribe(function (data) {
            if (data.success) {
                _this.ngOnInit();
                _this.snackBar.open(data.message, '', { duration: 2000 });
                _this.sendReset = true;
            }
            else {
                _this.snackBar.open('SOMETHING WENT WRONG', 'TRY AGAIN', { duration: 2000 });
            }
        });
    };
    ResetPassComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-pass',
            template: __webpack_require__(/*! ./reset-pass.component.html */ "./src/app/dialogs/reset-pass/reset-pass.component.html"),
            styles: [__webpack_require__(/*! ./reset-pass.component.scss */ "./src/app/dialogs/reset-pass/reset-pass.component.scss")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"],
            _services_validate_service__WEBPACK_IMPORTED_MODULE_2__["ValidateService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ResetPassComponent);
    return ResetPassComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, jwtHelper) {
        this.http = http;
        this.jwtHelper = jwtHelper;
    }
    // CREATE
    AuthService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/users/register', user, {headers: headers})
        return this.http.post('users/register', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    //
    AuthService.prototype.registerAdmin = function (admin) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/admins/register', admin, {headers: headers})
        return this.http.post('admins/register', admin, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    // READ
    AuthService.prototype.getProfile = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        // return this.http.get('http://localhost:3000/admins/profile', {headers: headers})
        return this.http.get('admins/profile', { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.getClientList = function () {
        // return this.http.get('http://localhost:3000/users/usersList')
        return this.http.get('users/usersList')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    // UPDATE
    AuthService.prototype.updateUser = function (id, body) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.put('http://localhost:3000/admins/update/' + id, body,{ headers: headers})
        return this.http.put('admins/update/' + id, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.updatePassword = function (id, body) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.put('http://localhost:3000/admins/resetPassword/' + id, body,{ headers: headers})
        return this.http.put('admins/resetPassword/' + id, body, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // DELETE
    AuthService.prototype.deleteUser = function (id) {
        // return this.http.delete('http://localhost:3000/users/user/' + id)
        return this.http.delete('users/user/' + id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    // AUTH
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/admins/authenticate', user, {headers: headers})
        return this.http.post('admins/authenticate', user, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = localStorage.getItem('id_token');
        return !this.jwtHelper.isTokenExpired(token);
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.loggedIn = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/mailer.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/mailer.service.ts ***!
  \********************************************/
/*! exports provided: MailerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailerService", function() { return MailerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MailerService = /** @class */ (function () {
    function MailerService(http) {
        this.http = http;
    }
    MailerService.prototype.sendEmail = function (user) {
        console.log('Sending Email: ');
        var data = { user: user };
        console.log(user);
        console.log('Recipient: ' + user);
        var body = JSON.stringify(data);
        console.log('BODY: ' + body);
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        console.log('headers: ' + headers);
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/mailer/resetPassword', body,{ headers: headers})
        return this.http.post('mailer/resetPassword', body, { headers: headers })
            .map(function (res) { return res.json(); });
        // return this.http.post('mailer/resetPassword', body,{headers:headers});
    };
    MailerService.prototype.newClient = function (client) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // return this.http.post('http://localhost:3000/mailer/newClient', client,{ headers: headers})
        return this.http.post('mailer/newClient', client, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    MailerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], MailerService);
    return MailerService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        // private serviceUrl = 'http://localhost:3000/users/users';
        // private DjsURL = 'http://localhost:3000/users/djs';
        // private shiftUrl='http://localhost:3000/shifts/shifts';
        this.serviceUrl = 'users/users';
    }
    UserService.prototype.getUser = function () {
        return this.http.get(this.serviceUrl);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/services/validate.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/validate.service.ts ***!
  \**********************************************/
/*! exports provided: ValidateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidateService", function() { return ValidateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateRegister = function (client) {
        return !(client.name === undefined || client.email === undefined);
    };
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService.prototype.validateLogin = function (login) {
        return !(login.username === undefined || login.email === undefined || login.password === undefined);
    };
    ValidateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/pr/Desktop/projects/BBS/becker-business/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map