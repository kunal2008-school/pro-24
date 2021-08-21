class Rubber{
	constructor(x,y,r){
	var options = {
		density:1,
		restitution:0.3,
		friction:5
	};
		
		this.body1=Bodies.circle(x, y, (r-20)/2, options)
		this.x=x;
		this.y=y;
		this.r=(r-20)/2
		World.add(world, this.body1);


	}
	display()
	{
			var rubberpos=this.body1.position;		
		   
			push()
			translate(rubberpos.x, rubberpos.y);
			ellipseMode(CENTER)
			strokeWeight(4);
		
			stroke("black");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
			ellipse(0,0,this.r,this.r)
			pop()
	}

}