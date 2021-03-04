class Boss extends Opponent{
	constructor(game){
		super(game);
		 this.speed = BOSS_SPEED,
         this.image.src = BOSS_PICTURE;
         this.myImageDeadSrc = BOSS_PICTURE_DEAD;
	}
    collide() {
        
        if (!this.dead) {
            setTimeout(() => {
                this.game.endGame();
            }, 2000);
            super.collide();
			this.game.score+= 1;
        }
    }
} 