// Copyright ©,2023, Birmingham City University

export function renderConstructionMaterial(context) {
  // return material IDF snippet based on material type
  function return_material(material) {
    switch (material.type) {
      case 'AirGap':
        return `
        Material:airGap, ${material.name},
             ${material.thermalResistance};              !- Thermal Resistance {m2-K/W}
           `

      case 'WindowGas':
        return `
        WindowMaterial:Gas, ${material.name},
             ${material.gasType},             !- opticalDataType
             ${material.thickness};                   !- Thickness {m}
           `

      case 'NoMas':
        return `
        Material:NoMass, ${material.name},
             ${material.roughness},                  !- Roughness
             ${material.thermalResistance},          !- Thermal Resistance {m2-K/W}
             ${material.thermalAbsorptance},         !- Thermal Absorptance
             ${material.solarAbsorptance},           !- Solar Absorptance
             ${material.visibleAbsorptance};         !- Visible Absorptance                     
             `

      case 'Mas':
        return `
           Material, ${material.name},                 
             ${material.roughness},            !- Roughness
             ${material.thickness},            !- Thickness {m}
             ${material.conductivity},         !- Conductivity {W/m-K}
             ${material.density},              !- Density {kg/m3}
             ${material.specificHeat},         !- Specific Heat {J/kg-K}
             ${material.thermalAbsorptance},   !- Thermal Absorptance
             ${material.solarAbsorptance},     !- Solar Absorptance
             ${material.visibleAbsorptance};   !- Visible Absorptance
           `

      case 'Glazing':
        return `
        WindowMaterial:Glazing, ${material.name},                 
             ${material.opticalDataType},                 !- opticalDataType
             ,                                              !- Name of spectral data set when Optical Data Type = Spectral
             ${material.thickness},                       !- thickness
             ${material.solarTransmittance},              !- Thickness {m}
             ${material.frontSolarReflectance},           !- Conductivity {W/m-K}
             ${material.backSolarReflectance},            !- Density {kg/m3}
             ${material.visibleTransmittance},            !- Specific Heat {J/kg-K}
             ${material.frontVisibleReflectance},         !- Thermal Absorptance
             ${material.backVisibleReflectance},          !- Solar Absorptance
             ${material.infraredTransmittance},           !- Visible Absorptance
             ${material.frontInfraredHemispherical},      !- Visible Absorptance
             ${material.backInfraredHemispherical},       !- Visible Absorptance
             ${material.conductivity},                    !- Visible Absorptance
             1;                                           !- Dirt Correction Factor for Solar and Visible Transmittance
           `
    }
  }

  // return structure of materials and constructions for the IDF file
  function handle_idf_structure(context) {
    let dataidf = ''
    let types = [
      'floorConstruction',
      'roofConstruction',
      'wall1Construction',
      'wall2Construction',
      'wall3Construction',
      'wall4Construction',
    ]

    let usedWindowConst = ''
    let usedDoorConst = ''
    let usedMats = ''

    context.floors.map((floor) => {
      floor.rooms.map((item) => {
        types.map((type) => {
          if (item[type].name != 'ExtWall[]') {
            item[type].materials.map((material, index) => {
              if (!dataidf.includes(material.name)) {
                dataidf = dataidf.concat(return_material(material))

                usedMats +=
                  material.name +
                  (index == item[type].materials.length - 1 ? ';' : ',')
              }
            })

            if (!dataidf.includes(item[type].name)) {
              dataidf = dataidf.concat(
                `
                  Construction, ${item[type].name},${usedMats}
               `
              )
            }
            usedMats = ''
          }
        })

        // window idf
        if (item.windows.length > 0) {
          item.windows.map((window) => {
            if (!usedWindowConst.includes(window.windowConstruction.name)) {
              usedWindowConst += window.windowConstruction.name + '/'
              window.windowConstruction.materials.map(
                (windowMaterial, winIdx) => {
                  dataidf = dataidf.concat(return_material(windowMaterial))
                  usedMats +=
                    windowMaterial.name +
                    (winIdx == window.windowConstruction.materials.length - 1
                      ? ';'
                      : ',')
                }
              )
              dataidf = dataidf.concat(
                `
                    Construction, ${window.windowConstruction.name},${usedMats}
                 `
              )
              usedMats = ''
            }
          })
        }

        // door idf
        // if (item.doors.length > 0) {
        //   item.doors.map((door) => {
        //     if (!usedDoorConst.includes(door.doorConstruction.name)) {
        //       usedDoorConst += door.doorConstruction.name + '/'
        //       door.doorConstruction.materials.map((doorMaterial, doorIdx) => {
        //         dataidf = dataidf.concat(return_material(doorMaterial))
        //         usedMats +=
        //           doorMaterial.name +
        //           (doorIdx == door.doorConstruction.materials.length - 1
        //             ? ';'
        //             : ',')
        //       })
        //       dataidf = dataidf.concat(
        //         `
        //             Construction, ${door.doorConstruction.name},${usedMats}
        //          `
        //       )
        //       usedMats = ''
        //     }
        //   })
        // }
      })
    })

    return dataidf
  }

  return `
  ! Single-zone residential space with one window. Gas heating and hot water system
  ! Source file: \shoebox\shoebox-residential.dsb
  ! Part 2 - Materials and constructions

  ! Version, 8.9.0.001;                               !- Version Identifier

  !Material:InfraredTransparent,
  !IRTMaterial; !- Name

  !Construction,
  !IRTSurface,  !- Name
  !IRTMaterial; !- Outside Layer

  ${handle_idf_structure(context)}

    WindowProperty:FrameAndDivider, Frame 1,       !- Frame/divider name
    0.04,                                          !- Frame width
    0.0,                                           !- Frame outside projection
    0.0,                                           !- Frame inside projection
    9.5,                                           !- Frame Conductance
    1.0,                                           !- Ratio of frame-edge glass conductance to centre of glass conductance
    0.5,                                           !- Frame Solar Absorptance
    0.5,                                           !- Frame Visible Absorptance
    0.9,                                           !- Frame Thermal Emissivity
    DividedLite,                                   !- Divider Type
    0.020,                                         !- Divider Width
    1,                                             !- Number of Horzontal Dividers
    1,                                             !- Number of Vertical Dividers
    0.0,                                           !- Divider Outside Projection
    0.0,                                           !- Divider Inside Projection
    9.5,                                           !- Divider Conductance
    1.0,                                           !- Ratio of divider-edge glass conductance to centre of glass conductance
    0.5,                                           !- Divider Solar Absorptance
    0.5,                                           !- Divider Visible Absorptance
    0.9,                                           !- Divider Thermal Emissivity
    0.5,                                           !- Outside Reveal Solar Absorptance
    0.0,                                           !- Inside Sill Depth
    0.5,                                           !- Inside Sill Solar Absorptance
    0.0,                                           !- Inside Reveal Depth
    0.5;                                           !- Inside Reveal Solar Absorptance


    ! Timber Flooring- thickness 0.005
Material, Timber Flooring_.OO5,
   Rough,                                         !- Roughness
   .005,                                          !- Thickness {m}
   0.14,                                          !- Conductivity {w/m-K}
   650,                                           !- Density {kg/m3}
   1200,                                          !- Specific Heat {J/kg-K}
   0.9,                                           !- Thermal Emittance
   0.78,                                          !- Solar Absorptance
   0.78;                                          !- Visible Absorptance

   ! External Rendering- thickness 0.025
Material, External Rendering_.O25,
   Rough,                                         !- Roughness
   .025,                                          !- Thickness {m}
   0.5,                                           !- Conductivity {w/m-K}
   1300,                                          !- Density {kg/m3}
   1000,                                          !- Specific Heat {J/kg-K}
   0.9,                                           !- Thermal Emittance
   0.7,                                           !- Solar Absorptance
   0.7;                                           !- Visible Absorptance

   ! MW Stone Wool (rolls)- thickness 0.1439
   Material, MW Stone Wool (rolls)_.1439,
      Rough,                                         !- Roughness
      .1439,                                         !- Thickness {m}
      0.04,                                          !- Conductivity {w/m-K}
      30,                                            !- Density {kg/m3}
      840,                                           !- Specific Heat {J/kg-K}
      0.9,                                           !- Thermal Emittance
      0.6,                                           !- Solar Absorptance
      0.6;                                           !- Visible Absorptance
   




! Plywood (Heavyweight)- thickness 0.01
Material, Plywood (Heavyweight)_.O1,
   Rough,                                         !- Roughness
   .01,                                           !- Thickness {m}
   0.15,                                          !- Conductivity {w/m-K}
   700,                                           !- Density {kg/m3}
   1420,                                          !- Specific Heat {J/kg-K}
   0.9,                                           !- Thermal Emittance
   0.78,                                          !- Solar Absorptance
   0.78;                                          !- Visible Absorptance

   
  ! Cast Concrete (Lightweight)- thickness 0.1
  Material, Cast Concrete (Lightweight)_.1,
      Rough,                                         !- Roughness
      .1,                                            !- Thickness {m}
      0.38,                                          !- Conductivity {w/m-K}
      1200,                                          !- Density {kg/m3}
      1000,                                          !- Specific Heat {J/kg-K}
      0.9,                                           !- Thermal Emittance
      0.6,                                           !- Solar Absorptance
      0.6;                                           !- Visible Absorptance
      
         
            
      ! Special material to represent an R-value for the next construction
      Material:NoMass, 4_RVAL_2,                        !- Material name - Air gap >=25mm
        Rough,                                         !- Roughness
        .18,                                           !- Resistance {m2-K/w}
        0.9,                                           !- Thermal Emittance
        0.7,                                           !- Solar Absorptance
        0.7;                                           !- Visible Absorptance
      
        ! Clay Tile (roofing)- thickness 0.025
        Material, Clay Tile (roofing)_.O25,
            Rough,                                         !- Roughness
            .025,                                          !- Thickness {m}
            1,                                             !- Conductivity {w/m-K}
            2000,                                          !- Density {kg/m3}
            800,                                           !- Specific Heat {J/kg-K}
            0.9,                                           !- Thermal Emittance
            0.7,                                           !- Solar Absorptance
            0.7;                                           !- Visible Absorptance
          
            
            
        ! Roofing Felt- thickness 0.005
        Material, Roofing Felt_.OO5,
            Rough,                                         !- Roughness
            .005,                                          !- Thickness {m}
            0.19,                                          !- Conductivity {w/m-K}
            960,                                           !- Density {kg/m3}
            837,                                           !- Specific Heat {J/kg-K}
            0.9,                                           !- Thermal Emittance
            0.8,                                           !- Solar Absorptance
            0.8;                                           !- Visible Absorptance
                          
                          
                           
                           
! Project semi-exposed ceiling
Construction, Project semi-exposed ceiling,
   Plywood (Heavyweight)_.O1,                     !- .01m
   MW Glass Wool (rolls)_.1,                      !- .1m
   Cast Concrete (Lightweight)_.1,                !- .1m
   3_RVAL_3,                                      !- R-value
   Plasterboard_.O13;                             !- .013m

! <Previous reversed>
Construction, Project semi-exposed ceiling_Rev,
   Plasterboard_.O13,                             !- .013m
   4_RVAL_2,                                      !- R-value
   Cast Concrete (Lightweight)_.1,                !- .1m
   MW Glass Wool (rolls)_.1,                      !- .1m
   Plywood (Heavyweight)_.O1;                     !- .01m

! Special material to represent an R-value for the next construction
Material:NoMass, 7_RVAL_2,                        !- Material name - Air gap 10mm
   Rough,                                         !- Roughness
   .15,                                           !- Resistance {m2-K/w}
   0.9,                                           !- Thermal Emittance
   0.7,                                           !- Solar Absorptance
   0.7;                                           !- Visible Absorptance

! Project unoccupied pitched roof
Construction, Project unoccupied pitched roof,
   Clay Tile (roofing)_.O25,                      !- .025m
   7_RVAL_2,                                      !- R-value
   Roofing Felt_.OO5;                             !- .005m

! Special material to represent an R-value for the next construction
Material:NoMass, 8_RVAL_2,                        !- Material name - Air gap 10mm
   Rough,                                         !- Roughness
   .15,                                           !- Resistance {m2-K/w}
   0.9,                                           !- Thermal Emittance
   0.7,                                           !- Solar Absorptance
   0.7;                                           !- Visible Absorptance

! <Previous reversed>
Construction, Project unoccupied pitched roof_Rev,
   Roofing Felt_.OO5,                             !- .005m
   8_RVAL_2,                                      !- R-value
   Clay Tile (roofing)_.O25;                      !- .025m





   ! Project external floor
   Construction, Project external floor,
      External Rendering_.O25,                       !- .025m
      MW Stone Wool (rolls)_.1439,                   !- .1439m
      Timber Flooring_.OO5;                          !- .005m
   
   ! <Previous reversed>
   Construction, Project external floor_Rev,
      Timber Flooring_.OO5,                          !- .005m
      MW Stone Wool (rolls)_.1439,                   !- .1439m
      External Rendering_.O25;                       !- .025m
   

      Material,
      WOOD - HARDWOOD 1 / 8 IN,!- Name
      MediumSmooth,            !- Roughness
      3.1699201E-03,           !- Thickness {m}
      0.1591211,               !- Conductivity {W/m-K}
      720.8308,                !- Density {kg/m3}
      1255.200,                !- Specific Heat {J/kg-K}
      0.9000000,               !- Thermal Absorptance
      0.7800000,               !- Solar Absorptance
      0.7800000;               !- Visible Absorptance
    
      Material:AirGap,
      B1 - AIRSPACE RESISTANCE,!- Name
      0.1603675;               !- Thermal Resistance {m2-K/W}
    
    
      Construction,
      HOLLOW WOOD DOOR,        !- Name
      WOOD - HARDWOOD 1 / 8 IN,!- Outside Layer
      B1 - AIRSPACE RESISTANCE,!- Layer 2
      WOOD - HARDWOOD 1 / 8 IN;!- Layer 3


  `
}

