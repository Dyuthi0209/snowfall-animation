class Snowman
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("snowman.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var s=this.body.position;		
			push()
			translate(s.x, s.y);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
	}

}