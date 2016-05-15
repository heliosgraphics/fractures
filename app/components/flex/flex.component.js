System.register(["angular2/core", "../flex-options/flex-options.component", "/app/shared/data/blocks.json"], function(exports_1, context_1) {
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
    var core_1, flex_options_component_1, blocks_json_1;
    var FlexComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (flex_options_component_1_1) {
                flex_options_component_1 = flex_options_component_1_1;
            },
            function (blocks_json_1_1) {
                blocks_json_1 = blocks_json_1_1;
            }],
        execute: function() {
            FlexComponent = (function () {
                function FlexComponent() {
                    this.containerClasses = ["container"];
                    this.elementArray = [];
                    this.elementClasses = [];
                    this.flexClasses = [];
                    this.fracturesArray = blocks_json_1.default;
                    this.elementCountUpdate(true);
                }
                FlexComponent.prototype.elementCountUpdate = function (direction) {
                    if (direction)
                        return this.elementArray.push({});
                    else
                        return this.elementArray.splice(0, 1);
                };
                FlexComponent = __decorate([
                    core_1.Component({
                        directives: [flex_options_component_1.FlexOptionsComponent],
                        selector: "flex",
                        styleUrls: ["app/components/flex/flex.component.css"],
                        templateUrl: "app/components/flex/flex.component.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], FlexComponent);
                return FlexComponent;
            }());
            exports_1("FlexComponent", FlexComponent);
        }
    }
});
