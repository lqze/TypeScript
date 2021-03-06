//// [tests/cases/compiler/referenceTypesPreferedToPathIfPossible.ts] ////

//// [index.d.ts]
declare module "url" {
    export class Url {}
    export function parse(): Url; 
}
//// [usage.ts]
import { parse } from "url";
export const thing = () => parse();


//// [usage.js]
"use strict";
exports.__esModule = true;
exports.thing = void 0;
var url_1 = require("url");
var thing = function () { return url_1.parse(); };
exports.thing = thing;


//// [usage.d.ts]
/// <reference types="node" />
export declare const thing: () => import("url").Url;
