"use strict";

const _ = require("lodash");
const JsonStore = require("./json-store");
const logger = require("../utils/logger");

const assessmentStore = {
  store: new JsonStore("./models/assessment-store.json", {
    assessmentCollection: []
  }),
  collection: "assessmentCollection",

  getAllAssessments() {
    return this.store.findAll(this.collection);
  },

  getAssessment(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  getMemberAssessments(memberid) {
    return this.store.findBy(this.collection, { memberid: memberid });
  },

  addAssessment(assessment) {
    this.store.add(this.collection, assessment);
    this.store.save();
  },


  
 removeAssessment(id) {
    const assessment = this.getAssessment(id);
    logger.info(id);
    this.store.remove(this.collection, assessment);
    this.store.save(); 
  },

  removeAllAssessments() {
    this.store.removeAll(this.collection);
    this.store.save();
  },
  
  getAssessmentByDate(date) {
    return this.store.findOneBy(this.filter, { date: date });
  },
  
  getAssessment(date) {
    return this.store.findOneBy(this.collection, { date: date});
  },

 
};

module.exports = assessmentStore;

