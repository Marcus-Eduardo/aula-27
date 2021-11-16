class Restricao {
    constructor(corpoA,corpoB){
        var options = {
            bodyA: corpoA,
            bodyB: corpoB,
            stiffness: 0.04,
            length: 7
        }
        this.restricao = Constraint.create(options)
        World.add(world,this.restricao)
        this.bodyA = corpoA
        this.bodyB = corpoB
    }
    display(){
        var pontoA = this.bodyA.position
        var pontoB = this.bodyB.position
        push();
        strokeWeight(4);
        line(pontoA.x,pontoA.y,pontoB.x,pontoB.y);
        pop();
    }
}
