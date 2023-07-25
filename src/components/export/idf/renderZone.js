// Copyright ©,2023, Birmingham City University

function generate_room(room, roomIdx, prevFloorZ, prevFloorX) {
  if (room.type === 'roof') {
    return generate_roof(room)
  } else {
    return `
    ! Base - Zone ${roomIdx}
    Zone, ${
      roomIdx == 1 ? 'ZoneName[]' : `ZoneName${roomIdx}[]`
    },                                 !- Zone Name
       0,                                             !- Relative North (to building)
       0,    !- X Origin (M)
       0,                                                        !- Y Origin (M)
       ${prevFloorZ},   !- Z Origin (M)
       1 ,                                            !- Zone Type
       1,                                             !- Zone multiplier
       ,                                              !- Zone ceiling height - Let EnergyPlus work it out
       ,                                      !- Zone volume - Let EnergyPlus work it out
       ,                                      !- Floor Area - Let EnergyPlus work it out
       TARP,                                          !- Zone inside convection algorithm
       ,                                              !- Zone outside convection algorithm
       Yes;                                           !- Part Of Total Floor Area

     Daylighting:ReferencePoint, Base:Zone${roomIdx} Ref Point 1,  !- Name
     ${
       roomIdx == 1 ? 'ZoneName[]' : `ZoneName${roomIdx}[]`
     },                                 !- Zone Name
        .225,                                       !- X-Coordinate of Reference Point {m}
        5.939,                                      !- Y-coordinate of Reference Point {m}
        3.976;                                      !- Z-coordinate of Reference Point {m}

        ! Base, Zone ${roomIdx}, ground floor - 24.000 m2, Surface Area: 24.000m2
        BuildingSurface:Detailed,                      !- Surface
           Base:Zone${roomIdx}_ExtFloor_0_0_0,                  !- Surface name
           Floor, Project ground floor,                !- Class and Construction Name
           ${
             roomIdx == 1 ? 'ZoneName[]' : `ZoneName${roomIdx}[]`
           },                                 !- Zone Name
           Ground, ,                                   !- Outside Face Environment
           NoSun,                                      !- Sun Exposure
           NoWind,                                     !- Wind Exposure
           AutoCalculate,                              !- View Factor to Ground
           4,                                          !- Number vertices
           ${generate_vertices(room, 'floor')}

          ! Base, Zone ${roomIdx}, Roof - 24.000 m2, Surface Area: 24.000m2
           BuildingSurface:Detailed,                      !- Surface
              Base:Zone${roomIdx}_Roof_1_0_0,                      !- Surface name
              Roof, Project flat roof,                 !- Class and Construction Name
              ${
                roomIdx == 1 ? 'ZoneName[]' : `ZoneName${roomIdx}[]`
              },                                 !- Zone Name
              Outdoors, ,                                 !- Outside Face Environment
              SunExposed,                                 !- Sun Exposure
              WindExposed,                                !- Wind Exposure
              AutoCalculate,                              !- View Factor to Ground
              4,                                          !- Number vertices
              ${generate_vertices(room, 'roof')}
         

        ! Base, Zone ${roomIdx}, Wall - 18.000 m2 - 90.0�, Surface Area: 18.000m2
        BuildingSurface:Detailed,                      !- Surface
           Base:Zone${roomIdx}_Wall_2_0_0,                      !- Surface name
           Wall, Brick/block wall (insulated to 1985 regs),                 !- Class and Construction Name
           ${
             roomIdx == 1 ? 'ZoneName[]' : `ZoneName${roomIdx}[]`
           },                                 !- Zone Name
           Outdoors, ,                                 !- Outside Face Environment
           SunExposed,                                 !- Sun Exposure
           WindExposed,                                !- Wind Exposure
           AutoCalculate,                              !- View Factor to Ground
           4,                                          !- Number vertices
           ${generate_vertices(room, 'top-wall')}

        ! Base, Zone ${roomIdx}, Wall - 12.000 m2 - 0.0�, Surface Area: 12.000m2
        BuildingSurface:Detailed,                      !- Surface
           Base:Zone${roomIdx}_Wall_3_0_0,                      !- Surface name
           Wall, ExtWall[],                 !- Class and Construction Name
           ${
             roomIdx == 1 ? 'ZoneName[]' : `ZoneName${roomIdx}[]`
           },                                 !- Zone Name
           Outdoors, ,                                 !- Outside Face Environment
           SunExposed,                                 !- Sun Exposure
           WindExposed,                                !- Wind Exposure
           AutoCalculate,                              !- View Factor to Ground
           4,                                          !- Number vertices
           ${generate_vertices(room, 'bottom-wall')}

        ! Base, Zone ${roomIdx}, Wall - 18.000 m2 - 270.0�, Surface Area: 18.000m2
        BuildingSurface:Detailed,                      !- Surface
           Base:Zone${roomIdx}_Wall_4_0_0,                      !- Surface name
           Wall, Brick/block wall (insulated to 1985 regs),                 !- Class and Construction Name
           ${
             roomIdx == 1 ? 'ZoneName[]' : `ZoneName${roomIdx}[]`
           },                                 !- Zone Name
           Outdoors, ,                                 !- Outside Face Environment
           SunExposed,                                 !- Sun Exposure
           WindExposed,                                !- Wind Exposure
           AutoCalculate,                              !- View Factor to Ground
           4,                                          !- Number vertices
           ${generate_vertices(room, 'right-wall')}

        ! Base, Zone ${roomIdx}, Wall - 12.000 m2 - 180.0�, Surface Area: 12.000m2
        BuildingSurface:Detailed,                      !- Surface
           Base:Zone${roomIdx}_Wall_5_0_0,                      !- Surface name
           Wall, Brick/block wall (insulated to 1985 regs),                 !- Class and Construction Name
           ${
             roomIdx == 1 ? 'ZoneName[]' : `ZoneName${roomIdx}[]`
           },                                 !- Zone Name
           Outdoors, ,                                 !- Outside Face Environment
           SunExposed,                                 !- Sun Exposure
           WindExposed,                                !- Wind Exposure
           AutoCalculate,                              !- View Factor to Ground
           4,                                          !- Number vertices
           ${generate_vertices(room, 'left-wall')}

          ${generate_window(room.windows, roomIdx, room)}

          ${generate_door(room.doors, roomIdx, room)}
         `
  }
}

