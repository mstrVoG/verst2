"use strict"
let Duplicates = [1,1,1,2,3,2,3,4,4]
let noDuplicates = [...new Set(Duplicates)];
alert(noDuplicates)