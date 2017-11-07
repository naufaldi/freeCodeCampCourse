String.prototype.replaceAt = function(index, character) {
    return this.substr(0, index) + character + this.substr(index + character.length);
};

function titleCase(str) {
    var newTitle = str.split(' ');
    var updateTitle = [];
    for (var st in newTitle) {
        updateTitle[st] = newTitle[st]
            .toLowerCase()
            .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updateTitle.join(' ');
}

titleCase("I'm a little tea pot");