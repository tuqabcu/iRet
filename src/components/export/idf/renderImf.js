// Copyright ©,2023, Birmingham City University

export function renderImf() {
  return `
    ##fileprefix ./

    ! Single-zone residential space with one window. Gas heating and hot water system
    ! Source file: \shoebox\shoebox-residential.dsb
    
    Version, 8.9.0.001;                               !- Version Identifier
    
    ! Macro definitions
    ##def1 ZoneName Base:Zone1
    ##def1 GroundFloor Project ground floor
    ##def1 FlatRoof Project flat roof
    ##def1 ExtWall Brick/block wall (insulated to 1985 regs)
    ##def1 ExtWindow Window Type 1001
    
    ! Parts
    ##include 1-model-params.idf
    ##include 2-constructions.idf
    ##include 3-zone-and-surfaces.idf
    ##include 4-people-equipment-schedules.idf
    ##include 5-hvac.idf
    ##include 6-reports.idf
    
    
    ! Test variables
    ! @@ori@@
    ! @@var2@@
    `
}
