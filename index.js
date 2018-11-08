let student

student = {
  DeleteAndSort: studentArr => {
    const res = student.delete(studentArr)
    return student.sort(res)
  },

  delete: studentArray => {
    return studentArray.filter(elem => elem.Status != 'dismissed')
  },

  sort: studentArray => {
    return studentArray.sort((a, b) => {
      var gradeA = a.Grade
      var gradeB = b.Grade

      if (gradeA < gradeB) {
        return +1
      }
      if (gradeA > gradeB) {
        return -1
      }
      return 0
    })
  }
}

module.exports = student