function generate_window(windows, roomIdx, room) {
  let windowsIDF = ``
  windows.map((window) => {
    let idfOrientation = ''
    switch (window.orientation) {
      case 'top':
        idfOrientation = `Zone${roomIdx}_Wall_2_0_0`
        break

      case 'bottom':
        idfOrientation = `Zone${roomIdx}_Wall_3_0_0`
        break

      case 'right':
        idfOrientation = `Zone${roomIdx}_Wall_4_0_0`
        break

      case 'left':
        idfOrientation = `Zone${roomIdx}_Wall_5_0_0`
        break

      default:
        idfOrientation = `Zone${roomIdx}_Wall_2_0_0`
    }

    windowsIDF += `
    ! Window, 1.743m2
    FenestrationSurface:Detailed, Base:${idfOrientation}_0_0_0_Win,  !- Window name
       Window,                                        !- Class
       ExtWindow[],                                   !- Construction Name
       Base:${idfOrientation},                        !- Base surface
       ,                                              !- corresponding other window subsurface
       AutoCalculate,                                 !- View Factor to Ground
       ,                                              !- Window shading control
       Frame 1,                                       !- Frame divider name
       1,                                             !- Multiplier
       4,                                             !- Number vertices
       ${generate_element_vertices(window, 'window', room)}  
      `

    //   -.3871123433, 3.4706925521, 4.01573476,  !- Vertex 1
    //   .8404299233, 3.4706925521, 4.01573476,  !- Vertex 2
    //   .8404299233, 3.4706925521, 5.43573476,  !- Vertex 3
    //  -.3871123433, 3.4706925521, 5.43573476;  !- Vertex 4
  })

  return windowsIDF
}

