// Copyright ©,2023, Birmingham City University

export function renderShoebox(context) {
  return `
! Single-zone residential space with one window. Gas heating and hot water system
! Source file: \shoebox\shoebox-residential.dsb

Version, 8.9.0.001;                               !- Version Identifier

RunPeriod,                                        !- Annual simulation
   Untitled (O1-O1:31-12),                        !- Location
   1,1,                                           !- Start Month , Day
   12,31,                                         !- End Month , Day
   UseWeatherFile,                                !- will use day as shown in weather file
   No,                                            !- Use weather file holidays/special day periods
   No,                                            !- Use WeatherFile DaylightSavingPeriod - will use daylight saving time shown below
   Yes,                                           !- Apply Weekend Holiday Rule - will reassign weekend holidays to Monday
   Yes,                                           !- use weather file rain indicators
   Yes,                                           !- use weather file snow indicators
   1;                                             !- Number of years in simulation

RunPeriodControl:DaylightSavingTime, Last Sunday in March,Last Sunday in October;  !- Daylight saving dates - one hour is added to local mean time to obtain the locally observed time during this period

! Hourly weather file: C:\ProgramData\DesignBuilder\Weather Data\GBR_LONDON_GATWICK_IWEC.epw

Site:Location,Untitled (O1-O1:31-12)  (01-01:31-12),  !- Location Name
   51.15,                                         !- Latitude
   -0.18,                                         !- Longitude
   0,                                             !- Time Zone
   62;                                            !- Elevation {m}

Site:GroundTemperature:BuildingSurface,           !- Annual ground temperatures - 1 value for each month
   18,                                            !- Jan ground temperature
   18,                                            !- Feb ground temperature
   18,                                            !- Mar ground temperature
   18,                                            !- Apr ground temperature
   18,                                            !- May ground temperature
   18,                                            !- Jun ground temperature
   18,                                            !- Jul ground temperature
   18,                                            !- Aug ground temperature
   18,                                            !- Sep ground temperature
   18,                                            !- Oct ground temperature
   18,                                            !- Nov ground temperature
   18;                                            !- Dec ground temperature

Site:GroundTemperature:Deep,                      !- Annual ground temperatures - 1 value for each month
   14,                                            !- Jan deep ground temperature
   14,                                            !- Feb deep ground temperature
   14,                                            !- Mar deep ground temperature
   14,                                            !- Apr deep ground temperature
   14,                                            !- May deep ground temperature
   14,                                            !- Jun deep ground temperature
   14,                                            !- Jul deep ground temperature
   14,                                            !- Aug deep ground temperature
   14,                                            !- Sep deep ground temperature
   14,                                            !- Oct deep ground temperature
   14,                                            !- Nov deep ground temperature
   14;                                            !- Dec deep ground temperature

Site:GroundTemperature:Shallow,                   !- Annual ground temperatures - 1 value for each month
   14,                                            !- Jan shallow ground temperature
   14,                                            !- Feb shallow ground temperature
   14,                                            !- Mar shallow ground temperature
   14,                                            !- Apr shallow ground temperature
   14,                                            !- May shallow ground temperature
   14,                                            !- Jun shallow ground temperature
   14,                                            !- Jul shallow ground temperature
   14,                                            !- Aug shallow ground temperature
   14,                                            !- Sep shallow ground temperature
   14,                                            !- Oct shallow ground temperature
   14,                                            !- Nov shallow ground temperature
   14;                                            !- Dec shallow ground temperature

Site:GroundTemperature:FCfactorMethod,            !- Annual ground temperatures - 1 value for each month
   4.16,                                          !- January FCfactorMethod ground temperature {C}
   5.30,                                          !- Februry FCfactorMethod ground temperature {C}
   7.51,                                          !- March FCfactorMethod ground temperature {C}
   9.61,                                          !- April FCfactorMethod ground temperature {C}
   13.58,                                         !- May FCfactorMethod ground temperature {C}
   15.67,                                         !- June FCfactorMethod ground temperature {C}
   16.24,                                         !- July FCfactorMethod ground temperature {C}
   15.18,                                         !- August FCfactorMethod ground temperature {C}
   12.74,                                         !- September FCfactorMethod ground temperature {C}
   9.69,                                          !- October FCfactorMethod ground temperature {C}
   6.69,                                          !- November FCfactorMethod ground temperature {C}
   4.70;                                          !- December FCfactorMethod ground temperature {C}

Site:GroundReflectance,                           !- Annual ground reflectances - 1 value for each month
   0.2,                                           !- Jan ground reflectance
   0.2,                                           !- Feb ground reflectance
   0.2,                                           !- Mar ground reflectance
   0.2,                                           !- Apr ground reflectance
   0.2,                                           !- May ground reflectance
   0.2,                                           !- Jun ground reflectance
   0.2,                                           !- Jul ground reflectance
   0.2,                                           !- Aug ground reflectance
   0.2,                                           !- Sep ground reflectance
   0.2,                                           !- Oct ground reflectance
   0.2,                                           !- Nov ground reflectance
   0.2;                                           !- Dec ground reflectance

Site:GroundReflectance:SnowModifier,
   2.0,                                           !- Ground Reflected Solar Modifier
   2.0;                                           !- Daylighting Ground Reflected Solar Modifier

SimulationControl,
   Yes,                                           !- Do the zone sizing calculation
   Yes,                                           !- Do the system sizing calculation
   Yes,                                           !- Do the plant sizing calculation
   No,                                            !- Do the design day calculation
   Yes;                                           !- Do the weather file calculation


SizingPeriod:DesignDay, Summer Design Day in Untitled (O1-O1:31-12) Jul,  !- Design Day Name
   7,                                             !- Month
   15,                                            !- Day of Month
   SummerDesignDay,                               !- Day Type -- used for schedules
   29.9,                                          !- Maximum Dry-Bulb Temperature {C}
   13.4,                                          !- Daily Dry-Bulb Temperature Range {C}
   ,                                              !- Dry-Bulb Temperature Range Modifier Type
   ,                                              !- Dry-Bulb Temperature Range Modifier Schedule
   WetBulb,                                       !- Humidity Condition Type
   19.4,                                          !- Wetbulb at Maximum Dry-Bulb{C}
   ,                                              !- Humidity Condition Day Schedule Name
   ,                                              !- Humidity Ratio at Maximum Dry-Bulb
   ,                                              !- Enthalpy Ratio at Maximum Dry-Bulb
   ,                                              !- Daily Wet-Bulb Temperature Range
   100582.4,                                      !- Barometric Pressure {N/M**2}
   0,                                             !- Wind Speed {m/s}
   0,                                             !- Wind Direction {Degrees N=0, S=180}
   No,                                            !- Rain Indicator
   No,                                            !- Snow on ground indicator
   Yes,                                           !- Daylight Savings Time Indicator
   ASHRAEClearSky,                                !- Solar Model Indicator
   ,                                              !- Beam Solar Day Schedule Name
   ,                                              !- Diffuse Solar Day Schedule Name
   ,                                              !- ASHRAE Clear Sky Optical Depth for Beam Irradiance (taub)
   ,                                              !- ASHRAE Clear Sky Optical Depth for Diffuse Irradiance (taud)
   0.98;                                          !- Clearness {0.0 to 1.2}

SizingPeriod:DesignDay, Summer Design Day in Untitled (O1-O1:31-12) Aug,  !- Design Day Name
   8,                                             !- Month
   15,                                            !- Day of Month
   SummerDesignDay,                               !- Day Type -- used for schedules
   30.5,                                          !- Maximum Dry-Bulb Temperature {C}
   13.4,                                          !- Daily Dry-Bulb Temperature Range {C}
   ,                                              !- Dry-Bulb Temperature Range Modifier Type
   ,                                              !- Dry-Bulb Temperature Range Modifier Schedule
   WetBulb,                                       !- Humidity Condition Type
   20.2,                                          !- Wetbulb at Maximum Dry-Bulb{C}
   ,                                              !- Humidity Condition Day Schedule Name
   ,                                              !- Humidity Ratio at Maximum Dry-Bulb
   ,                                              !- Enthalpy Ratio at Maximum Dry-Bulb
   ,                                              !- Daily Wet-Bulb Temperature Range
   100582.4,                                      !- Barometric Pressure {N/M**2}
   0,                                             !- Wind Speed {m/s}
   0,                                             !- Wind Direction {Degrees N=0, S=180}
   No,                                            !- Rain Indicator
   No,                                            !- Snow on ground indicator
   Yes,                                           !- Daylight Savings Time Indicator
   ASHRAEClearSky,                                !- Solar Model Indicator
   ,                                              !- Beam Solar Day Schedule Name
   ,                                              !- Diffuse Solar Day Schedule Name
   ,                                              !- ASHRAE Clear Sky Optical Depth for Beam Irradiance (taub)
   ,                                              !- ASHRAE Clear Sky Optical Depth for Diffuse Irradiance (taud)
   0.98;                                          !- Clearness {0.0 to 1.2}

SizingPeriod:DesignDay, Summer Design Day in Untitled (O1-O1:31-12) Sep,  !- Design Day Name
   9,                                             !- Month
   15,                                            !- Day of Month
   SummerDesignDay,                               !- Day Type -- used for schedules
   25.2,                                          !- Maximum Dry-Bulb Temperature {C}
   11.5,                                          !- Daily Dry-Bulb Temperature Range {C}
   ,                                              !- Dry-Bulb Temperature Range Modifier Type
   ,                                              !- Dry-Bulb Temperature Range Modifier Schedule
   WetBulb,                                       !- Humidity Condition Type
   17.7,                                          !- Wetbulb at Maximum Dry-Bulb{C}
   ,                                              !- Humidity Condition Day Schedule Name
   ,                                              !- Humidity Ratio at Maximum Dry-Bulb
   ,                                              !- Enthalpy Ratio at Maximum Dry-Bulb
   ,                                              !- Daily Wet-Bulb Temperature Range
   100582.4,                                      !- Barometric Pressure {N/M**2}
   0,                                             !- Wind Speed {m/s}
   0,                                             !- Wind Direction {Degrees N=0, S=180}
   No,                                            !- Rain Indicator
   No,                                            !- Snow on ground indicator
   Yes,                                           !- Daylight Savings Time Indicator
   ASHRAEClearSky,                                !- Solar Model Indicator
   ,                                              !- Beam Solar Day Schedule Name
   ,                                              !- Diffuse Solar Day Schedule Name
   ,                                              !- ASHRAE Clear Sky Optical Depth for Beam Irradiance (taub)
   ,                                              !- ASHRAE Clear Sky Optical Depth for Diffuse Irradiance (taud)
   0.98;                                          !- Clearness {0.0 to 1.2}

SizingPeriod:DesignDay, Winter Design Day in Untitled (O1-O1:31-12),  !- Design Day Name
   1,                                             !- Month
   15,                                            !- Day of Month
   WinterDesignDay,                               !- Day Type -- used for schedules
   -4.4,                                          !- Max Dry-Bulb {C}
   0,                                             !- Daily Temp Range {C}
   ,                                              !- Dry-Bulb Temperature Range Modifier Type
   ,                                              !- Dry-Bulb Temperature Range Modifier Schedule
   WetBulb,                                       !- Humidity Condition Type
   -4.4,                                          !- Wet-Bulb at Max {C}
   ,                                              !- Humidity Condition Day Schedule Name
   ,                                              !- Humidity Ratio at Maximum Dry-Bulb
   ,                                              !- Enthalpy Ratio at Maximum Dry-Bulb
   ,                                              !- Daily Wet-Bulb Temperature Range
   100582.4,                                      !- Barometric Pressure {N/M**2}
   12.3,                                          !- Wind Speed {M/Sec}
   0,                                             !- Wind Direction {Degrees N=0, S=180}
   No,                                            !- Rain Indicator
   No,                                            !- Snow on ground indicator
   No,                                            !- Daylight Savings Time Indicator
   ,                                              !- Solar Model Indicator
   ,                                              !- Beam Solar Day Schedule Name
   ,                                              !- Diffuse Solar Day Schedule Name
   ,                                              !- ASHRAE Clear Sky Optical Depth for Beam Irradiance (taub)
   ,                                              !- ASHRAE Clear Sky Optical Depth for Diffuse Irradiance (taud)
   0;                                             !- Clearness {0.0 to 1.2} - gives no sun (but does include long wave radiant heat exchange with sky)

Timestep, 6;                                      !- Timesteps/hour

ConvergenceLimits,
   1,                                             !- Minimum System Time Step (0=same as zone time step)
   25;                                            !- Maximum HVAC Iterations (1=min, 20=default)

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

!Material:InfraredTransparent,
!IRTMaterial; !- Name

!Construction,
!IRTSurface,  !- Name
!IRTMaterial; !- Outside Layer





Material:NoMass, 
LinearBridgingLayer,                  ! Material Name
Rough,                                ! Roughness
0.6267 ,                              ! Resistance {M**2K/W} will give Total Resistance 1
0.0100000 ,                           ! Thermal Absorptance
0.0100000 ,                           ! Solar Absorptance
0.0100000 ;                           ! Visible Absorptance

Construction,
LinearBridgingConstruction,           !- Name
LinearBridgingLayer;                  !- Layer

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
Material:InfraredTransparent,
IRTMaterial; !- Name

Construction,
IRTSurface,  !- Name
IRTMaterial; !- Outside Layer


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


WindowMaterial:Gas,1002,                          !- AIR 13MM
   Air,                                           !- Gas type (Air - Argon - Krypton - Xenon - SF6 - Custom)
    .013;                                         !- Thickness {m}

WindowMaterial:Gas,Half thickness 1002,           !- AIR 13MM
   Air,                                           !- Gas type (Air - Argon - Krypton - Xenon - SF6 - Custom)
    .0065;                                        !- Thickness {m}



WindowMaterial:Glazing,2,                         !- Generic CLEAR 3MM
   SpectralAverage,                               !- Optical data type {SpectralAverage or Spectral}
   ,                                              !- Name of spectral data set when Optical Data Type = Spectral
   .003,                                          !- Thickness {m}
   .837,                                          !- Solar transmittance at normal incidence
   .075,                                          !- Solar reflectance at normal incidence: front side
   .075,                                          !- Solar reflectance at normal incidence: back side
   .898,                                          !- Visible transmittance at normal incidence
   .081,                                          !- Visible reflectance at normal incidence: front side
   .081,                                          !- Visible reflectance at normal incidence: back side
   .0,                                            !- IR transmittance at normal incidence
   .84,                                           !- IR emissivity: front side
   .84,                                           !- IR emissivity: back side
   .9,                                            !- Conductivity {W/m-K}
   1;                                             !- Dirt Correction Factor for Solar and Visible Transmittance

WindowMaterial:Glazing,38,                        !- Generic PYR B CLEAR 3MM
   SpectralAverage,                               !- Optical data type {SpectralAverage or Spectral}
   ,                                              !- Name of spectral data set when Optical Data Type = Spectral
   .003,                                          !- Thickness {m}
   .740,                                          !- Solar transmittance at normal incidence
   .090,                                          !- Solar reflectance at normal incidence: front side
   .100,                                          !- Solar reflectance at normal incidence: back side
   .820,                                          !- Visible transmittance at normal incidence
   .110,                                          !- Visible reflectance at normal incidence: front side
   .120,                                          !- Visible reflectance at normal incidence: back side
   .0,                                            !- IR transmittance at normal incidence
   .84,                                           !- IR emissivity: front side
   .20,                                           !- IR emissivity: back side
   .9,                                            !- Conductivity {W/m-K}
   1;                                             !- Dirt Correction Factor for Solar and Visible Transmittance
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

! Asphalt 1- thickness 0.01
Material, Asphalt 1_.O1,
   Rough,                                         !- Roughness
   .01,                                           !- Thickness {m}
   0.7,                                           !- Conductivity {w/m-K}
   2100,                                          !- Density {kg/m3}
   1000,                                          !- Specific Heat {J/kg-K}
   0.9,                                           !- Thermal Emittance
   0.85,                                          !- Solar Absorptance
   0.9;                                           !- Visible Absorptance

! MW Glass Wool (rolls)- thickness 0.1
Material, MW Glass Wool (rolls)_.1,
   Rough,                                         !- Roughness
   .1,                                            !- Thickness {m}
   0.04,                                          !- Conductivity {w/m-K}
   12,                                            !- Density {kg/m3}
   840,                                           !- Specific Heat {J/kg-K}
   0.9,                                           !- Thermal Emittance
   0.6,                                           !- Solar Absorptance
   0.6;                                           !- Visible Absorptance

! Plasterboard- thickness 0.013
Material, Plasterboard_.O13,
   Rough,                                         !- Roughness
   .013,                                          !- Thickness {m}
   0.25,                                          !- Conductivity {w/m-K}
   2800,                                          !- Density {kg/m3}
   896,                                           !- Specific Heat {J/kg-K}
   0.9,                                           !- Thermal Emittance
   0.5,                                           !- Solar Absorptance
   0.5;                                           !- Visible Absorptance

! Brickwork Outer- thickness 0.1
Material, Brickwork Outer_.1,
   Rough,                                         !- Roughness
   .1,                                            !- Thickness {m}
   0.84,                                          !- Conductivity {w/m-K}
   1700,                                          !- Density {kg/m3}
   800,                                           !- Specific Heat {J/kg-K}
   0.9,                                           !- Thermal Emittance
   0.7,                                           !- Solar Absorptance
   0.7;                                           !- Visible Absorptance

! MW Stone Wool (standard board)- thickness 0.05
Material, MW Stone Wool (standard board)_.O5,
   Rough,                                         !- Roughness
   .05,                                           !- Thickness {m}
   0.038,                                         !- Conductivity {w/m-K}
   40,                                            !- Density {kg/m3}
   840,                                           !- Specific Heat {J/kg-K}
   0.9,                                           !- Thermal Emittance
   0.6,                                           !- Solar Absorptance
   0.6;                                           !- Visible Absorptance

! Concrete Block (Medium)- thickness 0.1
Material, Concrete Block (Medium)_.1,
   Rough,                                         !- Roughness
   .1,                                            !- Thickness {m}
   0.51,                                          !- Conductivity {w/m-K}
   1400,                                          !- Density {kg/m3}
   1000,                                          !- Specific Heat {J/kg-K}
   0.9,                                           !- Thermal Emittance
   0.6,                                           !- Solar Absorptance
   0.6;                                           !- Visible Absorptance

! Gypsum Plastering- thickness 0.015
Material, Gypsum Plastering_.O15,
   Rough,                                         !- Roughness
   .015,                                          !- Thickness {m}
   0.4,                                           !- Conductivity {w/m-K}
   1000,                                          !- Density {kg/m3}
   1000,                                          !- Specific Heat {J/kg-K}
   0.9,                                           !- Thermal Emittance
   0.5,                                           !- Solar Absorptance
   0.5;                                           !- Visible Absorptance


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

! Special material to represent an R-value for the next construction
Material:NoMass, 3_RVAL_3,                        !- Material name - Air gap >=25mm
   Rough,                                         !- Roughness
   .18,                                           !- Resistance {m2-K/w}
   0.9,                                           !- Thermal Emittance
   0.7,                                           !- Solar Absorptance
   0.7;                                           !- Visible Absorptance

! Project flat roof
Construction, Project flat roof,
   Asphalt 1_.O1,                                 !- .01m
   MW Glass Wool (rolls)_.1,                      !- .1m
   3_RVAL_3,                                      !- R-value
   Plasterboard_.O13;                             !- .013m

! Special material to represent an R-value for the next construction
Material:NoMass, 4_RVAL_2,                        !- Material name - Air gap >=25mm
   Rough,                                         !- Roughness
   .18,                                           !- Resistance {m2-K/w}
   0.9,                                           !- Thermal Emittance
   0.7,                                           !- Solar Absorptance
   0.7;                                           !- Visible Absorptance

! <Previous reversed>
Construction, Project flat roof_Rev,
   Plasterboard_.O13,                             !- .013m
   4_RVAL_2,                                      !- R-value
   MW Glass Wool (rolls)_.1,                      !- .1m
   Asphalt 1_.O1;                                 !- .01m

! Brick/block wall (insulated to 1985 regs)
Construction, Brick/block wall (insulated to 1985 regs),
   Brickwork Outer_.1,                            !- .1m
   MW Stone Wool (standard board)_.O5,            !- .05m
   Concrete Block (Medium)_.1,                    !- .1m
   Gypsum Plastering_.O15;                        !- .015m

! <Previous reversed>
Construction, Brick/block wall (insulated to 1985 regs)_Rev,
   Gypsum Plastering_.O15,                        !- .015m
   Concrete Block (Medium)_.1,                    !- .1m
   MW Stone Wool (standard board)_.O5,            !- .05m
   Brickwork Outer_.1;                            !- .1m


Construction,1001,                                !- Project external glazing - Material layer names follow:
   38,                                            !- Generic PYR B CLEAR 3MM
   1002,                                          !- AIR 13MM
   2;                                             !- Generic CLEAR 3MM

HeatBalanceAlgorithm, 
   ConductionTransferFunction,                    !- Heat Balance Algorithm: CTF or CondFD
   2000,                                          !- Max Surface Temperature Limit
   0.00000001,                                    !- Minimum Surface Convection Heat Transfer Coefficient
   1000;                                          !- Maximum Surface Convection Heat Transfer Coefficient

ShadowCalculation, AverageOverDaysInFrequency, 20,  15000, SutherlandHodgman, SimpleSkyDiffuseModeling;  !- Interval between shading calcs

SurfaceConvectionAlgorithm:Inside,TARP;           !- Inside Convection Algorithm
SurfaceConvectionAlgorithm:Outside,DOE-2;         !- Outside Convection Algorithm
ZoneCapacitanceMultiplier:ResearchSpecial, All, , 1, 1.0, 1.0, 1.0;

Building, Building,                               !- Building Name
   @@ori@@,                                             !- North Axis
   Suburbs,                                       !- Terrain
    .04,                                          !- Loads Convergence Tolerance
    .4,                                           !- Temperature Convergence Tolerance
   FullExterior,                                  !- Solar Distribution
   25,                                            !- Maximum number of warmup days
   6;                                             !- Minimum number of warmup days

GlobalGeometryRules, LowerLeftCorner, CounterClockWise, Relative;  !- Surface order is specified as viewed from outside the zone

! Base - Zone 1
Zone, Base:Zone1,                                 !- Zone Name
   0,                                             !- Relative North (to building)
   0,                                             !- X Origin (M)
   0,                                             !- Y Origin (M)
   0,                                             !- Z Origin (M)
   1 ,                                            !- Zone Type
   1,                                             !- Zone multiplier
   ,                                              !- Zone ceiling height - Let EnergyPlus work it out
    53.6419,                                      !- Zone volume
    18.9809,                                      !- Floor Area
   TARP,                                          !- Zone inside convection algorithm
   ,                                              !- Zone outside convection algorithm
   Yes;                                           !- Part Of Total Floor Area


   PEOPLE, People Base:Zone1,                     !- Name
      Base:Zone1,                                 !- Zone Name
      TM59_Studio_Occ,                            !- Number of People SCHEDULE Name
      People,                                     !- Number of People Calculation Method
       1,                                         !- Number of People
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

   Lights, Base:Zone1 ,                           !- Name
      Base:Zone1,                                 !- Zone Name
      TM59_Default_Light,                         !- Lighting SCHEDULE Name
      LightingLevel,                                 !- Design Level calculation method
      ${context.hvacParameters.lighting},                                           !- Design lighting Level (W)
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
      Base:Zone1,                                 !- Zone Name
      TM59_Studio_Equip,                          !- Equipment SCHEDULE Name
      EquipmentLevel,                             !- Design Level calculation method
      450,                                        !- Design Equipment Level (W)
      ,                                           !- Watts per Zone Area {watts/m2}
      ,                                           !- Watts per Person {watts/person}
      0,                                          !- Latent fraction
      .2,                                         !- Radiant fraction
      0,                                          !- Fraction Lost
      0,                                          !- Carbon Dioxide Generation Rate
      ELECTRIC EQUIPMENT#Base:Zone1#02;           !- End-use category

   Daylighting:Controls, Base:Zone1,              !- Name
      Base:Zone1,                                 !- Zone name
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
      .6,                                         !- Fraction of Zone Controlled by Reference Point 1
      100,                                        !- Illuminance Setpoint at Reference Point 1 {lux}
      Base:Zone1 Ref Point 2,                     !- Daylighting Reference Point 2 Name
      .4,                                         !- Fraction of Zone Controlled by Reference Point 2
      400;                                        !- Illuminance Setpoint at Reference Point 2 {lux}

   Daylighting:ReferencePoint, Base:Zone1 Ref Point 1,  !- Name
      Base:Zone1,                                 !- Zone Name
      .225,                                       !- X-Coordinate of Reference Point {m}
      5.939,                                      !- Y-coordinate of Reference Point {m}
      3.976;                                      !- Z-coordinate of Reference Point {m}

   Daylighting:ReferencePoint, Base:Zone1 Ref Point 2,  !- Name
      Base:Zone1,                                 !- Zone Name
      .21,                                        !- X-Coordinate of Reference Point {m}
      8.334,                                      !- Y-coordinate of Reference Point {m}
      3.976;                                      !- Z-coordinate of Reference Point {m}

   ZoneInfiltration:DesignFlowRate, Base:Zone1 Infiltration,  !- Name
      Base:Zone1,                                 !- Zone Name
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
      Base:Zone1,                                 !- Zone Name
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


   ! Base, Zone 1, External floor - 24.000 m2, Surface Area: 24.000m2
   BuildingSurface:Detailed,                      !- Surface
      Base:Zone1_ExtFloor_0_0_0,                  !- Surface name
      Floor, Project external floor,              !- Class and Construction Name
      Base:Zone1,                                 !- Zone Name
      Outdoors, ,                                 !- Outside Face Environment
      SunExposed,                                 !- Sun Exposure
      WindExposed,                                !- Wind Exposure
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
      Base:Zone1,                                 !- Zone Name
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
      Base:Zone1,                                 !- Zone Name
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
      Wall, Brick/block wall (insulated to 1985 regs),  !- Class and Construction Name
      Base:Zone1,                                 !- Zone Name
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
      Base:Zone1,                                 !- Zone Name
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
      Base:Zone1,                                 !- Zone Name
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
         1001,                                    !- Construction Name
         Base:Zone1_Wall_5_0_0,                   !- Base surface
         ,                                        !- corresponding other window subsurface
         AutoCalculate,                           !- View Factor to Ground
         ,                                        !- Window shading control
         1,                                       !- Frame divider name
         1,                                       !- Multiplier
         4,                                       !- Number vertices
         -.3871123433, 3.4706925521, 4.01573476,  !- Vertex 1
          .8404299233, 3.4706925521, 4.01573476,  !- Vertex 2
          .8404299233, 3.4706925521, 5.43573476,  !- Vertex 3
         -.3871123433, 3.4706925521, 5.43573476;  !- Vertex 4

         Shading:Building:Detailed, 5,  , 4,      !- Local shading device
             .8804299233, 2.4706925521, 5.47573476,  !- Vertex 1
            -.4271123433, 2.4706925521, 5.47573476,  !- Vertex 2
            -.4271123433, 3.4706925521, 5.47573476,  !- Vertex 3
             .8804299233, 3.4706925521, 5.47573476;  !- Vertex 4




WindowProperty:FrameAndDivider, 1,                !- Frame/divider name
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

Site:WaterMainsTemperature,                       !- Defines site mains water temperature
   Correlation,                                   !- Calculation Method
   ,                                              !- Schedule Name
   10,                                            !- Annual Average Outdoor Air Temperature
   20;                                            !- Maximum Difference In Monthly Average Outdoor Air Temperatures


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



! Default heating and cooling sizing parameters - only used when the Sizing:Zone sizing parameters are left blank.
Sizing:Parameters,
   1.25,                                          !- Heating Sizing Factor
   1.15,                                          !- Cooling Sizing Factor
   6;                                             !- Time steps in averaging window

! Curve: CondensingBoilerEff
Curve:Biquadratic,
   CondensingBoilerEff,                           !- name
   1.124970374,                                   !- Coefficient 1
   0.014963852,                                   !- Coefficient 2
   -0.02599835,                                   !- Coefficient 3
   0.0,                                           !- Coefficient 4
   -1.40464E-6,                                   !- Coefficient 5
   -0.00153624,                                   !- Coefficient 6
   0.1,                                           !- Minimum X
   1.0,                                           !- Maximum X
   30.0,                                          !- Minimum Y
   85.0,                                          !- Maximum Y
   ,                                              !- Minimum Curve Output
   ,                                              !- Maximum Curve Output
   ,                                              !- Input UnitsX
   ,                                              !- Input UnitsY
   ;                                              !- Output Units

CurrencyType,
   GBP;                                           !- Monetary Unit



! Output options

Output:Table:SummaryReports, 
AnnualBuildingUtilityPerformanceSummary,
DemandEndUseComponentsSummary,
SensibleHeatGainSummary,
InputVerificationandResultsSummary,
AdaptiveComfortSummary,
Standard62.1Summary,
ClimaticDataSummary,
EquipmentSummary,
EnvelopeSummary,
LightingSummary,
HVACSizingSummary,
SystemSummary,
ComponentSizingSummary,
OutdoorAirSummary,
EndUseEnergyConsumptionOtherFuelsMonthly,
PeakEnergyEndUseOtherFuelsMonthly;


OutputControl:Table:Style, CommaAndHTML, JtoKWH;

Output:EnvironmentalImpactFactors,
   Hourly;                                        !- Reporting_Frequency

Output:EnvironmentalImpactFactors,
   Monthly;                                       !- Reporting_Frequency

Output:EnvironmentalImpactFactors,
   RunPeriod;                                     !- Reporting_Frequency

EnvironmentalImpactFactors,
   0.3,                                           !- Disctrict Heating Efficiency
   3.0,                                           !- District Cooling COP
   0.25,                                          !- Steam Conversion Efficiency
   80.7272,                                       !- Total Carbon Equivalent Emission Factor From N2O
   6.2727,                                        !- Total Carbon Equivalent Emission Factor From CH4
   0.2727;                                        !- Total Carbon Equivalent Emission Factor From CO2


Output:Meter,Electricity:Facility,runperiod;
Output:Meter,Gas:Facility,runperiod;
Output:Meter,InteriorEquipment:Electricity,runperiod;
Output:Meter,InteriorLights:Electricity,runperiod;

Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Adaptive Model 80% Acceptability Status, hourly, On;
Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Adaptive Model 90% Acceptability Status, hourly, On;
Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Adaptive Model Running Average Outdoor Air Temperature, hourly, On;
Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Adaptive Model Temperature, hourly, On;
Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Category I Status, hourly, On;
Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Category II Status, hourly, On;
Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Category III Status, hourly, On;
Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Running Average Outdoor Air Temperature, hourly, On;
Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Temperature, hourly, On;
Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Simple Model Summer or Winter Clothes Not Comfortable Time, hourly, On;
Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Adaptive Model 80% Acceptability Status, runperiod, On;
Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Adaptive Model 90% Acceptability Status, runperiod, On;
Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Category I Status, runperiod, On;
Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Category II Status, runperiod, On;
Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Category III Status, runperiod, On;
Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Running Average Outdoor Air Temperature, runperiod, On;
Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Simple Model Summer or Winter Clothes Not Comfortable Time, runperiod, On;

Output:Variable, *, Zone Mean Air Temperature, hourly, On;
Output:Variable, *, Zone Mean Radiant Temperature, hourly, On;
Output:Variable, *, Zone Operative Temperature, hourly, On;
Output:Variable, *, Zone Infiltration Air Change Rate, hourly;
Output:Variable, *, Zone Mechanical Ventilation Air Changes per Hour, hourly;
Output:Variable, *, Zone Ventilation Air Change Rate, hourly;
Output:Variable, *, Boiler Gas Rate, hourly;

Output:Variable, *, Boiler Electric Power, runperiod;
Output:Variable, *, Boiler Gas Rate, runperiod;

Output:Variable, *, Zone People Sensible Heating Rate, hourly;
Output:Variable, *, Zone Windows Total Transmitted Solar Radiation Rate, hourly;
Output:Variable, *, Zone Infiltration Sensible Heat Loss Energy, hourly;
Output:Variable, *, Zone Infiltration Sensible Heat Gain Energy, hourly;
Output:Variable, *, Zone Ventilation Sensible Heat Loss Energy, hourly;
Output:Variable, *, Zone Ventilation Sensible Heat Gain Energy, hourly;
Output:Variable, *, Other Equipment Total Heating Rate, hourly;
Output:Variable, *, Zone Lights Electric Power, hourly;
Output:Variable, *, Lights Total Heating Rate, hourly;
Output:Variable, *, Zone Electric Equipment Total Heating Rate, hourly;
Output:Variable, *, Zone Gas Equipment Total Heating Rate, hourly;
Output:Variable, *, Zone Other Equipment Total Heating Rate, hourly;
Output:Variable, *, Water Use Equipment Heating Rate, hourly;
Output:Variable, *, Site Outdoor Air Drybulb Temperature, hourly;
Output:Variable, *, Site Direct Solar Radiation Rate per Area, hourly;
Output:Variable, *, Site Diffuse Solar Radiation Rate per Area, hourly;
Output:Variable, *, Site Solar Azimuth Angle, hourly;
Output:Variable, *, Site Solar Altitude Angle, hourly;

Output:Surfaces:Drawing, DXF, Triangulate3DFace;
Output:Surfaces:List, Details;
Output:Constructions, Constructions;
OutputControl:ReportingTolerances,1.11,1.11;





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
   Base:Zone1,                                                                                         ! - Zone name
   Control type schedule: Always 4,                                                                    ! - Control type schedule name
   ThermostatSetpoint:DualSetpoint,                                                                    ! - Dual SP control object type
   Base:Zone1 Dual SP;                                                                                 ! - Dual SP control object name

ThermostatSetpoint:DualSetpoint,
   Base:Zone1 Dual SP,                                                                                 ! - Name
   Base:Zone1 Heating Setpoint Schedule,                                                               ! - Heating setpoint temperature schedule name
   Base:Zone1 Cooling Setpoint Schedule;                                                               ! - Cooling setpoint temperature schedule name

Sizing:Zone,
   Base:Zone1,                                                                                         ! - Zone group name
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
   Base:Zone1,                                                                                         ! - Zone Name
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
