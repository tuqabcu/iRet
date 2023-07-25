// Copyright ©,2023, Birmingham City University

export function renderProjectJson(context) {
  let str = context.compass.map((item, idx) => {
    return `${item}`
  })
  return {
    projectType: 'EPLUS',
    projectID: 'G',
    projectNotes: 'New project',
    weatherDir: './',
    weatherFile: `${context.selectedCity.weatherFile['0000']}.epw`,
    idfdir: './',
    idftemplate: 'shoebox-residential-gas.idf',
    dckdir: './',
    outputFileNames: 'trnsysout.csv',
    parameters: [
      {
        paramType: 'PARAMETRICS',
        id: 'P0',
        name: 'Orientation',
        description: 'Orientation by north axis',
        searchString: '@@ori@@',
        type: 'INTEGER',
        valuesString: `{${str.toString()}}`,
        selectedAltValue: 0,
      },
    ],
    rvx: {
      notes: '',
      rvis: [],
      csvs: [
        {
          sourceCsv: 'eplustbl.csv',
          fromReport: 'Annual Building Utility Performance Summary',
          fromFor: 'Entire Facility',
          fromTable: 'End Uses',
          fromColumn: 'Electricity [kWh]',
          fromRow: 'Total End Uses',
          tableName: 'electricity',
          columnHeaders: 'Electricity [kWh]',
          usedInCalc: true,
        },
        {
          sourceCsv: 'eplustbl.csv',
          fromReport: 'Annual Building Utility Performance Summary',
          fromFor: 'Entire Facility',
          fromTable: 'End Uses',
          fromColumn: 'Natural Gas [kWh]',
          fromRow: 'Total End Uses',
          tableName: 'gas',
          columnHeaders: 'Natural Gas [kWh]',
          usedInCalc: true,
        },
        {
          sourceCsv: 'eplustbl.csv',
          fromReport: 'Annual Building Utility Performance Summary',
          fromFor: 'Entire Facility',
          fromTable: 'Comfort and Setpoint Not Met Summary',
          fromColumn: 'Facility [Hours]',
          fromRow: 'Time Not Comfortable Based on Simple ASHRAE 55-2004',
          tableName: 'discomfort',
          columnHeaders: 'Discomfort [hrs]',
          usedInCalc: true,
        },
      ],
      sqls: [],
      scripts: [],
      userSupplied: [],
      trns: [],
      userVars: [],
      objectives: [],
      constraints: [],
    },
    execSettings: {
      numThreads: 16,
      workDir: '../output/',
      subSet: 2,
      sampleOpt: 'SHUFFLE',
      randomSeed: 12345,
      numberOfJobs: 4,
      jobListFile: 'select job list file ...',
      rerunAll: true,
      keepJEPlusFiles: true,
      keepEPlusFiles: true,
      deleteSelectedFiles: false,
      selectedFiles:
        '*.dxf *.htm *.mtd *.mdd *.rdd *.shd *.out *.audit *.eio *.idd *.bnd *.ini',
      timeout: 0,
      steps: {
        runSimulations: true,
        writeJobList: true,
        collectResults: true,
        prepareJobs: true,
        jobListFile: 'joblist_out.csv',
      },
    },
  }
}