function generate_door(doors, roomIdx, room) {
  let doorsIDF = ``
  doors.map((door) => {
    let idfOrientation = ''
    switch (door.orientation) {
      case 'top':
        idfOrientation = `Zone${roomIdx}_Wall_2_0_0`
        break

      case 'bottom':
        idfOrientation = `Zone${roomIdx}_Wall_3_0_0`
        break

      case 'right':
        idfOrientation = `Zone${roomIdx}_Wall_4_0_0`
        break

      case 'left':
        idfOrientation = `Zone${roomIdx}_Wall_5_0_0`
        break

      default:
        idfOrientation = `Zone${roomIdx}_Wall_2_0_0`
    }

    doorsIDF += `
    ! Door, 1.743m2
    FenestrationSurface:Detailed, Base:${idfOrientation}_0_0_0_Door,  !- Window name
       Door,                                          !- Class
       HOLLOW WOOD DOOR,                              !- Construction Name
       Base:${idfOrientation},                        !- Base surface
       ,                                              !- corresponding other window subsurface
       AutoCalculate,                                 !- View Factor to Ground
       ,                                              !- Window shading control
       Frame 1,                                       !- Frame divider name
       1,                                             !- Multiplier
       4,                                             !- Number vertices
       -.3871123433, 3.4706925521, 4.01573476,  !- Vertex 1
       .8404299233, 3.4706925521, 4.01573476,  !- Vertex 2
       .8404299233, 3.4706925521, 5.43573476,  !- Vertex 3
      -.3871123433, 3.4706925521, 5.43573476;  !- Vertex 4
       `
    //  ${generate_element_vertices(window, 'window', room)}
  })

  return doorsIDF
}

