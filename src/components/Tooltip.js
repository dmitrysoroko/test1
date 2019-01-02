export default class Tooltip {
    constructor() {
        this.show = this.show.bind(this);
        this.hide = this.hide.bind(this);
    }

    show(target) {
        let title = target.getAttribute('tooltip-title');
        if(!title) return;

        this.tooltip.innerHTML = title;

        this.tooltip.style.maxWidth = 400 + 'px';
        this.tooltip.style.maxHeight = 50 + 'px';
        this.tooltip.style.overflow = 'auto';

        let pos_left = target.offsetLeft + ( target.offsetWidth / 2 ) - ( target.offsetWidth / 2 ),
            pos_top  = target.offsetTop - target.offsetHeight - 60;
        this.tooltip.className = '';
        if( pos_left < 0 )
        {
            pos_left = target.offsetLeft + target.offsetWidth / 2 - 20;
            this.tooltip.classList.add('left');
        }

        if( pos_left + this.tooltip.offsetWidth > window.innerWidth ) {
            pos_left = target.offsetLeft - target.offsetWidth + target.offsetWidth / 2 + 20;
            this.tooltip.classList.add('right');
        }

        if( pos_top < 0 )
        {
            pos_top  = target.offsetTop + target.offsetHeight;
            this.tooltip.classList.add('top');
        }

        this.tooltip.style.left = pos_left + 'px';
        this.tooltip.style.top = pos_top + 'px';

        this.tooltip.classList.add('show');
    }

    hide() {
        this.tooltip.classList.remove('show');
    }

    bindEvents() {
        this.tooltip = document.getElementById('tooltip');
        this.tooltip.addEventListener('mouseover', () => this.tooltip.classList.add('show'));
        this.tooltip.addEventListener('mouseout', () => this.tooltip.classList.remove('show'));
        let targets = document.querySelectorAll('[tooltip-title]');
        targets.forEach(target => {
            target.addEventListener('mouseover', () => this.show(target));
            target.addEventListener('mouseout', this.hide);
        })
    }
}
