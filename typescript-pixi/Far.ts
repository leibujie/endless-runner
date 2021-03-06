class Far extends PIXI.TilingSprite {

	private viewportX :number;
	private static DELTA_X :number = 0.128;

	constructor() {
		super(
			PIXI.Texture.fromImage("resources/bg-far.png"),
			512,
			256
		);

		this.position.x = 0;
		this.position.y = 0;
		this.tilePosition.x = 0;
		this.tilePosition.y = 0;

		this.viewportX = 0;
	}

	public setViewportX(newViewportX :number) :void {
		var distanceTravelled :number = newViewportX - this.viewportX;
		this.viewportX = newViewportX;
		this.tilePosition.x -= (distanceTravelled * Far.DELTA_X);
	}
}