function generate_roof(room) {
  return `
    ! Base, Zone 1, Ceiling - 24.000 m2, Surface Area: 24
    BuildingSurface:Detailed,                      !- Surface
        Base:Zone1_Ceiling_1_0_0,                   !- Surface name
        Ceiling, Project semi-exposed ceiling,      !- Class and Construction Name
        Base:Zone1,                                 !- Zone Name
        Surface, Roof1:Zone1_Floor_2_0_10000,       !- Outside Face Environment
        NoSun,                                      !- Sun Exposure
        NoWind,                                     !- Wind Exposure
        0,                                          !- View Factor to Ground
        4,                                          !- Number vertices
        -1.77334121, 3.47069255, 6.0018347553,      !- Vertex 1
        2.22665879, 3.47069255, 6.0018347553,      !- Vertex 2
        2.22665879, 9.47069255, 6.0018347553,      !- Vertex 3
        -1.77334121, 9.47069255, 6.0018347553;      !- Vertex 4
  
    ! Base, Zone 1, Ceiling - 24.000 m2, Surface Area: 24 <Other side>
    BuildingSurface:Detailed,                      !- Surface reverse definition
        Roof1:Zone1_Floor_2_0_10000,                !- Surface name
        Floor, Project semi-exposed ceiling_Rev,    !- Class and Construction Name
        Roof1:Zone1,                                !- Zone Name
        Surface, Base:Zone1_Ceiling_1_0_0,          !- Outside Face Environment
        NoSun,                                      !- Sun Exposure
        NoWind,                                     !- Wind Exposure
        0,                                          !- View Factor to Ground
        4,                                          !- Number vertices
        2.22665879, 3.47069255, 6.0018347553,      !- Vertex 1
        -1.77334121, 3.47069255, 6.0018347553,      !- Vertex 2
        -1.77334121, 9.47069255, 6.0018347553,      !- Vertex 3
        2.22665879, 9.47069255, 6.0018347553;      !- Vertex 4


! Roof 1 - Zone 1
Zone, Roof1:Zone1,                                !- Zone Name
   0,                                             !- Relative North (to building)
   0,                                             !- X Origin (M)
   0,                                             !- Y Origin (M)
   0,                                             !- Z Origin (M)
   1 ,                                            !- Zone Type
   1,                                             !- Zone multiplier
   ,                                              !- Zone ceiling height - Let EnergyPlus work it out
    17.7293,                                      !- Zone volume
    19.6956,                                      !- Floor Area
   TARP,                                          !- Zone inside convection algorithm
   ,                                              !- Zone outside convection algorithm
   No;                                            !- Part Of Total Floor Area


   ZoneInfiltration:DesignFlowRate, Roof1:Zone1 Infiltration,  !- Name
      Roof1:Zone1,                                !- Zone Name
      On 24/7,                                    !- Infiltration SCHEDULE Name
      Flow/zone,                                  !- Design Volume Flow Rate calculation method
      .004925,                                    !- Design Volume Flow Rate (m3/s)
      ,                                           !- Flow per Zone Floor Area {m3/s/m2}
      ,                                           !- Flow per Exterior Surface Area {m3/s/m2}
      ,                                           !- Air Changes Per Hour
      1,                                          !- Constant Term Coefficient
      0,                                          !- Temperature Term Coefficient
      0,                                          !- Velocity Term Coefficient
      0;                                          !- Velocity Squared Term Coefficient


   ! Roof 1, Zone 1, External roof - 45� Slope 18.668 m2, Surface Area: 18.668m2
   BuildingSurface:Detailed,                      !- Surface
      Roof1:Zone1_Roof_0_0_0,                     !- Surface name
      Roof, Project unoccupied pitched roof,      !- Class and Construction Name
      Roof1:Zone1,                                !- Zone Name
      Outdoors, ,                                 !- Outside Face Environment
      SunExposed,                                 !- Sun Exposure
      WindExposed,                                !- Wind Exposure
      AutoCalculate,                              !- View Factor to Ground
      4,                                          !- Number vertices
       2.42665879, 3.47069255, 6.0018347553,      !- Vertex 1
       2.42665879, 9.47069255, 6.0018347553,      !- Vertex 2
       .2266587871, 9.47069255, 8.2018347577,     !- Vertex 3
       .2266587871, 3.47069255, 8.2018347577;     !- Vertex 4

   ! Roof 1, Zone 1, Wall - 4.840 m2 - 0.0�, Surface Area: 4.840m2
   BuildingSurface:Detailed,                      !- Surface
      Roof1:Zone1_Wall_1_0_0,                     !- Surface name
      Wall, Brick/block wall (insulated to 1985 regs),  !- Class and Construction Name
      Roof1:Zone1,                                !- Zone Name
      Outdoors, ,                                 !- Outside Face Environment
      SunExposed,                                 !- Sun Exposure
      WindExposed,                                !- Wind Exposure
      AutoCalculate,                              !- View Factor to Ground
      3,                                          !- Number vertices
       2.42665879, 9.47069255, 6.0018347553,      !- Vertex 1
      -1.97334121, 9.47069255, 6.0018347553,      !- Vertex 2
       .2266587871, 9.47069255, 8.2018347577;     !- Vertex 3

   ! Roof 1, Zone 1, External/internal floor - 26.400 m2, Surface Area: 1.200m2
   BuildingSurface:Detailed,                      !- Surface
      Roof1:Zone1_ExtFloor_2_0_0,                 !- Surface name
      Floor, Project external floor,              !- Class and Construction Name
      Roof1:Zone1,                                !- Zone Name
      Outdoors, ,                                 !- Outside Face Environment
      SunExposed,                                 !- Sun Exposure
      WindExposed,                                !- Wind Exposure
      AutoCalculate,                              !- View Factor to Ground
      4,                                          !- Number vertices
       2.42665879, 3.47069255, 6.0018347553,      !- Vertex 1
       2.22665879, 3.47069255, 6.0018347553,      !- Vertex 2
       2.22665879, 9.47069255, 6.0018347553,      !- Vertex 3
       2.42665879, 9.47069255, 6.0018347553;      !- Vertex 4

   ! Roof 1, Zone 1, External/internal floor - 26.400 m2, Surface Area: 1.200m2
   BuildingSurface:Detailed,                      !- Surface
      Roof1:Zone1_ExtFloor_2_0_1,                 !- Surface name
      Floor, Project external floor,              !- Class and Construction Name
      Roof1:Zone1,                                !- Zone Name
      Outdoors, ,                                 !- Outside Face Environment
      SunExposed,                                 !- Sun Exposure
      WindExposed,                                !- Wind Exposure
      AutoCalculate,                              !- View Factor to Ground
      4,                                          !- Number vertices
      -1.77334121, 3.47069255, 6.0018347553,      !- Vertex 1
      -1.97334121, 3.47069255, 6.0018347553,      !- Vertex 2
      -1.97334121, 9.47069255, 6.0018347553,      !- Vertex 3
      -1.77334121, 9.47069255, 6.0018347553;      !- Vertex 4

   ! Roof 1, Zone 1, Wall - 4.840 m2 - 180.0�, Surface Area: 4.840m2
   BuildingSurface:Detailed,                      !- Surface
      Roof1:Zone1_Wall_3_0_0,                     !- Surface name
      Wall, Brick/block wall (insulated to 1985 regs),  !- Class and Construction Name
      Roof1:Zone1,                                !- Zone Name
      Outdoors, ,                                 !- Outside Face Environment
      SunExposed,                                 !- Sun Exposure
      WindExposed,                                !- Wind Exposure
      AutoCalculate,                              !- View Factor to Ground
      3,                                          !- Number vertices
      -1.97334121, 3.47069255, 6.0018347553,      !- Vertex 1
       2.42665879, 3.47069255, 6.0018347553,      !- Vertex 2
       .2266587871, 3.47069255, 8.2018347577;     !- Vertex 3

   ! Roof 1, Zone 1, External roof - 45� Slope 18.668 m2, Surface Area: 18.668m2
   BuildingSurface:Detailed,                      !- Surface
      Roof1:Zone1_Roof_4_0_0,                     !- Surface name
      Roof, Project unoccupied pitched roof,      !- Class and Construction Name
      Roof1:Zone1,                                !- Zone Name
      Outdoors, ,                                 !- Outside Face Environment
      SunExposed,                                 !- Sun Exposure
      WindExposed,                                !- Wind Exposure
      AutoCalculate,                              !- View Factor to Ground
      4,                                          !- Number vertices
      -1.97334121, 9.47069255, 6.0018347553,      !- Vertex 1
      -1.97334121, 3.47069255, 6.0018347553,      !- Vertex 2
       .2266587871, 3.47069255, 8.2018347577,     !- Vertex 3
       .2266587871, 9.47069255, 8.2018347577;     !- Vertex 4

      `
}

