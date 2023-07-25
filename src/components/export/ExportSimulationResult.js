// Copyright ©,2023, Birmingham City University

import CardView from '../charts/CardView'

export const ExportSimulationResult = (props) => {
  const annualHeatEmissionsSummary = props.results.annualHeatEmissionsSummary
  const envelope = props.results.envelope
  const annualBuildingUtilityPerformanceSummary =
    props.results.annualBuildingUtilityPerformanceSummary

  const electricity =
    props.results.annualAndPeakValuesElectricity.electricityBuilding *
    277.777778
  const lighting = props.results.endUses.interiorLighting * 277.777778

  return (
    <>
      <CardView
        title="Annual Building Utility Performance Summary"
        results={[
          {
            title: 'Site And Source Energy',
            values: [
              {
                label: 'Total Site Energy',
                value:
                  annualBuildingUtilityPerformanceSummary?.siteAndSourceEnergy
                    ?.totalSiteEnergy + 'GJ',
              },
              {
                label: 'Net Site Energy',
                value:
                  annualBuildingUtilityPerformanceSummary?.siteAndSourceEnergy
                    ?.netSiteEnergy + 'GJ',
              },
              {
                label: 'Total Source Energy',
                value:
                  annualBuildingUtilityPerformanceSummary?.siteAndSourceEnergy
                    ?.netSiteEnergy + 'GJ',
              },
              {
                label: 'Net Source Energy',
                value:
                  annualBuildingUtilityPerformanceSummary?.siteAndSourceEnergy
                    ?.netSourceEnergy + 'GJ',
              },
            ],
          },
          {
            title: 'Building Area',
            values: [
              {
                label: 'Total Building Area',
                value:
                  annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyBuildingArea?.totalBuildingArea?.toString(),
              },
              {
                label: 'Net Conditioned Building Area',
                value:
                  annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyBuildingArea?.netConditionedArea?.toString(),
              },
              {
                label: 'Unconditioned Building Area',
                value:
                  annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyBuildingArea?.unconditionedArea?.toString(),
              },
            ],
          },
          // {
          // 	title: 'Site to Source Energy Conversion Factors',
          // 	values: [
          // 		{
          // 			label: 'Electricity',
          // 			value: annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyConversionFactors.electricity.toString(),
          // 		},
          // 		{
          // 			label: 'Natural gas',
          // 			value: annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyConversionFactors.naturalGas.toString(),
          // 		},
          // 		{
          // 			label: 'District Cooling',
          // 			value: annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyConversionFactors.districtCooling.toString(),
          // 		},
          // 		{
          // 			label: 'District Heating',
          // 			value: annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyConversionFactors.districtHeating.toString(),
          // 		},
          // 		{
          // 			label: 'Steam',
          // 			value: annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyConversionFactors.steam.toString(),
          // 		},
          // 		{
          // 			label: 'District Heating',
          // 			value: annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyConversionFactors.gasoline.toString(),
          // 		},
          // 		{
          // 			label: 'Diesel',
          // 			value: annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyConversionFactors.diesel.toString(),
          // 		},
          // 		{
          // 			label: 'Coal',
          // 			value: annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyConversionFactors.coal.toString(),
          // 		},
          // 		{
          // 			label: 'Fuel Oil No 1',
          // 			value: annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyConversionFactors.fuelOilNo1.toString(),
          // 		},
          // 		{
          // 			label: 'Fuel Oil No 1',
          // 			value: annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyConversionFactors.fuelOilNo2.toString(),
          // 		},
          // 		{
          // 			label: 'Propane',
          // 			value: annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyConversionFactors.propane.toString(),
          // 		},
          // 		{
          // 			label: 'Other Fuel 1',
          // 			value: annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyConversionFactors.otherFuel1.toString(),
          // 		},
          // 		{
          // 			label: 'Other Fuel 2',
          // 			value: annualBuildingUtilityPerformanceSummary?.siteToSourceEnergyConversionFactors.otherFuel2.toString(),
          // 		},
          // 	],
          // },
        ]}
      />
      <CardView
        title="Annual Heat Emission Summary"
        results={[
          {
            title: 'Heat Emmisions (GJ)',
            values: [
              {
                label: 'Envelope Convection',
                value:
                  annualHeatEmissionsSummary.heatEmmission?.envelopeConvection.toString(),
              },
              {
                label: 'Zone Exfiltration',
                value:
                  annualHeatEmissionsSummary.heatEmmission?.zoneExfiltration.toString(),
              },
              {
                label: 'Zone Exhaust Air',
                value:
                  annualHeatEmissionsSummary.heatEmmission?.zoneExhaustAir.toString(),
              },
              {
                label: 'HVAC Relief Air',
                value:
                  annualHeatEmissionsSummary.heatEmmission?.hvacReliefAir.toString(),
              },
              {
                label: 'HVAC Reject Heat',
                value:
                  annualHeatEmissionsSummary.heatEmmission?.hvacRejectHeat.toString(),
              },
              {
                label: 'Total',
                value:
                  annualHeatEmissionsSummary.heatEmmission?.total.toString(),
              },
            ],
          },
        ]}
      />
      <CardView
        title="Envelope"
        results={[
          {
            title: 'Window Wall Ratio',
            values: [
              {
                label: 'Gross Wall Area',
                value: envelope.windowWallRatio.grossWallArea.toString(),
              },
              {
                label: 'Above Ground Wall Area',
                value: envelope.windowWallRatio.aboveGroundWallArea.toString(),
              },
              {
                label: 'Window Opening Area',
                value: envelope.windowWallRatio.windowOpeningArea.toString(),
              },
              {
                label: 'Gross Window Wall Ratio',
                value: envelope.windowWallRatio.grossWindowWallRatio.toString(),
              },
              {
                label: 'Above Ground Window Wall Ratio',
                value:
                  envelope.windowWallRatio.aboveGroundWindowWallRation.toString(),
              },
            ],
          },
          {
            title: 'Skylight Roof Ratio',
            values: [
              {
                label: 'Gross Roof Area [m2]',
                value:
                  envelope.skylightRoofRatio.grossRoofArea.toString() + 'm2',
              },
              {
                label: 'Skylight Area [m2]',
                value:
                  envelope.skylightRoofRatio.skylightArea.toString() + 'm2',
              },
              {
                label: 'Skylight-Roof Ratio [%]',
                value:
                  envelope.skylightRoofRatio.skylightRoofRatio.toString() + '%',
              },
            ],
          },
        ]}
      />
    </>
  )
}
