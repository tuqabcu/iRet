// Copyright ©,2023, Birmingham City University

export const renderRoomBuilding = (zone, index) => {
  return `
	! Single-zone residential space with one window. Gas heating and hot water system
! Source file: \shoebox\shoebox-residential.dsb
! Part 3 - Zone(s) and surfaces

! Version, 8.9.0.001;                               !- Version Identifier


	! Base - Zone 1
	Zone, ZoneName[],                                 !- Zone Name
	   0,                                             !- Relative North (to building)
	   0,                                             !- X Origin (M)
	   0,                                             !- Y Origin (M)
	   0,                                             !- Z Origin (M)
	   1 ,                                            !- Zone Type
	   1,                                             !- Zone multiplier
	   ,                                              !- Zone ceiling height - Let EnergyPlus work it out
	   ,                                      !- Zone volume - Let EnergyPlus work it out
	   ,                                      !- Floor Area - Let EnergyPlus work it out
	   TARP,                                          !- Zone inside convection algorithm
	   ,                                              !- Zone outside convection algorithm
	   Yes;                                           !- Part Of Total Floor Area

   Daylighting:ReferencePoint, Base:Zone1 Ref Point 1,  !- Name
      ZoneName[],                                 !- Zone Name
      .225,                                       !- X-Coordinate of Reference Point {m}
      5.939,                                      !- Y-coordinate of Reference Point {m}
      3.976;                                      !- Z-coordinate of Reference Point {m}


   ! Base, Zone 1, ground floor - 24.000 m2, Surface Area: 24.000m2
   BuildingSurface:Detailed,                      !- Surface
      Base:Zone1_ExtFloor_0_0_0,                  !- Surface name
      Floor, Project ground floor,              !- Class and Construction Name
      ZoneName[],                                 !- Zone Name
      Ground, ,                                   !- Outside Face Environment
      NoSun,                                      !- Sun Exposure
      NoWind,                                     !- Wind Exposure
      AutoCalculate,                              !- View Factor to Ground
      4,                                          !- Number vertices
       2.2266587895, 3.4706925521, 3.0018347553,  !- Vertex 1
      -1.7733412105, 3.4706925521, 3.0018347553,  !- Vertex 2
      -1.7733412105, 9.4706925521, 3.0018347553,  !- Vertex 3
       2.2266587895, 9.4706925521, 3.0018347553;  !- Vertex 4

   ! Base, Zone 1, Roof - 24.000 m2, Surface Area: 24.000m2
   BuildingSurface:Detailed,                      !- Surface
      Base:Zone1_Roof_1_0_0,                      !- Surface name
      Roof, Project flat roof,                    !- Class and Construction Name
      ZoneName[],                                 !- Zone Name
      Outdoors, ,                                 !- Outside Face Environment
      SunExposed,                                 !- Sun Exposure
      WindExposed,                                !- Wind Exposure
      AutoCalculate,                              !- View Factor to Ground
      4,                                          !- Number vertices
      -1.7733412105, 3.4706925521, 6.0018347553,  !- Vertex 1
       2.2266587895, 3.4706925521, 6.0018347553,  !- Vertex 2
       2.2266587895, 9.4706925521, 6.0018347553,  !- Vertex 3
      -1.7733412105, 9.4706925521, 6.0018347553;  !- Vertex 4

   ! Base, Zone 1, Wall - 18.000 m2 - 90.0�, Surface Area: 18.000m2
   BuildingSurface:Detailed,                      !- Surface
      Base:Zone1_Wall_2_0_0,                      !- Surface name
      Wall, Brick/block wall (insulated to 1985 regs),  !- Class and Construction Name
      ZoneName[],                                 !- Zone Name
      Outdoors, ,                                 !- Outside Face Environment
      SunExposed,                                 !- Sun Exposure
      WindExposed,                                !- Wind Exposure
      AutoCalculate,                              !- View Factor to Ground
      4,                                          !- Number vertices
       2.2266587895, 3.4706925521, 3.0018347553,  !- Vertex 1
       2.2266587895, 9.4706925521, 3.0018347553,  !- Vertex 2
       2.2266587895, 9.4706925521, 6.0018347553,  !- Vertex 3
       2.2266587895, 3.4706925521, 6.0018347553;  !- Vertex 4

   ! Base, Zone 1, Wall - 12.000 m2 - 0.0�, Surface Area: 12.000m2
   BuildingSurface:Detailed,                      !- Surface
      Base:Zone1_Wall_3_0_0,                      !- Surface name
      Wall, ExtWall[],  !- Class and Construction Name
      ZoneName[],                                 !- Zone Name
      Outdoors, ,                                 !- Outside Face Environment
      SunExposed,                                 !- Sun Exposure
      WindExposed,                                !- Wind Exposure
      AutoCalculate,                              !- View Factor to Ground
      4,                                          !- Number vertices
       2.2266587895, 9.4706925521, 3.0018347553,  !- Vertex 1
      -1.7733412105, 9.4706925521, 3.0018347553,  !- Vertex 2
      -1.7733412105, 9.4706925521, 6.0018347553,  !- Vertex 3
       2.2266587895, 9.4706925521, 6.0018347553;  !- Vertex 4

   ! Base, Zone 1, Wall - 18.000 m2 - 270.0�, Surface Area: 18.000m2
   BuildingSurface:Detailed,                      !- Surface
      Base:Zone1_Wall_4_0_0,                      !- Surface name
      Wall, Brick/block wall (insulated to 1985 regs),  !- Class and Construction Name
      ZoneName[],                                 !- Zone Name
      Outdoors, ,                                 !- Outside Face Environment
      SunExposed,                                 !- Sun Exposure
      WindExposed,                                !- Wind Exposure
      AutoCalculate,                              !- View Factor to Ground
      4,                                          !- Number vertices
      -1.7733412105, 9.4706925521, 3.0018347553,  !- Vertex 1
      -1.7733412105, 3.4706925521, 3.0018347553,  !- Vertex 2
      -1.7733412105, 3.4706925521, 6.0018347553,  !- Vertex 3
      -1.7733412105, 9.4706925521, 6.0018347553;  !- Vertex 4

   ! Base, Zone 1, Wall - 12.000 m2 - 180.0�, Surface Area: 12.000m2
   BuildingSurface:Detailed,                      !- Surface
      Base:Zone1_Wall_5_0_0,                      !- Surface name
      Wall, Brick/block wall (insulated to 1985 regs),  !- Class and Construction Name
      ZoneName[],                                 !- Zone Name
      Outdoors, ,                                 !- Outside Face Environment
      SunExposed,                                 !- Sun Exposure
      WindExposed,                                !- Wind Exposure
      AutoCalculate,                              !- View Factor to Ground
      4,                                          !- Number vertices
      -1.7733412105, 3.4706925521, 3.0018347553,  !- Vertex 1
       2.2266587895, 3.4706925521, 3.0018347553,  !- Vertex 2
       2.2266587895, 3.4706925521, 6.0018347553,  !- Vertex 3
      -1.7733412105, 3.4706925521, 6.0018347553;  !- Vertex 4

      ! Window, 1.743m2
      FenestrationSurface:Detailed, Base:Zone1_Wall_5_0_0_0_0_0_Win,  !- Window name
         Window,                                  !- Class
         ExtWindow[],                                    !- Construction Name
         Base:Zone1_Wall_5_0_0,                   !- Base surface
         ,                                        !- corresponding other window subsurface
         AutoCalculate,                           !- View Factor to Ground
         ,                                        !- Window shading control
         Frame 1,                                       !- Frame divider name
         1,                                       !- Multiplier
         4,                                       !- Number vertices
         -.3871123433, 3.4706925521, 4.01573476,  !- Vertex 1
          .8404299233, 3.4706925521, 4.01573476,  !- Vertex 2
          .8404299233, 3.4706925521, 5.43573476,  !- Vertex 3
         -.3871123433, 3.4706925521, 5.43573476;  !- Vertex 4

!         Shading:Building:Detailed, 5,  , 4,      !- Local shading device
!             .8804299233, 2.4706925521, 5.47573476,  !- Vertex 1
!            -.4271123433, 2.4706925521, 5.47573476,  !- Vertex 2
!            -.4271123433, 3.4706925521, 5.47573476,  !- Vertex 3
!             .8804299233, 3.4706925521, 5.47573476;  !- Vertex 4



	  
		  `
}

