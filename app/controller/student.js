"use strict";

const Controller = require("egg").Controller;

//define post datas here
let students = ["alex", "tom", "jony"];
class StudentController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = students;
  }

  //add a new student post method
  // enter the url will send a get request
  // click reload will  repost
  // post method to add new student
  async create() {
    // {studentName : "xxx"}
    let student = this.ctx.request.body;
    students.push(student.studentName);
    // remote this step
    // this.ctx.body = "add stducent success";
    //redirect to student list
    this.ctx.redirect("/students");
  }

  //  /students/:id    delete method
  async destory() {
    let { ctx } = this;
    let id = ctx.params.id;
    console.log(id);
    students.splice(id, 1);
    ctx.body = "delete success";
  }

  //show add student post page
  async new() {
    const { ctx } = this;
    const formHtml = `
      <form action="/students" method="post">
        <input type="text"  name="studentName" />
        <input type="submit" value="提交">
      </form>
    `;
    ctx.body = formHtml;
  }

  //update put method   /students/:id
  async update() {}

  // async getId() {
  //   const { ctx } = this;
  //   let id = ctx.params.id;
  //   ctx.body = `当前请求路径的id是${id}`;
  // }

  // async createStudentPage() {
  //   const { ctx } = this;
  //   const formHtml = `
  //     <form action="/createStduent" method="post">
  //       <input type="text"  name="studentName" />
  //       <input type="submit" value="提交">
  //     </form>
  //   `;
  //   ctx.body = formHtml;
  // }
  // async addStudent() {
  //   let student = this.ctx.request.body;
  //   console.log(student); //{ studentName: 'wewwewe' }
  //   students.push(student.studentName);
  //   // this.ctx.body = "add stducent success";
  //   //redirect to student list
  //   this.ctx.redirect("/student");
  // }
}

module.exports = StudentController;
