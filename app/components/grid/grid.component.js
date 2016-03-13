System.register(["angular2/core", "../../shared/pipes/MapToIterable"], function(exports_1, context_1) {
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
    var core_1, MapToIterable_1;
    var GridComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MapToIterable_1_1) {
                MapToIterable_1 = MapToIterable_1_1;
            }],
        execute: function() {
            GridComponent = (function () {
                function GridComponent() {
                    this.elementArray = [{}];
                    this.elementClasses = [];
                    this.gridClasses = [];
                    // TODO Import
                    this.gridOptions = {
                        align: {
                            selected: false,
                            options: [
                                "grid--start",
                                "grid--end",
                                "grid--baseline"
                            ]
                        },
                        center: {
                            selected: false,
                            options: [
                                "grid--center",
                                "grid--ycenter",
                                "grid--xcenter"
                            ]
                        },
                        justify: {
                            selected: false,
                            options: [
                                "grid--around",
                                "grid--between",
                                "grid--right"
                            ]
                        },
                        responsive: {
                            selected: false,
                            options: [
                                "grid--collapse",
                                "grid--screen"
                            ]
                        },
                        reverse: {
                            selected: false,
                            options: [
                                "grid--reverse"
                            ]
                        },
                        wrap: {
                            selected: false,
                            options: [
                                "grid--wrap"
                            ]
                        },
                        column: {
                            selected: false,
                            options: [
                                "grid--column"
                            ]
                        }
                    };
                    this.elementOptions = {
                        grow: {
                            selected: false,
                            options: [
                                "grow-1",
                                "grow-2",
                                "grow-3",
                                "grow-4",
                                "grow-5",
                            ]
                        },
                        order: {
                            selected: false,
                            options: [
                                "order-1",
                                "order-2",
                                "order-3",
                            ]
                        }
                    };
                    this.marginOptions = {
                        marginPosition: {
                            selected: false,
                            options: [
                                "m",
                                "mx",
                                "my",
                                "mt",
                                "mb",
                                "ml",
                                "mr",
                            ]
                        },
                        marginSize: {
                            selected: false,
                            options: [
                                "0",
                                "1",
                                "2",
                                "3",
                                "4",
                            ]
                        },
                        paddingPosition: {
                            selected: false,
                            options: [
                                "p",
                                "px",
                                "py",
                                "pt",
                                "pb",
                                "pl",
                                "pr",
                            ]
                        },
                        paddingSize: {
                            selected: false,
                            options: [
                                "0",
                                "1",
                                "2",
                                "3",
                                "4",
                            ]
                        }
                    };
                }
                // Set extra elements length
                GridComponent.prototype.elementCountUpdate = function (direction) {
                    if (direction)
                        return this.elementArray.push({});
                    else
                        return this.elementArray.splice(1, 1);
                };
                // Control grid classes
                GridComponent.prototype.toggleGridClass = function (selected, set) {
                    // Remove all setitem from classes array
                    for (var _i = 0, _a = this.gridOptions[set].options; _i < _a.length; _i++) {
                        var option = _a[_i];
                        var optionIndex = this.gridClasses.indexOf(option);
                        if (optionIndex !== -1)
                            this.gridClasses.splice(optionIndex, 1);
                    }
                    // Add new class to array
                    if (selected[1])
                        this.gridClasses.push(selected[1]);
                    // Set selected on options
                    this.gridOptions[set].selected = selected[0];
                };
                GridComponent = __decorate([
                    core_1.Component({
                        pipes: [MapToIterable_1.MapToIterable],
                        selector: "grid",
                        styleUrls: ["app/components/grid/grid.component.css"],
                        templateUrl: "app/components/grid/grid.component.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], GridComponent);
                return GridComponent;
            }());
            exports_1("GridComponent", GridComponent);
        }
    }
});