function generate_vertices(room, cubeSide) {
  let vertices = []
  room.x = parseFloat(room.dx) / 50
  room.y = parseFloat(room.dy) / 50
  room.z = 0
  switch (cubeSide) {
    case 'floor':
      vertices = [
        { x: room.x + room.depthMeter, y: room.y, z: room.z }, // B: bottom-right-front

        { x: room.x + room.depthMeter, y: room.y + room.depthMeter, z: room.z }, // C: top-right-front

        {
          x: room.x + room.depthMeter,
          y: room.y + room.depthMeter,
          z: room.z + room.depthMeter,
        }, // G: top-right-back

        { x: room.x + room.depthMeter, y: room.y, z: room.z + room.depthMeter }, // F: bottom-right-back
      ]

      return `
          ${vertices[0].x}, ${vertices[0].y}, ${vertices[0].z},  !- Vertex 1
          ${vertices[1].x}, ${vertices[1].y}, ${vertices[1].z},  !- Vertex 2
          ${vertices[2].x}, ${vertices[2].y}, ${vertices[2].z},  !- Vertex 3
          ${vertices[3].x}, ${vertices[3].y}, ${vertices[3].z};  !- Vertex 4
          `

    case 'roof':
      vertices = [
        { x: room.x, y: room.y + room.depthMeter, z: room.z }, // D: top-left-front
        { x: room.x + room.depthMeter, y: room.y + room.depthMeter, z: room.z }, // C: top-right-front
        {
          x: room.x + room.depthMeter,
          y: room.y + room.depthMeter,
          z: room.z + room.depthMeter,
        }, // G: top-right-back
        { x: room.x, y: room.y + room.depthMeter, z: room.z + room.depthMeter }, // H: top-left-back
      ]

      return `
              ${vertices[0].x}, ${vertices[0].y}, ${vertices[0].z},  !- Vertex 1
              ${vertices[1].x}, ${vertices[1].y}, ${vertices[1].z},  !- Vertex 2
              ${vertices[2].x}, ${vertices[2].y}, ${vertices[2].z},  !- Vertex 3
              ${vertices[3].x}, ${vertices[3].y}, ${vertices[3].z};  !- Vertex 4
              `

    case 'right-wall':
      vertices = [
        { x: room.x + room.depthMeter, y: room.y, z: room.z }, // B: bottom-right-front
        { x: room.x + room.depthMeter, y: room.y + room.depthMeter, z: room.z }, // C: top-right-front
        {
          x: room.x + room.depthMeter,
          y: room.y + room.depthMeter,
          z: room.z + room.depthMeter,
        }, // G: top-right-back
        { x: room.x + room.depthMeter, y: room.y, z: room.z + room.depthMeter }, // F: bottom-right-back
      ]

      return `
              ${vertices[0].x}, ${vertices[0].y}, ${vertices[0].z},  !- Vertex 1
              ${vertices[1].x}, ${vertices[1].y}, ${vertices[1].z},  !- Vertex 2
              ${vertices[2].x}, ${vertices[2].y}, ${vertices[2].z},  !- Vertex 3
              ${vertices[3].x}, ${vertices[3].y}, ${vertices[3].z};  !- Vertex 4
              `

    case 'left-wall':
      vertices = [
        { x: room.x, y: room.y, z: room.z }, // A: bottom-left-front
        { x: room.x, y: room.y + room.depthMeter, z: room.z }, // D: top-left-front
        { x: room.x, y: room.y + room.depthMeter, z: room.z + room.depthMeter }, // H: top-left-back
        { x: room.x, y: room.y, z: room.z + room.depthMeter }, // E: bottom-left-back
      ]

      return `
              ${vertices[0].x}, ${vertices[0].y}, ${vertices[0].z},  !- Vertex 1
              ${vertices[1].x}, ${vertices[1].y}, ${vertices[1].z},  !- Vertex 2
              ${vertices[2].x}, ${vertices[2].y}, ${vertices[2].z},  !- Vertex 3
              ${vertices[3].x}, ${vertices[3].y}, ${vertices[3].z};  !- Vertex 4
              `

    case 'top-wall':
      vertices = [
        { x: room.x, y: room.y, z: room.z }, // A: bottom-left-front
        { x: room.x + room.depthMeter, y: room.y, z: room.z }, // B: bottom-right-front
        { x: room.x + room.depthMeter, y: room.y + room.depthMeter, z: room.z }, // C: top-right-front
        { x: room.x, y: room.y + room.depthMeter, z: room.z }, // D: top-left-front
      ]

      return `
              ${vertices[0].x}, ${vertices[0].y}, ${vertices[0].z},  !- Vertex 1
              ${vertices[1].x}, ${vertices[1].y}, ${vertices[1].z},  !- Vertex 2
              ${vertices[2].x}, ${vertices[2].y}, ${vertices[2].z},  !- Vertex 3
              ${vertices[3].x}, ${vertices[3].y}, ${vertices[3].z};  !- Vertex 4
              `

    case 'bottom-wall':
      vertices = [
        { x: room.x, y: room.y, z: room.z + room.depthMeter }, // E: bottom-left-back
        { x: room.x + room.depthMeter, y: room.y, z: room.z + room.depthMeter }, // F: bottom-right-back
        {
          x: room.x + room.depthMeter,
          y: room.y + room.depthMeter,
          z: room.z + room.depthMeter,
        }, // G: top-right-back
        { x: room.x, y: room.y + room.depthMeter, z: room.z + room.depthMeter }, // H: top-left-back
      ]

      return `
              ${vertices[0].x}, ${vertices[0].y}, ${vertices[0].z},  !- Vertex 1
              ${vertices[1].x}, ${vertices[1].y}, ${vertices[1].z},  !- Vertex 2
              ${vertices[2].x}, ${vertices[2].y}, ${vertices[2].z},  !- Vertex 3
              ${vertices[3].x}, ${vertices[3].y}, ${vertices[3].z};  !- Vertex 4
              `
  }
}

