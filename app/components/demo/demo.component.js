System.register(["angular2/core", "./format/format.component", "./grid/grid.component"], function(exports_1, context_1) {
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
    var core_1, format_component_1, grid_component_1;
    var DemoComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (format_component_1_1) {
                format_component_1 = format_component_1_1;
            },
            function (grid_component_1_1) {
                grid_component_1 = grid_component_1_1;
            }],
        execute: function() {
            DemoComponent = (function () {
                function DemoComponent() {
                }
                DemoComponent = __decorate([
                    core_1.Component({
                        directives: [format_component_1.FormatComponent, grid_component_1.GridComponent],
                        selector: "demo",
                        templateUrl: "app/components/demo/demo.component.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DemoComponent);
                return DemoComponent;
            }());
            exports_1("DemoComponent", DemoComponent);
        }
    }
});
