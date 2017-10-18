function Die(id) {
    this.value = 0;
    this.held = false;
    this.containerId = $('#' + id);
    this.render = function () {
        this.containerId.attr('src', 'img/' + this.value + '.png')
    };
    this.roll = function () {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.render()
    }
}


var die1 = new Die('die1');
var die2 = new Die('die2');

