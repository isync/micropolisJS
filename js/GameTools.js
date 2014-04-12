/* micropolisJS. Adapted from Micropolis by Graeme McCutcheon.
 *
 * This code is released under the GNU GPL v3, with some additional terms.
 * Please see the files LICENSE and COPYING for details. Alternatively,
 * consult http://micropolisjs.graememcc.co.uk/LICENSE and
 * http://micropolisjs.graememcc.co.uk/COPYING
 *
 */

define(['BuildingTool', 'BulldozerTool', 'ParkTool', 'RailTool', 'RoadTool', 'QueryTool', 'Tile', 'WireTool'],
       function(BuildingTool, BulldozerTool, ParkTool, RailTool, RoadTool, QueryTool, Tile, WireTool) {
  "use strict";

  function gameTools(map) {
    return {
      //1.5 million(1000000) times
      airport: new BuildingTool(15000000000, Tile.AIRPORT, map, 6, false),
      bulldozer: new BulldozerTool(map),
      coal: new BuildingTool(4500000000, Tile.POWERPLANT, map, 4, false),
      commercial: new BuildingTool(150000000, Tile.COMCLR, map, 3, false),
      fire: new BuildingTool(750000000, Tile.FIRESTATION, map, 3, false),
      industrial: new BuildingTool(150000000, Tile.INDCLR, map, 3, false),
      nuclear: new BuildingTool(7500000000, Tile.NUCLEAR, map, 4, true),
      park: new ParkTool(map),
      police: new BuildingTool(750000000, Tile.POLICESTATION, map, 3, false),
      port: new BuildingTool(4500000000, Tile.PORT, map, 4, false),
      rail: new RailTool(map),
      residential: new BuildingTool(150000000, Tile.FREEZ, map, 3, false),
      road: new RoadTool(map),
      query: new QueryTool(map),
      stadium: new BuildingTool(7500000000, Tile.STADIUM, map, 4, false),
      wire: new WireTool(map),
    };
  }


  return gameTools;
});
