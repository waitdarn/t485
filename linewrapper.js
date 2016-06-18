var input = 'hel,low;orldlol(ol';

function main(input) {
    var lineLength = 3;
    var returnInput = input.split('\n').join('');
    var numSplitIndexes = Math.floor(returnInput.length / lineLength);
    
    var splitIndexes = [];
    var cur = lineLength;
    for (var i = 0; i < numSplitIndexes; i++) {
        cur += lineLength;
        splitIndexes.push(cur);
    }
    
    
    for (var i = 0; i < splitIndexes.length; i++) {
        var currentChar = returnInput[splitIndexes[i]];
        console.log(currentChar);
        
        var breakChars = [
            '.',
            '(',
            ')',
            '[',
            ']'
        ];
        
        
        if (currentChar === ' ') {
            returnInput[splitIndexes[i]] === '\n';
        } else if (breakChars.indexOf(currentChar) > -1) {
            var breakChar = breakChars[breakChars.indexOf(currentChar)];
            returnInput.splice(splitIndexes[i], 1, breakChar + '\n');
        }
        
    }
    
    
    return returnInput;
}




function init() {
    if (!String.prototype.splice) {
        /**
         * {JSDoc}
         *
         * The splice() method changes the content of a string by removing a range of
         * characters and/or adding new characters.
         *
         * @this {String}
         * @param {number} start Index at which to start changing the string.
         * @param {number} delCount An integer indicating the number of old chars to remove.
         * @param {string} newSubStr The String that is spliced in.
         * @return {string} A new string with the spliced substring.
         */
        String.prototype.splice = function(start, delCount, newSubStr) {
            return this.slice(0, start) + newSubStr + this.slice(start + Math.abs(delCount));
        };
    }
}




init();
console.log(main(input));