function generate_element_vertices(element, elementType, room) {
  let vertices = []
  element.x = parseFloat(element.dx) / 50
  //room.widthMeter
  //parseFloat(element.dx) / 50
  element.y = parseFloat(element.dy) / 50
  element.z = 0

  // if (elementType === 'window') {
  switch (element.orientation) {
    case 'right':
      vertices = [
        { x: element.x, y: element.y, z: element.z }, // B: bottom-right-front
        {
          x: element.x,
          y: element.y + element.depthMeter,
          z: element.z,
        }, // C: top-right-front
        {
          x: element.x,
          y: element.y + element.depthMeter,
          z: element.z + element.depthMeter,
        }, // G: top-right-back
        {
          x: element.x,
          y: element.y,
          z: element.z + element.depthMeter,
        }, // F: bottom-right-back
      ]

      return `
                  ${vertices[0].x}, ${vertices[0].y}, ${vertices[0].z},  !- Vertex 1
                  ${vertices[1].x}, ${vertices[1].y}, ${vertices[1].z},  !- Vertex 2
                  ${vertices[2].x}, ${vertices[2].y}, ${vertices[2].z},  !- Vertex 3
                  ${vertices[3].x}, ${vertices[3].y}, ${vertices[3].z};  !- Vertex 4
                  `

    case 'left':
      vertices = [
        { x: -0.1, y: element.y, z: element.z }, // A: bottom-left-front
        { x: -0.1, y: element.y + element.depthMeter, z: element.z }, // D: top-left-front
        {
          x: -0.1,
          y: element.y + element.depthMeter,
          z: element.z + element.depthMeter,
        }, // H: top-left-back
        { x: -0.1, y: element.y, z: element.z + element.depthMeter }, // E: bottom-left-back
      ]

      return `
            ${vertices[0].x}, ${vertices[0].y}, ${vertices[0].z},  !- Vertex 1
            ${vertices[1].x}, ${vertices[1].y}, ${vertices[1].z},  !- Vertex 2
            ${vertices[2].x}, ${vertices[2].y}, ${vertices[2].z},  !- Vertex 3
            ${vertices[3].x}, ${vertices[3].y}, ${vertices[3].z};  !- Vertex 4
        `

    case 'top':
      vertices = [
        { x: element.x, y: element.y, z: element.z }, // A: bottom-left-front
        { x: element.x + element.depthMeter, y: element.y, z: element.z }, // B: bottom-right-front
        {
          x: element.x + element.depthMeter,
          y: element.y + element.depthMeter,
          z: element.z,
        }, // C: top-right-front
        { x: element.x, y: element.y + element.depthMeter, z: element.z }, // D: top-left-front
      ]

      return `
                  ${vertices[0].x}, ${vertices[0].y}, ${vertices[0].z},  !- Vertex 1
                  ${vertices[1].x}, ${vertices[1].y}, ${vertices[1].z},  !- Vertex 2
                  ${vertices[2].x}, ${vertices[2].y}, ${vertices[2].z},  !- Vertex 3
                  ${vertices[3].x}, ${vertices[3].y}, ${vertices[3].z};  !- Vertex 4
                  `

    case 'bottom':
      vertices = [
        { x: element.x, y: element.y, z: element.z + element.depthMeter }, // E: bottom-left-back
        {
          x: element.x + element.depthMeter,
          y: element.y,
          z: element.z + element.depthMeter,
        }, // F: bottom-right-back
        {
          x: element.x + element.depthMeter,
          y: element.y + element.depthMeter,
          z: element.z + element.depthMeter,
        }, // G: top-right-back
        {
          x: element.x,
          y: element.y + element.depthMeter,
          z: element.z + element.depthMeter,
        }, // H: top-left-back
      ]

      return `
                  ${vertices[0].x}, ${vertices[0].y}, ${vertices[0].z},  !- Vertex 1
                  ${vertices[1].x}, ${vertices[1].y}, ${vertices[1].z},  !- Vertex 2
                  ${vertices[2].x}, ${vertices[2].y}, ${vertices[2].z},  !- Vertex 3
                  ${vertices[3].x}, ${vertices[3].y}, ${vertices[3].z};  !- Vertex 4
                  `

    default:
      vertices = [
        { x: element.x, y: element.y, z: element.z }, // A: bottom-left-front
        { x: element.x + element.depthMeter, y: element.y, z: element.z }, // B: bottom-right-front
        {
          x: element.x + element.depthMeter,
          y: element.y + element.depthMeter,
          z: element.z,
        }, // C: top-right-front
        { x: element.x, y: element.y + element.depthMeter, z: element.z }, // D: top-left-front
      ]

      return `
      ${vertices[0].x}, ${vertices[0].y}, ${vertices[0].z},  !- Vertex 1
      ${vertices[1].x}, ${vertices[1].y}, ${vertices[1].z},  !- Vertex 2
      ${vertices[2].x}, ${vertices[2].y}, ${vertices[2].z},  !- Vertex 3
      ${vertices[3].x}, ${vertices[3].y}, ${vertices[3].z};  !- Vertex 4
      `
  }
  // }
}

export const renderZone = (context) => {
  let roomsIDF = ``
  let prevFloorZ = 0
  let prevFloorX = 0
  let zoneIdx = 0

  context.floors.map((floor, floorIdx) => {
    if (floorIdx != 0) {
      prevFloorZ += parseFloat(floor.rooms[0].heightMeter)
      prevFloorX += parseFloat(floor.rooms[0].widthMeter)
    }

    zoneIdx += 1
    floor.rooms.map((room, roomIdx) => {
      zoneIdx += roomIdx
      roomsIDF += generate_room(room, zoneIdx, prevFloorZ, prevFloorX)
    })
  })
  return roomsIDF
}
