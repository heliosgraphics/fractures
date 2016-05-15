System.register(["angular2/core", "../../shared/pipes/MapToIterable", "/app/shared/data/blocks.json"], function(exports_1, context_1) {
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
    var core_1, MapToIterable_1, blocks_json_1;
    var DocsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MapToIterable_1_1) {
                MapToIterable_1 = MapToIterable_1_1;
            },
            function (blocks_json_1_1) {
                blocks_json_1 = blocks_json_1_1;
            }],
        execute: function() {
            DocsComponent = (function () {
                function DocsComponent() {
                    this.fracturesArray = blocks_json_1.default;
                }
                DocsComponent = __decorate([
                    core_1.Component({
                        selector: "docs",
                        pipes: [MapToIterable_1.MapToIterable],
                        templateUrl: "app/components/docs/docs.component.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DocsComponent);
                return DocsComponent;
            }());
            exports_1("DocsComponent", DocsComponent);
        }
    }
});
