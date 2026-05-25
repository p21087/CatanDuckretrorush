// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`100010000106020a0a0a0a0a0a0a0a0a0a0a0a0c0101030d0d0d0d0d0d0d0d0d0d0d0d0b0106030d0d0d0d0d0d0d0d0d0d0d0d0b0601030d0d0d0d0d0d0d0d0d0d0d0d0b0707030d0d0d0d0d0d0d0d0d0d0d0d0b0701030d0d0d0d0d0d0d0d0d0d0d0d0b0606030d0d0d0d0d0d0d0d0d0d0d0d0b0601030d0d0d0d0d0d0d0d0d0d0d0d0b0106030d0d0d0d0d0d0d0d0d0d0d0d0b0106030d0d0d0d0d0d0d0d0d0d0d0d0b0106030d0d0d0d0d0d0d0d0d0d0d0d0b0601030d0d0d0d0d0d0d0d0d0d0d0d0b0106030d0d0d0d0d0d0d0d0d0d0d0d0b0f0605080808080808080808080808090e06040e0e04040e040e040f04040e040e040f0e0404040e0e04040e04040e04`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tileDarkGrass1,sprites.castle.tilePath7,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath2,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass3], TileScale.Sixteen);
            case "nivel2":
            case "nivel2":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010201010101010101010101010101010101010101010101010101010201010101010101010101010101010101010101010201010101010101010101010101010101010101010101010101010101010101010201010101010101020101010101010101010101010101010101020101010101010101010101010101010101010101010201010101010101010101010101010101010101010101010102010101010101010101010101010101010101010101010101010101`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "miMosaico":
            case "tile1":return tile1;
            case "miMosaico0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