// export const renderRoomBuilding = (zone, index) => {
//   return `
// 	BuildingSurface:Detailed,
// 		${zone.name}:Wall001,           !- Name
// 		Wall,                    !- Surface Type
// 		${zone.wall1Construction},                 !- Construction Name
// 		ZONE ${zone.name} ${index},                !- Zone Name
// 		Outdoors,                !- Outside Boundary Condition
// 		,                        !- Outside Boundary Condition Object
// 		SunExposed,              !- Sun Exposure
// 		WindExposed,             !- Wind Exposure
// 		AutoCalculate,               !- View Factor to Ground
// 		4,                       !- Number of Vertices
// 		${zone.walls.wall1.cornerTopLeft.x},${zone.walls.wall1.cornerTopLeft.y},${zone.walls.wall1.cornerTopLeft.z},  !- X,Y,Z ==> Vertex 1 {m}
// 		${zone.walls.wall1.cornerTopRight.x},${zone.walls.wall1.cornerTopRight.y},${zone.walls.wall1.cornerTopRight.z},  !- X,Y,Z ==> Vertex 2 {m}
// 		${zone.walls.wall1.cornerBottomRight.x},${zone.walls.wall1.cornerBottomRight.y},${zone.walls.wall1.cornerBottomRight.z},  !- X,Y,Z ==> Vertex 3 {m}
// 		${zone.walls.wall1.cornerBottomLeft.x},${zone.walls.wall1.cornerBottomLeft.y},${zone.walls.wall1.cornerBottomLeft.z};  !- X,Y,Z ==> Vertex 4 {m}

