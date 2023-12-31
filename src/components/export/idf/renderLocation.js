// Copyright ©,2023, Birmingham City University

export function renderLocation(context) {
  return `
  ! Single-zone residential space with one window. Gas heating and hot water system
! Source file: \shoebox\shoebox-residential.dsb
! Part 1 - Model parameters and general definitions

! Version, 8.9.0.001;                               !- Version Identifier

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
   ${context.selectedCity.latitude},                  !- Latitude
   ${context.selectedCity.longitude},                 !- Longitude
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
   ${context.compass},                            !- North Axis
   Suburbs,                                       !- Terrain
    .04,                                          !- Loads Convergence Tolerance
    .4,                                           !- Temperature Convergence Tolerance
   FullExterior,                                  !- Solar Distribution
   25,                                            !- Maximum number of warmup days
   6;                                             !- Minimum number of warmup days

GlobalGeometryRules, LowerLeftCorner, CounterClockWise, Relative;  !- Surface order is specified as viewed from outside the zone

Site:WaterMainsTemperature,                       !- Defines site mains water temperature
   Correlation,                                   !- Calculation Method
   ,                                              !- Schedule Name
   10,                                            !- Annual Average Outdoor Air Temperature
   20;                                            !- Maximum Difference In Monthly Average Outdoor Air Temperatures

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

  `
}
