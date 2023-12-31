// Copyright ©,2023, Birmingham City University

export const renderHVAC = (context) => {
  let floors = context.floors

  let isRoof = false
  for (let i = 0; i < floors.length; i++)
    for (let j = 0; j < floors[i].rooms.length; j++)
      if (floors[i]['rooms'][j]['type'] == 'roof') {
        isRoof = true
        break
      }

  console.log('isRoof=======', isRoof)

  return isRoof
    ? `! Single-zone residential space with one window. Gas heating and hot water system
   ! Source file: \shoebox\shoebox-residential.dsb
   ! Part 5 - HVAC
   
   ! Version, 8.9.0.001;                               !- Version Identifier
   
   ! Start detailed HVAC data definition
   
   Sizing:Plant,
      HW Loop,                                                                                            ! - Name of loop
      Heating,                                                                                            ! - Type of loop
      80.00,                                                                                              ! - Design loop exit temperature (C)
      10.00;                                                                                              ! - Loop design temperature difference (C)
   
   PlantLoop,
      HW Loop,                                                                                            ! - Name of loop
      Water,                                                                                              ! - Fluid type
      ,                                                                                                   ! - User-defined fluid type
      HW Loop Operation,                                                                                  ! - Plant equipment operation scheme
      HW Loop Supply Side Outlet,                                                                         ! - Loop temperature setpoint node
      100.00,                                                                                             ! - Maximum loop temperature (C)
      10.00,                                                                                              ! - Minimum loop temperature (C)
      autosize,                                                                                           ! - Maximum loop flow rate (m3/s)
      0.000000,                                                                                           ! - Minimum loop flow rate (m3/s)
      autocalculate,                                                                                      ! - Volume of the plant loop (m3)
      HW Loop Supply Side Inlet,                                                                          ! - Plant side inlet node
      HW Loop Supply Side Outlet,                                                                         ! - Plant side outlet node
      HW Loop Supply Side Branches,                                                                       ! - Plant side branch list name
      HW Loop Supply Side Connectors,                                                                     ! - Plant side connector list name
      HW Loop Demand Side Inlet,                                                                          ! - Demand side inlet node
      HW Loop Demand Side Outlet,                                                                         ! - Demand side outlet node
      HW Loop Demand Side Branches,                                                                       ! - Demand side branch list name
      HW Loop Demand Side Connectors,                                                                     ! - Demand side connector list name
      SequentialLoad,                                                                                     ! - Load distribution scheme
      HW Loop AvailabilityManager List,                                                                   ! - Availability manager list name
      SingleSetpoint,                                                                                     ! - Plant loop demand calculation scheme
      None,                                                                                               ! - Common pipe simulation
      None;                                                                                               ! - Pressure simulation type
   
   PlantEquipmentOperationSchemes,
      HW Loop Operation,                                                                                  ! - Name of plant/condenser equipment operation scheme
      PlantEquipmentOperation:HeatingLoad,                                                                ! - Control scheme object type 1
      HW Loop Scheme 1,                                                                                   ! - Name of control scheme 1
      On 24/7;                                                                                            ! - Control scheme schedule 1
   
   PlantEquipmentOperation:HeatingLoad,
      HW Loop Scheme 1,                                                                                   ! - Name of control scheme
      0.00,                                                                                               ! - Range lower limit 1
      1000000000000000.00,                                                                                ! - Range upper limit 1
      HW Loop Scheme 1 Range 1 Equipment List;                                                            ! - Range equipment list name 1
   
   PlantEquipmentList,
      HW Loop Scheme 1 Range 1 Equipment List,                                                            ! - Range equipment list name 0
      Boiler:HotWater,                                                                                    ! - Equipment 1 object type
      Boiler;                                                                                             ! - Equipment 1 name
   
   BranchList,
      HW Loop Demand Side Branches,                                                                       ! - Name of branch list
      HW Loop Demand Side Inlet Branch,                                                                   ! - Name of branch 1
      HW Loop Demand Side Bypass Branch,                                                                  ! - Name of branch 2
      Base:Zone1 Water Radiator HW Loop Demand Side Branch,                                               ! - Name of branch 3
      HX HW Loop Demand Side Branch,                                                                      ! - Name of branch 4
      HW Loop Demand Side Outlet Branch;                                                                  ! - Name of branch 5
   
   Branch,
      HW Loop Demand Side Inlet Branch,                                                                   ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      Pipe:Adiabatic,                                                                                     ! - Component 1 object type
      HW Loop Demand Side Inlet Branch Pipe,                                                              ! - Component 1 name
      HW Loop Demand Side Inlet,                                                                          ! - Component 1 inlet node name
      HW Loop Demand Side Inlet Branch Pipe Outlet;                                                       ! - Component 1 outlet node name
   
   Pipe:Adiabatic,
      HW Loop Demand Side Inlet Branch Pipe,                                                              ! - Name of pipe
      HW Loop Demand Side Inlet,                                                                          ! - Inlet node name
      HW Loop Demand Side Inlet Branch Pipe Outlet;                                                       ! - Outlet node name
   
   Branch,
      HW Loop Demand Side Bypass Branch,                                                                  ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      Pipe:Adiabatic,                                                                                     ! - Component 1 object type
      HW Loop Demand Side Bypass Pipe,                                                                    ! - Component 1 name
      HW Loop Demand Side Bypass Pipe Inlet Node,                                                         ! - Component 1 inlet node name
      HW Loop Demand Side Bypass Pipe Outlet Node;                                                        ! - Component 1 outlet node name
   
   Pipe:Adiabatic,
      HW Loop Demand Side Bypass Pipe,                                                                    ! - Name of pipe
      HW Loop Demand Side Bypass Pipe Inlet Node,                                                         ! - Inlet node name
      HW Loop Demand Side Bypass Pipe Outlet Node;                                                        ! - Outlet node name
   
   Branch,
      Base:Zone1 Water Radiator HW Loop Demand Side Branch,                                               ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      ZoneHVAC:Baseboard:RadiantConvective:Water,                                                         ! - Component 1 object type
      Base:Zone1 Water Radiator,                                                                          ! - Component 1 name
      Base:Zone1 Water Radiator Hot Water Inlet Node,                                                     ! - Component 1 inlet node name
      Base:Zone1 Water Radiator Hot Water Outlet Node;                                                    ! - Component 1 outlet node name
   
   ZoneHVAC:Baseboard:RadiantConvective:Water,
      Base:Zone1 Water Radiator,                                                                          ! - Component name
      On 24/7,                                                                                            ! - Availability schedule
      Base:Zone1 Water Radiator Hot Water Inlet Node,                                                     ! - Water inlet node name
      Base:Zone1 Water Radiator Hot Water Outlet Node,                                                    ! - Water outlet node name
      75.000,                                                                                             ! - Rated average water temperature (C)
      0.063000,                                                                                           ! - Rated water mass flow rate (kg/s)
      HeatingDesignCapacity,                                                                              ! - Heating design capacity method
      autosize,                                                                                           ! - Heating design capacity (W)
      ,                                                                                                   ! - Heating design capacity per floor area (W/m2)
      ,                                                                                                   ! - Fraction of auto-sized heating design capacity
      autosize,                                                                                           ! - Maximum water flow rate (m3/s)
      0.0100,                                                                                             ! - Convergence tolerance
      0.300,                                                                                              ! - Fraction radiant
      0.100,                                                                                              ! - Fraction of radiant energy incident on people
      Base:Zone1_Wall_5_0_0,                                                                              ! - Name of surface 1
      0.0869,                                                                                             ! - Fraction of radiant energy distributed to surface 1
      Base:Zone1_Wall_3_0_0,                                                                              ! - Name of surface 2
      0.1016,                                                                                             ! - Fraction of radiant energy distributed to surface 2
      Base:Zone1_Wall_2_0_0,                                                                              ! - Name of surface 3
      0.1525,                                                                                             ! - Fraction of radiant energy distributed to surface 3
      Base:Zone1_Wall_4_0_0,                                                                              ! - Name of surface 4
      0.1525,                                                                                             ! - Fraction of radiant energy distributed to surface 4
      Base:Zone1_ExtFloor_0_0_0,                                                                          ! - Name of surface 5
      0.2033,                                                                                             ! - Fraction of radiant energy distributed to surface 5
      Base:Zone1_Ceiling_1_0_0,                                                                              ! - Name of surface 6
      0.2033;                                                                                             ! - Fraction of radiant energy distributed to surface 6
   
   Branch,
      HX HW Loop Demand Side Branch,                                                                      ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      HeatExchanger:FluidToFluid,                                                                         ! - Component 1 object type
      HX,                                                                                                 ! - Component 1 name
      HX Demand Side Inlet Node,                                                                          ! - Component 1 inlet node name
      HX Demand Side Outlet Node;                                                                         ! - Component 1 outlet node name
   
   HeatExchanger:FluidToFluid,
      HX,                                                                                                 ! - Component name
      On 24/7,                                                                                            ! - Availability schedule
      HX Demand Side Inlet Node,                                                                          ! - Loop demand side inlet node
      HX Demand Side Outlet Node,                                                                         ! - Loop demand side outlet node
      autosize,                                                                                           ! - Loop demand side flow rate (m3/s)
      HX Supply Side Inlet Node,                                                                          ! - Loop supply side inlet node
      HX Supply Side Outlet Node,                                                                         ! - Loop supply side outlet node
      autosize,                                                                                           ! - Loop supply side flow rate (m3/s)
      CounterFlow,                                                                                        ! - Heat exchanger model type
      autosize,                                                                                           ! - Heat exchanger U-Factor times aea value
      HeatingSetpointModulated,                                                                           ! - Control type
      HX Supply Side Outlet Node,                                                                         ! - Heat exchanger setpoint node name
      2.000000,                                                                                           ! - Minimum temperature difference to activate heat exchanger (C)
      LoopToLoop,                                                                                         ! - Heat transfer metering end use type
      ,                                                                                                   ! - Component override loop supply side inlet node name
      ,                                                                                                   ! - Component override loop demand side inlet node name
      Loop,                                                                                               ! - Component override cooling control temperature mode
      10.0000,                                                                                            ! - Sizing factor
      ,                                                                                                   ! - Operation minimum temperature limit (C)
      ;                                                                                                   ! - Operation maximum temperature limit (C)
   
   Branch,
      HW Loop Demand Side Outlet Branch,                                                                  ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      Pipe:Adiabatic,                                                                                     ! - Component 1 object type
      HW Loop Demand Side Outlet Branch Pipe,                                                             ! - Component 1 name
      HW Loop Demand Side Outlet Branch Pipe Inlet,                                                       ! - Component 1 inlet node name
      HW Loop Demand Side Outlet;                                                                         ! - Component 1 outlet node name
   
   Pipe:Adiabatic,
      HW Loop Demand Side Outlet Branch Pipe,                                                             ! - Name of pipe
      HW Loop Demand Side Outlet Branch Pipe Inlet,                                                       ! - Inlet node name
      HW Loop Demand Side Outlet;                                                                         ! - Outlet node name
   
   ConnectorList,
      HW Loop Demand Side Connectors,                                                                     ! - Connector list name
      Connector:Splitter,                                                                                 ! - Connector 1 object type
      HW Loop Demand Splitter,                                                                            ! - Connector 1 object name
      Connector:Mixer,                                                                                    ! - Connector 2 object type
      HW Loop Demand Mixer;                                                                               ! - Connector 2 object name
   
   Connector:Splitter,
      HW Loop Demand Splitter,                                                                            ! - Splitter name
      HW Loop Demand Side Inlet Branch,                                                                   ! - Inlet branch name
      HW Loop Demand Side Bypass Branch,                                                                  ! - Branch 1
      Base:Zone1 Water Radiator HW Loop Demand Side Branch,                                               ! - Branch 2
      HX HW Loop Demand Side Branch;                                                                      ! - Branch 3
   
   Connector:Mixer,
      HW Loop Demand Mixer,                                                                               ! - Mixer name
      HW Loop Demand Side Outlet Branch,                                                                  ! - Outlet branch name
      Base:Zone1 Water Radiator HW Loop Demand Side Branch,                                               ! - Branch 1
      HW Loop Demand Side Bypass Branch,                                                                  ! - Branch 2
      HX HW Loop Demand Side Branch;                                                                      ! - Branch 3
   
   BranchList,
      HW Loop Supply Side Branches,                                                                       ! - Name of branch list
      HW Loop Supply Side Inlet Branch,                                                                   ! - Name of branch 1
      HW Loop Supply Side Bypass Branch,                                                                  ! - Name of branch 2
      Boiler HW Loop Supply Side Branch,                                                                  ! - Name of branch 3
      HW Loop Supply Side Outlet Branch;                                                                  ! - Name of branch 4
   
   Branch,
      HW Loop Supply Side Inlet Branch,                                                                   ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      Pump:VariableSpeed,                                                                                 ! - Component 1 object type
      HW Loop Supply Pump,                                                                                ! - Component 1 name
      HW Loop Supply Side Inlet,                                                                          ! - Component 1 inlet node name
      HW Loop Supply Pump Water Outlet Node;                                                              ! - Component 1 outlet node name
   
   Pump:VariableSpeed,
      HW Loop Supply Pump,                                                                                ! - Component name
      HW Loop Supply Side Inlet,                                                                          ! - Water inlet node name
      HW Loop Supply Pump Water Outlet Node,                                                              ! - Water outlet node name
      autosize,                                                                                           ! - Rated flow rate (m3/s)
      20000.00,                                                                                           ! - Rated pump head (Pa)
      autosize,                                                                                           ! - Rated power consumption (W)
      0.90,                                                                                               ! - Motor efficiency
      0.00,                                                                                               ! - Fraction Of Motor Inefficiencies To Fluid Stream
      0.0000,                                                                                             ! - Coefficient 1 of the part load performance curve
      1.0000,                                                                                             ! - Coefficient 2 of the part load performance curve
      0.0000,                                                                                             ! - Coefficient 3 of the part load performance curve
      0.0000,                                                                                             ! - Coefficient 4 of the part load performance curve
      0.000000,                                                                                           ! - Minimum flow rate (m3/s)
      Intermittent;                                                                                       ! - Pump control type
   
   Branch,
      HW Loop Supply Side Bypass Branch,                                                                  ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      Pipe:Adiabatic,                                                                                     ! - Component 1 object type
      HW Loop Supply Side Bypass Pipe,                                                                    ! - Component 1 name
      HW Loop Supply Side Bypass Pipe Inlet Node,                                                         ! - Component 1 inlet node name
      HW Loop Supply Side Bypass Pipe Outlet Node;                                                        ! - Component 1 outlet node name
   
   Pipe:Adiabatic,
      HW Loop Supply Side Bypass Pipe,                                                                    ! - Name of pipe
      HW Loop Supply Side Bypass Pipe Inlet Node,                                                         ! - Inlet node name
      HW Loop Supply Side Bypass Pipe Outlet Node;                                                        ! - Outlet node name
   
   Branch,
      Boiler HW Loop Supply Side Branch,                                                                  ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      Boiler:HotWater,                                                                                    ! - Component 1 object type
      Boiler,                                                                                             ! - Component 1 name
      Boiler Water Inlet Node,                                                                            ! - Component 1 inlet node name
      Boiler Water Outlet Node;                                                                           ! - Component 1 outlet node name
   
   Boiler:HotWater,
      Boiler,                                                                                             ! - Component name
      NaturalGas,                                                                                         ! - Fuel type
      autosize,                                                                                           ! - Nominal capacity (W)
      ${context.hvacParameters.frequency},                                                                                               ! - Nominal thermal efficiency
      LeavingBoiler,                                                                                      ! - Efficiency curve temperature evaluation variable
      CondensingBoilerEff,                                                                                ! - Normalised boiler efficiency curve name
      80.00,                                                                                              ! - Design water outlet temperature (C)
      autosize,                                                                                           ! - Maximum design boiler water flow rate (m3/s)
      0.00,                                                                                               ! - Minimum part load ratio
      1.00,                                                                                               ! - Maximum part load ratio
      1.00,                                                                                               ! - Optimum part load ratio
      Boiler Water Inlet Node,                                                                            ! - Boiler water inlet node
      Boiler Water Outlet Node,                                                                           ! - Boiler water outlet node
      100.0,                                                                                              ! - Water outlet upper temperature limit (C)
      NotModulated,                                                                                       ! - Boiler evaporator flow mode
      25.00,                                                                                              ! - Parasitic electric load (W)
      1.00;                                                                                               ! - Sizing factor
   
   Branch,
      HW Loop Supply Side Outlet Branch,                                                                  ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      Pipe:Adiabatic,                                                                                     ! - Component 1 object type
      HW Loop Supply Side Outlet Branch Pipe,                                                             ! - Component 1 name
      HW Loop Supply Side Outlet Branch Pipe Inlet,                                                       ! - Component 1 inlet node name
      HW Loop Supply Side Outlet;                                                                         ! - Component 1 outlet node name
   
   Pipe:Adiabatic,
      HW Loop Supply Side Outlet Branch Pipe,                                                             ! - Name of pipe
      HW Loop Supply Side Outlet Branch Pipe Inlet,                                                       ! - Inlet node name
      HW Loop Supply Side Outlet;                                                                         ! - Outlet node name
   
   ConnectorList,
      HW Loop Supply Side Connectors,                                                                     ! - Connector list name
      Connector:Splitter,                                                                                 ! - Connector 1 object type
      HW Loop Supply Splitter,                                                                            ! - Connector 1 object name
      Connector:Mixer,                                                                                    ! - Connector 2 object type
      HW Loop Supply Mixer;                                                                               ! - Connector 2 object name
   
   Connector:Splitter,
      HW Loop Supply Splitter,                                                                            ! - Splitter name
      HW Loop Supply Side Inlet Branch,                                                                   ! - Inlet branch name
      HW Loop Supply Side Bypass Branch,                                                                  ! - Branch 1
      Boiler HW Loop Supply Side Branch;                                                                  ! - Branch 2
   
   Connector:Mixer,
      HW Loop Supply Mixer,                                                                               ! - Mixer name
      HW Loop Supply Side Outlet Branch,                                                                  ! - Outlet branch name
      Boiler HW Loop Supply Side Branch,                                                                  ! - Branch 1
      HW Loop Supply Side Bypass Branch;                                                                  ! - Branch 2
   
   Sizing:Plant,
      DHW Loop,                                                                                           ! - Name of loop
      Heating,                                                                                            ! - Type of loop
      56.00,                                                                                              ! - Design loop exit temperature (C)
      5.00;                                                                                               ! - Loop design temperature difference (C)
   
   PlantLoop,
      DHW Loop,                                                                                           ! - Name of loop
      Water,                                                                                              ! - Fluid type
      ,                                                                                                   ! - User-defined fluid type
      DHW Loop Operation,                                                                                 ! - Plant equipment operation scheme
      DHW Loop Supply Side Outlet,                                                                        ! - Loop temperature setpoint node
      80.00,                                                                                              ! - Maximum loop temperature (C)
      0.00,                                                                                               ! - Minimum loop temperature (C)
      autosize,                                                                                           ! - Maximum loop flow rate (m3/s)
      0.000000,                                                                                           ! - Minimum loop flow rate (m3/s)
      autocalculate,                                                                                      ! - Volume of the plant loop (m3)
      DHW Loop Supply Side Inlet,                                                                         ! - Plant side inlet node
      DHW Loop Supply Side Outlet,                                                                        ! - Plant side outlet node
      DHW Loop Supply Side Branches,                                                                      ! - Plant side branch list name
      DHW Loop Supply Side Connectors,                                                                    ! - Plant side connector list name
      DHW Loop Demand Side Inlet,                                                                         ! - Demand side inlet node
      DHW Loop Demand Side Outlet,                                                                        ! - Demand side outlet node
      DHW Loop Demand Side Branches,                                                                      ! - Demand side branch list name
      DHW Loop Demand Side Connectors,                                                                    ! - Demand side connector list name
      SequentialLoad,                                                                                     ! - Load distribution scheme
      DHW Loop AvailabilityManager List,                                                                  ! - Availability manager list name
      SingleSetpoint,                                                                                     ! - Plant loop demand calculation scheme
      None,                                                                                               ! - Common pipe simulation
      None;                                                                                               ! - Pressure simulation type
   
   PlantEquipmentOperationSchemes,
      DHW Loop Operation,                                                                                 ! - Name of plant/condenser equipment operation scheme
      PlantEquipmentOperation:HeatingLoad,                                                                ! - Control scheme object type 1
      DHW Loop Scheme 1,                                                                                  ! - Name of control scheme 1
      On 24/7;                                                                                            ! - Control scheme schedule 1
   
   PlantEquipmentOperation:HeatingLoad,
      DHW Loop Scheme 1,                                                                                  ! - Name of control scheme
      0.00,                                                                                               ! - Range lower limit 1
      1000000000000000.00,                                                                                ! - Range upper limit 1
      DHW Loop  Scheme 1 Range 1 Equipment List;                                                          ! - Range equipment list name 1
   
   PlantEquipmentList,
      DHW Loop  Scheme 1 Range 1 Equipment List,                                                          ! - Range equipment list name 0
      HeatExchanger:FluidToFluid,                                                                         ! - Equipment 1 object type
      HX;                                                                                                 ! - Equipment 1 name
   
   BranchList,
      DHW Loop Demand Side Branches,                                                                      ! - Name of branch list
      DHW Loop Demand Side Inlet Branch,                                                                  ! - Name of branch 1
      DHW Loop Demand Side Bypass Branch,                                                                 ! - Name of branch 2
      Water Outlet Group DHW Loop Demand Side Branch,                                                     ! - Name of branch 3
      DHW Loop Demand Side Outlet Branch;                                                                 ! - Name of branch 4
   
   Branch,
      DHW Loop Demand Side Inlet Branch,                                                                  ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      Pipe:Adiabatic,                                                                                     ! - Component 1 object type
      DHW Loop Demand Side Inlet Branch Pipe,                                                             ! - Component 1 name
      DHW Loop Demand Side Inlet,                                                                         ! - Component 1 inlet node name
      DHW Loop Demand Side Inlet Branch Pipe Outlet;                                                      ! - Component 1 outlet node name
   
   Pipe:Adiabatic,
      DHW Loop Demand Side Inlet Branch Pipe,                                                             ! - Name of pipe
      DHW Loop Demand Side Inlet,                                                                         ! - Inlet node name
      DHW Loop Demand Side Inlet Branch Pipe Outlet;                                                      ! - Outlet node name
   
   Branch,
      DHW Loop Demand Side Bypass Branch,                                                                 ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      Pipe:Adiabatic,                                                                                     ! - Component 1 object type
      DHW Loop Demand Side Bypass Pipe,                                                                   ! - Component 1 name
      DHW Loop Demand Side Bypass Pipe Inlet Node,                                                        ! - Component 1 inlet node name
      DHW Loop Demand Side Bypass Pipe Outlet Node;                                                       ! - Component 1 outlet node name
   
   Pipe:Adiabatic,
      DHW Loop Demand Side Bypass Pipe,                                                                   ! - Name of pipe
      DHW Loop Demand Side Bypass Pipe Inlet Node,                                                        ! - Inlet node name
      DHW Loop Demand Side Bypass Pipe Outlet Node;                                                       ! - Outlet node name
   
   Branch,
      Water Outlet Group DHW Loop Demand Side Branch,                                                     ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      WaterUse:Connections,                                                                               ! - Component 1 object type
      Water Outlet Group,                                                                                 ! - Component 1 name
      Water Outlet Group Water Inlet Node,                                                                ! - Component 1 inlet node name
      Water Outlet Group Water Outlet Node;                                                               ! - Component 1 outlet node name
   
   WaterUse:Connections,
      Water Outlet Group,                                                                                 ! - Component name
      Water Outlet Group Water Inlet Node,                                                                ! - Water inlet node name
      Water Outlet Group Water Outlet Node,                                                               ! - Water outlet node name
      ,                                                                                                   ! - Supply water storage tank name
      ,                                                                                                   ! - Reclamation water storage tank name
      ,                                                                                                   ! - Hot water supply temperature schedule
      ,                                                                                                   ! - Cold water supply temperature schedule
      None,                                                                                               ! - Drain water heat exchanger type
      Plant,                                                                                              ! - Drain water heat exchanger destination
      1500.000,                                                                                           ! - Drain water heat exchanger U-factor*area (W/K)
      Base:Zone1 Water Outlet;                                                                            ! - Water use equipment 1 name
   
   WaterUse:Equipment,
      Base:Zone1 Water Outlet,                                                                            ! - Component name
      ,                                                                                                   ! - End use sub-category
      0.0000021969,                                                                                       ! - Peak flow rate (m3/s)
      Dwell_DomCommonAreas_Occ,                                                                           ! - Flow rate fraction schedule
      Domestic hot water setpoint temperature: Always 55.00,                                              ! - Target temperature schedule
      ,                                                                                                   ! - Hot water supply temperature schedule
      ,                                                                                                   ! - Cold water supply temperature schedule
      ,                                                                                                   ! - Zone name
      Off 24/7,                                                                                           ! - Sensible fraction schedule
      Off 24/7;                                                                                           ! - Latent fraction schedule
   
   Branch,
      DHW Loop Demand Side Outlet Branch,                                                                 ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      Pipe:Adiabatic,                                                                                     ! - Component 1 object type
      DHW Loop Demand Side Outlet Branch Pipe,                                                            ! - Component 1 name
      DHW Loop Demand Side Outlet Branch Pipe Inlet,                                                      ! - Component 1 inlet node name
      DHW Loop Demand Side Outlet;                                                                        ! - Component 1 outlet node name
   
   Pipe:Adiabatic,
      DHW Loop Demand Side Outlet Branch Pipe,                                                            ! - Name of pipe
      DHW Loop Demand Side Outlet Branch Pipe Inlet,                                                      ! - Inlet node name
      DHW Loop Demand Side Outlet;                                                                        ! - Outlet node name
   
   ConnectorList,
      DHW Loop Demand Side Connectors,                                                                    ! - Connector list name
      Connector:Splitter,                                                                                 ! - Connector 1 object type
      DHW Loop Demand Splitter,                                                                           ! - Connector 1 object name
      Connector:Mixer,                                                                                    ! - Connector 2 object type
      DHW Loop Demand Mixer;                                                                              ! - Connector 2 object name
   
   Connector:Splitter,
      DHW Loop Demand Splitter,                                                                           ! - Splitter name
      DHW Loop Demand Side Inlet Branch,                                                                  ! - Inlet branch name
      DHW Loop Demand Side Bypass Branch,                                                                 ! - Branch 1
      Water Outlet Group DHW Loop Demand Side Branch;                                                     ! - Branch 2
   
   Connector:Mixer,
      DHW Loop Demand Mixer,                                                                              ! - Mixer name
      DHW Loop Demand Side Outlet Branch,                                                                 ! - Outlet branch name
      DHW Loop Demand Side Bypass Branch,                                                                 ! - Branch 1
      Water Outlet Group DHW Loop Demand Side Branch;                                                     ! - Branch 2
   
   BranchList,
      DHW Loop Supply Side Branches,                                                                      ! - Name of branch list
      DHW Loop Supply Side Inlet Branch,                                                                  ! - Name of branch 1
      HX DHW Loop Supply Side Branch,                                                                     ! - Name of branch 2
      DHW Loop Supply Side Outlet Branch;                                                                 ! - Name of branch 3
   
   Branch,
      DHW Loop Supply Side Inlet Branch,                                                                  ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      Pump:VariableSpeed,                                                                                 ! - Component 1 object type
      DHW Loop Supply Pump,                                                                               ! - Component 1 name
      DHW Loop Supply Side Inlet,                                                                         ! - Component 1 inlet node name
      DHW Loop Supply Pump Water Outlet Node;                                                             ! - Component 1 outlet node name
   
   Pump:VariableSpeed,
      DHW Loop Supply Pump,                                                                               ! - Component name
      DHW Loop Supply Side Inlet,                                                                         ! - Water inlet node name
      DHW Loop Supply Pump Water Outlet Node,                                                             ! - Water outlet node name
      autosize,                                                                                           ! - Rated flow rate (m3/s)
      20000.00,                                                                                           ! - Rated pump head (Pa)
      autosize,                                                                                           ! - Rated power consumption (W)
      0.90,                                                                                               ! - Motor efficiency
      0.00,                                                                                               ! - Fraction Of Motor Inefficiencies To Fluid Stream
      0.0000,                                                                                             ! - Coefficient 1 of the part load performance curve
      1.0000,                                                                                             ! - Coefficient 2 of the part load performance curve
      0.0000,                                                                                             ! - Coefficient 3 of the part load performance curve
      0.0000,                                                                                             ! - Coefficient 4 of the part load performance curve
      0.000000,                                                                                           ! - Minimum flow rate (m3/s)
      Intermittent;                                                                                       ! - Pump control type
   
   Branch,
      HX DHW Loop Supply Side Branch,                                                                     ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      HeatExchanger:FluidToFluid,                                                                         ! - Component 1 object type
      HX,                                                                                                 ! - Component 1 name
      HX Supply Side Inlet Node,                                                                          ! - Component 1 inlet node name
      HX Supply Side Outlet Node;                                                                         ! - Component 1 outlet node name
   
   Branch,
      DHW Loop Supply Side Outlet Branch,                                                                 ! - Branch name
      ,                                                                                                   ! - Pressure drop curve name
      Pipe:Adiabatic,                                                                                     ! - Component 1 object type
      DHW Loop Supply Side Outlet Branch Pipe,                                                            ! - Component 1 name
      DHW Loop Supply Side Outlet Branch Pipe Inlet,                                                      ! - Component 1 inlet node name
      DHW Loop Supply Side Outlet;                                                                        ! - Component 1 outlet node name
   
   Pipe:Adiabatic,
      DHW Loop Supply Side Outlet Branch Pipe,                                                            ! - Name of pipe
      DHW Loop Supply Side Outlet Branch Pipe Inlet,                                                      ! - Inlet node name
      DHW Loop Supply Side Outlet;                                                                        ! - Outlet node name
   
   ConnectorList,
      DHW Loop Supply Side Connectors,                                                                    ! - Connector list name
      Connector:Splitter,                                                                                 ! - Connector 1 object type
      DHW Loop Supply Splitter,                                                                           ! - Connector 1 object name
      Connector:Mixer,                                                                                    ! - Connector 2 object type
      DHW Loop Supply Mixer;                                                                              ! - Connector 2 object name
   
   Connector:Splitter,
      DHW Loop Supply Splitter,                                                                           ! - Splitter name
      DHW Loop Supply Side Inlet Branch,                                                                  ! - Inlet branch name
      HX DHW Loop Supply Side Branch;                                                                     ! - Branch 1
   
   Connector:Mixer,
      DHW Loop Supply Mixer,                                                                              ! - Mixer name
      DHW Loop Supply Side Outlet Branch,                                                                 ! - Outlet branch name
      HX DHW Loop Supply Side Branch;                                                                     ! - Branch 1
   
   ZoneControl:Thermostat,
      Base:Zone1 Thermostat,                                                                              ! - Name
      ZoneName[],                                                                                         ! - Zone name
      Control type schedule: Always 4,                                                                    ! - Control type schedule name
      ThermostatSetpoint:DualSetpoint,                                                                    ! - Dual SP control object type
      Base:Zone1 Dual SP;                                                                                 ! - Dual SP control object name
   
   ThermostatSetpoint:DualSetpoint,
      Base:Zone1 Dual SP,                                                                                 ! - Name
      Base:Zone1 Heating Setpoint Schedule,                                                               ! - Heating setpoint temperature schedule name
      Base:Zone1 Cooling Setpoint Schedule;                                                               ! - Cooling setpoint temperature schedule name
   
   Sizing:Zone,
      ZoneName[],                                                                                         ! - Zone group name
      SupplyAirTemperature,                                                                               ! - Zone cooling design supply air temperature input method
      14.00,                                                                                              ! - Zone cooling design supply air temperature (C)
      5.00,                                                                                               ! - Zone cooling design supply air temperature difference (deltaC)
      SupplyAirTemperature,                                                                               ! - Zone heating design supply air temperature input method
      50.00,                                                                                              ! - Zone heating design supply air temperature (C)
      15.00,                                                                                              ! - Zone heating design supply air temperature difference (deltaC)
      0.0090,                                                                                             ! - Zone cooling design supply air humidity ratio (kg-H2O/kg-air)
      0.0040,                                                                                             ! - Zone heating design supply air humidity ratio (kg-H2O/kg-air)
      Base:Zone1 Design Specification Outdoor Air Object,                                                 ! - Design specification outdoor air object name
      1.25,                                                                                               ! - Zone heating sizing factor
      1.15,                                                                                               ! - Zone cooling sizing factor
      DesignDay,                                                                                          ! - Cooling design air flow method
      0.000000,                                                                                           ! - Cooling design air flow rate (m3/s)
      0.000760,                                                                                           ! - Cooling min air flow per zone floor area (m3/s-m2)
      0.000000,                                                                                           ! - Cooling min air flow (m3/s)
      0.00,                                                                                               ! - Cooling min air flow fraction
      DesignDay,                                                                                          ! - Heating design air flow method
      0.000000,                                                                                           ! - Heating design air flow rate (m3/s)
      0.002030,                                                                                           ! - Heating max air flow per zone area (m3/s-m2)
      0.141580,                                                                                           ! - Heating max air flow (m3/s)
      0.30,                                                                                               ! - Heating max air flow fraction
      Base:Zone1 Design Specification Zone Air Distribution Object,                                       ! - Design specification zone air distribution object name
      No,                                                                                                 ! - Account for dedicated outdoor air system
      NeutralSupplyAir,                                                                                   ! - Dedicated outdoor air system control strategy
      autosize,                                                                                           ! - Dedicated outdoor air low temperature setpoint for design
      autosize;                                                                                           ! - Dedicated outdoor air high temperature setpoint for design
   
   DesignSpecification:OutdoorAir,
      Base:Zone1 Design Specification Outdoor Air Object,                                                 ! - Name
      Sum,                                                                                                ! - Outside air method
      0.010000,                                                                                           ! - Outside air flow per person (m3/s)
      0.000000,                                                                                           ! - Outside air flow per zone floor area (m3/s-m2)
      0.0,                                                                                                ! - Outside air flow per zone (m3/s)
      0.000000,                                                                                           ! - Outdoor air flow air changes per hour
      On 24/7;                                                                                            ! - Outdoor air flow rate fraction schedule
   
   DesignSpecification:ZoneAirDistribution,
      Base:Zone1 Design Specification Zone Air Distribution Object,                                       ! - Name
      1.0000,                                                                                             ! - Zone air aistribution effectiveness in cooling mode
      1.0000,                                                                                             ! - Zone air aistribution effectiveness in heating mode
      ,                                                                                                   ! - Zone air distribution effectiveness schedule
      0.0000;                                                                                             ! - Zone secondary recirculation fraction
   
   ZoneHVAC:EquipmentConnections,
      ZoneName[],                                                                                         ! - Zone Name
      Base:Zone1 Equipment,                                                                               ! - Zone Conditioning Equipment List Name
      ,                                                                                                   ! - Zone Air Inlet Node or Nodelist Name
      ,                                                                                                   ! - Zone Air Exhaust Node or Nodelist Name
      Base:Zone1 Zone Air Node,                                                                           ! - Zone Air Node Name
      Base:Zone1 Return Outlet;                                                                           ! - Zone Return Air Node Name
   
   ZoneHVAC:EquipmentList,
      Base:Zone1 Equipment,                                                                               ! - Name
      SequentialLoad,                                                                                     ! - Load distribution scheme
      ZoneHVAC:Baseboard:RadiantConvective:Water,                                                         ! - Zone equipment 1 object type
      Base:Zone1 Water Radiator,                                                                          ! - Zone equipment 1 name
      1,                                                                                                  ! - Zone equipment 1 cooling sequence
      1;                                                                                                  ! - Zone equipment 1 heating sequence
   
   AvailabilityManagerAssignmentList,
      HW Loop AvailabilityManager List,                                                                   ! - Availability manager list name
      AvailabilityManager:Scheduled,                                                                      ! - Plant/condenser loop availability manager type
      HW Loop Availability;                                                                               ! - Plant/condenser loop availability manager name
   
   AvailabilityManager:Scheduled,
      HW Loop Availability,                                                                               ! - Plant/condenser loop availability manager name
      On 24/7;                                                                                            ! - Plant/condenser loop availability manager schedule
   
   AvailabilityManagerAssignmentList,
      DHW Loop AvailabilityManager List,                                                                  ! - Availability manager list name
      AvailabilityManager:Scheduled,                                                                      ! - Plant/condenser loop availability manager type
      DHW Loop Availability;                                                                              ! - Plant/condenser loop availability manager name
   
   AvailabilityManager:Scheduled,
      DHW Loop Availability,                                                                              ! - Plant/condenser loop availability manager name
      On 24/7;                                                                                            ! - Plant/condenser loop availability manager schedule
   
   SetpointManager:Scheduled,
      HW Loop Setpoint Manager,                                                                           ! - Component name
      Temperature,                                                                                        ! - Control variable
      Hot Water flow set point temperature: Always 80.0 C,                                                ! - Setpoint schedule
      HW Loop Setpoint Manager Node List;                                                                 ! - Setpoint node list
   
   NodeList,
      HW Loop Setpoint Manager Node List,                                                                 ! - Setpoint node list
      HW Loop Supply Side Outlet;                                                                         ! - Setpoint node  1
   
   SetpointManager:Scheduled,
      DHW Loop Setpoint Manager,                                                                          ! - Component name
      Temperature,                                                                                        ! - Control variable
      Domestic hot water setpoint temperature: Always 55.00,                                              ! - Setpoint schedule
      DHW Loop Setpoint Manager Node List;                                                                ! - Setpoint node list
   
   NodeList,
      DHW Loop Setpoint Manager Node List,                                                                ! - Setpoint node list
      HX Supply Side Outlet Node;                                                                         ! - Setpoint node  1
   
   SetpointManager:Scheduled,
      DHW Loop Setpoint Manager 1,                                                                        ! - Component name
      Temperature,                                                                                        ! - Control variable
      Domestic hot water setpoint temperature: Always 55.00,                                              ! - Setpoint schedule
      DHW Loop Setpoint Manager 1 Node List;                                                              ! - Setpoint node list
   
   NodeList,
      DHW Loop Setpoint Manager 1 Node List,                                                              ! - Setpoint node list
      DHW Loop Supply Side Outlet;                                                                        ! - Setpoint node  1
   
   ! End detailed HVAC data definition
   `
    : `

    ! Single-zone residential space with one window. Gas heating and hot water system
  ! Source file: \shoebox\shoebox-residential.dsb
  ! Part 5 - HVAC

  ! Version, 8.9.0.001;                               !- Version Identifier

  ! Start detailed HVAC data definition

  Sizing:Plant,
     HW Loop,                                                                                            ! - Name of loop
     Heating,                                                                                            ! - Type of loop
     80.00,                                                                                              ! - Design loop exit temperature (C)
     10.00;                                                                                              ! - Loop design temperature difference (C)

  PlantLoop,
     HW Loop,                                                                                            ! - Name of loop
     Water,                                                                                              ! - Fluid type
     ,                                                                                                   ! - User-defined fluid type
     HW Loop Operation,                                                                                  ! - Plant equipment operation scheme
     HW Loop Supply Side Outlet,                                                                         ! - Loop temperature setpoint node
     100.00,                                                                                             ! - Maximum loop temperature (C)
     10.00,                                                                                              ! - Minimum loop temperature (C)
     autosize,                                                                                           ! - Maximum loop flow rate (m3/s)
     0.000000,                                                                                           ! - Minimum loop flow rate (m3/s)
     autocalculate,                                                                                      ! - Volume of the plant loop (m3)
     HW Loop Supply Side Inlet,                                                                          ! - Plant side inlet node
     HW Loop Supply Side Outlet,                                                                         ! - Plant side outlet node
     HW Loop Supply Side Branches,                                                                       ! - Plant side branch list name
     HW Loop Supply Side Connectors,                                                                     ! - Plant side connector list name
     HW Loop Demand Side Inlet,                                                                          ! - Demand side inlet node
     HW Loop Demand Side Outlet,                                                                         ! - Demand side outlet node
     HW Loop Demand Side Branches,                                                                       ! - Demand side branch list name
     HW Loop Demand Side Connectors,                                                                     ! - Demand side connector list name
     SequentialLoad,                                                                                     ! - Load distribution scheme
     HW Loop AvailabilityManager List,                                                                   ! - Availability manager list name
     SingleSetpoint,                                                                                     ! - Plant loop demand calculation scheme
     None,                                                                                               ! - Common pipe simulation
     None;                                                                                               ! - Pressure simulation type

  PlantEquipmentOperationSchemes,
     HW Loop Operation,                                                                                  ! - Name of plant/condenser equipment operation scheme
     PlantEquipmentOperation:HeatingLoad,                                                                ! - Control scheme object type 1
     HW Loop Scheme 1,                                                                                   ! - Name of control scheme 1
     On 24/7;                                                                                            ! - Control scheme schedule 1

  PlantEquipmentOperation:HeatingLoad,
     HW Loop Scheme 1,                                                                                   ! - Name of control scheme
     0.00,                                                                                               ! - Range lower limit 1
     1000000000000000.00,                                                                                ! - Range upper limit 1
     HW Loop Scheme 1 Range 1 Equipment List;                                                            ! - Range equipment list name 1

  PlantEquipmentList,
     HW Loop Scheme 1 Range 1 Equipment List,                                                            ! - Range equipment list name 0
     Boiler:HotWater,                                                                                    ! - Equipment 1 object type
     Boiler;                                                                                             ! - Equipment 1 name

  BranchList,
     HW Loop Demand Side Branches,                                                                       ! - Name of branch list
     HW Loop Demand Side Inlet Branch,                                                                   ! - Name of branch 1
     HW Loop Demand Side Bypass Branch,                                                                  ! - Name of branch 2
     Base:Zone1 Water Radiator HW Loop Demand Side Branch,                                               ! - Name of branch 3
     HX HW Loop Demand Side Branch,                                                                      ! - Name of branch 4
     HW Loop Demand Side Outlet Branch;                                                                  ! - Name of branch 5

  Branch,
     HW Loop Demand Side Inlet Branch,                                                                   ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     Pipe:Adiabatic,                                                                                     ! - Component 1 object type
     HW Loop Demand Side Inlet Branch Pipe,                                                              ! - Component 1 name
     HW Loop Demand Side Inlet,                                                                          ! - Component 1 inlet node name
     HW Loop Demand Side Inlet Branch Pipe Outlet;                                                       ! - Component 1 outlet node name

  Pipe:Adiabatic,
     HW Loop Demand Side Inlet Branch Pipe,                                                              ! - Name of pipe
     HW Loop Demand Side Inlet,                                                                          ! - Inlet node name
     HW Loop Demand Side Inlet Branch Pipe Outlet;                                                       ! - Outlet node name

  Branch,
     HW Loop Demand Side Bypass Branch,                                                                  ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     Pipe:Adiabatic,                                                                                     ! - Component 1 object type
     HW Loop Demand Side Bypass Pipe,                                                                    ! - Component 1 name
     HW Loop Demand Side Bypass Pipe Inlet Node,                                                         ! - Component 1 inlet node name
     HW Loop Demand Side Bypass Pipe Outlet Node;                                                        ! - Component 1 outlet node name

  Pipe:Adiabatic,
     HW Loop Demand Side Bypass Pipe,                                                                    ! - Name of pipe
     HW Loop Demand Side Bypass Pipe Inlet Node,                                                         ! - Inlet node name
     HW Loop Demand Side Bypass Pipe Outlet Node;                                                        ! - Outlet node name

  Branch,
     Base:Zone1 Water Radiator HW Loop Demand Side Branch,                                               ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     ZoneHVAC:Baseboard:RadiantConvective:Water,                                                         ! - Component 1 object type
     Base:Zone1 Water Radiator,                                                                          ! - Component 1 name
     Base:Zone1 Water Radiator Hot Water Inlet Node,                                                     ! - Component 1 inlet node name
     Base:Zone1 Water Radiator Hot Water Outlet Node;                                                    ! - Component 1 outlet node name

  ZoneHVAC:Baseboard:RadiantConvective:Water,
     Base:Zone1 Water Radiator,                                                                          ! - Component name
     On 24/7,                                                                                            ! - Availability schedule
     Base:Zone1 Water Radiator Hot Water Inlet Node,                                                     ! - Water inlet node name
     Base:Zone1 Water Radiator Hot Water Outlet Node,                                                    ! - Water outlet node name
     75.000,                                                                                             ! - Rated average water temperature (C)
     0.063000,                                                                                           ! - Rated water mass flow rate (kg/s)
     HeatingDesignCapacity,                                                                              ! - Heating design capacity method
     autosize,                                                                                           ! - Heating design capacity (W)
     ,                                                                                                   ! - Heating design capacity per floor area (W/m2)
     ,                                                                                                   ! - Fraction of auto-sized heating design capacity
     autosize,                                                                                           ! - Maximum water flow rate (m3/s)
     0.0100,                                                                                             ! - Convergence tolerance
     0.300,                                                                                              ! - Fraction radiant
     0.100,                                                                                              ! - Fraction of radiant energy incident on people
     Base:Zone1_Wall_5_0_0,                                                                              ! - Name of surface 1
     0.0869,                                                                                             ! - Fraction of radiant energy distributed to surface 1
     Base:Zone1_Wall_3_0_0,                                                                              ! - Name of surface 2
     0.1016,                                                                                             ! - Fraction of radiant energy distributed to surface 2
     Base:Zone1_Wall_2_0_0,                                                                              ! - Name of surface 3
     0.1525,                                                                                             ! - Fraction of radiant energy distributed to surface 3
     Base:Zone1_Wall_4_0_0,                                                                              ! - Name of surface 4
     0.1525,                                                                                             ! - Fraction of radiant energy distributed to surface 4
     Base:Zone1_ExtFloor_0_0_0,                                                                          ! - Name of surface 5
     0.2033,                                                                                             ! - Fraction of radiant energy distributed to surface 5
     Base:Zone1_Roof_1_0_0,                                                                              ! - Name of surface 6
     0.2033;                                                                                             ! - Fraction of radiant energy distributed to surface 6

  Branch,
     HX HW Loop Demand Side Branch,                                                                      ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     HeatExchanger:FluidToFluid,                                                                         ! - Component 1 object type
     HX,                                                                                                 ! - Component 1 name
     HX Demand Side Inlet Node,                                                                          ! - Component 1 inlet node name
     HX Demand Side Outlet Node;                                                                         ! - Component 1 outlet node name

  HeatExchanger:FluidToFluid,
     HX,                                                                                                 ! - Component name
     On 24/7,                                                                                            ! - Availability schedule
     HX Demand Side Inlet Node,                                                                          ! - Loop demand side inlet node
     HX Demand Side Outlet Node,                                                                         ! - Loop demand side outlet node
     autosize,                                                                                           ! - Loop demand side flow rate (m3/s)
     HX Supply Side Inlet Node,                                                                          ! - Loop supply side inlet node
     HX Supply Side Outlet Node,                                                                         ! - Loop supply side outlet node
     autosize,                                                                                           ! - Loop supply side flow rate (m3/s)
     CounterFlow,                                                                                        ! - Heat exchanger model type
     autosize,                                                                                           ! - Heat exchanger U-Factor times aea value
     HeatingSetpointModulated,                                                                           ! - Control type
     HX Supply Side Outlet Node,                                                                         ! - Heat exchanger setpoint node name
     2.000000,                                                                                           ! - Minimum temperature difference to activate heat exchanger (C)
     LoopToLoop,                                                                                         ! - Heat transfer metering end use type
     ,                                                                                                   ! - Component override loop supply side inlet node name
     ,                                                                                                   ! - Component override loop demand side inlet node name
     Loop,                                                                                               ! - Component override cooling control temperature mode
     10.0000,                                                                                            ! - Sizing factor
     ,                                                                                                   ! - Operation minimum temperature limit (C)
     ;                                                                                                   ! - Operation maximum temperature limit (C)

  Branch,
     HW Loop Demand Side Outlet Branch,                                                                  ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     Pipe:Adiabatic,                                                                                     ! - Component 1 object type
     HW Loop Demand Side Outlet Branch Pipe,                                                             ! - Component 1 name
     HW Loop Demand Side Outlet Branch Pipe Inlet,                                                       ! - Component 1 inlet node name
     HW Loop Demand Side Outlet;                                                                         ! - Component 1 outlet node name

  Pipe:Adiabatic,
     HW Loop Demand Side Outlet Branch Pipe,                                                             ! - Name of pipe
     HW Loop Demand Side Outlet Branch Pipe Inlet,                                                       ! - Inlet node name
     HW Loop Demand Side Outlet;                                                                         ! - Outlet node name

  ConnectorList,
     HW Loop Demand Side Connectors,                                                                     ! - Connector list name
     Connector:Splitter,                                                                                 ! - Connector 1 object type
     HW Loop Demand Splitter,                                                                            ! - Connector 1 object name
     Connector:Mixer,                                                                                    ! - Connector 2 object type
     HW Loop Demand Mixer;                                                                               ! - Connector 2 object name

  Connector:Splitter,
     HW Loop Demand Splitter,                                                                            ! - Splitter name
     HW Loop Demand Side Inlet Branch,                                                                   ! - Inlet branch name
     HW Loop Demand Side Bypass Branch,                                                                  ! - Branch 1
     Base:Zone1 Water Radiator HW Loop Demand Side Branch,                                               ! - Branch 2
     HX HW Loop Demand Side Branch;                                                                      ! - Branch 3

  Connector:Mixer,
     HW Loop Demand Mixer,                                                                               ! - Mixer name
     HW Loop Demand Side Outlet Branch,                                                                  ! - Outlet branch name
     Base:Zone1 Water Radiator HW Loop Demand Side Branch,                                               ! - Branch 1
     HW Loop Demand Side Bypass Branch,                                                                  ! - Branch 2
     HX HW Loop Demand Side Branch;                                                                      ! - Branch 3

  BranchList,
     HW Loop Supply Side Branches,                                                                       ! - Name of branch list
     HW Loop Supply Side Inlet Branch,                                                                   ! - Name of branch 1
     HW Loop Supply Side Bypass Branch,                                                                  ! - Name of branch 2
     Boiler HW Loop Supply Side Branch,                                                                  ! - Name of branch 3
     HW Loop Supply Side Outlet Branch;                                                                  ! - Name of branch 4

  Branch,
     HW Loop Supply Side Inlet Branch,                                                                   ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     Pump:VariableSpeed,                                                                                 ! - Component 1 object type
     HW Loop Supply Pump,                                                                                ! - Component 1 name
     HW Loop Supply Side Inlet,                                                                          ! - Component 1 inlet node name
     HW Loop Supply Pump Water Outlet Node;                                                              ! - Component 1 outlet node name

  Pump:VariableSpeed,
     HW Loop Supply Pump,                                                                                ! - Component name
     HW Loop Supply Side Inlet,                                                                          ! - Water inlet node name
     HW Loop Supply Pump Water Outlet Node,                                                              ! - Water outlet node name
     autosize,                                                                                           ! - Rated flow rate (m3/s)
     20000.00,                                                                                           ! - Rated pump head (Pa)
     autosize,                                                                                           ! - Rated power consumption (W)
     0.90,                                                                                               ! - Motor efficiency
     0.00,                                                                                               ! - Fraction Of Motor Inefficiencies To Fluid Stream
     0.0000,                                                                                             ! - Coefficient 1 of the part load performance curve
     1.0000,                                                                                             ! - Coefficient 2 of the part load performance curve
     0.0000,                                                                                             ! - Coefficient 3 of the part load performance curve
     0.0000,                                                                                             ! - Coefficient 4 of the part load performance curve
     0.000000,                                                                                           ! - Minimum flow rate (m3/s)
     Intermittent;                                                                                       ! - Pump control type

  Branch,
     HW Loop Supply Side Bypass Branch,                                                                  ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     Pipe:Adiabatic,                                                                                     ! - Component 1 object type
     HW Loop Supply Side Bypass Pipe,                                                                    ! - Component 1 name
     HW Loop Supply Side Bypass Pipe Inlet Node,                                                         ! - Component 1 inlet node name
     HW Loop Supply Side Bypass Pipe Outlet Node;                                                        ! - Component 1 outlet node name

  Pipe:Adiabatic,
     HW Loop Supply Side Bypass Pipe,                                                                    ! - Name of pipe
     HW Loop Supply Side Bypass Pipe Inlet Node,                                                         ! - Inlet node name
     HW Loop Supply Side Bypass Pipe Outlet Node;                                                        ! - Outlet node name

  Branch,
     Boiler HW Loop Supply Side Branch,                                                                  ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     Boiler:HotWater,                                                                                    ! - Component 1 object type
     Boiler,                                                                                             ! - Component 1 name
     Boiler Water Inlet Node,                                                                            ! - Component 1 inlet node name
     Boiler Water Outlet Node;                                                                           ! - Component 1 outlet node name

  Boiler:HotWater,
     Boiler,                                                                                             ! - Component name
     NaturalGas,                                                                                         ! - Fuel type
     autosize,                                                                                           ! - Nominal capacity (W)
     ${context.hvacParameters.frequency},                                                                                               ! - Nominal thermal efficiency
     LeavingBoiler,                                                                                      ! - Efficiency curve temperature evaluation variable
     CondensingBoilerEff,                                                                                ! - Normalised boiler efficiency curve name
     80.00,                                                                                              ! - Design water outlet temperature (C)
     autosize,                                                                                           ! - Maximum design boiler water flow rate (m3/s)
     0.00,                                                                                               ! - Minimum part load ratio
     1.00,                                                                                               ! - Maximum part load ratio
     1.00,                                                                                               ! - Optimum part load ratio
     Boiler Water Inlet Node,                                                                            ! - Boiler water inlet node
     Boiler Water Outlet Node,                                                                           ! - Boiler water outlet node
     100.0,                                                                                              ! - Water outlet upper temperature limit (C)
     NotModulated,                                                                                       ! - Boiler evaporator flow mode
     25.00,                                                                                              ! - Parasitic electric load (W)
     1.00;                                                                                               ! - Sizing factor

  Branch,
     HW Loop Supply Side Outlet Branch,                                                                  ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     Pipe:Adiabatic,                                                                                     ! - Component 1 object type
     HW Loop Supply Side Outlet Branch Pipe,                                                             ! - Component 1 name
     HW Loop Supply Side Outlet Branch Pipe Inlet,                                                       ! - Component 1 inlet node name
     HW Loop Supply Side Outlet;                                                                         ! - Component 1 outlet node name

  Pipe:Adiabatic,
     HW Loop Supply Side Outlet Branch Pipe,                                                             ! - Name of pipe
     HW Loop Supply Side Outlet Branch Pipe Inlet,                                                       ! - Inlet node name
     HW Loop Supply Side Outlet;                                                                         ! - Outlet node name

  ConnectorList,
     HW Loop Supply Side Connectors,                                                                     ! - Connector list name
     Connector:Splitter,                                                                                 ! - Connector 1 object type
     HW Loop Supply Splitter,                                                                            ! - Connector 1 object name
     Connector:Mixer,                                                                                    ! - Connector 2 object type
     HW Loop Supply Mixer;                                                                               ! - Connector 2 object name

  Connector:Splitter,
     HW Loop Supply Splitter,                                                                            ! - Splitter name
     HW Loop Supply Side Inlet Branch,                                                                   ! - Inlet branch name
     HW Loop Supply Side Bypass Branch,                                                                  ! - Branch 1
     Boiler HW Loop Supply Side Branch;                                                                  ! - Branch 2

  Connector:Mixer,
     HW Loop Supply Mixer,                                                                               ! - Mixer name
     HW Loop Supply Side Outlet Branch,                                                                  ! - Outlet branch name
     Boiler HW Loop Supply Side Branch,                                                                  ! - Branch 1
     HW Loop Supply Side Bypass Branch;                                                                  ! - Branch 2

  Sizing:Plant,
     DHW Loop,                                                                                           ! - Name of loop
     Heating,                                                                                            ! - Type of loop
     56.00,                                                                                              ! - Design loop exit temperature (C)
     5.00;                                                                                               ! - Loop design temperature difference (C)

  PlantLoop,
     DHW Loop,                                                                                           ! - Name of loop
     Water,                                                                                              ! - Fluid type
     ,                                                                                                   ! - User-defined fluid type
     DHW Loop Operation,                                                                                 ! - Plant equipment operation scheme
     DHW Loop Supply Side Outlet,                                                                        ! - Loop temperature setpoint node
     80.00,                                                                                              ! - Maximum loop temperature (C)
     0.00,                                                                                               ! - Minimum loop temperature (C)
     autosize,                                                                                           ! - Maximum loop flow rate (m3/s)
     0.000000,                                                                                           ! - Minimum loop flow rate (m3/s)
     autocalculate,                                                                                      ! - Volume of the plant loop (m3)
     DHW Loop Supply Side Inlet,                                                                         ! - Plant side inlet node
     DHW Loop Supply Side Outlet,                                                                        ! - Plant side outlet node
     DHW Loop Supply Side Branches,                                                                      ! - Plant side branch list name
     DHW Loop Supply Side Connectors,                                                                    ! - Plant side connector list name
     DHW Loop Demand Side Inlet,                                                                         ! - Demand side inlet node
     DHW Loop Demand Side Outlet,                                                                        ! - Demand side outlet node
     DHW Loop Demand Side Branches,                                                                      ! - Demand side branch list name
     DHW Loop Demand Side Connectors,                                                                    ! - Demand side connector list name
     SequentialLoad,                                                                                     ! - Load distribution scheme
     DHW Loop AvailabilityManager List,                                                                  ! - Availability manager list name
     SingleSetpoint,                                                                                     ! - Plant loop demand calculation scheme
     None,                                                                                               ! - Common pipe simulation
     None;                                                                                               ! - Pressure simulation type

  PlantEquipmentOperationSchemes,
     DHW Loop Operation,                                                                                 ! - Name of plant/condenser equipment operation scheme
     PlantEquipmentOperation:HeatingLoad,                                                                ! - Control scheme object type 1
     DHW Loop Scheme 1,                                                                                  ! - Name of control scheme 1
     On 24/7;                                                                                            ! - Control scheme schedule 1

  PlantEquipmentOperation:HeatingLoad,
     DHW Loop Scheme 1,                                                                                  ! - Name of control scheme
     0.00,                                                                                               ! - Range lower limit 1
     1000000000000000.00,                                                                                ! - Range upper limit 1
     DHW Loop  Scheme 1 Range 1 Equipment List;                                                          ! - Range equipment list name 1

  PlantEquipmentList,
     DHW Loop  Scheme 1 Range 1 Equipment List,                                                          ! - Range equipment list name 0
     HeatExchanger:FluidToFluid,                                                                         ! - Equipment 1 object type
     HX;                                                                                                 ! - Equipment 1 name

  BranchList,
     DHW Loop Demand Side Branches,                                                                      ! - Name of branch list
     DHW Loop Demand Side Inlet Branch,                                                                  ! - Name of branch 1
     DHW Loop Demand Side Bypass Branch,                                                                 ! - Name of branch 2
     Water Outlet Group DHW Loop Demand Side Branch,                                                     ! - Name of branch 3
     DHW Loop Demand Side Outlet Branch;                                                                 ! - Name of branch 4

  Branch,
     DHW Loop Demand Side Inlet Branch,                                                                  ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     Pipe:Adiabatic,                                                                                     ! - Component 1 object type
     DHW Loop Demand Side Inlet Branch Pipe,                                                             ! - Component 1 name
     DHW Loop Demand Side Inlet,                                                                         ! - Component 1 inlet node name
     DHW Loop Demand Side Inlet Branch Pipe Outlet;                                                      ! - Component 1 outlet node name

  Pipe:Adiabatic,
     DHW Loop Demand Side Inlet Branch Pipe,                                                             ! - Name of pipe
     DHW Loop Demand Side Inlet,                                                                         ! - Inlet node name
     DHW Loop Demand Side Inlet Branch Pipe Outlet;                                                      ! - Outlet node name

  Branch,
     DHW Loop Demand Side Bypass Branch,                                                                 ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     Pipe:Adiabatic,                                                                                     ! - Component 1 object type
     DHW Loop Demand Side Bypass Pipe,                                                                   ! - Component 1 name
     DHW Loop Demand Side Bypass Pipe Inlet Node,                                                        ! - Component 1 inlet node name
     DHW Loop Demand Side Bypass Pipe Outlet Node;                                                       ! - Component 1 outlet node name

  Pipe:Adiabatic,
     DHW Loop Demand Side Bypass Pipe,                                                                   ! - Name of pipe
     DHW Loop Demand Side Bypass Pipe Inlet Node,                                                        ! - Inlet node name
     DHW Loop Demand Side Bypass Pipe Outlet Node;                                                       ! - Outlet node name

  Branch,
     Water Outlet Group DHW Loop Demand Side Branch,                                                     ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     WaterUse:Connections,                                                                               ! - Component 1 object type
     Water Outlet Group,                                                                                 ! - Component 1 name
     Water Outlet Group Water Inlet Node,                                                                ! - Component 1 inlet node name
     Water Outlet Group Water Outlet Node;                                                               ! - Component 1 outlet node name

  WaterUse:Connections,
     Water Outlet Group,                                                                                 ! - Component name
     Water Outlet Group Water Inlet Node,                                                                ! - Water inlet node name
     Water Outlet Group Water Outlet Node,                                                               ! - Water outlet node name
     ,                                                                                                   ! - Supply water storage tank name
     ,                                                                                                   ! - Reclamation water storage tank name
     ,                                                                                                   ! - Hot water supply temperature schedule
     ,                                                                                                   ! - Cold water supply temperature schedule
     None,                                                                                               ! - Drain water heat exchanger type
     Plant,                                                                                              ! - Drain water heat exchanger destination
     1500.000,                                                                                           ! - Drain water heat exchanger U-factor*area (W/K)
     Base:Zone1 Water Outlet;                                                                            ! - Water use equipment 1 name

  WaterUse:Equipment,
     Base:Zone1 Water Outlet,                                                                            ! - Component name
     ,                                                                                                   ! - End use sub-category
     0.0000021969,                                                                                       ! - Peak flow rate (m3/s)
     Dwell_DomCommonAreas_Occ,                                                                           ! - Flow rate fraction schedule
     Domestic hot water setpoint temperature: Always 55.00,                                              ! - Target temperature schedule
     ,                                                                                                   ! - Hot water supply temperature schedule
     ,                                                                                                   ! - Cold water supply temperature schedule
     ,                                                                                                   ! - Zone name
     Off 24/7,                                                                                           ! - Sensible fraction schedule
     Off 24/7;                                                                                           ! - Latent fraction schedule

  Branch,
     DHW Loop Demand Side Outlet Branch,                                                                 ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     Pipe:Adiabatic,                                                                                     ! - Component 1 object type
     DHW Loop Demand Side Outlet Branch Pipe,                                                            ! - Component 1 name
     DHW Loop Demand Side Outlet Branch Pipe Inlet,                                                      ! - Component 1 inlet node name
     DHW Loop Demand Side Outlet;                                                                        ! - Component 1 outlet node name

  Pipe:Adiabatic,
     DHW Loop Demand Side Outlet Branch Pipe,                                                            ! - Name of pipe
     DHW Loop Demand Side Outlet Branch Pipe Inlet,                                                      ! - Inlet node name
     DHW Loop Demand Side Outlet;                                                                        ! - Outlet node name

  ConnectorList,
     DHW Loop Demand Side Connectors,                                                                    ! - Connector list name
     Connector:Splitter,                                                                                 ! - Connector 1 object type
     DHW Loop Demand Splitter,                                                                           ! - Connector 1 object name
     Connector:Mixer,                                                                                    ! - Connector 2 object type
     DHW Loop Demand Mixer;                                                                              ! - Connector 2 object name

  Connector:Splitter,
     DHW Loop Demand Splitter,                                                                           ! - Splitter name
     DHW Loop Demand Side Inlet Branch,                                                                  ! - Inlet branch name
     DHW Loop Demand Side Bypass Branch,                                                                 ! - Branch 1
     Water Outlet Group DHW Loop Demand Side Branch;                                                     ! - Branch 2

  Connector:Mixer,
     DHW Loop Demand Mixer,                                                                              ! - Mixer name
     DHW Loop Demand Side Outlet Branch,                                                                 ! - Outlet branch name
     DHW Loop Demand Side Bypass Branch,                                                                 ! - Branch 1
     Water Outlet Group DHW Loop Demand Side Branch;                                                     ! - Branch 2

  BranchList,
     DHW Loop Supply Side Branches,                                                                      ! - Name of branch list
     DHW Loop Supply Side Inlet Branch,                                                                  ! - Name of branch 1
     HX DHW Loop Supply Side Branch,                                                                     ! - Name of branch 2
     DHW Loop Supply Side Outlet Branch;                                                                 ! - Name of branch 3

  Branch,
     DHW Loop Supply Side Inlet Branch,                                                                  ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     Pump:VariableSpeed,                                                                                 ! - Component 1 object type
     DHW Loop Supply Pump,                                                                               ! - Component 1 name
     DHW Loop Supply Side Inlet,                                                                         ! - Component 1 inlet node name
     DHW Loop Supply Pump Water Outlet Node;                                                             ! - Component 1 outlet node name

  Pump:VariableSpeed,
     DHW Loop Supply Pump,                                                                               ! - Component name
     DHW Loop Supply Side Inlet,                                                                         ! - Water inlet node name
     DHW Loop Supply Pump Water Outlet Node,                                                             ! - Water outlet node name
     autosize,                                                                                           ! - Rated flow rate (m3/s)
     20000.00,                                                                                           ! - Rated pump head (Pa)
     autosize,                                                                                           ! - Rated power consumption (W)
     0.90,                                                                                               ! - Motor efficiency
     0.00,                                                                                               ! - Fraction Of Motor Inefficiencies To Fluid Stream
     0.0000,                                                                                             ! - Coefficient 1 of the part load performance curve
     1.0000,                                                                                             ! - Coefficient 2 of the part load performance curve
     0.0000,                                                                                             ! - Coefficient 3 of the part load performance curve
     0.0000,                                                                                             ! - Coefficient 4 of the part load performance curve
     0.000000,                                                                                           ! - Minimum flow rate (m3/s)
     Intermittent;                                                                                       ! - Pump control type

  Branch,
     HX DHW Loop Supply Side Branch,                                                                     ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     HeatExchanger:FluidToFluid,                                                                         ! - Component 1 object type
     HX,                                                                                                 ! - Component 1 name
     HX Supply Side Inlet Node,                                                                          ! - Component 1 inlet node name
     HX Supply Side Outlet Node;                                                                         ! - Component 1 outlet node name

  Branch,
     DHW Loop Supply Side Outlet Branch,                                                                 ! - Branch name
     ,                                                                                                   ! - Pressure drop curve name
     Pipe:Adiabatic,                                                                                     ! - Component 1 object type
     DHW Loop Supply Side Outlet Branch Pipe,                                                            ! - Component 1 name
     DHW Loop Supply Side Outlet Branch Pipe Inlet,                                                      ! - Component 1 inlet node name
     DHW Loop Supply Side Outlet;                                                                        ! - Component 1 outlet node name

  Pipe:Adiabatic,
     DHW Loop Supply Side Outlet Branch Pipe,                                                            ! - Name of pipe
     DHW Loop Supply Side Outlet Branch Pipe Inlet,                                                      ! - Inlet node name
     DHW Loop Supply Side Outlet;                                                                        ! - Outlet node name

  ConnectorList,
     DHW Loop Supply Side Connectors,                                                                    ! - Connector list name
     Connector:Splitter,                                                                                 ! - Connector 1 object type
     DHW Loop Supply Splitter,                                                                           ! - Connector 1 object name
     Connector:Mixer,                                                                                    ! - Connector 2 object type
     DHW Loop Supply Mixer;                                                                              ! - Connector 2 object name

  Connector:Splitter,
     DHW Loop Supply Splitter,                                                                           ! - Splitter name
     DHW Loop Supply Side Inlet Branch,                                                                  ! - Inlet branch name
     HX DHW Loop Supply Side Branch;                                                                     ! - Branch 1

  Connector:Mixer,
     DHW Loop Supply Mixer,                                                                              ! - Mixer name
     DHW Loop Supply Side Outlet Branch,                                                                 ! - Outlet branch name
     HX DHW Loop Supply Side Branch;                                                                     ! - Branch 1

  ZoneControl:Thermostat,
     Base:Zone1 Thermostat,                                                                              ! - Name
     ZoneName[],                                                                                         ! - Zone name
     Control type schedule: Always 4,                                                                    ! - Control type schedule name
     ThermostatSetpoint:DualSetpoint,                                                                    ! - Dual SP control object type
     Base:Zone1 Dual SP;                                                                                 ! - Dual SP control object name

  ThermostatSetpoint:DualSetpoint,
     Base:Zone1 Dual SP,                                                                                 ! - Name
     Base:Zone1 Heating Setpoint Schedule,                                                               ! - Heating setpoint temperature schedule name
     Base:Zone1 Cooling Setpoint Schedule;                                                               ! - Cooling setpoint temperature schedule name

  Sizing:Zone,
     ZoneName[],                                                                                         ! - Zone group name
     SupplyAirTemperature,                                                                               ! - Zone cooling design supply air temperature input method
     14.00,                                                                                              ! - Zone cooling design supply air temperature (C)
     5.00,                                                                                               ! - Zone cooling design supply air temperature difference (deltaC)
     SupplyAirTemperature,                                                                               ! - Zone heating design supply air temperature input method
     50.00,                                                                                              ! - Zone heating design supply air temperature (C)
     15.00,                                                                                              ! - Zone heating design supply air temperature difference (deltaC)
     0.0090,                                                                                             ! - Zone cooling design supply air humidity ratio (kg-H2O/kg-air)
     0.0040,                                                                                             ! - Zone heating design supply air humidity ratio (kg-H2O/kg-air)
     Base:Zone1 Design Specification Outdoor Air Object,                                                 ! - Design specification outdoor air object name
     1.25,                                                                                               ! - Zone heating sizing factor
     1.15,                                                                                               ! - Zone cooling sizing factor
     DesignDay,                                                                                          ! - Cooling design air flow method
     0.000000,                                                                                           ! - Cooling design air flow rate (m3/s)
     0.000760,                                                                                           ! - Cooling min air flow per zone floor area (m3/s-m2)
     0.000000,                                                                                           ! - Cooling min air flow (m3/s)
     0.00,                                                                                               ! - Cooling min air flow fraction
     DesignDay,                                                                                          ! - Heating design air flow method
     0.000000,                                                                                           ! - Heating design air flow rate (m3/s)
     0.002030,                                                                                           ! - Heating max air flow per zone area (m3/s-m2)
     0.141580,                                                                                           ! - Heating max air flow (m3/s)
     0.30,                                                                                               ! - Heating max air flow fraction
     Base:Zone1 Design Specification Zone Air Distribution Object,                                       ! - Design specification zone air distribution object name
     No,                                                                                                 ! - Account for dedicated outdoor air system
     NeutralSupplyAir,                                                                                   ! - Dedicated outdoor air system control strategy
     autosize,                                                                                           ! - Dedicated outdoor air low temperature setpoint for design
     autosize;                                                                                           ! - Dedicated outdoor air high temperature setpoint for design

  DesignSpecification:OutdoorAir,
     Base:Zone1 Design Specification Outdoor Air Object,                                                 ! - Name
     Sum,                                                                                                ! - Outside air method
     0.010000,                                                                                           ! - Outside air flow per person (m3/s)
     0.000000,                                                                                           ! - Outside air flow per zone floor area (m3/s-m2)
     0.0,                                                                                                ! - Outside air flow per zone (m3/s)
     0.000000,                                                                                           ! - Outdoor air flow air changes per hour
     On 24/7;                                                                                            ! - Outdoor air flow rate fraction schedule

  DesignSpecification:ZoneAirDistribution,
     Base:Zone1 Design Specification Zone Air Distribution Object,                                       ! - Name
     1.0000,                                                                                             ! - Zone air aistribution effectiveness in cooling mode
     1.0000,                                                                                             ! - Zone air aistribution effectiveness in heating mode
     ,                                                                                                   ! - Zone air distribution effectiveness schedule
     0.0000;                                                                                             ! - Zone secondary recirculation fraction

  ZoneHVAC:EquipmentConnections,
     ZoneName[],                                                                                         ! - Zone Name
     Base:Zone1 Equipment,                                                                               ! - Zone Conditioning Equipment List Name
     ,                                                                                                   ! - Zone Air Inlet Node or Nodelist Name
     ,                                                                                                   ! - Zone Air Exhaust Node or Nodelist Name
     Base:Zone1 Zone Air Node,                                                                           ! - Zone Air Node Name
     Base:Zone1 Return Outlet;                                                                           ! - Zone Return Air Node Name

  ZoneHVAC:EquipmentList,
     Base:Zone1 Equipment,                                                                               ! - Name
     SequentialLoad,                                                                                     ! - Load distribution scheme
     ZoneHVAC:Baseboard:RadiantConvective:Water,                                                         ! - Zone equipment 1 object type
     Base:Zone1 Water Radiator,                                                                          ! - Zone equipment 1 name
     1,                                                                                                  ! - Zone equipment 1 cooling sequence
     1;                                                                                                  ! - Zone equipment 1 heating sequence

  AvailabilityManagerAssignmentList,
     HW Loop AvailabilityManager List,                                                                   ! - Availability manager list name
     AvailabilityManager:Scheduled,                                                                      ! - Plant/condenser loop availability manager type
     HW Loop Availability;                                                                               ! - Plant/condenser loop availability manager name

  AvailabilityManager:Scheduled,
     HW Loop Availability,                                                                               ! - Plant/condenser loop availability manager name
     On 24/7;                                                                                            ! - Plant/condenser loop availability manager schedule

  AvailabilityManagerAssignmentList,
     DHW Loop AvailabilityManager List,                                                                  ! - Availability manager list name
     AvailabilityManager:Scheduled,                                                                      ! - Plant/condenser loop availability manager type
     DHW Loop Availability;                                                                              ! - Plant/condenser loop availability manager name

  AvailabilityManager:Scheduled,
     DHW Loop Availability,                                                                              ! - Plant/condenser loop availability manager name
     On 24/7;                                                                                            ! - Plant/condenser loop availability manager schedule

  SetpointManager:Scheduled,
     HW Loop Setpoint Manager,                                                                           ! - Component name
     Temperature,                                                                                        ! - Control variable
     Hot Water flow set point temperature: Always 80.0 C,                                                ! - Setpoint schedule
     HW Loop Setpoint Manager Node List;                                                                 ! - Setpoint node list

  NodeList,
     HW Loop Setpoint Manager Node List,                                                                 ! - Setpoint node list
     HW Loop Supply Side Outlet;                                                                         ! - Setpoint node  1

  SetpointManager:Scheduled,
     DHW Loop Setpoint Manager,                                                                          ! - Component name
     Temperature,                                                                                        ! - Control variable
     Domestic hot water setpoint temperature: Always 55.00,                                              ! - Setpoint schedule
     DHW Loop Setpoint Manager Node List;                                                                ! - Setpoint node list

  NodeList,
     DHW Loop Setpoint Manager Node List,                                                                ! - Setpoint node list
     HX Supply Side Outlet Node;                                                                         ! - Setpoint node  1

  SetpointManager:Scheduled,
     DHW Loop Setpoint Manager 1,                                                                        ! - Component name
     Temperature,                                                                                        ! - Control variable
     Domestic hot water setpoint temperature: Always 55.00,                                              ! - Setpoint schedule
     DHW Loop Setpoint Manager 1 Node List;                                                              ! - Setpoint node list

  NodeList,
     DHW Loop Setpoint Manager 1 Node List,                                                              ! - Setpoint node list
     DHW Loop Supply Side Outlet;                                                                        ! - Setpoint node  1

  ! End detailed HVAC data definition

          `
}
