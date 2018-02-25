/*-----------------------------------------------------------------------------------------------------
 *  YYUED Open Source. 
 *  Licensed under the Apache2.0 License. See License.txt in the project root for license information.
 *----------------------------------------------------------------------------------------------------*/

"use strict";

export class BezierPath {
    _d
    _transform
    _styles
    _shape

    constructor(d = undefined, transform = undefined, styles = undefined) {
        this._d = d
        this._transform = transform
        this._styles = styles
    }
}