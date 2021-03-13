"use strict";

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get("/", controller.home.index);
  router.get("/test", controller.home.testCtrl);
  // router.get("/student", controller.student.index);
  // router.get("/student/:id", controller.student.getId);
  // router.get("/createStduent", controller.student.createStudentPage);
  // router.post("/createStduent", controller.student.addStudent);

  router.resources("students", "/students", controller.student);
};
