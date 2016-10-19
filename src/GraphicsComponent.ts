module Oddkyn
{

export class GraphicsComponent extends Phaser.Sprite
{
    constructor(game: Oddkyn.Game, x: number, y: number, key?: string)
    {
        super(game, x, y, key);
        this.inputEnabled = true;
        this.input.pixelPerfectAlpha = 5;
        this.input.pixelPerfectOver = true;
        this.input.pixelPerfectClick = true;
    }
}

export class BoardElement extends GraphicsComponent
{
    protected _board: Oddkyn.Board;
    public i: number;
    public j: number;
    public h: number;

    constructor(game: Oddkyn.Game, board: Oddkyn.Board, 
        i: number, j: number, z: number, key: string)
    {
        super(game, 0, 0, key);
        this._board = board;
        this.i = i;
        this.j = j;
        this.h = z;
    }

    public rotate(rot: BoardElement.Rotation): void
    {
        switch(rot)
        {
            case BoardElement.Rotation.Right:
                this.frame = (<number>this.frame + 1)%4;
            break;
            case BoardElement.Rotation.Left:
                this.frame = (<number>this.frame - 1)%4;
            break;
        }
    }
}

export module BoardElement
{
export enum Rotation {Right = 0, Left};
export enum Orientation {North = 0, West, South, East};
}

}