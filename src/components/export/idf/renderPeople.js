// Copyright ©,2023, Birmingham City University

export const renderPeople = (context) => {
  return `
  ! Single-zone residential space with one window. Gas heating and hot water system
  ! Source file: \shoebox\shoebox-residential.dsb
  ! Part 4 - People, equipment, lighting, and schedules
  
  ! Version, 8.9.0.001;                               !- Version Identifier
  
  
  ! All schedules
  
  
  ScheduleTypeLimits, Any Number;                         ! Not limited
  ScheduleTypeLimits, Fraction,     0.0, 1.0, CONTINUOUS;
  ScheduleTypeLimits, Temperature,  -60, 200, CONTINUOUS;
  ScheduleTypeLimits, Control Type,   0,   4, DISCRETE;
  ScheduleTypeLimits, On/Off,         0,   1, DISCRETE;
  
  Schedule:Compact, 
        On,                                         ! Name
        Any Number,                                 ! Type
        Through: 12/31,                             ! Type
        For: AllDays,                               ! All days in year
        Until: 24:00,                               ! All hours in day
         1;     
  
  Schedule:Compact, 
        Off,                                        ! Name
        Any Number,                                 ! Type
        Through: 12/31,                             ! Type
        For: AllDays,                               ! All days in year
        Until: 24:00,                               ! All hours in day
         0;     
  
  Schedule:Compact, 
        Work efficiency,                            ! Name
        Any Number,                                 ! Type
        Through: 12/31,                             ! Type
        For: AllDays,                               ! All days in year
        Until: 24:00,                               ! All hours in day
         0;     
  
  Schedule:Compact,
        OpaqueShade,                                ! Name
        Any Number,                                 ! Type
        Through: 12/31,                             ! Type
        For: AllDays,                               ! All days in year
        Until: 24:00,                               ! All hours in day
         0;     
         
  Schedule:Compact,
      Zone Comfort Control Type Sched,              !- Name
      Control Type,                                 !- Schedule Type Limits Name
      Through: 12/31,                               !- Field 1
      For: AllDays,                                 !- Field 2
      Until: 24:00,                                 !- Field 3
      4;                                            !- Field 4
  
  Schedule:Compact,
      Design Days Only,                             !- Name
      Any Number,                                   !- Schedule Type Limits Name
      Through: 12/31,                               !- Field 1
      For: SummerDesignDay WinterDesignDay,         !- Field 2
      Until: 24:00,                                 !- Field 3
      1,                                            !- Field 4
      For: AllOtherDays,                            !- Field 2
      Until: 24:00,                                 !- Field 3
      0;
        
  ! off heating day
  Schedule:Day:Hourly,  0, Any Number,
     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0;
  
  ! off cooling day
  Schedule:Day:Hourly,  50, Any Number,
     50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50,50;
  
  ! used in seasonal schedules
  Schedule:Day:Hourly,  Off, Fraction,
     0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0;
  
  Schedule:Week:Daily, Off,
     Off,Off,Off,Off,
     Off,Off,Off,Off,
     Off,Off,Off,Off;
  
  ! -------------------- Control type schedules (for heating & cooling) ----------------------
  
  Schedule:Day:Hourly, Summer Control Type Day Sch, Control Type,
     4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4;
  
  Schedule:Day:Hourly, Winter Control Type Day Sch, Control Type,
     4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4;
  
  Schedule:Day:Hourly, Summer Control Type Day Sch - cool, Control Type,
     2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2;
  
  Schedule:Day:Hourly, Winter Control Type Day Sch - heat, Control Type,
     1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1;
  
  Schedule:Week:Daily, Summer Control Type Week Sch,
     Summer Control Type Day Sch,Summer Control Type Day Sch,Summer Control Type Day Sch,
     Summer Control Type Day Sch,Summer Control Type Day Sch,Summer Control Type Day Sch,
     Summer Control Type Day Sch,Summer Control Type Day Sch,Summer Control Type Day Sch,
     Summer Control Type Day Sch,Summer Control Type Day Sch,Summer Control Type Day Sch;
  
  Schedule:Week:Daily, Winter Control Type Week Sch,
     Winter Control Type Day Sch,Winter Control Type Day Sch,Winter Control Type Day Sch,
     Winter Control Type Day Sch,Winter Control Type Day Sch,Winter Control Type Day Sch,
     Winter Control Type Day Sch,Winter Control Type Day Sch,Winter Control Type Day Sch,
     Winter Control Type Day Sch,Winter Control Type Day Sch,Winter Control Type Day Sch;
  
  Schedule:Week:Daily, Summer Control Type Week Sch - cool,
     Summer Control Type Day Sch - cool,Summer Control Type Day Sch - cool,Summer Control Type Day Sch - cool,
     Summer Control Type Day Sch - cool,Summer Control Type Day Sch - cool,Summer Control Type Day Sch - cool,
     Summer Control Type Day Sch - cool,Summer Control Type Day Sch - cool,Summer Control Type Day Sch - cool,
     Summer Control Type Day Sch - cool,Summer Control Type Day Sch - cool,Summer Control Type Day Sch - cool;
  
  Schedule:Week:Daily, Winter Control Type Week Sch - heat,
     Winter Control Type Day Sch - heat,Winter Control Type Day Sch - heat,Winter Control Type Day Sch - heat,
     Winter Control Type Day Sch - heat,Winter Control Type Day Sch - heat,Winter Control Type Day Sch - heat,
     Winter Control Type Day Sch - heat,Winter Control Type Day Sch - heat,Winter Control Type Day Sch - heat,
     Winter Control Type Day Sch - heat,Winter Control Type Day Sch - heat,Winter Control Type Day Sch - heat;
  
  Schedule:Compact,
  TypOperativeTempControlSch,
  Temperature,
  Through: 31 Dec,
  For: SummerDesignDay WinterDesignDay,
  Until: 24:00, 0.0,
  For: AllOtherDays,
  Until: 24:00, 0.5;
  
  Schedule:Compact, 
        OnWinterDesignDay,                          ! Name
        Any Number,                                 
        Through: 12/31,                             
        For: WinterDesignDay,                       ! All days in year
        Until: 24:00, 1,
        For: AllOtherDays,
        Until: 24:00, 0;     
  
  Schedule:Compact, 
        OnSummerDesignDay,                          ! Name
        Any Number,                                 
        Through: 12/31,                             
        For: SummerDesignDay,                       ! All days in year
        Until: 24:00, 1,
        For: AllOtherDays,
        Until: 24:00, 0;     
  
  Schedule:Compact, AirVelocitySchedule,
     Any Number,                                    !- Type
     Through: 12/31,
     For: AllDays,                                  !- All days in year
     Until: 24:00,                                  !- All hours in day
     .137;                                          !- Velocity
     
  
  ! Schedule: On 24/7
  Schedule:Compact, 
  On 24/7, 
  Any Number,
  Through: 12/31,
  For: AllDays,   
  Until: 24:00,   1 ;
  
  
  ! Schedule: Off 24/7
  Schedule:Compact,
  Off 24/7,
  Any Number,
  Through: 12/31,
  For: AllDays,
  Until: 24:00,  0  ;
  
  
  ! Schedule: Hot Water flow set point temperature: Always 80.0 C
  Schedule:Compact, 
  Hot Water flow set point temperature: Always 80.0 C, 
  Any Number,
  Through: 12/31,
  For: AllDays,   
  Until: 24:00,   80 ;
  
  
  ! Schedule: Heating set point schedule
  Schedule:Compact, 
  Heating set point schedule, 
  Any Number,
  Through: 12/31,
  For: AllDays,   
  Until: 24:00,   ${context.hvacParameters.heatingSetPointTemperature} ;
  
  
  ! Schedule: Cooling set point schedule
  Schedule:Compact, 
  Cooling set point schedule, 
  Any Number,
  Through: 12/31,
  For: AllDays,   
  Until: 24:00,   24 ;
  
  
  ! Schedule: Control type schedule: Always 4
  Schedule:Compact, 
  Control type schedule: Always 4, 
  Any Number,
  Through: 12/31,
  For: AllDays,   
  Until: 24:00,    4 ;
  
  
  ! Schedule: Domestic hot water setpoint temperature: Always 55.00
  Schedule:Compact, 
  Domestic hot water setpoint temperature: Always 55.00, 
  Any Number,
  Through: 12/31,
  For: AllDays,   
  Until: 24:00,   55 ;
  
  
  ! Schedule: Relative humidity setpoint schedule: Always 50.00
  Schedule:Compact, 
  Relative humidity setpoint schedule: Always 50.00, 
  Any Number,
  Through: 12/31,
  For: AllDays,   
  Until: 24:00,   50 ;
  
  
  ! Schedule: Heating Fanger comfort setpoint: Always -0.5
  Schedule:Compact, 
  Heating Fanger comfort setpoint: Always -0.5, 
  Any Number,
  Through: 12/31,
  For: AllDays,   
  Until: 24:00,  -0.5;
  
  
  ! Schedule: Cooling Fanger comfort setpoint: Always  0.1
  Schedule:Compact, 
  Cooling Fanger comfort setpoint: Always  0.1, 
  Any Number,
  Through: 12/31,
  For: AllDays,   
  Until: 24:00,   0.1;
  
  
  ! Schedule: Zone CO2 setpoint: Always 900ppm
  Schedule:Compact,
  Zone CO2 setpoint: Always 900ppm,
  Any Number,
  Through: 12/31,
  For: AllDays,
  Until: 24:00,  900  ;
  
  
  ! Schedule: Min CO2 concentration: Always 600ppm
  Schedule:Compact,
  Min CO2 concentration: Always 600ppm,
  Any Number,
  Through: 12/31,
  For: AllDays,
  Until: 24:00,  600  ;
  
  
  ! Schedule: Generic contaminant setpoint: Always 0.5ppm
  Schedule:Compact,
  Generic contaminant setpoint: Always 0.5ppm,
  Any Number,
  Through: 12/31,
  For: AllDays,
  Until: 24:00,  0.5  ;
  
  
  ! Schedule: Air distribution effectiveness (always 1)
  Schedule:Compact, 
  Air distribution effectiveness (always 1), 
  Any Number,
  Through: 12/31,
  For: AllDays,   
  Until: 24:00, 1;
  
  
  ! Schedule: Dwell_DomCommonAreas_Occ
  Schedule:Compact,
  Dwell_DomCommonAreas_Occ,
  Fraction,
  Through: 31 Dec,
  For: Weekdays SummerDesignDay,
  Until: 07:00, 0,
  Until: 08:00, 0.5,
  Until: 09:00, 1,
  Until: 10:00, 0.5,
  Until: 17:00, 0,
  Until: 18:00, 0.25,
  Until: 19:00, 0.5,
  Until: 20:00, 0.75,
  Until: 22:00, 1,
  Until: 23:00, 0.75,
  Until: 24:00, 0.25,
  For: Weekends,
  Until: 09:00, 0,
  Until: 21:00, 1,
  Until: 24:00, 0,
  For: Holidays,
  Until: 09:00, 0,
  Until: 21:00, 1,
  Until: 24:00, 0,
  For: WinterDesignDay AllOtherDays,
  Until: 24:00, 0;
  
  
  ! Schedule: Loop high setpoint temperature: Always 32.00
  Schedule:Compact, 
  Loop high setpoint temperature: Always 32.00, 
  Any Number,
  Through: 12/31,
  For: AllDays,   
  Until: 24:00, 32;
  
  
  ! Schedule: Loop low setpoint temperature: Always 15.00
  Schedule:Compact, 
  Loop low setpoint temperature: Always 15.00, 
  Any Number,
  Through: 12/31,
  For: AllDays,   
  Until: 24:00, 15;
  
  
  ! Schedule: TM59_Studio_Occ
  SCHEDULE:COMPACT,
  TM59_Studio_Occ,
  Fraction,
  Through: 31 Dec,
  For: WinterDesignDay,
  Until: 24:00, 0,
  For: AllOtherDays,
  Until: 24:00, 1;
  
  
  ! Schedule: TM59_Default_Light
  Schedule:Compact,
  TM59_Default_Light,
  Fraction,
  Through: 31 Dec,
  For: Weekdays SummerDesignDay Weekends,
  Until: 18:00, 0,
  Until: 23:00, 1,
  Until: 24:00, 0,
  For: WinterDesignDay AllOtherDays,
  Until: 24:00, 0;
  
  
  ! Schedule: TM59_Studio_Equip
  Schedule:Compact,
  TM59_Studio_Equip,
  Fraction,
  Through: 31 Dec,
  For: WinterDesignDay,
  Until: 24:00, 0.0,
  For: AllOtherDays,
  Until: 09:00, 0.19,
  Until: 18:00, 0.24,
  Until: 20:00,1,
  Until: 22:00, 0.44,
  Until: 24:00, 0.24;
  
      ! Modified schedule: TM59_DomBed_Heat
      Schedule:Compact,
          Base:Zone1 Heating Setpoint Schedule,
          Temperature,
          Through: 30  Mar,
          For: Weekdays Weekends Holidays,
          Until: 09:00,  21,
          Until: 20:00,  12,
          Until: 24:00,  21,
          For: WinterDesignDay,
          Until: 24:00,  21,
          For: AllOtherDays,
          Until: 24:00, -50,
          Through: 30  Sep,
          For: Weekdays Weekends SummerDesignDay,
          Until: 09:00,  12,
          Until: 20:00, -50,
          Until: 24:00,  12,
          For: Holidays,
          Until: 09:00,  12,
          Until: 20:00, -50,
          Until: 24:00,  12,
          For: AllOtherDays,
          Until: 24:00, -50,
          Through: 31  Dec,
          For: Weekdays Weekends Holidays,
          Until: 09:00,  21,
          Until: 20:00,  12,
          Until: 24:00,  21,
          For: WinterDesignDay,
          Until: 24:00,  21,
          For: AllOtherDays,
          Until: 24:00, -50;
  
  
  
      ! Modified schedule: Off 24/7
      Schedule:Compact,
          Base:Zone1 Cooling Setpoint Schedule,
          Any Number,
          Through: 12/31,
          For: AllDays,
          Until: 24:00, 100;
  
     Schedule:Compact, Activity Schedule 594,       !- activity schedule W/person
        Any Number,                                 !- Type
        Through: 12/31,                             !- Type
        For: AllDays,                               !- All days in year
        Until: 24:00,  130;                         !- Constant value
  
     Schedule:Compact, Clothing Schedule 594,       !- Clothing schedule clo
        Any Number,                                 !- Type
        Through: 4/1,                               !- Type
        For: AllDays,                               !- All days in year
        Until: 24:00,  1,                           !- Constant value
        Through: 9/30,                              !- Type
        For: AllDays,                               !- All days in year
        Until: 24:00,  .5,                          !- Constant value
        Through: 12/31,                             !- Type
        For: AllDays,                               !- All days in year
        Until: 24:00,  1;                           !- Constant value
  
  
  ! Zone contents including people, equipment, lighting, daylight control, and infiltration/ventilation objects
  ! Note: Lighting reference point in geometry section
  
  
     PEOPLE, People Base:Zone1,                     !- Name
        ZoneName[],                                 !- Zone Name
        TM59_Studio_Occ,                            !- Number of People SCHEDULE Name
        People,                                     !- Number of People Calculation Method
         ${context.hvacParameters.NumberOfOccupants},  !- Number of People
        ,                                           !- People per Zone Floor Area
        ,                                           !- Zone Floor Area per Person
         .3,                                        !- radiant fraction
        AutoCalculate,                              !- User Specified Sensible Fraction
        Activity Schedule 594,                      !- Activity level SCHEDULE Name (units W/person, real)
        .0000000382,                                !- CO2 generation rate per unit of activity level (units m3/s-W
        Yes,                                        !- Enable ASHRAE 55 comfort warnings
        ZoneAveraged,                               !- MRT Calculation Type
        ,                                           !- no particular surface is weighted
        Work efficiency,                            !- Work Efficiency SCHEDULE Name (0.0-1.0,real)
        ClothingInsulationSchedule,                 !- Clothing Insulation Calculation Method
        ,                                           !- Clothing Insulation Calculation Method Schedule Name
        Clothing Schedule 594,                      !- Clothing Insulation SCHEDULE Name (real)
        AirVelocitySchedule,                        !- Air Velocity SCHEDULE Name (units m/s, real)
        AdaptiveASH55,                              !- Thermal Comfort Report Type
        AdaptiveCEN15251;                           !- Thermal Comfort Report Type
  
     Lights, Base:Zone1 ,                           !- Name
        ZoneName[],                                 !- Zone Name
        TM59_Default_Light,                         !- Lighting SCHEDULE Name
        LightingLevel,                              !- Design Level calculation method
        ${context.hvacParameters.lighting},         !- Design lighting Level (W)
        ,                                          !- Watts per Zone Area {W/m2}
        ,                                           !- Watts per Person {watts/person}
        0,                                          !- Return Air Fraction
        .42,                                        !- Radiant fraction
        .18,                                        !- Fraction Visible
        1,                                          !- Fraction Replaceable
        ;                                           !- LightsEndUseKey
  
     ! Miscellaneous gain 1
     OtherEquipment, Base:Zone1 Miscellaneous gain 1,  !- Name
        Electricity,                                !- Fuel Type
        ZoneName[],                                 !- Zone Name
        TM59_Studio_Equip,                          !- Equipment SCHEDULE Name
        EquipmentLevel,                             !- Design Level calculation method
        ${context.hvacParameters.equipmentAndAppliances},        !- Design Equipment Level (W)
        ,                                           !- Watts per Zone Area {watts/m2}
        ,                                           !- Watts per Person {watts/person}
        0,                                          !- Latent fraction
        .2,                                         !- Radiant fraction
        0,                                          !- Fraction Lost
        0,                                          !- Carbon Dioxide Generation Rate
        ELECTRIC EQUIPMENT#Base:Zone1#02;           !- End-use category
  
     Daylighting:Controls, Base:Zone1,              !- Name
        ZoneName[],                                 !- Zone name
        SplitFlux,                                  !- Daylighting Method
        On,                                         !- Availability Schedule Name
        Continuous,                                 !- Lighting Control Type
        0.1,                                        !- Minimum Input Power Fraction for Continuous or ContinuousOff Dimming Control
        0.1,                                        !- Minimum Light Output Fraction for Continuous or ContinuousOff Dimming Control
        1,                                          !- Number of Stepped Control Steps
        1,                                          !- Probability Lighting will be Reset When Needed in Manual Stepped Control
        Base:Zone1 Ref Point 1,                     !- Glare Calculation Daylighting Reference Point Name
        0,                                          !- Glare Calculation Azimuth Angle of View Direction Clockwise from Zone y-Axis
        22,                                         !- Maximum Allowable Discomfort Glare Index
        1.0,                                        !- DElight Gridding Resolution
        Base:Zone1 Ref Point 1,                     !- Daylighting Reference Point 1 Name
        1,                                         !- Fraction of Zone Controlled by Reference Point 1
        100;                                        !- Illuminance Setpoint at Reference Point 1 {lux}
  
  
     ZoneInfiltration:DesignFlowRate, Base:Zone1 Infiltration,  !- Name
        ZoneName[],                                 !- Zone Name
        On 24/7,                                    !- Infiltration SCHEDULE Name
        AirChanges/Hour,                                  !- Design Volume Flow Rate calculation method
        ,                                     !- Design Volume Flow Rate (m3/s)
        ,                                           !- Flow per Zone Floor Area {m3/s/m2}
        ,                                           !- Flow per Exterior Surface Area {m3/s/m2}
        ${context.hvacParameters.AirPermeabilityAndInfiltration},                                           !- Air Changes Per Hour
        1,                                          !- Constant Term Coefficient
        0,                                          !- Temperature Term Coefficient
        0,                                          !- Velocity Term Coefficient
        0;                                          !- Velocity Squared Term Coefficient
  
     ZoneVentilation:DesignFlowRate, Base:Zone1 Nat Vent,  !- Name
        ZoneName[],                                 !- Zone Name
        TM59_Studio_Occ,                            !- Natural Ventilation SCHEDULE Name
        Flow/zone,                                  !- Design Volume Flow Rate calculation method
        .074503,                                    !- Natural ventilation rate (m3/s)
        ,                                           !- Volume Flow Rate per area {m3/s/m2}
        ,                                           !- Volume Flow Rate per person {m3/s/person}
        ,                                           !- Air Changes Per Hour
        NATURAL,                                    !- Vent type - no fan energy
        0,                                          !- Pressure rise (Pa)
        1,                                          !- Total efficiency (0-1)
        1,                                          !- Constant Term Coefficient
        0,                                          !- Temperature Term Coefficient
        0,                                          !- Velocity Term Coefficient
        0,                                          !- Velocity Squared Term Coefficient
        22,                                         !- Minimum indoor temperature (degC)
        ,                                           !- Minimum Indoor Temperature Schedule Name
        100,                                        !- Maximum Indoor Temperature {C}
        ,                                           !- Maximum Indoor Temperature Schedule Name
        0,                                          !- Max temperature difference for operation
        ,                                           !- Delta Temperature Schedule Name
        -100,                                       !- Minimum outdoor Temperature (degC)
        ,                                           !- Minimum outdoor Temperature Schedule Name
        100,                                        !- Maximum outdoor Temperature {C}
        ,                                           !- Maximum outdoor Temperature Schedule Name
        40;                                         !- Maximum WindSpeed {m/s}
  
        `
}
