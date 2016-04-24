System.register(["angular2/core", "../../shared/services/options.service", "../../shared/components/options-toggle/options-toggle.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, options_service_1, options_toggle_component_1;
    var DemoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (options_service_1_1) {
                options_service_1 = options_service_1_1;
            },
            function (options_toggle_component_1_1) {
                options_toggle_component_1 = options_toggle_component_1_1;
            }],
        execute: function() {
            DemoComponent = (function () {
                function DemoComponent(OptionsService) {
                    this.OptionsService = OptionsService;
                    this.optionsStrings = [
                        "container", "dimension", "flex", "flexelement", "format", "margin", "padding"
                    ];
                    this.optionsArray = [];
                    this.boxClasses = [];
                    this.containerClasses = ["container"];
                    this.dimensionClasses = [];
                    this.elementArray = [{}];
                    this.elementClasses = [];
                    this.flexClasses = [];
                    this.fontSize = 16;
                    this.formatClasses = ["format"];
                }
                DemoComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var _loop_1 = function(x) {
                        this_1.OptionsService
                            .getOptions(x)
                            .subscribe(function (data) {
                            _this.optionsArray[x] = data;
                        });
                    };
                    var this_1 = this;
                    for (var _i = 0, _a = this.optionsStrings; _i < _a.length; _i++) {
                        var x = _a[_i];
                        _loop_1(x);
                    }
                };
                DemoComponent.prototype.elementCountUpdate = function (direction) {
                    if (direction)
                        return this.elementArray.push({});
                    else
                        return this.elementArray.splice(1, 1);
                };
                DemoComponent = __decorate([
                    core_1.Component({
                        directives: [options_toggle_component_1.OptionsToggleComponent],
                        providers: [options_service_1.OptionsService],
                        selector: "demo",
                        styleUrls: ["app/components/demo/demo.component.css"],
                        templateUrl: "app/components/demo/demo.component.html"
                    }), 
                    __metadata('design:paramtypes', [options_service_1.OptionsService])
                ], DemoComponent);
                return DemoComponent;
            }());
            exports_1("DemoComponent", DemoComponent);
        }
    }
});
