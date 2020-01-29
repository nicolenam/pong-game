import {SVG_NS} from '../settings'

export default class Ball {
    constructor(r, boardWidth, boardHeight){
        this.r = r
        this.boardWidth = boardWidth
        this.boardHeight = boardHeight
        this.direction = 1 //speed of the ball
        //resets the ball in the middle of the board
        this.reset()
    }
    reset() {
        //code to center ball and for movement
        this.x = this.boardWidth/2
        this.y = this.boardHeight/2

        // generates randowm number between -5 and 5
        this.vy = 0
        while(this.vy === 0){
        this.vy = Math.floor(Math.random() *10 - 5)
        }
        this.vx = this.direction * (6 - Math.abs(this.vy))
    }

    paddleCollision(player1, player2) {
        //if vx is greater than 0, detect paddle2
        if (this.vx >0) {
            let paddle = player2.coordinates(player2.x,player2.y,player2.width,player2.height)
            let[leftX, rightX, topY, bottomY] = paddle
            if(
                (this.x + this.r >= leftX)
                && (this.x + this.r <= rightX)
                && (this.y >= topY && this.y <= bottomY)        
            )
            this.vx = -this.vx
        }
        //else detect paddle1
    }

    wallCollision(){
        const hitLeft = this.x - this.r <= 0
        const hitRight = this.x + this.r >= this.boardWidth
        const hitTop = this.y - this.r <= 0
        const hitBottom = this.y + this.r >= this.boardHeight

        if(hitLeft || hitRight) {
            this.vx = -this.vx
        } else if (hitTop || hitBottom) {
            this.vy = -this.vy
            
        }
   
    }    

    render(svg, player1, player2) {
        this.x += this.vx
        this.y += this.vy

        this.wallCollision()
        
        this.paddleCollision(player1, player2)

        let ball = document.createElementNS(SVG_NS, 'circle')
        ball.setAttributeNS(null, 'r', this.r)
        ball.setAttributeNS(null, 'cx', this.x)
        ball.setAttributeNS(null, 'cy', this.y)
        ball.setAttributeNS(null, 'fill', '#FFFFFF')
        svg.appendChild(ball)

    }

}