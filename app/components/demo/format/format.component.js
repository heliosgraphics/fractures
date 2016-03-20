System.register(["angular2/core", "../../../shared/components/options-toggle/options-toggle.component"], function(exports_1, context_1) {
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
    var core_1, options_toggle_component_1;
    var FormatComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (options_toggle_component_1_1) {
                options_toggle_component_1 = options_toggle_component_1_1;
            }],
        execute: function() {
            FormatComponent = (function () {
                function FormatComponent() {
                    this.helpers = false;
                    this.fontSize = 16;
                    this.formatClasses = ["format"];
                    this.formatOptions = {
                        format: {
                            selected: 0,
                            options: [
                                "format"
                            ]
                        }
                    };
                }
                FormatComponent = __decorate([
                    core_1.Component({
                        directives: [options_toggle_component_1.OptionsToggleComponent],
                        selector: "format",
                        templateUrl: "app/components/demo/format/format.component.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], FormatComponent);
                return FormatComponent;
            }());
            exports_1("FormatComponent", FormatComponent);
        }
    }
});
