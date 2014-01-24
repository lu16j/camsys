var sample_data = JSON.parse('{"0":{"serial":"BUS0","type":"bus","years":[1990],"price":108686,"volume":1000},"1":{"serial":"PARKING1","type":"parking","years":[1992],"price":37080,"volume":100},"2":{"serial":"BUS2","type":"bus","years":[1997],"price":108250,"volume":1000},"3":{"serial":"LIGHT_RAIL3","type":"light_rail","years":[1996],"price":1099244,"volume":2000},"4":{"serial":"SYSTEMS4","type":"systems","years":[1968],"price":8533,"volume":20},"5":{"serial":"BUS5","type":"bus","years":[2002],"price":110566,"volume":1000},"6":{"serial":"SYSTEMS6","type":"systems","years":[1975],"price":12836,"volume":20},"7":{"serial":"SYSTEMS7","type":"systems","years":[1973],"price":18177,"volume":20},"8":{"serial":"BUS8","type":"bus","years":[2004],"price":325483,"volume":1000},"9":{"serial":"BUS9","type":"bus","years":[2003],"price":394468,"volume":1000},"10":{"serial":"LIGHT_RAIL10","type":"light_rail","years":[1984],"price":1209325,"volume":2000},"11":{"serial":"STREET11","type":"street","years":[1995],"price":30478,"volume":500},"12":{"serial":"LIGHT_RAIL12","type":"light_rail","years":[1976],"price":1912543,"volume":2000},"13":{"serial":"BUS13","type":"bus","years":[1994],"price":219714,"volume":1000},"14":{"serial":"LIGHT_RAIL14","type":"light_rail","years":[1990],"price":1688798,"volume":2000},"15":{"serial":"BUS15","type":"bus","years":[2000],"price":269813,"volume":1000},"16":{"serial":"BUS16","type":"bus","years":[1999],"price":206678,"volume":1000},"17":{"serial":"BUILDING_UTILITIES17","type":"building_utilities","years":[1979],"price":29077,"volume":5},"18":{"serial":"LIGHT_RAIL18","type":"light_rail","years":[1984],"price":1290809,"volume":2000},"19":{"serial":"STREET19","type":"street","years":[1997],"price":10063,"volume":500},"20":{"serial":"LIGHT_RAIL20","type":"light_rail","years":[1989],"price":1537525,"volume":2000},"21":{"serial":"BUS21","type":"bus","years":[2005],"price":140567,"volume":1000},"22":{"serial":"BUS22","type":"bus","years":[1994],"price":378211,"volume":1000},"23":{"serial":"BUS23","type":"bus","years":[1997],"price":215570,"volume":1000},"24":{"serial":"SYSTEMS24","type":"systems","years":[1992],"price":6853,"volume":20},"25":{"serial":"PARKING25","type":"parking","years":[1983],"price":28431,"volume":100},"26":{"serial":"BUILDING_UTILITIES26","type":"building_utilities","years":[1958],"price":30943,"volume":5},"27":{"serial":"STREET27","type":"street","years":[1993],"price":15894,"volume":500},"28":{"serial":"BUS28","type":"bus","years":[2006],"price":232097,"volume":1000},"29":{"serial":"BUS29","type":"bus","years":[2004],"price":418354,"volume":1000},"30":{"serial":"SYSTEMS30","type":"systems","years":[1972],"price":12400,"volume":20},"31":{"serial":"PARKING31","type":"parking","years":[1981],"price":23351,"volume":100},"32":{"serial":"LIGHT_RAIL32","type":"light_rail","years":[1988],"price":1362367,"volume":2000},"33":{"serial":"PARKING33","type":"parking","years":[1998],"price":20424,"volume":100},"34":{"serial":"LIGHT_RAIL34","type":"light_rail","years":[1992],"price":1691711,"volume":2000},"35":{"serial":"PARKING35","type":"parking","years":[1988],"price":39979,"volume":100},"36":{"serial":"PARKING36","type":"parking","years":[1991],"price":29136,"volume":100},"37":{"serial":"SYSTEMS37","type":"systems","years":[1979],"price":16785,"volume":20},"38":{"serial":"SYSTEMS38","type":"systems","years":[1985],"price":19038,"volume":20},"39":{"serial":"SYSTEMS39","type":"systems","years":[1996],"price":13210,"volume":20},"40":{"serial":"PARKING40","type":"parking","years":[1999],"price":41967,"volume":100},"41":{"serial":"BUS41","type":"bus","years":[2000],"price":310754,"volume":1000},"42":{"serial":"BUS42","type":"bus","years":[1993],"price":480495,"volume":1000},"43":{"serial":"SYSTEMS43","type":"systems","years":[1993],"price":12977,"volume":20},"44":{"serial":"SYSTEMS44","type":"systems","years":[1980],"price":9111,"volume":20},"45":{"serial":"LIGHT_RAIL45","type":"light_rail","years":[1980],"price":1941925,"volume":2000},"46":{"serial":"BUS46","type":"bus","years":[2009],"price":398529,"volume":1000},"47":{"serial":"BUS47","type":"bus","years":[2001],"price":498356,"volume":1000},"48":{"serial":"MAINTENANCE_BUILDING48","type":"maintenance_building","years":[1962],"price":835339,"volume":5},"49":{"serial":"LIGHT_RAIL49","type":"light_rail","years":[1981],"price":1696817,"volume":2000},"50":{"serial":"PARKING50","type":"parking","years":[1987],"price":47681,"volume":100},"51":{"serial":"SYSTEMS51","type":"systems","years":[1990],"price":16883,"volume":20},"52":{"serial":"BUS52","type":"bus","years":[1996],"price":219218,"volume":1000},"53":{"serial":"SYSTEMS53","type":"systems","years":[1976],"price":11122,"volume":20},"54":{"serial":"SYSTEMS54","type":"systems","years":[1969],"price":18175,"volume":20},"55":{"serial":"BUS55","type":"bus","years":[1997],"price":314208,"volume":1000},"56":{"serial":"BUS56","type":"bus","years":[1999],"price":373217,"volume":1000},"57":{"serial":"SYSTEMS57","type":"systems","years":[1980],"price":6300,"volume":20},"58":{"serial":"BUILDING_UTILITIES58","type":"building_utilities","years":[1965],"price":46950,"volume":5},"59":{"serial":"BUS59","type":"bus","years":[1999],"price":301531,"volume":1000},"60":{"serial":"BUS60","type":"bus","years":[1993],"price":251714,"volume":1000},"61":{"serial":"PARKING61","type":"parking","years":[1997],"price":37895,"volume":100},"62":{"serial":"PARKING62","type":"parking","years":[1990],"price":39887,"volume":100},"63":{"serial":"OVERHEAD63","type":"overhead","years":[1960],"price":353356,"volume":250},"64":{"serial":"BUS64","type":"bus","years":[2001],"price":329294,"volume":1000},"65":{"serial":"BUS65","type":"bus","years":[2009],"price":204186,"volume":1000},"66":{"serial":"BUS66","type":"bus","years":[2006],"price":334562,"volume":1000},"67":{"serial":"BUS67","type":"bus","years":[1992],"price":141838,"volume":1000},"68":{"serial":"BUS68","type":"bus","years":[2002],"price":250284,"volume":1000},"69":{"serial":"BUS69","type":"bus","years":[1997],"price":432969,"volume":1000},"70":{"serial":"BUS70","type":"bus","years":[2005],"price":325004,"volume":1000},"71":{"serial":"UTILITY_BUILDING71","type":"utility_building","years":[2003],"price":846416,"volume":5},"72":{"serial":"TRACK72","type":"track","years":[1984],"price":2702885,"volume":1000},"73":{"serial":"LIGHT_RAIL73","type":"light_rail","years":[1992],"price":1762669,"volume":2000},"74":{"serial":"STREET74","type":"street","years":[1990],"price":40608,"volume":500},"75":{"serial":"OVERHEAD75","type":"overhead","years":[1964],"price":417026,"volume":250},"76":{"serial":"OVERHEAD76","type":"overhead","years":[1980],"price":195062,"volume":250},"77":{"serial":"SYSTEMS77","type":"systems","years":[1985],"price":11870,"volume":20},"78":{"serial":"TRACK78","type":"track","years":[2005],"price":1573170,"volume":1000},"79":{"serial":"SYSTEMS79","type":"systems","years":[1960],"price":19556,"volume":20},"80":{"serial":"SYSTEMS80","type":"systems","years":[1961],"price":6982,"volume":20},"81":{"serial":"BUS81","type":"bus","years":[1999],"price":463626,"volume":1000},"82":{"serial":"STREET82","type":"street","years":[1997],"price":24349,"volume":500},"83":{"serial":"SYSTEMS83","type":"systems","years":[1996],"price":16262,"volume":20},"84":{"serial":"SYSTEMS84","type":"systems","years":[1993],"price":7173,"volume":20},"85":{"serial":"SYSTEMS85","type":"systems","years":[1989],"price":12439,"volume":20},"86":{"serial":"LIGHT_RAIL86","type":"light_rail","years":[1987],"price":1034613,"volume":2000},"87":{"serial":"LIGHT_RAIL87","type":"light_rail","years":[1979],"price":1275157,"volume":2000},"88":{"serial":"LIGHT_RAIL88","type":"light_rail","years":[1979],"price":1672352,"volume":2000},"89":{"serial":"BUS89","type":"bus","years":[1999],"price":317091,"volume":1000},"90":{"serial":"BUS90","type":"bus","years":[1999],"price":145571,"volume":1000},"91":{"serial":"TRACK91","type":"track","years":[1983],"price":4073045,"volume":1000},"92":{"serial":"SYSTEMS92","type":"systems","years":[1995],"price":12774,"volume":20},"93":{"serial":"OVERHEAD93","type":"overhead","years":[1963],"price":413296,"volume":250},"94":{"serial":"BUS94","type":"bus","years":[1991],"price":136460,"volume":1000},"95":{"serial":"BUS95","type":"bus","years":[1992],"price":405386,"volume":1000},"96":{"serial":"SYSTEMS96","type":"systems","years":[1968],"price":9815,"volume":20},"97":{"serial":"OVERHEAD97","type":"overhead","years":[1991],"price":136845,"volume":250},"98":{"serial":"LIGHT_RAIL98","type":"light_rail","years":[1978],"price":1640522,"volume":2000},"99":{"serial":"STREET99","type":"street","years":[1999],"price":48844,"volume":500}}');