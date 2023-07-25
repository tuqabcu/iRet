// Copyright ©,2023, Birmingham City University

import { renderLocation } from './idf/renderLocation'
import { renderConstructionMaterial } from './idf/renderConstructionMaterial'
import { renderZone } from './idf/renderZone'
import { renderPeople } from './idf/renderPeople'
import { renderHVAC } from './idf/renderHVAC'
import { renderReports } from './idf/renderReports'
import { renderImf } from './idf/renderImf'
import { renderShoebox } from './idf/renderShoebox'
import { renderProjectJson } from './idf/renderProjectJson'
import { renderJoblistTxt } from './idf/renderJoblistTxt'

export function generateIDF(context) {
  let files = {
    modelParams: renderLocation(context),
    constructions: renderConstructionMaterial(context),
    zoneAndSurfaces: renderZone(context),
    people: renderPeople(context),
    hvac: renderHVAC(context),
    reports: renderReports(),
    mainImf: renderImf(),
    shoebox: renderShoebox(context),
    projectJson: renderProjectJson(context),
    jobList: renderJoblistTxt(context),
  }
  return files
}
