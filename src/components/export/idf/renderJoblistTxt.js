// Copyright ©,2023, Birmingham City University

export function renderJoblistTxt(context) {
  let cases = ''
  context.compass.map((item, idx) => {
    cases += `case${idx + 1},0,0,${item}`.toString() + '\n'
  })
  console.log(cases)
  return cases
}