// Material, RG01,
// Rough,            !- Roughness
// 1.2700000E-02,            !- Thickness {m}
// 1.442000,         !- Conductivity {W/m-K}
// 881.0000,              !- Density {kg/m3}
// 1674.000,         !- Specific Heat {J/kg-K}
// 0.9000000,   !- Thermal Absorptance
// 0.6500000,     !- Solar Absorptance
// 0.6500000;   !- Visible Absorptance

// Material, BR01,
// VeryRough,            !- Roughness
// 9.4999997E-03,            !- Thickness {m}
// 0.1620000,         !- Conductivity {W/m-K}
// 1121.000,              !- Density {kg/m3}
// 1464.000,         !- Specific Heat {J/kg-K}
// 0.9000000,   !- Thermal Absorptance
// 0.7000000,     !- Solar Absorptance
// 0.7000000;   !- Visible Absorptance

// Material, IN46,
// VeryRough,            !- Roughness
// 7.6200001E-02,            !- Thickness {m}
// 2.3000000E-02,         !- Conductivity {W/m-K}
// 24.00000,              !- Density {kg/m3}
// 1590.000,         !- Specific Heat {J/kg-K}
// 0.9000000,   !- Thermal Absorptance
// 0.5000000,     !- Solar Absorptance
// 0.5000000;   !- Visible Absorptance

// Material, WD01,
// MediumSmooth,            !- Roughness
// 1.9099999E-02,            !- Thickness {m}
// 0.1150000,         !- Conductivity {W/m-K}
// 513.0000,              !- Density {kg/m3}
// 1381.000,         !- Specific Heat {J/kg-K}
// 0.9000000,   !- Thermal Absorptance
// 0.7800000,     !- Solar Absorptance
// 0.7800000;   !- Visible Absorptance

// Construction, ROOF-1, RG01, BR01, IN46, WD01;
