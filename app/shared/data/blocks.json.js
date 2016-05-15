System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var blocks;
    return {
        setters:[],
        execute: function() {
            blocks = {
                "color": {
                    "color": ["black", "gray", "silver", "white"],
                    "background-color": ["bg-black", "bg-gray", "bg-silver", "bg-white"]
                },
                "container": {
                    "container": ["container", "container-small", "container-large"]
                },
                "dimension": {
                    "height": ["h-25", "h-33", "h-50", "h-66", "h-75", "h-100"],
                    "max-height": ["maxh-25", "maxh-33", "maxh-50", "maxh-66", "maxh-75", "maxh-100"],
                    "max-width": ["maxw-25", "maxw-33", "maxw-50", "maxw-66", "maxw-75", "maxw-100"],
                    "min-height": ["minh-25", "minh-33", "minh-50", "minh-66", "minh-75", "minh-100"],
                    "min-width": ["minw-25", "minw-33", "minw-50", "minw-66", "minw-75", "minw-100"],
                    "width": ["w-25", "w-33", "w-50", "w-66", "w-75", "w-100"]
                },
                "display": {
                    "clearfix": ["clearfix"],
                    "display": ["block", "inline", "inline-block", "none", "table", "table-cell", "table-row"],
                    "floats": ["float-left", "float-right"]
                },
                "flex": {
                    "align": ["flex--start", "flex--end", "flex--baseline"],
                    "center": ["flex--center", "flex--ycenter", "flex--xcenter"],
                    "column": ["flex--column"],
                    "justify": ["flex--around", "flex--between", "flex--right"],
                    "responsive": ["flex--collapse"],
                    "reverse": ["flex--reverse"],
                    "wrap": ["flex--wrap", "flex--wrap-reverse"]
                },
                "flexelement": {
                    "grow": ["grow-1", "grow-2", "grow-3", "grow-4", "grow-5"],
                    "order": ["order-first", "order-1", "order-2", "order-3", "order-last"],
                    "self": ["self-center", "self-start", "self-end", "self-baseline"],
                    "shrink": ["shrink-2", "shrink-3", "shrink-4", "shrink-5", "shrink-6"]
                },
                "format": {
                    "format": ["format"]
                },
                "list": {
                    "list-style-type": ["list-circle", "list-disc", "list-square", "list-none", "list-lower-latin", "list-lower-roman", "list-upper-latin", "list-upper-roman"]
                },
                "margin": {
                    "margin": ["m-0", "m-1", "m-2", "m-3", "m-4"],
                    "margin-bottom": ["mb-0", "mb-1", "mb-2", "mb-3", "mb-4"],
                    "margin-left": ["ml-0", "ml-1", "ml-2", "ml-3", "ml-4"],
                    "margin-right": ["mr-0", "mr-1", "mr-2", "mr-3", "mr-4"],
                    "margin-top": ["mt-0", "mt-1", "mt-2", "mt-3", "mt-4"],
                    "marginXAxis": ["mx-0", "mx-1", "mx-2", "mx-3", "mx-4"],
                    "marginYAxis": ["my-0", "my-1", "my-2", "my-3", "my-4"]
                },
                "padding": {
                    "padding": ["p-0", "p-1", "p-2", "p-3", "p-4"],
                    "padding-bottom": ["pb-0", "pb-1", "pb-2", "pb-3", "pb-4"],
                    "padding-left": ["pl-0", "pl-1", "pl-2", "pl-3", "pl-4"],
                    "padding-right": ["pr-0", "pr-1", "pr-2", "pr-3", "pr-4"],
                    "padding-top": ["pt-0", "pt-1", "pt-2", "pt-3", "pt-4"],
                    "paddingXAxis": ["px-0", "px-1", "px-2", "px-3", "px-4"],
                    "paddingYAxis": ["py-0", "py-1", "py-2", "py-3", "py-4"]
                },
                "position": {
                    "position": ["absolute", "fixed", "relative"],
                    "z-index": ["z-0", "z-1", "z-2", "z-3", "z-4", "z-5", "z-6", "z-7", "z-8", "z-9", "z-10"]
                },
                "typo": {
                    "ellipsis": ["ellipsis"],
                    "font-style": ["italic", "normal", "oblique"],
                    "font-weight": ["bold", "bolder", "lighter", "regular"],
                    "text-align": ["center", "justify", "left", "right"],
                    "text-decoration": ["line-through", "overline", "underline"],
                    "text-transform": ["capitalize", "lowercase", "uppercase"],
                    "white-space": ["pre", "pre-line", "pre-wrap", "nowrap"]
                }
            };
            exports_1("default",blocks);
        }
    }
});
