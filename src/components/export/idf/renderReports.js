// Copyright ©,2023, Birmingham City University

export const renderReports = () => {
  return `
  ! Single-zone residential space with one window. Gas heating and hot water system
  ! Source file: \shoebox\shoebox-residential.dsb
  ! Part 6 - output reports
  
  ! Version, 8.9.0.001;                               !- Version Identifier
  
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
  
  ! Output:EnvironmentalImpactFactors,Hourly;                                        !- Reporting_Frequency
  
  Output:EnvironmentalImpactFactors,Monthly;                                       !- Reporting_Frequency
  
  Output:EnvironmentalImpactFactors,RunPeriod;                                     !- Reporting_Frequency
  
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
  Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Simple Model Summer or Winter Clothes Not Comfortable Time, runperiod, On;
  
  ! Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Adaptive Model 80% Acceptability Status, hourly, On;
  ! Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Adaptive Model 90% Acceptability Status, hourly, On;
  ! Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Adaptive Model Running Average Outdoor Air Temperature, hourly, On;
  ! Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Adaptive Model Temperature, hourly, On;
  ! Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Category I Status, hourly, On;
  ! Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Category II Status, hourly, On;
  ! Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Category III Status, hourly, On;
  ! Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Running Average Outdoor Air Temperature, hourly, On;
  ! Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Temperature, hourly, On;
  ! Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Simple Model Summer or Winter Clothes Not Comfortable Time, hourly, On;
  ! Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Adaptive Model 80% Acceptability Status, runperiod, On;
  ! Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Adaptive Model 90% Acceptability Status, runperiod, On;
  ! Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Category I Status, runperiod, On;
  ! Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Category II Status, runperiod, On;
  ! Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Category III Status, runperiod, On;
  ! Output:Variable, *, Zone Thermal Comfort CEN 15251 Adaptive Model Running Average Outdoor Air Temperature, runperiod, On;
  ! Output:Variable, *, Zone Thermal Comfort ASHRAE 55 Simple Model Summer or Winter Clothes Not Comfortable Time, runperiod, On;
  
  ! Output:Variable, *, Zone Mean Air Temperature, hourly, On;
  ! Output:Variable, *, Zone Mean Radiant Temperature, hourly, On;
  ! Output:Variable, *, Zone Operative Temperature, hourly, On;
  ! Output:Variable, *, Zone Infiltration Air Change Rate, hourly;
  ! Output:Variable, *, Zone Mechanical Ventilation Air Changes per Hour, hourly;
  ! Output:Variable, *, Zone Ventilation Air Change Rate, hourly;
  ! Output:Variable, *, Boiler Gas Rate, hourly;
  
  Output:Variable, *, Boiler Electric Power, runperiod;
  Output:Variable, *, Boiler Gas Rate, runperiod;
  
  ! Output:Variable, *, Zone People Sensible Heating Rate, hourly;
  ! Output:Variable, *, Zone Windows Total Transmitted Solar Radiation Rate, hourly;
  ! Output:Variable, *, Zone Infiltration Sensible Heat Loss Energy, hourly;
  ! Output:Variable, *, Zone Infiltration Sensible Heat Gain Energy, hourly;
  ! Output:Variable, *, Zone Ventilation Sensible Heat Loss Energy, hourly;
  ! Output:Variable, *, Zone Ventilation Sensible Heat Gain Energy, hourly;
  ! Output:Variable, *, Other Equipment Total Heating Rate, hourly;
  ! Output:Variable, *, Zone Lights Electric Power, hourly;
  ! Output:Variable, *, Lights Total Heating Rate, hourly;
  ! Output:Variable, *, Zone Electric Equipment Total Heating Rate, hourly;
  ! Output:Variable, *, Zone Gas Equipment Total Heating Rate, hourly;
  ! Output:Variable, *, Zone Other Equipment Total Heating Rate, hourly;
  ! Output:Variable, *, Water Use Equipment Heating Rate, hourly;
  ! Output:Variable, *, Site Outdoor Air Drybulb Temperature, hourly;
  ! Output:Variable, *, Site Direct Solar Radiation Rate per Area, hourly;
  ! Output:Variable, *, Site Diffuse Solar Radiation Rate per Area, hourly;
  ! Output:Variable, *, Site Solar Azimuth Angle, hourly;
  ! Output:Variable, *, Site Solar Altitude Angle, hourly;
  
  Output:Surfaces:Drawing, DXF, Triangulate3DFace;
  Output:Surfaces:List, Details;
  Output:Constructions, Constructions;
  OutputControl:ReportingTolerances,1.11,1.11;
  
    
        `
}