// 	BuildingSurface:Detailed,
// 		${zone.name}:Wall002,           !- Name
// 		Wall,                    !- Surface Type
// 		${zone.wall2Construction},                 !- Construction Name
// 		ZONE ${zone.name} ${index},                !- Zone Name
// 		Outdoors,                !- Outside Boundary Condition
// 		,                        !- Outside Boundary Condition Object
// 		SunExposed,              !- Sun Exposure
// 		WindExposed,             !- Wind Exposure
// 		AutoCalculate,               !- View Factor to Ground
// 		4,                       !- Number of Vertices
// 		${zone.walls.wall2.cornerTopLeft.x},${zone.walls.wall2.cornerTopLeft.y},${zone.walls.wall2.cornerTopLeft.z},  !- X,Y,Z ==> Vertex 1 {m}
// 		${zone.walls.wall2.cornerTopRight.x},${zone.walls.wall2.cornerTopRight.y},${zone.walls.wall2.cornerTopRight.z},  !- X,Y,Z ==> Vertex 2 {m}
// 		${zone.walls.wall2.cornerBottomRight.x},${zone.walls.wall2.cornerBottomRight.y},${zone.walls.wall2.cornerBottomRight.z},  !- X,Y,Z ==> Vertex 3 {m}
// 		${zone.walls.wall2.cornerBottomLeft.x},${zone.walls.wall2.cornerBottomLeft.y},${zone.walls.wall2.cornerBottomLeft.z};  !- X,Y,Z ==> Vertex 4 {m}

// 	BuildingSurface:Detailed,
// 		${zone.name}:Wall003,           !- Name
// 		Wall,                    !- Surface Type
// 		${zone.wall3Construction},                 !- Construction Name
// 		ZONE ${zone.name} ${index},                !- Zone Name
// 		Outdoors,                !- Outside Boundary Condition
// 		,                        !- Outside Boundary Condition Object
// 		SunExposed,              !- Sun Exposure
// 		WindExposed,             !- Wind Exposure
// 		AutoCalculate,               !- View Factor to Ground
// 		4,                       !- Number of Vertices
// 		${zone.walls.wall3.cornerTopLeft.x},${zone.walls.wall3.cornerTopLeft.y},${zone.walls.wall3.cornerTopLeft.z},  !- X,Y,Z ==> Vertex 1 {m}
// 		${zone.walls.wall3.cornerTopRight.x},${zone.walls.wall3.cornerTopRight.y},${zone.walls.wall3.cornerTopRight.z},  !- X,Y,Z ==> Vertex 2 {m}
// 		${zone.walls.wall3.cornerBottomRight.x},${zone.walls.wall3.cornerBottomRight.y},${zone.walls.wall3.cornerBottomRight.z},  !- X,Y,Z ==> Vertex 3 {m}
// 		${zone.walls.wall3.cornerBottomLeft.x},${zone.walls.wall3.cornerBottomLeft.y},${zone.walls.wall3.cornerBottomLeft.z};  !- X,Y,Z ==> Vertex 4 {m}

// 	BuildingSurface:Detailed,
// 		${zone.name}:Wall004,           !- Name
// 		Wall,                    !- Surface Type
// 		${zone.wall4Construction},                 !- Construction Name
// 		ZONE ${zone.name} ${index},                !- Zone Name
// 		Outdoors,                !- Outside Boundary Condition
// 		,                        !- Outside Boundary Condition Object
// 		SunExposed,              !- Sun Exposure
// 		WindExposed,             !- Wind Exposure
// 		AutoCalculate,               !- View Factor to Ground
// 		4,                       !- Number of Vertices
// 		${zone.walls.wall4.cornerTopLeft.x},${zone.walls.wall4.cornerTopLeft.y},${zone.walls.wall4.cornerTopLeft.z},  !- X,Y,Z ==> Vertex 1 {m}
// 		${zone.walls.wall4.cornerTopRight.x},${zone.walls.wall4.cornerTopRight.y},${zone.walls.wall4.cornerTopRight.z},  !- X,Y,Z ==> Vertex 2 {m}
// 		${zone.walls.wall4.cornerBottomRight.x},${zone.walls.wall4.cornerBottomRight.y},${zone.walls.wall4.cornerBottomRight.z},  !- X,Y,Z ==> Vertex 3 {m}
// 		${zone.walls.wall4.cornerBottomLeft.x},${zone.walls.wall4.cornerBottomLeft.y},${zone.walls.wall4.cornerBottomLeft.z};  !- X,Y,Z ==> Vertex 4 {m}

// 		`
// }
