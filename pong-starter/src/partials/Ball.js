import {SVG_NS} from '../settings'

export default class Ball {
    constructor(r, cx, cy){
        this.r = r
        this.cx = cx
        this.cy = cy
        this.direction = 1 //speed of the ball
        //resets the ball in the middle of the board
        this.reset()
    }
    reset() {
        //code to center ball and for movement
    }
    

    render(svg) {
        let ball = document.createElementNS(SVG_NS, 'circle')
        
        ball.setAttributeNS(null, 'r', this.r)
        ball.setAttributeNS(null, 'cx', this.cx)
        ball.setAttributeNS(null, 'cy', this.cy)
        ball.setAttributeNS(null, 'fill', '#FFFFFF')
        svg.appendChild(ball)

    }

}